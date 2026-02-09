# Iron Log - Portable Weight Lifting Journal

## Project Overview
Single-file vanilla JS progressive web app for tracking weight lifting workouts. No build tools, no frameworks, no server required. Runs directly from `file://` or any static host.

## Architecture

### Single-file app: `app.js` (~2700 lines)
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
10. **PREMADE_TEMPLATES** - 12 pre-made routine templates (3-day, 4-day, 5-day splits)
11. **initDB** - Seeds built-in exercises (skips `isCustom: true`) and pre-made templates (skips if already exists)
12. **ExternalExercises** - Module to load 873 exercises from `exercises-data.js` global
13. **Router** - Hash-based router (`#dashboard`, `#library`, `#library/browse-external`, etc.)
14. **NumPad** - Custom number input overlay
15. **RestTimer** - Circular countdown timer overlay
16. **Session** - Active workout state manager (persisted to IndexedDB `appState`)
17. **Views** - Dashboard, Library, External Browser, Exercise Detail, Templates, SplitEditor, Template Editor, Empty Workout Builder, Session, History, Settings
18. **init()** - App bootstrap, route registration, service worker registration

### Other files
- `index.html` - Self-contained: all JS inlined (exercises-data + app.js) for `file://` compatibility. Manifest created as blob URL. ~1.3MB.
- `exercises-data.js` - `window.__EXERCISE_DB__ = [...]` (873 exercises, ~1MB, generated from exercises.json)
- `exercises.json` - Raw source data from yuhonas/free-exercise-db (not loaded at runtime)
- `sw.js` - Service worker with network-first strategy, cache version `ironlog-v5`
- `manifest.json` - PWA manifest
- `icons/` - App icons (192, 512)
- Build helper scripts (not deployed): `generate-exercises.js`, `regen-exercises.js`, `insert-exercises.js`, `rebuild-html.js`, `fix-quotes.js`

### Database (IndexedDB: `IronLogDB`)
Stores: `exercises`, `templates`, `sessions`, `personalRecords`, `appState`
- Exercises have `isCustom: true` flag to survive `initDB` re-seeding
- External exercises get `ext-` ID prefix to avoid collisions
- Active session persisted in `appState` store (key: `activeSession`)

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
- **PWA offline** - Service worker caches all assets. Network-first strategy (v5)
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
Add to the `PREMADE_TEMPLATES` array (before `initDB`). Format: `{id:'tpl-xxx', name:'Name', exercises:[{exerciseId, exerciseName, orderIndex, targetSets, targetReps, targetWeight, restSeconds}]}`. Templates are only seeded if their ID doesn't already exist in the DB.

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
4. Routines page shows 12 pre-made templates (3-day, 4-day, 5-day splits)
5. Routines -> Start button starts workout from template
6. Routines -> New -> split layout with drag & drop
7. FAB -> Empty Workout -> split layout builder
8. Complete sets -> rest timer -> finish -> history with PRs
9. Settings -> Force Refresh clears cache and reloads
10. History -> calendar shows workout days, sized to fill page
