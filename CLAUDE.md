# Iron Log - Portable Weight Lifting Journal

## Project Overview
Single-file vanilla JS progressive web app for tracking weight lifting workouts. No build tools, no frameworks, no server required. Runs directly from `file://` or any static host.

## Architecture

### Single-file app: `app.js` (~2400 lines)
Everything lives in one file in this order:
1. **CSS** (lines 1-320) - Injected into `<style id="app-styles">` via JS
2. **Utilities** - `$`, `$$`, `uid`, `fmt`, `toast`, `confetti`
3. **SVG Icons** - `icons` object with inline SVG strings
4. **Settings** - LocalStorage-backed key-value store (`ironlog_` prefix)
5. **Store** - Simple state store with subscribers
6. **Audio** - Web Audio API beeps for timer
7. **IndexedDB (`DB`)** - Generic wrapper with `open`, `get`, `put`, `delete`, `getAll`, `getAllByIndex`
8. **EXERCISES** - 45 built-in exercise definitions with images from yuhonas/free-exercise-db
9. **SVG Animations** - Stick figure animations for each exercise type
10. **initDB** - Seeds built-in exercises (skips `isCustom: true` ones)
11. **ExternalExercises** - Module to load 873 exercises from `exercises-data.js` global
12. **Router** - Hash-based router (`#dashboard`, `#library`, `#library/browse-external`, etc.)
13. **NumPad** - Custom number input overlay
14. **RestTimer** - Circular countdown timer overlay
15. **Session** - Active workout state manager (persisted to IndexedDB `appState`)
16. **Views** - Dashboard, Library, External Browser, Exercise Detail, Templates, SplitEditor, Template Editor, Empty Workout Builder, Session, History, Settings
17. **init()** - App bootstrap, route registration, service worker registration

### Other files
- `index.html` - Minimal shell: `<div id="app">`, `<div id="overlay-root">`, loads `exercises-data.js` then `app.js`
- `exercises-data.js` - `window.__EXERCISE_DB__ = [...]` (873 exercises, ~1MB, generated from exercises.json)
- `exercises.json` - Raw source data from yuhonas/free-exercise-db (not loaded at runtime)
- `sw.js` - Service worker with network-first strategy, caches app shell + exercises-data.js
- `manifest.json` - PWA manifest
- `icons/` - App icons (192, 512)

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
- **PWA offline** - Service worker caches all assets. Network-first strategy (v4)
- **Mobile-first** - Touch targets 44px min, `@media(max-width:768px)` breakpoints for layout changes

## Common Tasks

### Adding a new view
1. Create `async function viewFoo(param)` that calls `renderApp(html)`
2. Register in `init()`: `Router.register('foo', viewFoo)`
3. Navigate with `Router.navigate('foo')` or `Router.navigate('foo/param')`

### Adding exercises to the built-in list
Add to the `EXERCISES` array (after line ~389). Must include: `id`, `name`, `muscleGroup`, `secondaryMuscles[]`, `equipment`, `category`, `imageUrl`, `images[]`, `tips[]`, `description`. Set `isCustom: false`.

### Modifying the SplitEditor
The `SplitEditor` component (~line 1543) is used by both the template editor and the empty workout builder. It manages its own render cycle and event listeners. Parameters: `{ exercises, allExercises, title, nameValue, showNameInput, onSave, onCancel, onDelete }`.

### Regenerating exercises-data.js
If `exercises.json` is updated:
```
node -e "const fs=require('fs'); const data=fs.readFileSync('exercises.json','utf8'); fs.writeFileSync('exercises-data.js', 'window.__EXERCISE_DB__=' + data + ';');"
```

## Testing
Open `index.html` in a browser (works from `file://`). No test framework. Manual verification:
1. Dashboard loads with stats
2. Exercise library shows 45+ exercises with images
3. Add More -> pick muscle group -> exercises load -> select -> add -> appear in library
4. Routines -> New -> split layout with drag & drop
5. Start workout from routine card -> session view
6. FAB -> Empty Workout -> split layout builder
7. Complete sets -> rest timer -> finish -> history with PRs
