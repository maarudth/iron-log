# Iron Log - Portable Weight Lifting Journal

## Project Overview
Single-file vanilla JS progressive web app for tracking weight lifting workouts. No build tools, no frameworks, no server required. Runs directly from `file://` or any static host.

## Architecture

### Single-file app: `app.js` (~2900 lines)
Everything lives in one file in this order:
1. **CSS** (lines 1-320) - Injected into `<style id="app-styles">` via JS
2. **Utilities** - `$`, `$$`, `uid`, `fmt`, `toast`, `confetti`
3. **SVG Icons** - `icons` object with inline SVG strings
4. **Settings** - LocalStorage-backed key-value store (`ironlog_` prefix)
5. **Store** - Simple state store with subscribers
6. **Audio** - Web Audio API beeps for timer
7. **IndexedDB (`DB`)** - Generic wrapper with `open`, `get`, `put`, `delete`, `getAll`, `getAllByIndex`
8. **EXERCISES** - 161 built-in exercise definitions (45 original + 116 dumbbell exercises from yuhonas/free-exercise-db)
9. **SVG Animations** - Stick figure animations for each exercise type
10. **PREMADE_TEMPLATES** - 12 pre-made routine templates grouped into 3 programs (3-day, 4-day, 5-day splits) with `programId`, `programName`, `dayLabel`, `programOrder` fields
11. **initDB** - Seeds built-in exercises (skips `isCustom: true`), pre-made templates (skips if already exists), and migrates existing templates to add program fields
12. **ExternalExercises** - Module to load 873 exercises from `exercises-data.js` global
13. **Router** - Hash-based router (`#dashboard`, `#library`, `#library/browse-external`, etc.)
14. **NumPad** - Custom number input overlay
15. **RestTimer** - Circular countdown timer overlay
16. **Session** - Active workout state manager (persisted to IndexedDB `appState`)
17. **Views** - Dashboard, Library, External Browser, Exercise Detail, Templates, SplitEditor, Template Editor, Program Editor, Empty Workout Builder, Session, History, Settings
18. **init()** - App bootstrap, route registration, service worker registration

### Other files
- `index.html` - Self-contained: all JS inlined (exercises-data + app.js) for `file://` compatibility. Manifest created as blob URL. ~1.3MB.
- `exercises-data.js` - `window.__EXERCISE_DB__ = [...]` (873 exercises, ~1MB, generated from exercises.json)
- `exercises.json` - Raw source data from yuhonas/free-exercise-db (not loaded at runtime)
- `sw.js` - Service worker with network-first strategy, cache version `ironlog-v6`
- `manifest.json` - PWA manifest
- `icons/` - App icons (192, 512)
- Build helper scripts (not deployed): `generate-exercises.js`, `regen-exercises.js`, `insert-exercises.js`, `rebuild-html.js`, `fix-quotes.js`

### Database (IndexedDB: `IronLogDB`)
Stores: `exercises`, `templates`, `sessions`, `personalRecords`, `appState`
- Exercises have `isCustom: true` flag to survive `initDB` re-seeding
- External exercises get `ext-` ID prefix to avoid collisions
- Active session persisted in `appState` store (key: `activeSession`)
- Templates can belong to a program via optional `programId`, `programName`, `dayLabel`, `programOrder` fields

## Key Patterns

### Routing
Hash-based: `#view/param` parsed by `Router`. Views are async functions that call `renderApp()` to replace `#app` innerHTML.

### Rendering
No virtual DOM. Full re-render on state change via `renderApp(html)` which wraps content in `.view-container` + bottom nav. The `SplitEditor` and `renderSession` write directly to `#app` for custom layouts.

### Event handling
Inline `onclick` for navigation. `data-action` attributes + delegated click handlers for interactive elements. Event listeners attached after each render.

### CSS variables
Dark/light theme via `[data-theme]` attribute on `<html>`. Muscle group colors: `--muscle-chest`, `--muscle-back`, etc. accessed via `muscleColor()` helper.

## Important Constraints
- **No build step** - Everything is vanilla JS, no transpilation
- **Works from `file://`** - Cannot use `fetch()` for local files (CORS). Exercise DB loaded via `<script>` tag
- **Single file** - All JS logic stays in `app.js`. Don't split into modules
- **No external dependencies** - No CDN links, no npm packages
- **Inlined HTML** - `index.html` has all JS inlined so it works on Android Chrome from `file://` (which blocks `<script src>`)
- **PWA offline** - Service worker caches all assets. Network-first strategy (v6)
- **Mobile-first** - Touch targets 44px min, `@media(max-width:768px)` breakpoints for layout changes
- **String escaping** - Exercise descriptions use single-quoted strings. All apostrophes must be escaped (`\'`), no newlines in strings. Use `regen-exercises.js` to regenerate safely.

## Common Tasks

### Adding a new view
1. Create `async function viewFoo(param)` that calls `renderApp(html)`
2. Register in `init()`: `Router.register('foo', viewFoo)`
3. Navigate with `Router.navigate('foo')` or `Router.navigate('foo/param')`

### Adding exercises to the built-in list
Add to the `EXERCISES` array. Must include: `id`, `name`, `muscleGroup`, `secondaryMuscles[]`, `equipment`, `category`, `imageUrl`, `images[]`, `tips[]`, `description`. Set `isCustom: false`. External exercises use `ext-` ID prefix. Escape all apostrophes in single-quoted strings.

### Modifying the SplitEditor
The `SplitEditor` component (~line 1770) is used by both the template editor and the empty workout builder. It manages its own render cycle and event listeners. Parameters: `{ exercises, allExercises, title, nameValue, showNameInput, onSave, onCancel, onDelete }`.

### Rebuilding index.html after editing app.js
Since index.html has app.js inlined, it must be rebuilt after any app.js change:
```
node rebuild-html.js
```
This replaces the app.js `<script>` block in index.html with the current app.js content. Always run `node --check app.js` first to catch syntax errors.

### Adding pre-made templates
Add to the `PREMADE_TEMPLATES` array (before `initDB`). Format: `{id:'tpl-xxx', name:'Name', programId:'prog-xxx', programName:'Program Name', dayLabel:'Day 1 - Label', programOrder:0, exercises:[{exerciseId, exerciseName, orderIndex, targetSets, targetReps, targetWeight, restSeconds}]}`. Templates are only seeded if their ID doesn't already exist in the DB. The `programId` field groups templates into programs; templates without it are standalone routines.

### Program Editor
The `viewProgramEditor` function manages multi-day programs. Uses `_programState` global to persist state across SplitEditor roundtrips (editing individual days). Routes: `#templates/new-program`, `#templates/edit-program/PROG_ID`. Important: `_programState` must be cleared when navigating away or switching programs to avoid stale data.

### Regenerating exercises-data.js
If `exercises.json` is updated:
```
node -e "const fs=require('fs'); const data=fs.readFileSync('exercises.json','utf8'); fs.writeFileSync('exercises-data.js', 'window.__EXERCISE_DB__=' + data + ';');"
```

## Deployment
- **GitHub repo**: https://github.com/maarudth/iron-log
- **GitHub Pages**: https://maarudth.github.io/iron-log/
- Push to `master` branch auto-deploys to GitHub Pages
- Users can also copy files to a device and open `index.html` directly (works from `file://`)

## Testing
Open `index.html` in a browser (works from `file://`). No test framework. Manual verification:
1. Dashboard loads with stats
2. Exercise library shows 161 built-in exercises with images
3. Add More -> pick muscle group -> external exercises load -> select -> add -> appear in library
4. Routines page shows 3 program cards (3-day, 4-day, 5-day) with day rows + any standalone routines
5. Routines -> Start button on a day row starts that workout correctly
6. Routines -> New -> choice of "New Routine" or "New Program"
7. New Program -> name + add days via SplitEditor -> save -> grouped card appears
8. Edit on program header -> program editor with all days listed
9. Routines -> New Routine -> split layout with drag & drop (existing standalone flow)
10. FAB -> Empty Workout -> split layout builder
11. FAB -> template picker modal shows programs grouped with day rows
12. Complete sets -> rest timer -> finish -> history with PRs
13. Settings -> Force Refresh clears cache and reloads
14. Settings -> Clear All Data resets and re-seeds exercises + pre-made templates
15. History -> calendar shows workout days, sized to fill page
