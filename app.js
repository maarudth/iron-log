// ============================================================
// IRON LOG - Portable Weight Lifting Journal
// ============================================================

// --- CSS STYLES ---
document.getElementById('app-styles').textContent = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
--bg-primary:#0f0f1e;--bg-secondary:#1a1a2e;--bg-surface:#1e1e38;--bg-surface-hover:#252545;
--accent:#00f0ff;--accent-dim:rgba(0,240,255,0.15);--accent-glow:0 0 20px rgba(0,240,255,0.4);
--text-primary:#f0f0f5;--text-secondary:#a0a0b8;--text-muted:#6a6a80;
--border:rgba(255,255,255,0.08);--border-accent:rgba(0,240,255,0.3);
--danger:#ef4444;--success:#22c55e;--warning:#f59e0b;
--radius:12px;--radius-sm:8px;--radius-lg:16px;
--shadow:0 4px 24px rgba(0,0,0,0.4);
--nav-height:64px;--header-height:56px;
--font-mono:'SF Mono',SFMono-Regular,ui-monospace,'Cascadia Mono','Segoe UI Mono',Menlo,Monaco,Consolas,monospace;
--glass-bg:rgba(30,30,56,0.7);--glass-border:rgba(255,255,255,0.06);
--muscle-chest:#ef4444;--muscle-back:#8b5cf6;--muscle-shoulders:#f59e0b;
--muscle-biceps:#ec4899;--muscle-triceps:#f97316;--muscle-abs:#06b6d4;
--muscle-quads:#22c55e;--muscle-hamstrings:#84cc16;--muscle-glutes:#14b8a6;
--muscle-calves:#a3e635;--muscle-traps:#6366f1;--muscle-lats:#7c3aed;
--muscle-fullbody:#3b82f6;
}
[data-theme="light"]{
--bg-primary:#f8fafc;--bg-secondary:#ffffff;--bg-surface:#ffffff;--bg-surface-hover:#f1f5f9;
--accent:#3b82f6;--accent-dim:rgba(59,130,246,0.1);--accent-glow:0 0 12px rgba(59,130,246,0.25);
--text-primary:#1e293b;--text-secondary:#64748b;--text-muted:#94a3b8;
--border:rgba(0,0,0,0.08);--border-accent:rgba(59,130,246,0.3);
--shadow:0 4px 24px rgba(0,0,0,0.08);
--glass-bg:rgba(255,255,255,0.8);--glass-border:rgba(0,0,0,0.06);
}
html,body{height:100%;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:var(--bg-primary);color:var(--text-primary)}
#app{height:100%;display:flex;flex-direction:column;position:relative}
.view-container{flex:1;overflow-y:auto;overflow-x:hidden;padding-bottom:calc(var(--nav-height) + 16px);-webkit-overflow-scrolling:touch}
.view-container::-webkit-scrollbar{width:4px}
.view-container::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px}

/* Header */
.app-header{height:var(--header-height);display:flex;align-items:center;padding:0 16px;background:var(--bg-secondary);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:50}
.app-header h1{font-size:18px;font-weight:700;flex:1}
.app-header .back-btn{width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:none;border:none;color:var(--text-primary);cursor:pointer;margin-right:8px;border-radius:var(--radius-sm)}

/* Bottom Nav */
.bottom-nav{height:var(--nav-height);display:flex;align-items:center;justify-content:space-around;background:var(--bg-secondary);border-top:1px solid var(--border);position:fixed;bottom:0;left:0;right:0;z-index:100;padding-bottom:env(safe-area-inset-bottom)}
.nav-item{display:flex;flex-direction:column;align-items:center;gap:2px;padding:6px 12px;border:none;background:none;color:var(--text-muted);cursor:pointer;font-size:10px;font-weight:500;transition:color .2s;min-width:48px}
.nav-item.active{color:var(--accent)}
.nav-item svg{width:24px;height:24px}
.nav-fab{width:56px;height:56px;border-radius:50%;background:var(--accent);border:none;color:var(--bg-primary);cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:var(--accent-glow);margin-top:-20px;transition:transform .2s}
.nav-fab:active{transform:scale(0.92)}
.nav-fab svg{width:28px;height:28px}
.btn svg,.exercise-block-header svg,.set-check svg,.back-btn svg{width:18px;height:18px;flex-shrink:0}
.exercise-block-header>span svg{width:20px;height:20px}
.history-item svg,.card svg:not(.exercise-svg-container svg),.template-card svg{width:20px;height:20px}
.settings-row svg{width:18px;height:18px}

/* Cards & Containers */
.card{background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius);padding:16px;margin:8px 16px}
.glass-card{background:var(--glass-bg);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid var(--glass-border);border-radius:var(--radius);padding:16px;margin:8px 16px}

/* Buttons */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 24px;border-radius:var(--radius-sm);border:none;font-size:15px;font-weight:600;cursor:pointer;transition:all .2s;min-height:44px}
.btn-primary{background:var(--accent);color:var(--bg-primary)}
.btn-primary:active{opacity:0.85}
.btn-secondary{background:var(--accent-dim);color:var(--accent);border:1px solid var(--border-accent)}
.btn-danger{background:rgba(239,68,68,0.15);color:var(--danger);border:1px solid rgba(239,68,68,0.3)}
.btn-ghost{background:transparent;color:var(--text-secondary)}
.btn-block{width:100%;display:flex}
.btn-sm{padding:8px 16px;font-size:13px;min-height:36px}

/* Form Elements */
.input{width:100%;padding:12px 16px;background:var(--bg-primary);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:15px;outline:none;transition:border-color .2s}
.input:focus{border-color:var(--accent)}
.input::placeholder{color:var(--text-muted)}

/* Chips */
.chip{display:inline-flex;align-items:center;padding:6px 14px;border-radius:20px;font-size:13px;font-weight:500;border:1px solid var(--border);background:var(--bg-surface);color:var(--text-secondary);cursor:pointer;transition:all .2s;white-space:nowrap}
.chip.active{background:var(--accent-dim);color:var(--accent);border-color:var(--border-accent)}
.chip-row{display:flex;gap:8px;overflow-x:auto;padding:8px 16px;-ms-overflow-style:none;scrollbar-width:none}
.chip-row::-webkit-scrollbar{display:none}

/* Set Table */
.set-table{width:100%;border-collapse:collapse;font-size:14px}
.set-table th{text-align:center;color:var(--text-muted);font-weight:500;font-size:12px;text-transform:uppercase;padding:8px 4px}
.set-table td{text-align:center;padding:6px 4px;vertical-align:middle}
.set-table .set-num{color:var(--text-muted);font-weight:600;width:32px}
.set-table .prev-col{color:var(--text-muted);font-size:12px;font-family:var(--font-mono)}
.set-input{width:64px;padding:8px 4px;text-align:center;background:var(--bg-primary);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:16px;font-family:var(--font-mono);font-weight:600;cursor:pointer}
.set-input:focus{border-color:var(--accent);outline:none}
.set-check{width:40px;height:40px;border-radius:var(--radius-sm);border:2px solid var(--border);background:none;color:var(--text-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s}
.set-check.done{background:var(--accent);border-color:var(--accent);color:var(--bg-primary)}
.set-row.completed{opacity:0.7}
.set-type-badge{font-size:10px;font-weight:700;color:var(--warning);width:32px;text-align:center}

/* Rest Timer Overlay */
.timer-overlay{position:fixed;inset:0;z-index:200;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);backdrop-filter:blur(8px)}
.timer-ring{position:relative;width:200px;height:200px}
.timer-ring svg{transform:rotate(-90deg)}
.timer-ring circle{fill:none;stroke-width:6}
.timer-ring .track{stroke:var(--border)}
.timer-ring .progress{stroke:var(--accent);stroke-linecap:round;transition:stroke-dashoffset 1s linear,stroke .3s}
.timer-time{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:48px;font-family:var(--font-mono);font-weight:700}
.timer-controls{display:flex;gap:16px;margin-top:24px}
.timer-preset{padding:8px 16px;border-radius:20px;border:1px solid var(--border);background:var(--bg-surface);color:var(--text-secondary);font-size:14px;cursor:pointer}
.timer-preset.active{background:var(--accent-dim);color:var(--accent);border-color:var(--border-accent)}

/* Number Pad */
.numpad-overlay{position:fixed;inset:0;z-index:250;display:flex;flex-direction:column;justify-content:flex-end;background:rgba(0,0,0,0.5)}
.numpad-sheet{background:var(--bg-secondary);border-top:1px solid var(--border);border-radius:var(--radius-lg) var(--radius-lg) 0 0;padding:16px 16px calc(16px + env(safe-area-inset-bottom))}
.numpad-display{text-align:center;font-size:36px;font-family:var(--font-mono);font-weight:700;padding:12px;margin-bottom:8px}
.numpad-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.numpad-key{height:56px;border-radius:var(--radius-sm);border:1px solid var(--border);background:var(--bg-surface);color:var(--text-primary);font-size:22px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .1s}
.numpad-key:active{background:var(--bg-surface-hover)}
.numpad-key.accent{background:var(--accent);color:var(--bg-primary);border-color:var(--accent)}
.numpad-incr{display:flex;justify-content:center;gap:12px;margin-bottom:12px}
.numpad-incr button{padding:8px 20px;border-radius:20px;border:1px solid var(--border);background:var(--bg-surface);color:var(--text-secondary);font-size:14px;font-weight:600;cursor:pointer}

/* Modal */
.modal-overlay{position:fixed;inset:0;z-index:300;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);padding:16px}
.modal{background:var(--bg-secondary);border:1px solid var(--border);border-radius:var(--radius-lg);width:100%;max-width:480px;max-height:80vh;overflow-y:auto;padding:24px}
.modal h2{font-size:20px;margin-bottom:16px}

/* Animations */
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
@keyframes glow-pulse{0%,100%{box-shadow:0 0 8px rgba(0,240,255,0.3)}50%{box-shadow:0 0 24px rgba(0,240,255,0.6)}}
.fade-in{animation:fadeIn .2s ease}
.slide-up{animation:slideUp .3s ease}
.pr-glow{animation:glow-pulse 2s ease-in-out infinite}

/* Exercise Card */
.exercise-card{display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid var(--border);cursor:pointer;transition:background .15s}
.exercise-card:active{background:var(--bg-surface-hover)}
.exercise-icon{width:40px;height:40px;border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#fff;flex-shrink:0}
.exercise-card h3{font-size:15px;font-weight:600}
.exercise-card .sub{font-size:12px;color:var(--text-secondary)}

/* Stats Grid */
.stats-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;padding:0 16px}
.stat-card{background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px;text-align:center}
.stat-value{font-size:28px;font-family:var(--font-mono);font-weight:700;color:var(--accent)}
.stat-label{font-size:12px;color:var(--text-secondary);margin-top:2px}

/* Workout Session Header */
.session-header{position:sticky;top:0;z-index:50;background:var(--bg-secondary);border-bottom:1px solid var(--border);padding:12px 16px;display:flex;align-items:center;gap:12px}
.session-header .timer{font-family:var(--font-mono);font-size:16px;color:var(--text-secondary)}
.session-header .finish-btn{margin-left:auto}

/* Exercise Accordion */
.exercise-block{border-bottom:1px solid var(--border)}
.exercise-block-header{display:flex;align-items:center;gap:12px;padding:14px 16px;cursor:pointer}
.exercise-block-header h3{flex:1;font-size:15px;font-weight:600}
.exercise-block-body{padding:0 16px 16px}

/* History */
.history-item{display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid var(--border);cursor:pointer}
.history-item:active{background:var(--bg-surface-hover)}
.history-date{font-size:12px;color:var(--text-muted)}

/* SVG Exercise Animation */
.exercise-svg-container{width:200px;height:200px;margin:16px auto;display:flex;align-items:center;justify-content:center}
.exercise-svg-container svg{width:100%;height:100%}

/* Search */
.search-bar{padding:8px 16px}
.search-bar .input{padding-left:40px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%236a6a80' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:12px center}

/* Calendar */
.calendar-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;padding:8px 16px;text-align:center;font-size:13px}
.calendar-grid .day-header{color:var(--text-muted);font-size:11px;font-weight:600;padding:4px}
.calendar-grid .day{padding:8px 4px;border-radius:var(--radius-sm);cursor:pointer;font-family:var(--font-mono)}
.calendar-grid .day.has-workout{background:var(--accent-dim);color:var(--accent);font-weight:600}
.calendar-grid .day.today{border:1px solid var(--accent)}
.calendar-grid .day.empty{cursor:default}

/* Template */
.template-card{background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius);padding:16px;margin:8px 16px;cursor:pointer;transition:all .2s}
.template-card:active{background:var(--bg-surface-hover)}
.template-card h3{font-size:16px;font-weight:600;margin-bottom:4px}
.template-card .meta{font-size:13px;color:var(--text-secondary)}

/* Toast */
.toast{position:fixed;bottom:calc(var(--nav-height) + 16px);left:50%;transform:translateX(-50%);background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius);padding:12px 24px;font-size:14px;z-index:400;animation:fadeIn .2s;box-shadow:var(--shadow)}

/* Drag handle */
.drag-handle{width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:var(--text-muted);cursor:grab;touch-action:none}

/* Section label */
.section-label{font-size:13px;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;padding:16px 16px 8px}

/* Empty state */
.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 32px;text-align:center;color:var(--text-muted)}
.empty-state svg{width:64px;height:64px;margin-bottom:16px;opacity:0.4}
.empty-state p{margin-bottom:16px}

/* Confetti */
@keyframes confetti-fall{0%{transform:translateY(-100%) rotate(0deg);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}
.confetti-piece{position:fixed;width:8px;height:8px;z-index:500;animation:confetti-fall 2s ease-in forwards}

/* Toggle switch */
.toggle{position:relative;width:48px;height:28px;background:var(--border);border-radius:14px;cursor:pointer;transition:background .2s;border:none;flex-shrink:0}
.toggle.on{background:var(--accent)}
.toggle::after{content:'';position:absolute;top:3px;left:3px;width:22px;height:22px;background:#fff;border-radius:50%;transition:transform .2s}
.toggle.on::after{transform:translateX(20px)}

/* Settings row */
.settings-row{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid var(--border)}
.settings-row label{font-size:15px}
.settings-row .sub{font-size:12px;color:var(--text-secondary)}

/* Misc */
.mono{font-family:var(--font-mono)}
.text-accent{color:var(--accent)}
.text-muted{color:var(--text-muted)}
.text-center{text-align:center}
.mt-8{margin-top:8px}.mt-16{margin-top:16px}.mt-24{margin-top:24px}
.mb-8{margin-bottom:8px}.mb-16{margin-bottom:16px}
.px-16{padding-left:16px;padding-right:16px}
.py-8{padding-top:8px;padding-bottom:8px}
.flex{display:flex}.items-center{align-items:center}.gap-8{gap:8px}.gap-12{gap:12px}.flex-1{flex:1}
.hidden{display:none!important}

/* Exercise image cards */
.exercise-img-card{display:flex;gap:12px;padding:12px 16px;border-bottom:1px solid var(--border);cursor:pointer;transition:background .15s;align-items:center}
.exercise-img-card:active{background:var(--bg-surface-hover)}
.exercise-img{width:72px;height:72px;object-fit:cover;border-radius:var(--radius-sm);background:var(--bg-surface);flex-shrink:0}
.exercise-img-card h3{font-size:15px;font-weight:600}
.exercise-img-card .sub{font-size:12px;color:var(--text-secondary)}

/* Session split layout */
.session-content{display:flex;flex-direction:column;height:calc(100vh - var(--header-height) - var(--nav-height))}
.session-exercises{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch}
.session-ex-view{display:flex;gap:0;height:100%}
.session-media{width:40%;min-width:300px;padding:16px;overflow-y:auto;border-right:1px solid var(--border);display:flex;flex-direction:column;gap:12px}
.session-media img{width:100%;max-height:280px;object-fit:contain;border-radius:var(--radius);background:var(--bg-surface)}
.session-media .ex-desc{font-size:14px;color:var(--text-secondary);line-height:1.5}
.session-media .ex-tips{font-size:13px;color:var(--text-muted)}
.session-media .ex-tips li{margin-bottom:4px}
.session-sets-panel{flex:1;padding:16px;overflow-y:auto}
.session-ex-tabs{display:flex;gap:0;overflow-x:auto;border-bottom:1px solid var(--border);-ms-overflow-style:none;scrollbar-width:none;background:var(--bg-secondary)}
.session-ex-tabs::-webkit-scrollbar{display:none}
.session-ex-tab{padding:10px 16px;font-size:13px;font-weight:600;white-space:nowrap;border:none;background:none;color:var(--text-muted);cursor:pointer;border-bottom:2px solid transparent;transition:all .2s;display:flex;align-items:center;gap:6px}
.session-ex-tab.active{color:var(--accent);border-bottom-color:var(--accent)}
.session-ex-tab .tab-dot{width:6px;height:6px;border-radius:50%;background:var(--accent);display:none}
.session-ex-tab.has-completed .tab-dot{display:block;background:var(--success)}
@media(max-width:768px){
  .session-ex-view{flex-direction:column;height:auto}
  .session-media{width:100%;min-width:auto;border-right:none;border-bottom:1px solid var(--border);max-height:300px}
  .session-media img{max-height:180px}
  .session-sets-panel{width:100%}
}

/* Split Editor */
.split-editor{display:flex;height:calc(100vh - var(--header-height) - var(--nav-height));overflow:hidden}
.split-left{width:40%;min-width:280px;border-right:1px solid var(--border);display:flex;flex-direction:column;background:var(--bg-primary)}
.split-right{flex:1;display:flex;flex-direction:column;background:var(--bg-secondary)}
.split-left-header{padding:8px 12px;border-bottom:1px solid var(--border);display:flex;flex-direction:column;gap:6px}
.split-left-header .input{padding:8px 12px;font-size:13px;min-height:36px;padding-left:32px}
.split-left-list{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch}
.split-right-header{padding:12px 16px;border-bottom:1px solid var(--border)}
.split-right-header .input{font-size:15px}
.split-right-list{flex:1;overflow-y:auto;padding:8px 0;-webkit-overflow-scrolling:touch}
.split-ex-card{display:flex;align-items:center;gap:8px;padding:8px 12px;border-bottom:1px solid var(--border);cursor:grab;transition:background .15s;font-size:13px}
.split-ex-card:active{background:var(--bg-surface-hover)}
.split-ex-card .exercise-icon{width:32px;height:32px;font-size:13px;border-radius:6px}
.split-ex-card .ex-name{flex:1;font-weight:600;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.split-ex-card .ex-sub{font-size:11px;color:var(--text-secondary)}
.split-ex-card .add-btn{width:28px;height:28px;border-radius:50%;border:1.5px solid var(--accent);background:var(--accent-dim);color:var(--accent);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;transition:all .15s}
.split-ex-card .add-btn:hover{background:var(--accent);color:var(--bg-primary)}
.split-ex-card .add-btn svg{width:14px;height:14px}
.split-ex-card.dragging{opacity:0.4}
.routine-ex-item{background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius-sm);margin:0 12px 6px;padding:10px 12px;transition:all .15s}
.routine-ex-item .ex-header{display:flex;align-items:center;gap:8px}
.routine-ex-item .drag-handle{cursor:grab;touch-action:none;color:var(--text-muted)}
.routine-ex-item .drag-handle svg{width:16px;height:16px}
.routine-ex-item .ex-name{flex:1;font-weight:600;font-size:14px}
.routine-ex-item .del-btn{width:28px;height:28px;border:none;background:none;color:var(--text-muted);cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:6px;transition:all .15s}
.routine-ex-item .del-btn:hover{color:var(--danger);background:rgba(239,68,68,0.1)}
.routine-ex-item .del-btn svg{width:14px;height:14px}
.routine-ex-item .ex-fields{display:flex;gap:8px;margin-top:8px;align-items:center}
.routine-ex-item .field-group{display:flex;flex-direction:column;gap:2px}
.routine-ex-item .field-group label{font-size:10px;color:var(--text-muted);text-transform:uppercase;font-weight:600}
.routine-ex-item .field-group input{width:52px;padding:6px 4px;text-align:center;background:var(--bg-primary);border:1px solid var(--border);border-radius:6px;color:var(--text-primary);font-size:14px;font-family:var(--font-mono);font-weight:600}
.routine-ex-item .field-group input:focus{border-color:var(--accent);outline:none}
.drop-zone{height:0;transition:height .15s ease,opacity .15s ease;opacity:0;margin:0 12px;border-radius:4px}
.drop-zone.active{height:4px;opacity:1;background:var(--accent);box-shadow:var(--accent-glow)}
.drop-zone.over{height:8px}
.drag-ghost{position:fixed;z-index:999;pointer-events:none;background:var(--bg-surface);border:1px solid var(--accent);border-radius:var(--radius-sm);padding:8px 12px;font-size:13px;font-weight:600;box-shadow:var(--accent-glow);opacity:0.9;white-space:nowrap}
.split-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;color:var(--text-muted);font-size:14px;text-align:center;padding:32px;gap:8px}
.split-empty svg{width:48px;height:48px;opacity:0.3}
.split-chip-row{display:flex;gap:4px;overflow-x:auto;padding:0 0 2px;-ms-overflow-style:none;scrollbar-width:none;flex-wrap:nowrap}
.split-chip-row::-webkit-scrollbar{display:none}
.split-chip-row .chip{font-size:11px;padding:4px 10px;white-space:nowrap}

/* External Exercise Browser */
.ext-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:16px}
.ext-group-btn{display:flex;flex-direction:column;align-items:center;gap:6px;padding:16px 8px;background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius);cursor:pointer;transition:all .15s;text-align:center}
.ext-group-btn:active{background:var(--bg-surface-hover);border-color:var(--border-accent)}
.ext-group-btn .dot{width:12px;height:12px;border-radius:50%}
.ext-group-btn .label{font-size:12px;font-weight:600;color:var(--text-primary)}
.ext-ex-card{display:flex;align-items:center;gap:10px;padding:10px 16px;border-bottom:1px solid var(--border);cursor:pointer;transition:background .15s}
.ext-ex-card:active{background:var(--bg-surface-hover)}
.ext-ex-card.selected{background:var(--accent-dim);border-left:3px solid var(--accent)}
.ext-ex-card .ext-check{width:24px;height:24px;border-radius:6px;border:2px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .15s}
.ext-ex-card.selected .ext-check{background:var(--accent);border-color:var(--accent);color:var(--bg-primary)}
.ext-ex-card .ext-check svg{width:14px;height:14px}
.ext-ex-info{flex:1;min-width:0}
.ext-ex-info h4{font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ext-ex-info .sub{font-size:12px;color:var(--text-secondary)}
.ext-count{position:sticky;bottom:0;padding:12px 16px;background:var(--bg-secondary);border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.ext-spinner{display:flex;align-items:center;justify-content:center;padding:48px;color:var(--text-muted)}
.ext-spinner::after{content:'';width:32px;height:32px;border:3px solid var(--border);border-top-color:var(--accent);border-radius:50%;animation:spin .6s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}

@media(max-width:768px){
  .split-editor{flex-direction:column}
  .split-left{width:100%;min-width:auto;max-height:45vh;border-right:none;border-bottom:1px solid var(--border)}
  .split-right{min-height:40vh}
  .ext-grid{grid-template-columns:repeat(3,1fr);gap:8px;padding:12px}
}
`;

// --- UTILITIES ---
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,8);
const fmt = {
  date(d){ const dt=new Date(d); return dt.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'})},
  dateShort(d){ const dt=new Date(d); return dt.toLocaleDateString('en-US',{month:'short',day:'numeric'})},
  dateFull(d){ const dt=new Date(d); return dt.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'})},
  time(d){ return new Date(d).toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'})},
  duration(ms){ const s=Math.floor(ms/1000),m=Math.floor(s/60),h=Math.floor(m/60); return h>0?`${h}h ${m%60}m`:`${m}m ${s%60}s`},
  timer(sec){ const m=Math.floor(sec/60),s=sec%60; return `${m}:${s.toString().padStart(2,'0')}`},
  volume(v,unit){ return unit==='kg'?(v*0.453592).toFixed(0):v.toFixed(0)},
  weight(w,unit){ return unit==='kg'?Math.round(w*0.453592):Math.round(w)},
};
function toast(msg,dur=2500){
  const el=document.createElement('div');el.className='toast fade-in';el.textContent=msg;
  document.body.appendChild(el);setTimeout(()=>{el.remove()},dur);
}
function confetti(){
  const colors=['#00f0ff','#ef4444','#22c55e','#f59e0b','#ec4899','#8b5cf6'];
  for(let i=0;i<30;i++){
    const el=document.createElement('div');el.className='confetti-piece';
    el.style.left=Math.random()*100+'vw';el.style.background=colors[Math.floor(Math.random()*colors.length)];
    el.style.animationDelay=Math.random()*0.5+'s';el.style.borderRadius=Math.random()>0.5?'50%':'0';
    document.body.appendChild(el);setTimeout(()=>el.remove(),2500);
  }
}

// --- SVG ICONS ---
const icons = {
  dashboard:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  exercises:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6.5 6.5a2 2 0 0 1 3 0v11a2 2 0 0 1-3 0zM14.5 6.5a2 2 0 0 1 3 0v11a2 2 0 0 1-3 0zM9.5 12h5M2 12h4.5M17.5 12H22"/></svg>`,
  plus:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  history:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  settings:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
  check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  chevronRight:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  chevronLeft:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronDown:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  trash:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>`,
  edit:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  search:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  play:`<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  x:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  trophy:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22M18 2H6v7a6 6 0 1012 0V2z"/></svg>`,
  fire:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1012 0c0-1.532-1.056-3.94-2-5-1.786 3-2.791 3-4 2z"/></svg>`,
  download:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`,
  upload:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>`,
  moon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`,
  sun:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
  grip:`<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/></svg>`,
  copy:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`,
  clipboard:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>`,
};
const muscleColor = g => `var(--muscle-${g.toLowerCase().replace(/\s+/g,'')})`;

// --- SETTINGS (LocalStorage) ---
const Settings = {
  _defaults:{theme:'dark',weightUnit:'lbs',restDefault:90,soundEnabled:true},
  get(k){ const v=localStorage.getItem('ironlog_'+k); return v!==null?JSON.parse(v):this._defaults[k]},
  set(k,v){ localStorage.setItem('ironlog_'+k,JSON.stringify(v))},
  getAll(){ const o={}; for(const k of Object.keys(this._defaults)) o[k]=this.get(k); return o},
};
function applyTheme(){document.documentElement.setAttribute('data-theme',Settings.get('theme'))}
applyTheme();

// --- SIMPLE STATE STORE ---
const Store = {
  _state:{activeView:'dashboard',activeSession:null},
  _listeners:[],
  getState(){return {...this._state}},
  setState(u){Object.assign(this._state,u);this._listeners.forEach(fn=>fn(this._state))},
  subscribe(fn){this._listeners.push(fn);return()=>{this._listeners=this._listeners.filter(f=>f!==fn)}},
};

// --- WEB AUDIO (timer beep) ---
const Audio = {
  _ctx:null,
  _getCtx(){if(!this._ctx)this._ctx=new (window.AudioContext||window.webkitAudioContext)();return this._ctx},
  beep(freq=880,dur=0.15){
    if(!Settings.get('soundEnabled'))return;
    try{const ctx=this._getCtx(),o=ctx.createOscillator(),g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);o.frequency.value=freq;o.type='sine';
    g.gain.setValueAtTime(0.3,ctx.currentTime);g.gain.exponentialRampToValueAtTime(0.01,ctx.currentTime+dur);
    o.start(ctx.currentTime);o.stop(ctx.currentTime+dur)}catch(e){}
  },
  timerDone(){this.beep(660,0.15);setTimeout(()=>this.beep(880,0.15),200);setTimeout(()=>this.beep(1100,0.2),400)},
};

// --- INDEXEDDB DATABASE ---
const DB = {
  _db:null,
  _DB_NAME:'IronLogDB',
  _VERSION:1,
  open(){
    return new Promise((resolve,reject)=>{
      if(this._db){resolve(this._db);return}
      const req=indexedDB.open(this._DB_NAME,this._VERSION);
      req.onupgradeneeded=e=>{
        const db=e.target.result;
        if(!db.objectStoreNames.contains('exercises')){
          const s=db.createObjectStore('exercises',{keyPath:'id'});
          s.createIndex('name','name');s.createIndex('muscleGroup','muscleGroup');s.createIndex('equipment','equipment');
        }
        if(!db.objectStoreNames.contains('templates')){
          const s=db.createObjectStore('templates',{keyPath:'id'});
          s.createIndex('name','name');s.createIndex('updatedAt','updatedAt');
        }
        if(!db.objectStoreNames.contains('sessions')){
          const s=db.createObjectStore('sessions',{keyPath:'id'});
          s.createIndex('startedAt','startedAt');s.createIndex('templateId','templateId');s.createIndex('completedAt','completedAt');
        }
        if(!db.objectStoreNames.contains('personalRecords')){
          db.createObjectStore('personalRecords',{keyPath:'exerciseId'});
        }
        if(!db.objectStoreNames.contains('appState')){
          db.createObjectStore('appState',{keyPath:'key'});
        }
      };
      req.onsuccess=e=>{this._db=e.target.result;resolve(this._db)};
      req.onerror=e=>reject(e.target.error);
    });
  },
  async _tx(store,mode='readonly'){const db=await this.open();return db.transaction(store,mode).objectStore(store)},
  _req(r){return new Promise((res,rej)=>{r.onsuccess=e=>res(e.target.result);r.onerror=e=>rej(e.target.error)})},
  async getAll(store){const s=await this._tx(store);return this._req(s.getAll())},
  async get(store,key){const s=await this._tx(store);return this._req(s.get(key))},
  async put(store,data){const s=await this._tx(store,'readwrite');return this._req(s.put(data))},
  async delete(store,key){const s=await this._tx(store,'readwrite');return this._req(s.delete(key))},
  async clear(store){const s=await this._tx(store,'readwrite');return this._req(s.clear())},
  async getAllByIndex(store,indexName,value){const s=await this._tx(store);return this._req(s.index(indexName).getAll(value))},
  async count(store){const s=await this._tx(store);return this._req(s.count())},
};

// --- EXERCISE DATA (45 exercises) ---
const EXERCISES = [
  // Dumbbells (16)
  {id:'db-bench',name:'DB Bench Press',muscleGroup:'Chest',secondaryMuscles:['Triceps','Shoulders'],equipment:'Dumbbell',category:'compound',animationId:'svgBenchPress',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/1.jpg'],tips:['Keep feet flat on floor','Lower to chest level','Press up and slightly inward'],description:'Lie on a flat bench with dumbbells at chest level, press up.'},
  {id:'db-incline-press',name:'Incline DB Press',muscleGroup:'Chest',secondaryMuscles:['Shoulders','Triceps'],equipment:'Dumbbell',category:'compound',animationId:'svgBenchPress',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/1.jpg'],tips:['Set bench to 30-45 degrees','Lower to upper chest','Squeeze at top'],description:'Press dumbbells up from an incline bench position.'},
  {id:'db-fly',name:'DB Fly',muscleGroup:'Chest',secondaryMuscles:[],equipment:'Dumbbell',category:'isolation',animationId:'svgBenchPress',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flyes/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flyes/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flyes/1.jpg'],tips:['Slight bend in elbows','Lower slowly in arc','Squeeze chest at top'],description:'Lying on a bench, open arms wide then bring dumbbells together.'},
  {id:'db-incline-fly',name:'Incline DB Fly',muscleGroup:'Chest',secondaryMuscles:['Shoulders'],equipment:'Dumbbell',category:'isolation',animationId:'svgBenchPress',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flyes/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flyes/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Flyes/1.jpg'],tips:['30 degree incline','Wide arc motion','Control the negative'],description:'Fly movement on an incline bench targeting upper chest.'},
  {id:'db-shoulder-press',name:'DB Shoulder Press',muscleGroup:'Shoulders',secondaryMuscles:['Triceps'],equipment:'Dumbbell',category:'compound',animationId:'svgOverheadPress',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shoulder_Press/1.jpg'],tips:['Start at ear level','Press straight up','Dont lock elbows'],description:'Press dumbbells overhead from shoulder height.'},
  {id:'arnold-press',name:'Arnold Press',muscleGroup:'Shoulders',secondaryMuscles:['Triceps'],equipment:'Dumbbell',category:'compound',animationId:'svgOverheadPress',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/1.jpg'],tips:['Start palms facing you','Rotate as you press','Full range of motion'],description:'Rotating shoulder press that hits all three delt heads.'},
  {id:'lateral-raise',name:'Lateral Raise',muscleGroup:'Shoulders',secondaryMuscles:['Traps'],equipment:'Dumbbell',category:'isolation',animationId:'svgLateralRaise',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Lateral_Raise/1.jpg'],tips:['Slight bend in elbows','Raise to shoulder height','Control the descent'],description:'Raise dumbbells out to the sides to shoulder height.'},
  {id:'front-raise',name:'Front Raise',muscleGroup:'Shoulders',secondaryMuscles:[],equipment:'Dumbbell',category:'isolation',animationId:'svgLateralRaise',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Front_Dumbbell_Raise/1.jpg'],tips:['Alternate arms or together','Raise to eye level','Dont swing'],description:'Raise dumbbells in front of you to shoulder height.'},
  {id:'rear-delt-fly',name:'Rear Delt Fly',muscleGroup:'Shoulders',secondaryMuscles:['Back'],equipment:'Dumbbell',category:'isolation',animationId:'svgBentOverRow',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Bent-Over_Rear_Delt_Raise/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Bent-Over_Rear_Delt_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Bent-Over_Rear_Delt_Raise/1.jpg'],tips:['Bend at hips 90 degrees','Squeeze shoulder blades','Light weight, high reps'],description:'Bent over fly targeting rear deltoids.'},
  {id:'db-curl',name:'DB Curl',muscleGroup:'Biceps',secondaryMuscles:[],equipment:'Dumbbell',category:'isolation',animationId:'svgStandingCurl',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bicep_Curl/1.jpg'],tips:['Keep elbows at sides','Full range of motion','Squeeze at top'],description:'Standard dumbbell bicep curl.'},
  {id:'hammer-curl',name:'Hammer Curl',muscleGroup:'Biceps',secondaryMuscles:[],equipment:'Dumbbell',category:'isolation',animationId:'svgStandingCurl',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curls/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curls/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hammer_Curls/1.jpg'],tips:['Neutral grip throughout','Keep elbows pinned','Control the weight'],description:'Curl with palms facing each other, hitting brachialis.'},
  {id:'concentration-curl',name:'Concentration Curl',muscleGroup:'Biceps',secondaryMuscles:[],equipment:'Dumbbell',category:'isolation',animationId:'svgStandingCurl',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Concentration_Curls/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Concentration_Curls/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Concentration_Curls/1.jpg'],tips:['Brace elbow on inner thigh','Slow and controlled','Peak contraction at top'],description:'Seated single-arm curl braced against inner thigh.'},
  {id:'overhead-db-ext',name:'Overhead DB Extension',muscleGroup:'Triceps',secondaryMuscles:[],equipment:'Dumbbell',category:'isolation',animationId:'svgOverheadExtension',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Triceps_Extension/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Triceps_Extension/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Dumbbell_Triceps_Extension/1.jpg'],tips:['Keep elbows close to head','Lower behind head','Full extension at top'],description:'Hold one dumbbell overhead with both hands, lower behind head.'},
  {id:'db-kickback',name:'DB Kickback',muscleGroup:'Triceps',secondaryMuscles:[],equipment:'Dumbbell',category:'isolation',animationId:'svgTricepKickback',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tricep_Dumbbell_Kickback/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tricep_Dumbbell_Kickback/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Tricep_Dumbbell_Kickback/1.jpg'],tips:['Keep upper arm parallel to floor','Extend fully','Squeeze at lockout'],description:'Bent over tricep extension, kicking the dumbbell back.'},
  {id:'db-row',name:'DB Row',muscleGroup:'Back',secondaryMuscles:['Biceps'],equipment:'Dumbbell',category:'compound',animationId:'svgBentOverRow',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Dumbbell_Row/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Dumbbell_Row/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/One-Arm_Dumbbell_Row/1.jpg'],tips:['Pull elbow back, not up','Squeeze shoulder blade','Keep back flat'],description:'Single-arm bent-over row with dumbbell.'},
  {id:'db-shrug',name:'DB Shrug',muscleGroup:'Traps',secondaryMuscles:[],equipment:'Dumbbell',category:'isolation',animationId:'svgShrug',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shrug/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shrug/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shrug/1.jpg'],tips:['Lift straight up','Hold at top briefly','Heavy weight is fine'],description:'Shrug shoulders up holding dumbbells at sides.'},

  // Pull-up Bar (5)
  {id:'pullup',name:'Pull-Up',muscleGroup:'Back',secondaryMuscles:['Biceps','Lats'],equipment:'Pull-up Bar',category:'compound',animationId:'svgPullUp',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/1.jpg'],tips:['Overhand grip shoulder width','Pull chest to bar','Full dead hang at bottom'],description:'Overhand grip pull-up targeting back and biceps.'},
  {id:'chinup',name:'Chin-Up',muscleGroup:'Biceps',secondaryMuscles:['Back','Lats'],equipment:'Pull-up Bar',category:'compound',animationId:'svgPullUp',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chin-Up/1.jpg'],tips:['Underhand grip','Chin over bar','Control the descent'],description:'Underhand grip pull-up emphasizing biceps.'},
  {id:'neutral-pullup',name:'Neutral Grip Pull-Up',muscleGroup:'Back',secondaryMuscles:['Biceps'],equipment:'Pull-up Bar',category:'compound',animationId:'svgPullUp',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/1.jpg'],tips:['Palms facing each other','Easier on shoulders','Full range of motion'],description:'Pull-up with palms facing each other.'},
  {id:'hanging-leg-raise',name:'Hanging Leg Raise',muscleGroup:'Abs',secondaryMuscles:[],equipment:'Pull-up Bar',category:'isolation',animationId:'svgHangingLegRaise',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/1.jpg'],tips:['Keep legs straight','Raise to 90 degrees','Control the swing'],description:'Hang from bar and raise straight legs.'},
  {id:'hanging-knee-raise',name:'Hanging Knee Raise',muscleGroup:'Abs',secondaryMuscles:[],equipment:'Pull-up Bar',category:'isolation',animationId:'svgHangingLegRaise',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/1.jpg'],tips:['Bring knees to chest','Slow and controlled','Dont swing'],description:'Hang from bar and bring knees to chest.'},

  // Bench (6)
  {id:'decline-db-press',name:'Decline DB Press',muscleGroup:'Chest',secondaryMuscles:['Triceps'],equipment:'Bench',category:'compound',animationId:'svgBenchPress',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Bench_Press/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Bench_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Bench_Press/1.jpg'],tips:['Hook feet under pads','Lower to lower chest','Press up and inward'],description:'Dumbbell press on a decline bench targeting lower chest.'},
  {id:'skull-crushers',name:'Skull Crushers',muscleGroup:'Triceps',secondaryMuscles:[],equipment:'Bench',category:'isolation',animationId:'svgSkullCrusher',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Triceps_Press/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Triceps_Press/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Triceps_Press/1.jpg'],tips:['Lower to forehead','Keep elbows in','Use moderate weight'],description:'Lying tricep extension, lowering weight to forehead.'},
  {id:'db-pullover',name:'DB Pullover',muscleGroup:'Chest',secondaryMuscles:['Lats'],equipment:'Bench',category:'compound',animationId:'svgBenchPress',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight-Arm_Dumbbell_Pullover/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight-Arm_Dumbbell_Pullover/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight-Arm_Dumbbell_Pullover/1.jpg'],tips:['Slight bend in elbows','Lower behind head','Feel the stretch'],description:'Lying on bench, lower a dumbbell behind your head in an arc.'},
  {id:'incline-db-curl',name:'Incline DB Curl',muscleGroup:'Biceps',secondaryMuscles:[],equipment:'Bench',category:'isolation',animationId:'svgStandingCurl',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Curl/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Curl/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Curl/1.jpg'],tips:['45 degree incline','Let arms hang straight','Curl without swinging'],description:'Seated incline curl for a deep bicep stretch.'},
  {id:'bulgarian-split-squat',name:'Bulgarian Split Squat',muscleGroup:'Quads',secondaryMuscles:['Glutes','Hamstrings'],equipment:'Bench',category:'compound',animationId:'svgLunge',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Squat_with_Dumbbells/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Squat_with_Dumbbells/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Split_Squat_with_Dumbbells/1.jpg'],tips:['Rear foot on bench','Keep torso upright','Drive through front heel'],description:'Single-leg squat with rear foot elevated on bench.'},
  {id:'db-hip-thrust',name:'DB Hip Thrust',muscleGroup:'Glutes',secondaryMuscles:['Hamstrings'],equipment:'Bench',category:'compound',animationId:'svgHipThrust',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/1.jpg'],tips:['Upper back on bench','Drive hips up','Squeeze glutes at top'],description:'Hip thrust with upper back on bench, dumbbell on hips.'},

  // Bodyweight (18)
  {id:'pushup',name:'Push-Up',muscleGroup:'Chest',secondaryMuscles:['Triceps','Shoulders'],equipment:'Bodyweight',category:'compound',animationId:'svgPushUp',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/1.jpg'],tips:['Hands shoulder width','Body straight like a plank','Full range of motion'],description:'Standard push-up from the floor.'},
  {id:'diamond-pushup',name:'Diamond Push-Up',muscleGroup:'Triceps',secondaryMuscles:['Chest'],equipment:'Bodyweight',category:'compound',animationId:'svgPushUp',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Ups_-_Close_Triceps_Position/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Ups_-_Close_Triceps_Position/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Ups_-_Close_Triceps_Position/1.jpg'],tips:['Hands together under chest','Elbows close to body','Great tricep builder'],description:'Push-up with hands close together forming a diamond.'},
  {id:'incline-pushup',name:'Incline Push-Up',muscleGroup:'Chest',secondaryMuscles:['Triceps'],equipment:'Bodyweight',category:'compound',animationId:'svgPushUp',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pushups/1.jpg'],tips:['Hands on elevated surface','Good for beginners','Focus on form'],description:'Push-up with hands on a raised surface (easier variation).'},
  {id:'decline-pushup',name:'Decline Push-Up',muscleGroup:'Chest',secondaryMuscles:['Shoulders','Triceps'],equipment:'Bodyweight',category:'compound',animationId:'svgPushUp',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Push-Up/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Push-Up/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Push-Up/1.jpg'],tips:['Feet on elevated surface','Targets upper chest','Harder than standard'],description:'Push-up with feet elevated, targeting upper chest.'},
  {id:'pike-pushup',name:'Pike Push-Up',muscleGroup:'Shoulders',secondaryMuscles:['Triceps'],equipment:'Bodyweight',category:'compound',animationId:'svgPushUp',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Handstand_Push-Ups/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Handstand_Push-Ups/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Handstand_Push-Ups/1.jpg'],tips:['Hips high in inverted V','Head toward ground','Great shoulder builder'],description:'Push-up in a pike position targeting shoulders.'},
  {id:'tricep-dips',name:'Tricep Dips',muscleGroup:'Triceps',secondaryMuscles:['Chest','Shoulders'],equipment:'Bodyweight',category:'compound',animationId:'svgDip',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/1.jpg'],tips:['Keep body upright','Lower until 90 degrees','Dont flare elbows'],description:'Dips on parallel bars or sturdy surface.'},
  {id:'bench-dips',name:'Bench Dips',muscleGroup:'Triceps',secondaryMuscles:['Shoulders'],equipment:'Bodyweight',category:'compound',animationId:'svgDip',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Dips/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Dips/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Dips/1.jpg'],tips:['Hands on bench behind you','Lower body down','Extend legs for difficulty'],description:'Dips using a bench behind you for support.'},
  {id:'bw-squat',name:'Bodyweight Squat',muscleGroup:'Quads',secondaryMuscles:['Glutes','Hamstrings'],equipment:'Bodyweight',category:'compound',animationId:'svgSquat',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/1.jpg'],tips:['Feet shoulder width','Sit back and down','Knees track over toes'],description:'Standard air squat with bodyweight only.'},
  {id:'jump-squat',name:'Jump Squat',muscleGroup:'Quads',secondaryMuscles:['Glutes','Calves'],equipment:'Bodyweight',category:'compound',animationId:'svgSquat',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Freehand_Jump_Squat/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Freehand_Jump_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Freehand_Jump_Squat/1.jpg'],tips:['Squat down then explode up','Soft landing','Great for power'],description:'Explosive squat with a jump at the top.'},
  {id:'walking-lunge',name:'Walking Lunge',muscleGroup:'Quads',secondaryMuscles:['Glutes','Hamstrings'],equipment:'Bodyweight',category:'compound',animationId:'svgLunge',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Walking_Lunge/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Walking_Lunge/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Walking_Lunge/1.jpg'],tips:['Long stride forward','Back knee near floor','Keep torso upright'],description:'Alternating forward lunges while walking.'},
  {id:'glute-bridge',name:'Glute Bridge',muscleGroup:'Glutes',secondaryMuscles:['Hamstrings'],equipment:'Bodyweight',category:'isolation',animationId:'svgHipThrust',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butt_Lift_Bridge/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butt_Lift_Bridge/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Butt_Lift_Bridge/1.jpg'],tips:['Feet flat on floor','Squeeze glutes at top','Hold for 1 second'],description:'Lying on back, drive hips up squeezing glutes.'},
  {id:'calf-raise',name:'Calf Raise',muscleGroup:'Calves',secondaryMuscles:[],equipment:'Bodyweight',category:'isolation',animationId:'svgCalfRaise',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Standing_Calf_Raises/1.jpg'],tips:['Rise up on toes','Slow controlled motion','Hold at the top'],description:'Stand and rise up onto your toes.'},
  {id:'plank',name:'Plank',muscleGroup:'Abs',secondaryMuscles:['Full Body'],equipment:'Bodyweight',category:'isolation',animationId:'svgPlank',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/1.jpg'],tips:['Straight line from head to heels','Engage core','Breathe steadily'],description:'Hold a push-up position on forearms. Track time instead of reps.'},
  {id:'mountain-climber',name:'Mountain Climber',muscleGroup:'Abs',secondaryMuscles:['Full Body'],equipment:'Bodyweight',category:'compound',animationId:'svgMountainClimber',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climbers/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climbers/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climbers/1.jpg'],tips:['Keep hips low','Drive knees to chest','Fast pace for cardio'],description:'In push-up position, rapidly alternate driving knees forward.'},
  {id:'burpees',name:'Burpees',muscleGroup:'Full Body',secondaryMuscles:[],equipment:'Bodyweight',category:'compound',animationId:'svgSquat',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bodyweight_Squat/1.jpg'],tips:['Squat, plank, pushup, jump','Keep a rhythm','Scale by removing jump'],description:'Full body exercise: squat down, kick back, push-up, jump up.'},
  {id:'crunch',name:'Crunch',muscleGroup:'Abs',secondaryMuscles:[],equipment:'Bodyweight',category:'isolation',animationId:'svgPlank',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunches/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunches/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Crunches/1.jpg'],tips:['Hands behind head gently','Lift shoulders off floor','Dont pull on neck'],description:'Lying crunch targeting upper abs.'},
  {id:'leg-raise',name:'Leg Raise',muscleGroup:'Abs',secondaryMuscles:[],equipment:'Bodyweight',category:'isolation',animationId:'svgHangingLegRaise',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Lying_Leg_Raise/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Lying_Leg_Raise/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Flat_Bench_Lying_Leg_Raise/1.jpg'],tips:['Keep legs straight','Lower slowly','Hands under hips for support'],description:'Lying on back, raise straight legs to vertical.'},
  {id:'russian-twist',name:'Russian Twist',muscleGroup:'Abs',secondaryMuscles:[],equipment:'Bodyweight',category:'isolation',animationId:'svgPlank',imageUrl:'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Russian_Twist/0.jpg',images:['https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Russian_Twist/0.jpg', 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Russian_Twist/1.jpg'],tips:['Lean back 45 degrees','Rotate side to side','Hold weight for extra difficulty'],description:'Seated twist rotating torso side to side.'},
];

// --- SVG ANIMATION SYSTEM ---
// Stick figure with articulated joints + CSS keyframe animations
const SVGAnimations = {
  _stickFigure(opts={}){
    const {headY=30,torsoTop=42,torsoBot=80,lArmPts='',rArmPts='',lLegPts='',rLegPts='',extras='',muscleHighlights=[]}=opts;
    let muscles='';
    muscleHighlights.forEach(m=>{
      muscles+=`<ellipse cx="${m.cx}" cy="${m.cy}" rx="${m.rx||8}" ry="${m.ry||5}" fill="${m.color}" opacity="0.35"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/></ellipse>`;
    });
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <style>
        .bone{stroke:var(--text-primary);stroke-width:3;stroke-linecap:round;fill:none}
        .head{fill:none;stroke:var(--text-primary);stroke-width:2.5}
        ${opts.css||''}
      </style>
      ${muscles}${extras}
      <circle class="head" cx="100" cy="${headY}" r="12"/>
      <line class="bone" x1="100" y1="${torsoTop}" x2="100" y2="${torsoBot}"/>
      <polyline class="bone ${opts.lArmClass||''}" points="${lArmPts}"/>
      <polyline class="bone ${opts.rArmClass||''}" points="${rArmPts}"/>
      <polyline class="bone ${opts.lLegClass||''}" points="${lLegPts}"/>
      <polyline class="bone ${opts.rLegClass||''}" points="${rLegPts}"/>
    </svg>`;
  },

  svgStandingCurl(mg){
    return this._stickFigure({
      lArmPts:'100,50 80,65 78,50',rArmPts:'100,50 120,65 122,50',
      lLegPts:'100,80 85,110 85,140',rLegPts:'100,80 115,110 115,140',
      lArmClass:'curl-l',rArmClass:'curl-r',
      css:`@keyframes curlL{0%,100%{d:path("M100,50 L80,75 L80,95")}50%{d:path("M100,50 L80,65 L78,50")}}
        .curl-l{animation:curlL 2s ease-in-out infinite}.curl-r{animation:curlL 2s ease-in-out infinite 1s}`,
      muscleHighlights:[{cx:78,cy:60,rx:6,ry:10,color:'var(--muscle-biceps)'},{cx:122,cy:60,rx:6,ry:10,color:'var(--muscle-biceps)'}]
    });
  },

  svgOverheadPress(mg){
    return this._stickFigure({
      lArmPts:'100,50 80,60 75,40',rArmPts:'100,50 120,60 125,40',
      lLegPts:'100,80 85,110 85,140',rLegPts:'100,80 115,110 115,140',
      lArmClass:'press-l',rArmClass:'press-r',
      css:`@keyframes pressUp{0%,100%{d:path("M100,50 L80,65 L80,80")}50%{d:path("M100,50 L85,40 L80,20")}}
        .press-l{animation:pressUp 2s ease-in-out infinite}.press-r{animation:pressUp 2s ease-in-out infinite}`,
      muscleHighlights:[{cx:100,cy:48,rx:15,ry:6,color:'var(--muscle-shoulders)'}]
    });
  },

  svgLateralRaise(mg){
    return this._stickFigure({
      lArmPts:'100,50 80,70 60,70',rArmPts:'100,50 120,70 140,70',
      lLegPts:'100,80 85,110 85,140',rLegPts:'100,80 115,110 115,140',
      lArmClass:'lat-l',rArmClass:'lat-r',
      css:`@keyframes latRaise{0%,100%{d:path("M100,50 L85,70 L80,90")}50%{d:path("M100,50 L80,55 L55,50")}}
        .lat-l{animation:latRaise 2.5s ease-in-out infinite}.lat-r{animation:latRaise 2.5s ease-in-out infinite}`,
      muscleHighlights:[{cx:85,cy:48,rx:6,ry:5,color:'var(--muscle-shoulders)'},{cx:115,cy:48,rx:6,ry:5,color:'var(--muscle-shoulders)'}]
    });
  },

  svgBenchPress(mg){
    const color = mg==='Chest'?'var(--muscle-chest)':'var(--muscle-triceps)';
    return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <style>.bone{stroke:var(--text-primary);stroke-width:3;stroke-linecap:round;fill:none}.head{fill:none;stroke:var(--text-primary);stroke-width:2.5}
      @keyframes benchPush{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}
      .arms{animation:benchPush 2s ease-in-out infinite}</style>
      <rect x="30" y="85" width="140" height="8" rx="3" fill="var(--bg-surface)" stroke="var(--border)"/>
      <rect x="40" y="93" width="4" height="40" fill="var(--text-muted)"/><rect x="156" y="93" width="4" height="40" fill="var(--text-muted)"/>
      <circle class="head" cx="55" cy="78" r="10"/>
      <line class="bone" x1="65" y1="82" x2="120" y2="82"/>
      <line class="bone" x1="120" y1="82" x2="140" y2="110"/><line class="bone" x1="140" y1="110" x2="155" y2="130"/>
      <g class="arms">
        <line class="bone" x1="80" y1="82" x2="75" y2="62"/><line class="bone" x1="75" y1="62" x2="60" y2="55"/>
        <line class="bone" x1="80" y1="82" x2="85" y2="62"/><line class="bone" x1="85" y1="62" x2="100" y2="55"/>
        <rect x="50" y="52" width="60" height="5" rx="2" fill="var(--text-muted)"/>
      </g>
      <ellipse cx="90" cy="78" rx="18" ry="6" fill="${color}" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/></ellipse>
    </svg>`;
  },

  svgBentOverRow(mg){
    return `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
      <style>.bone{stroke:var(--text-primary);stroke-width:3;stroke-linecap:round;fill:none}.head{fill:none;stroke:var(--text-primary);stroke-width:2.5}
      @keyframes rowPull{0%,100%{d:path("M95,80 L80,105 L75,130")}50%{d:path("M95,80 L105,75 L115,85")}}
      .row-arm{animation:rowPull 2s ease-in-out infinite}</style>
      <circle class="head" cx="70" cy="55" r="10"/>
      <line class="bone" x1="78" y1="62" x2="110" y2="80"/>
      <polyline class="bone row-arm" points="95,80 80,105 75,130"/>
      <line class="bone" x1="110" y1="80" x2="95" y2="120"/><line class="bone" x1="95" y1="120" x2="90" y2="155"/>
      <line class="bone" x1="110" y1="80" x2="125" y2="120"/><line class="bone" x1="125" y1="120" x2="130" y2="155"/>
      <ellipse cx="100" cy="75" rx="15" ry="8" fill="var(--muscle-back)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/></ellipse>
    </svg>`;
  },

  svgSkullCrusher(){
    return `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <style>.bone{stroke:var(--text-primary);stroke-width:3;stroke-linecap:round;fill:none}.head{fill:none;stroke:var(--text-primary);stroke-width:2.5}
      @keyframes skullCrush{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-40deg)}}
      .forearm{transform-origin:80px 62px;animation:skullCrush 2s ease-in-out infinite}</style>
      <rect x="30" y="85" width="140" height="8" rx="3" fill="var(--bg-surface)" stroke="var(--border)"/>
      <circle class="head" cx="55" cy="78" r="10"/>
      <line class="bone" x1="65" y1="82" x2="120" y2="82"/>
      <line class="bone" x1="120" y1="82" x2="140" y2="110"/><line class="bone" x1="140" y1="110" x2="155" y2="130"/>
      <line class="bone" x1="80" y1="82" x2="80" y2="62"/>
      <g class="forearm"><line class="bone" x1="80" y1="62" x2="80" y2="45"/><rect x="72" y="42" width="16" height="4" rx="2" fill="var(--text-muted)"/></g>
      <ellipse cx="82" cy="70" rx="5" ry="8" fill="var(--muscle-triceps)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/></ellipse>
    </svg>`;
  },

  svgOverheadExtension(){
    return this._stickFigure({
      lArmPts:'100,50 95,35 90,50',rArmPts:'100,50 105,35 110,50',
      lLegPts:'100,80 85,110 85,140',rLegPts:'100,80 115,110 115,140',
      lArmClass:'ohe',rArmClass:'ohe',
      css:`@keyframes ohe{0%,100%{d:path("M100,50 L95,35 L90,50")}50%{d:path("M100,50 L95,35 L85,20")}}
        .ohe{animation:ohe 2s ease-in-out infinite}`,
      muscleHighlights:[{cx:95,cy:55,rx:5,ry:8,color:'var(--muscle-triceps)'},{cx:105,cy:55,rx:5,ry:8,color:'var(--muscle-triceps)'}]
    });
  },

  svgTricepKickback(){
    return this.svgBentOverRow('Triceps');
  },

  svgSquat(){
    return this._stickFigure({
      lArmPts:'100,50 85,65 80,75',rArmPts:'100,50 115,65 120,75',
      lLegPts:'100,80 85,110 80,140',rLegPts:'100,80 115,110 120,140',
      lLegClass:'squat-l',rLegClass:'squat-r',
      css:`@keyframes sqDown{0%,100%{d:path("M100,80 L85,110 L85,140")}50%{d:path("M100,100 L80,110 L85,130")}}
        .squat-l{animation:sqDown 2.5s ease-in-out infinite}.squat-r{animation:sqDown 2.5s ease-in-out infinite}`,
      muscleHighlights:[{cx:85,cy:105,rx:7,ry:12,color:'var(--muscle-quads)'},{cx:115,cy:105,rx:7,ry:12,color:'var(--muscle-quads)'}]
    });
  },

  svgLunge(){
    return this._stickFigure({
      lArmPts:'100,50 85,70 80,80',rArmPts:'100,50 115,70 120,80',
      lLegPts:'100,80 75,105 70,140',rLegPts:'100,80 125,105 140,130',
      lLegClass:'lunge-l',
      css:`@keyframes lungeDown{0%,100%{d:path("M100,80 L75,110 L70,140")}50%{d:path("M100,95 L70,105 L65,130")}}
        .lunge-l{animation:lungeDown 2.5s ease-in-out infinite}`,
      muscleHighlights:[{cx:80,cy:100,rx:7,ry:12,color:'var(--muscle-quads)'},{cx:120,cy:100,rx:7,ry:10,color:'var(--muscle-glutes)'}]
    });
  },

  svgPullUp(){
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <style>.bone{stroke:var(--text-primary);stroke-width:3;stroke-linecap:round;fill:none}.head{fill:none;stroke:var(--text-primary);stroke-width:2.5}
      @keyframes pullUp{0%,100%{transform:translateY(0)}50%{transform:translateY(-25px)}}
      .pull-body{animation:pullUp 2.5s ease-in-out infinite}</style>
      <line class="bone" x1="50" y1="20" x2="150" y2="20" stroke-width="4"/>
      <g class="pull-body">
        <circle class="head" cx="100" cy="50" r="10"/>
        <line class="bone" x1="100" y1="60" x2="100" y2="100"/>
        <polyline class="bone" points="100,65 80,35 75,20"/>
        <polyline class="bone" points="100,65 120,35 125,20"/>
        <line class="bone" x1="100" y1="100" x2="85" y2="135"/><line class="bone" x1="85" y1="135" x2="85" y2="165"/>
        <line class="bone" x1="100" y1="100" x2="115" y2="135"/><line class="bone" x1="115" y1="135" x2="115" y2="165"/>
      </g>
      <ellipse cx="100" cy="80" rx="18" ry="8" fill="var(--muscle-back)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite"/></ellipse>
    </svg>`;
  },

  svgHangingLegRaise(){
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <style>.bone{stroke:var(--text-primary);stroke-width:3;stroke-linecap:round;fill:none}.head{fill:none;stroke:var(--text-primary);stroke-width:2.5}
      @keyframes legRaise{0%,100%{d:path("M100,100 L90,140 L88,175")}50%{d:path("M100,100 L80,105 L60,100")}}
      .lr-leg{animation:legRaise 2.5s ease-in-out infinite}</style>
      <line class="bone" x1="50" y1="20" x2="150" y2="20" stroke-width="4"/>
      <circle class="head" cx="100" cy="45" r="10"/>
      <line class="bone" x1="100" y1="55" x2="100" y2="100"/>
      <polyline class="bone" points="100,60 80,35 75,20"/>
      <polyline class="bone" points="100,60 120,35 125,20"/>
      <polyline class="bone lr-leg" points="100,100 90,140 88,175"/>
      <polyline class="bone lr-leg" points="100,100 110,140 112,175"/>
      <ellipse cx="100" cy="95" rx="12" ry="6" fill="var(--muscle-abs)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite"/></ellipse>
    </svg>`;
  },

  svgPushUp(){
    return `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
      <style>.bone{stroke:var(--text-primary);stroke-width:3;stroke-linecap:round;fill:none}.head{fill:none;stroke:var(--text-primary);stroke-width:2.5}
      @keyframes pushUpAnim{0%,100%{transform:translateY(0)}50%{transform:translateY(12px)}}
      .pu-body{animation:pushUpAnim 2s ease-in-out infinite}</style>
      <line x1="20" y1="105" x2="180" y2="105" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="4"/>
      <g class="pu-body">
        <circle class="head" cx="45" cy="48" r="8"/>
        <line class="bone" x1="53" y1="52" x2="130" y2="55"/>
        <line class="bone" x1="130" y1="55" x2="150" y2="75"/><line class="bone" x1="150" y1="75" x2="160" y2="100"/>
        <line class="bone" x1="70" y1="54" x2="65" y2="80"/><line class="bone" x1="65" y1="80" x2="60" y2="100"/>
        <line class="bone" x1="85" y1="54" x2="90" y2="80"/><line class="bone" x1="90" y1="80" x2="95" y2="100"/>
      </g>
      <ellipse cx="80" cy="52" rx="15" ry="5" fill="var(--muscle-chest)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/></ellipse>
    </svg>`;
  },

  svgPlank(){
    return `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      <style>.bone{stroke:var(--text-primary);stroke-width:3;stroke-linecap:round;fill:none}.head{fill:none;stroke:var(--text-primary);stroke-width:2.5}</style>
      <line x1="20" y1="85" x2="180" y2="85" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="4"/>
      <circle class="head" cx="45" cy="42" r="8"/>
      <line class="bone" x1="53" y1="46" x2="140" y2="50"/>
      <line class="bone" x1="140" y1="50" x2="155" y2="68"/><line class="bone" x1="155" y1="68" x2="165" y2="82"/>
      <line class="bone" x1="60" y1="48" x2="55" y2="70"/><line class="bone" x1="55" y1="70" x2="55" y2="82"/>
      <ellipse cx="100" cy="48" rx="20" ry="5" fill="var(--muscle-abs)" opacity="0.35"><animate attributeName="opacity" values="0.25;0.5;0.25" dur="3s" repeatCount="indefinite"/></ellipse>
    </svg>`;
  },

  svgDip(){
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <style>.bone{stroke:var(--text-primary);stroke-width:3;stroke-linecap:round;fill:none}.head{fill:none;stroke:var(--text-primary);stroke-width:2.5}
      @keyframes dipAnim{0%,100%{transform:translateY(0)}50%{transform:translateY(20px)}}
      .dip-body{animation:dipAnim 2s ease-in-out infinite}</style>
      <line class="bone" x1="40" y1="50" x2="70" y2="50" stroke-width="4"/>
      <line class="bone" x1="130" y1="50" x2="160" y2="50" stroke-width="4"/>
      <g class="dip-body">
        <circle class="head" cx="100" cy="35" r="10"/>
        <line class="bone" x1="100" y1="45" x2="100" y2="90"/>
        <polyline class="bone" points="100,55 80,50 70,50"/>
        <polyline class="bone" points="100,55 120,50 130,50"/>
        <line class="bone" x1="100" y1="90" x2="90" y2="125"/><line class="bone" x1="90" y1="125" x2="85" y2="160"/>
        <line class="bone" x1="100" y1="90" x2="110" y2="125"/><line class="bone" x1="110" y1="125" x2="115" y2="160"/>
      </g>
      <ellipse cx="92" cy="60" rx="5" ry:="8" fill="var(--muscle-triceps)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/></ellipse>
      <ellipse cx="108" cy="60" rx="5" ry="8" fill="var(--muscle-triceps)" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/></ellipse>
    </svg>`;
  },

  svgShrug(){
    return this._stickFigure({
      lArmPts:'100,48 82,70 80,95',rArmPts:'100,48 118,70 120,95',
      lLegPts:'100,80 85,110 85,140',rLegPts:'100,80 115,110 115,140',
      css:`@keyframes shrug{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .bone:nth-child(n){} `,
      extras:`<g style="animation:shrug 1.5s ease-in-out infinite"><rect x="88" y="38" width="24" height="10" rx="3" fill="var(--muscle-traps)" opacity="0.4"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.5s" repeatCount="indefinite"/></rect></g>`,
      muscleHighlights:[{cx:92,cy:45,rx:5,ry:6,color:'var(--muscle-traps)'},{cx:108,cy:45,rx:5,ry:6,color:'var(--muscle-traps)'}]
    });
  },

  svgCalfRaise(){
    return this._stickFigure({
      lArmPts:'100,50 85,70 80,85',rArmPts:'100,50 115,70 120,85',
      lLegPts:'100,80 90,110 88,140',rLegPts:'100,80 110,110 112,140',
      lLegClass:'calf',rLegClass:'calf',
      css:`@keyframes calfRaise{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .calf{animation:calfRaise 1.5s ease-in-out infinite}`,
      muscleHighlights:[{cx:88,cy:125,rx:5,ry:10,color:'var(--muscle-calves)'},{cx:112,cy:125,rx:5,ry:10,color:'var(--muscle-calves)'}]
    });
  },

  svgHipThrust(){
    return `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <style>.bone{stroke:var(--text-primary);stroke-width:3;stroke-linecap:round;fill:none}.head{fill:none;stroke:var(--text-primary);stroke-width:2.5}
      @keyframes thrust{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
      .hip{animation:thrust 2s ease-in-out infinite}</style>
      <rect x="20" y="50" width="50" height="30" rx="4" fill="var(--bg-surface)" stroke="var(--border)"/>
      <circle class="head" cx="45" cy="42" r="8"/>
      <line class="bone" x1="50" y1="55" x2="50" y2="60"/>
      <g class="hip">
        <line class="bone" x1="50" y1="60" x2="110" y2="70"/>
        <line class="bone" x1="110" y1="70" x2="130" y2="95"/><line class="bone" x1="130" y1="95" x2="130" y2="120"/>
        <line class="bone" x1="110" y1="70" x2="140" y2="95"/><line class="bone" x1="140" y1="95" x2="145" y2="120"/>
      </g>
      <ellipse cx="100" cy="68" rx="12" ry="6" fill="var(--muscle-glutes)" opacity="0.35"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/></ellipse>
    </svg>`;
  },

  svgMountainClimber(){
    return `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
      <style>.bone{stroke:var(--text-primary);stroke-width:3;stroke-linecap:round;fill:none}.head{fill:none;stroke:var(--text-primary);stroke-width:2.5}
      @keyframes mcLeft{0%,100%{d:path("M110,58 L80,75 L60,100")}50%{d:path("M110,58 L95,50 L85,58")}}
      @keyframes mcRight{0%,100%{d:path("M110,58 L130,50 L140,58")}50%{d:path("M110,58 L130,75 L150,100")}}
      .mc-l{animation:mcLeft 1s ease-in-out infinite}.mc-r{animation:mcRight 1s ease-in-out infinite}</style>
      <circle class="head" cx="55" cy="40" r="8"/>
      <line class="bone" x1="62" y1="44" x2="110" y2="55"/>
      <line class="bone" x1="75" y1="50" x2="70" y2="75"/><line class="bone" x1="70" y1="75" x2="65" y2="100"/>
      <polyline class="bone mc-l" points="110,58 80,75 60,100"/>
      <polyline class="bone mc-r" points="110,58 130,50 140,58"/>
      <ellipse cx="95" cy="52" rx="12" ry="5" fill="var(--muscle-abs)" opacity="0.35"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="1s" repeatCount="indefinite"/></ellipse>
    </svg>`;
  },

  get(animationId, muscleGroup){
    if(this[animationId]) return this[animationId](muscleGroup);
    return this.svgStandingCurl(muscleGroup);
  }
};

// --- DB INITIALIZATION ---
async function initDB(){
  // Always update built-in exercises (preserves custom ones)
  for(const ex of EXERCISES){
    const existing = await DB.get('exercises',ex.id);
    if(!existing || !existing.isCustom){
      await DB.put('exercises',{...ex,isCustom:false});
    }
  }
}

// --- EXTERNAL EXERCISES MODULE ---
const ExternalExercises = {
  _cache: null,
  _CACHE_KEY: 'ironlog_ext_exercises',
  _TTL: 7 * 24 * 60 * 60 * 1000, // 7 days

  _muscleMap: {
    'abdominals': 'Abs', 'abductors': 'Glutes', 'adductors': 'Quads',
    'biceps': 'Biceps', 'calves': 'Calves', 'chest': 'Chest',
    'forearms': 'Biceps', 'glutes': 'Glutes', 'hamstrings': 'Hamstrings',
    'lats': 'Back', 'lower back': 'Back', 'middle back': 'Back',
    'neck': 'Traps', 'quadriceps': 'Quads', 'shoulders': 'Shoulders',
    'traps': 'Traps', 'triceps': 'Triceps',
  },

  _equipMap: {
    'body only': 'Bodyweight', 'dumbbell': 'Dumbbell', 'barbell': 'Barbell',
    'cable': 'Cable', 'machine': 'Machine', 'kettlebells': 'Kettlebell',
    'bands': 'Bands', 'exercise ball': 'Exercise Ball', 'medicine ball': 'Medicine Ball',
    'e-z curl bar': 'EZ Bar', 'foam roll': 'Foam Roll', 'other': 'Other', 'null': 'Other',
  },

  fetchAll() {
    if (this._cache) return this._cache;
    if (window.__EXERCISE_DB__ && window.__EXERCISE_DB__.length) {
      this._cache = window.__EXERCISE_DB__;
      return this._cache;
    }
    console.error('Exercise database not loaded. Make sure exercises-data.js is included.');
    return [];
  },

  mapToInternal(ext) {
    const primaryMuscle = (ext.primaryMuscles && ext.primaryMuscles[0]) || '';
    const muscleGroup = this._muscleMap[primaryMuscle.toLowerCase()] || 'Full Body';
    const secondaryMuscles = (ext.secondaryMuscles || []).map(m => this._muscleMap[m.toLowerCase()] || m).filter((v, i, a) => a.indexOf(v) === i && v !== muscleGroup);
    const equipment = this._equipMap[(ext.equipment || '').toLowerCase()] || ext.equipment || 'Other';
    const description = (ext.instructions || []).join(' ');
    const baseUrl = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';
    const images = (ext.images || []).map(img => baseUrl + img);
    return {
      id: 'ext-' + ext.id,
      name: ext.name,
      muscleGroup,
      secondaryMuscles,
      equipment,
      category: ext.category || 'strength',
      description,
      imageUrl: images[0] || '',
      images,
      tips: [],
      isCustom: true,
    };
  },

  getAllMuscleGroups() {
    return ['Abs', 'Back', 'Biceps', 'Calves', 'Chest', 'Glutes', 'Hamstrings', 'Quads', 'Shoulders', 'Traps', 'Triceps', 'Full Body'];
  },
};

// --- ROUTER ---
const Router = {
  _routes:{},
  _current:null,
  register(path,handler){this._routes[path]=handler},
  navigate(hash){
    if(!hash.startsWith('#'))hash='#'+hash;
    window.location.hash=hash;
  },
  getCurrentRoute(){
    const hash=window.location.hash||'#dashboard';
    const parts=hash.slice(1).split('/');
    const base=parts[0];
    const param=parts.slice(1).join('/');
    return {hash,base,param,parts};
  },
  async resolve(){
    const {base,param}=this.getCurrentRoute();
    this._current=base;
    const handler=this._routes[base];
    if(handler){
      await handler(param);
    } else {
      await this._routes['dashboard']();
    }
    this._updateNav();
  },
  _updateNav(){
    $$('.nav-item').forEach(el=>{
      el.classList.toggle('active',el.dataset.route===this._current);
    });
  }
};

// --- NUMBER PAD ---
const NumPad = {
  _resolve:null,
  _value:'',
  _label:'',
  _increment:5,
  open(label,currentValue,increment=5){
    return new Promise(resolve=>{
      this._resolve=resolve;
      this._value=String(currentValue||'');
      this._label=label;
      this._increment=increment;
      this._render();
    });
  },
  _render(){
    const root=$('#overlay-root');
    root.innerHTML=`<div class="numpad-overlay fade-in" data-action="numpad-bg">
      <div class="numpad-sheet slide-up">
        <div style="text-align:center;font-size:13px;color:var(--text-secondary);margin-bottom:4px">${this._label}</div>
        <div class="numpad-display">${this._value||'0'}</div>
        <div class="numpad-incr">
          <button data-action="numpad-dec">-${this._increment}</button>
          <button data-action="numpad-inc">+${this._increment}</button>
        </div>
        <div class="numpad-grid">
          ${[1,2,3,4,5,6,7,8,9].map(n=>`<button class="numpad-key" data-action="numpad-digit" data-val="${n}">${n}</button>`).join('')}
          <button class="numpad-key" data-action="numpad-dot">.</button>
          <button class="numpad-key" data-action="numpad-digit" data-val="0">0</button>
          <button class="numpad-key" data-action="numpad-back">&larr;</button>
        </div>
        <div style="display:flex;gap:8px;margin-top:8px">
          <button class="btn btn-ghost btn-block" data-action="numpad-cancel">Cancel</button>
          <button class="btn btn-primary btn-block" data-action="numpad-confirm">Done</button>
        </div>
      </div>
    </div>`;
    root.onclick=e=>{
      const action=e.target.closest('[data-action]')?.dataset.action;
      if(!action)return;
      if(action==='numpad-digit'){this._value+=e.target.dataset.val;this._updateDisplay()}
      else if(action==='numpad-dot'){if(!this._value.includes('.'))this._value+='.';this._updateDisplay()}
      else if(action==='numpad-back'){this._value=this._value.slice(0,-1);this._updateDisplay()}
      else if(action==='numpad-inc'){this._value=String(Math.max(0,parseFloat(this._value||0)+this._increment));this._updateDisplay()}
      else if(action==='numpad-dec'){this._value=String(Math.max(0,parseFloat(this._value||0)-this._increment));this._updateDisplay()}
      else if(action==='numpad-confirm'){this._close(parseFloat(this._value)||0)}
      else if(action==='numpad-cancel'||action==='numpad-bg'){this._close(null)}
    };
  },
  _updateDisplay(){
    const d=$('.numpad-display');if(d)d.textContent=this._value||'0';
  },
  _close(val){
    $('#overlay-root').innerHTML='';$('#overlay-root').onclick=null;
    if(this._resolve)this._resolve(val);this._resolve=null;
  }
};

// --- REST TIMER ---
const RestTimer = {
  _seconds:0,_remaining:0,_interval:null,_active:false,
  start(seconds){
    this._seconds=seconds;this._remaining=seconds;this._active=true;
    this._render();
    clearInterval(this._interval);
    this._interval=setInterval(()=>{
      this._remaining--;
      if(this._remaining<=0){this._remaining=0;this._onDone();return}
      this._updateDisplay();
    },1000);
  },
  _onDone(){
    clearInterval(this._interval);this._interval=null;
    Audio.timerDone();
    this._updateDisplay();
    setTimeout(()=>this.dismiss(),1500);
  },
  dismiss(){
    clearInterval(this._interval);this._interval=null;this._active=false;
    const el=$('.timer-overlay');if(el)el.remove();
  },
  _render(){
    let existing=$('.timer-overlay');if(existing)existing.remove();
    const el=document.createElement('div');el.className='timer-overlay fade-in';
    el.innerHTML=this._getHTML();
    document.body.appendChild(el);
    el.onclick=e=>{
      const action=e.target.closest('[data-action]')?.dataset.action;
      if(!action)return;
      if(action==='timer-skip')this.dismiss();
      else if(action==='timer-add'){this._remaining+=15;this._seconds+=15;this._updateDisplay()}
      else if(action==='timer-sub'){this._remaining=Math.max(0,this._remaining-15);this._seconds=Math.max(this._remaining,this._seconds);this._updateDisplay()}
      else if(action.startsWith('timer-preset-')){
        const s=parseInt(action.split('-')[2]);
        clearInterval(this._interval);this.start(s);
      }
    };
    this._updateDisplay();
  },
  _getHTML(){
    const presets=[30,60,90,120,180];
    return `<div class="timer-ring">
        <svg width="200" height="200"><circle class="track" cx="100" cy="100" r="90"/><circle class="progress" cx="100" cy="100" r="90" stroke-dasharray="${2*Math.PI*90}" stroke-dashoffset="0"/></svg>
        <div class="timer-time">${fmt.timer(this._remaining)}</div>
      </div>
      <div style="margin-top:16px;font-size:14px;color:var(--text-secondary)">Rest Timer</div>
      <div class="timer-controls">
        <button class="timer-preset" data-action="timer-sub">-15s</button>
        <button class="timer-preset" data-action="timer-add">+15s</button>
        <button class="timer-preset" data-action="timer-skip" style="background:var(--danger);color:#fff;border-color:var(--danger)">Skip</button>
      </div>
      <div style="display:flex;gap:8px;margin-top:16px">
        ${presets.map(p=>`<button class="timer-preset" data-action="timer-preset-${p}">${p>=60?p/60+'m':p+'s'}</button>`).join('')}
      </div>`;
  },
  _updateDisplay(){
    const el=$('.timer-overlay');if(!el)return;
    const time=el.querySelector('.timer-time');if(time)time.textContent=fmt.timer(this._remaining);
    const prog=el.querySelector('.progress');
    if(prog){
      const circ=2*Math.PI*90;
      const offset=circ*(1-this._remaining/this._seconds);
      prog.style.strokeDashoffset=offset;
      const color=this._remaining>30?'var(--accent)':this._remaining>10?'var(--warning)':'var(--danger)';
      prog.style.stroke=color;
    }
  }
};

// --- ACTIVE SESSION MANAGER ---
const Session = {
  _data:null,
  _startTime:null,
  _timerInterval:null,
  async load(){
    const saved=await DB.get('appState','activeSession');
    if(saved){this._data=saved.value;this._startTime=saved.value.startedAt}
    return this._data;
  },
  async save(){
    if(this._data)await DB.put('appState',{key:'activeSession',value:this._data});
  },
  async start(templateId){
    let exercises=[];
    if(templateId){
      const tpl=await DB.get('templates',templateId);
      if(tpl){
        for(const te of tpl.exercises){
          const ex=await DB.get('exercises',te.exerciseId);
          const prev=await this._getPrevious(te.exerciseId);
          const sets=[];
          for(let i=0;i<(te.targetSets||3);i++){
            sets.push({setNumber:i+1,weight:prev[i]?.weight||te.targetWeight||0,reps:prev[i]?.reps||te.targetReps||0,type:'normal',rpe:null,completed:false,completedAt:null});
          }
          exercises.push({exerciseId:te.exerciseId,exerciseName:ex?.name||te.exerciseId,restSeconds:te.restSeconds||Settings.get('restDefault'),sets,expanded:false});
        }
      }
    }
    this._data={id:uid(),templateId:templateId||null,name:templateId?(await DB.get('templates',templateId))?.name||'Workout':'Quick Workout',startedAt:Date.now(),exercises,notes:''};
    if(exercises.length>0)this._data.exercises[0].expanded=true;
    await this.save();
    this._startTimer();
    Router.navigate('session');
  },
  async _getPrevious(exerciseId){
    const sessions=await DB.getAll('sessions');
    const sorted=sessions.sort((a,b)=>b.startedAt-a.startedAt);
    for(const s of sorted){
      const ex=s.exercises?.find(e=>e.exerciseId===exerciseId);
      if(ex)return ex.sets||[];
    }
    return [];
  },
  async addExercise(exerciseId){
    if(!this._data)return;
    const ex=await DB.get('exercises',exerciseId);
    if(!ex)return;
    const prev=await this._getPrevious(exerciseId);
    const sets=[];
    for(let i=0;i<3;i++){
      sets.push({setNumber:i+1,weight:prev[i]?.weight||0,reps:prev[i]?.reps||0,type:'normal',rpe:null,completed:false,completedAt:null});
    }
    this._data.exercises.push({exerciseId,exerciseName:ex.name,restSeconds:Settings.get('restDefault'),sets,expanded:true});
    await this.save();
  },
  async completeSet(exIdx,setIdx){
    if(!this._data)return;
    const set=this._data.exercises[exIdx]?.sets[setIdx];
    if(!set)return;
    set.completed=!set.completed;
    set.completedAt=set.completed?Date.now():null;
    await this.save();
    if(set.completed){
      const rest=this._data.exercises[exIdx].restSeconds||Settings.get('restDefault');
      RestTimer.start(rest);
    }
  },
  addSet(exIdx){
    if(!this._data)return;
    const ex=this._data.exercises[exIdx];
    if(!ex)return;
    const lastSet=ex.sets[ex.sets.length-1];
    ex.sets.push({setNumber:ex.sets.length+1,weight:lastSet?.weight||0,reps:lastSet?.reps||0,type:'normal',rpe:null,completed:false,completedAt:null});
    this.save();
  },
  removeSet(exIdx,setIdx){
    if(!this._data)return;
    this._data.exercises[exIdx]?.sets.splice(setIdx,1);
    this._data.exercises[exIdx]?.sets.forEach((s,i)=>s.setNumber=i+1);
    this.save();
  },
  removeExercise(exIdx){
    if(!this._data)return;
    this._data.exercises.splice(exIdx,1);
    this.save();
  },
  updateSet(exIdx,setIdx,field,value){
    if(!this._data)return;
    const set=this._data.exercises[exIdx]?.sets[setIdx];
    if(set)set[field]=value;
    this.save();
  },
  toggleExpand(exIdx){
    if(!this._data)return;
    this._data.exercises.forEach((e,i)=>e.expanded=i===exIdx?!e.expanded:false);
    this.save();
  },
  cycleSetType(exIdx,setIdx){
    if(!this._data)return;
    const types=['normal','warmup','dropset','failure'];
    const set=this._data.exercises[exIdx]?.sets[setIdx];
    if(!set)return;
    const idx=types.indexOf(set.type);
    set.type=types[(idx+1)%types.length];
    this.save();
  },
  async finish(){
    if(!this._data)return null;
    clearInterval(this._timerInterval);
    const session={
      id:this._data.id,
      templateId:this._data.templateId,
      name:this._data.name,
      startedAt:this._data.startedAt,
      completedAt:Date.now(),
      duration:Date.now()-this._data.startedAt,
      exercises:this._data.exercises.map(e=>({
        exerciseId:e.exerciseId,exerciseName:e.exerciseName,
        sets:e.sets.filter(s=>s.completed).map(s=>({setNumber:s.setNumber,weight:s.weight,reps:s.reps,type:s.type,rpe:s.rpe,completedAt:s.completedAt}))
      })).filter(e=>e.sets.length>0),
      totalVolume:0,totalSets:0,totalReps:0
    };
    session.exercises.forEach(e=>{e.sets.forEach(s=>{session.totalVolume+=s.weight*s.reps;session.totalSets++;session.totalReps+=s.reps})});
    await DB.put('sessions',session);
    const newPRs=await this._checkPRs(session);
    await DB.delete('appState','activeSession');
    this._data=null;
    return {session,newPRs};
  },
  async _checkPRs(session){
    const newPRs=[];
    for(const ex of session.exercises){
      const pr=(await DB.get('personalRecords',ex.exerciseId))||{exerciseId:ex.exerciseId,maxWeight:{value:0},maxVolume:{value:0},maxReps:{value:0}};
      let updated=false;
      for(const set of ex.sets){
        if(set.weight>pr.maxWeight.value){pr.maxWeight={value:set.weight,date:session.completedAt,sessionId:session.id};updated=true;newPRs.push({exerciseName:ex.exerciseName,type:'Weight',value:set.weight})}
        if(set.reps>pr.maxReps.value){pr.maxReps={value:set.reps,date:session.completedAt,sessionId:session.id};updated=true;newPRs.push({exerciseName:ex.exerciseName,type:'Reps',value:set.reps})}
        const vol=set.weight*set.reps;
        if(vol>pr.maxVolume.value){pr.maxVolume={value:vol,date:session.completedAt,sessionId:session.id};updated=true}
      }
      if(updated)await DB.put('personalRecords',pr);
    }
    return newPRs;
  },
  _startTimer(){
    clearInterval(this._timerInterval);
    this._timerInterval=setInterval(()=>{
      const el=$('.session-timer');
      if(el&&this._data)el.textContent=fmt.duration(Date.now()-this._data.startedAt);
    },1000);
  },
  isActive(){return !!this._data},
  getData(){return this._data},
};

// --- RENDER HELPERS ---
function renderApp(content,showNav=true){
  const app=$('#app');
  app.innerHTML=`<div class="view-container">${content}</div>${showNav?renderNav():''}`;
}
function renderNav(){
  const active=Router._current;
  const sessionActive=Session.isActive();
  return `<nav class="bottom-nav">
    <button class="nav-item ${active==='dashboard'?'active':''}" data-route="dashboard" onclick="Router.navigate('dashboard')">${icons.dashboard}<span>Home</span></button>
    <button class="nav-item ${active==='library'?'active':''}" data-route="library" onclick="Router.navigate('library')">${icons.exercises}<span>Exercises</span></button>
    <button class="nav-fab" onclick="startWorkoutFlow()" title="Start Workout">${sessionActive?icons.play:icons.plus}</button>
    <button class="nav-item ${active==='templates'?'active':''}" data-route="templates" onclick="Router.navigate('templates')">${icons.clipboard}<span>Routines</span></button>
    <button class="nav-item ${active==='history'?'active':''}" data-route="history" onclick="Router.navigate('history')">${icons.history}<span>History</span></button>
  </nav>`;
}

async function startWorkoutFlow(){
  if(Session.isActive()){Router.navigate('session');return}
  const templates=await DB.getAll('templates');
  showTemplatePickerModal(templates);
}

function showTemplatePickerModal(templates){
  const root=$('#overlay-root');
  root.innerHTML=`<div class="modal-overlay fade-in">
    <div class="modal slide-up">
      <h2>Start Workout</h2>
      <button class="btn btn-primary btn-block mb-8" data-action="empty-workout">${icons.plus} Empty Workout</button>
      <button class="btn btn-secondary btn-block mb-16" data-action="new-template">${icons.edit} Create New Routine</button>
      ${templates.length?`<div class="section-label" style="padding-left:0">Your Routines</div>
      ${templates.sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0)).map(t=>`<div class="template-card" style="margin:8px 0" data-action="start-template" data-id="${t.id}">
        <h3>${t.name||'Untitled'}</h3>
        <div class="meta">${t.exercises?.length||0} exercises</div>
        <div style="margin-top:4px;display:flex;gap:4px;flex-wrap:wrap">
          ${(t.exercises||[]).slice(0,4).map(e=>`<span class="chip" style="font-size:10px;padding:2px 6px">${e.exerciseName||e.exerciseId}</span>`).join('')}
          ${(t.exercises||[]).length>4?`<span class="chip" style="font-size:10px;padding:2px 6px">+${t.exercises.length-4} more</span>`:''}
        </div>
      </div>`).join('')}`:'<div class="empty-state" style="padding:24px 0"><p>No routines yet. Create one to get started!</p></div>'}
      <button class="btn btn-ghost btn-block mt-16" data-action="close-modal">Cancel</button>
    </div>
  </div>`;
  root.onclick=async e=>{
    const action=e.target.closest('[data-action]')?.dataset;
    if(!action)return;
    if(action.action==='close-modal'){root.innerHTML='';root.onclick=null}
    else if(action.action==='empty-workout'){root.innerHTML='';root.onclick=null;viewEmptyWorkoutBuilder()}
    else if(action.action==='new-template'){root.innerHTML='';root.onclick=null;Router.navigate('templates/new')}
    else if(action.action==='start-template'){root.innerHTML='';root.onclick=null;await Session.start(action.id)}
  };
}

// --- DASHBOARD VIEW ---
async function viewDashboard(){
  const sessions=await DB.getAll('sessions');
  const prs=await DB.getAll('personalRecords');
  const unit=Settings.get('weightUnit');

  // Calculate stats
  const now=Date.now();
  const weekAgo=now-7*24*60*60*1000;
  const monthAgo=now-30*24*60*60*1000;
  const thisWeek=sessions.filter(s=>s.completedAt>weekAgo);
  const totalVolumeWeek=thisWeek.reduce((a,s)=>a+s.totalVolume,0);

  // Streak calculation
  let streak=0;
  const daySet=new Set(sessions.map(s=>new Date(s.completedAt).toDateString()));
  const d=new Date();
  while(daySet.has(d.toDateString())||daySet.has(new Date(d-86400000).toDateString())){
    if(daySet.has(d.toDateString()))streak++;
    d.setDate(d.getDate()-1);
    if(streak>365)break;
  }

  // Recent PRs
  const recentPRs=prs.filter(pr=>{
    const dates=[pr.maxWeight?.date,pr.maxVolume?.date,pr.maxReps?.date].filter(Boolean);
    return dates.some(d=>d>monthAgo);
  }).slice(0,5);

  const recent=sessions.sort((a,b)=>b.completedAt-a.completedAt).slice(0,5);

  renderApp(`
    <div style="padding:24px 16px 8px;display:flex;align-items:flex-start;justify-content:space-between">
      <div><h1 style="font-size:28px;font-weight:800">Iron Log</h1>
      <p style="color:var(--text-secondary);font-size:14px">Track. Lift. Progress.</p></div>
      <button class="btn btn-ghost btn-sm" onclick="Router.navigate('settings')" style="color:var(--text-secondary)">${icons.settings} Settings</button>
    </div>
    ${Session.isActive()?`<div class="card" style="border-color:var(--accent);cursor:pointer" onclick="Router.navigate('session')">
      <div class="flex items-center gap-8"><span style="color:var(--accent)">${icons.play}</span><div><strong>Workout in Progress</strong><div class="text-muted" style="font-size:13px">Tap to continue</div></div></div>
    </div>`:''}
    <div class="stats-grid mt-16">
      <div class="stat-card"><div class="stat-value">${thisWeek.length}</div><div class="stat-label">This Week</div></div>
      <div class="stat-card"><div class="stat-value">${fmt.volume(totalVolumeWeek,unit)}</div><div class="stat-label">Volume (${unit})</div></div>
      <div class="stat-card"><div class="stat-value">${streak}</div><div class="stat-label">Day Streak</div></div>
      <div class="stat-card"><div class="stat-value">${recentPRs.length}</div><div class="stat-label">PRs This Month</div></div>
    </div>
    ${recent.length>0?`
    <div class="section-label mt-24">Recent Workouts</div>
    ${recent.map(s=>`<div class="history-item" onclick="Router.navigate('history/${s.id}')">
      <div style="flex:1"><strong>${s.name||'Workout'}</strong><div class="history-date">${fmt.date(s.completedAt)} &middot; ${fmt.duration(s.duration)} &middot; ${s.totalSets} sets</div></div>
      <span style="color:var(--text-muted)">${icons.chevronRight}</span>
    </div>`).join('')}
    `:`<div class="empty-state mt-24">${icons.exercises}<p>No workouts yet. Start your first workout!</p>
      <button class="btn btn-primary" onclick="startWorkoutFlow()">Start Workout</button></div>`}
    ${recentPRs.length>0?`
    <div class="section-label mt-24">Recent PRs</div>
    ${recentPRs.map(pr=>{const ex=EXERCISES.find(e=>e.id===pr.exerciseId);return `<div class="card pr-glow" style="border-color:var(--accent)">
      <div class="flex items-center gap-8">${icons.trophy}<div><strong>${ex?.name||pr.exerciseId}</strong>
      <div class="text-muted" style="font-size:13px">Weight: ${pr.maxWeight?.value||0}${unit} &middot; Reps: ${pr.maxReps?.value||0}</div></div></div>
    </div>`}).join('')}
    `:''}
  `);
}

// --- EXERCISE LIBRARY VIEW ---
async function viewLibrary(param){
  if(param==='browse-external')return viewExternalBrowser();
  if(param&&param.startsWith('browse-external/'))return viewExternalExerciseList(param.slice(16));
  if(param){return viewExerciseDetail(param)}
  const exercises=await DB.getAll('exercises');
  const groups=[...new Set(exercises.map(e=>e.muscleGroup))].sort();
  const equips=[...new Set(exercises.map(e=>e.equipment))].sort();

  renderApp(`
    <div class="app-header"><h1>Exercises</h1>
      <button class="btn btn-sm btn-secondary" onclick="Router.navigate('library/browse-external')">${icons.plus} Add More</button>
    </div>
    <div class="search-bar"><input class="input" id="ex-search" placeholder="Search exercises..." autocomplete="off"/></div>
    <div class="chip-row" id="muscle-chips">
      <button class="chip active" data-group="all">All</button>
      ${groups.map(g=>`<button class="chip" data-group="${g}" style="--chip-color:${muscleColor(g)}">${g}</button>`).join('')}
    </div>
    <div class="chip-row" id="equip-chips">
      ${equips.map(eq=>`<button class="chip" data-equip="${eq}">${eq}</button>`).join('')}
    </div>
    <div id="exercise-list">
      ${exercises.map(renderExerciseCard).join('')}
    </div>
  `);

  let filterGroup='all',filterEquip=null,searchTerm='';
  function filterExercises(){
    const list=$('#exercise-list');if(!list)return;
    let filtered=exercises;
    if(filterGroup!=='all')filtered=filtered.filter(e=>e.muscleGroup===filterGroup);
    if(filterEquip)filtered=filtered.filter(e=>e.equipment===filterEquip);
    if(searchTerm)filtered=filtered.filter(e=>e.name.toLowerCase().includes(searchTerm));
    list.innerHTML=filtered.length?filtered.map(renderExerciseCard).join(''):'<div class="empty-state"><p>No exercises found</p></div>';
  }

  $('#ex-search')?.addEventListener('input',e=>{searchTerm=e.target.value.toLowerCase();filterExercises()});
  $('#muscle-chips')?.addEventListener('click',e=>{
    const chip=e.target.closest('.chip');if(!chip)return;
    $$('#muscle-chips .chip').forEach(c=>c.classList.remove('active'));chip.classList.add('active');
    filterGroup=chip.dataset.group;filterExercises();
  });
  $('#equip-chips')?.addEventListener('click',e=>{
    const chip=e.target.closest('.chip');if(!chip)return;
    const wasActive=chip.classList.contains('active');
    $$('#equip-chips .chip').forEach(c=>c.classList.remove('active'));
    if(!wasActive){chip.classList.add('active');filterEquip=chip.dataset.equip}else{filterEquip=null}
    filterExercises();
  });
}

function renderExerciseCard(ex){
  const color=muscleColor(ex.muscleGroup);
  return `<div class="exercise-img-card" onclick="Router.navigate('library/${ex.id}')">
    ${ex.imageUrl?`<img class="exercise-img" src="${ex.imageUrl}" alt="${ex.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`:''}
    <div class="exercise-icon" style="background:${color};${ex.imageUrl?'display:none':''}">${ex.name[0]}</div>
    <div style="flex:1"><h3>${ex.name}</h3><div class="sub">${ex.muscleGroup} &middot; ${ex.equipment}</div></div>
    <span style="color:var(--text-muted)">${icons.chevronRight}</span>
  </div>`;
}

// --- EXTERNAL EXERCISE BROWSER ---
async function viewExternalBrowser() {
  const groups = ExternalExercises.getAllMuscleGroups();
  renderApp(`
    <div class="app-header">
      <button class="back-btn" onclick="Router.navigate('library')">${icons.chevronLeft}</button>
      <h1>Add Exercises</h1>
    </div>
    <div style="padding:16px;color:var(--text-secondary);font-size:14px">Browse 800+ exercises from the free exercise database. Pick a muscle group to start.</div>
    <div class="ext-grid">
      ${groups.map(g => `<div class="ext-group-btn" onclick="Router.navigate('library/browse-external/${encodeURIComponent(g)}')">
        <div class="dot" style="background:${muscleColor(g)}"></div>
        <div class="label">${g}</div>
      </div>`).join('')}
    </div>
  `);
}

async function viewExternalExerciseList(muscleGroup) {
  muscleGroup = decodeURIComponent(muscleGroup);
  const selected = new Set();

  renderApp(`
    <div class="app-header">
      <button class="back-btn" onclick="Router.navigate('library/browse-external')">${icons.chevronLeft}</button>
      <h1>${muscleGroup}</h1>
    </div>
    <div class="search-bar"><input class="input" id="ext-search" placeholder="Search ${muscleGroup.toLowerCase()} exercises..." autocomplete="off"/></div>
    <div id="ext-list"><div class="ext-spinner"></div></div>
    <div class="ext-count hidden" id="ext-count-bar">
      <span id="ext-count-text">0 selected</span>
      <button class="btn btn-sm btn-primary" id="ext-add-btn">${icons.plus} Add to Library</button>
    </div>
  `);

  // Load exercises
  let allExternal, mapped;
  try {
    allExternal = await ExternalExercises.fetchAll();
    if (!allExternal || allExternal.length === 0) throw new Error('Empty exercise database');
    const existingExercises = await DB.getAll('exercises');
    const existingIds = new Set(existingExercises.map(e => e.id));
    mapped = allExternal
      .map(e => ExternalExercises.mapToInternal(e))
      .filter(e => e.muscleGroup === muscleGroup && !existingIds.has(e.id));
  } catch(err) {
    const list = $('#ext-list');
    if (list) list.innerHTML = `<div class="empty-state" style="padding:32px"><p>Failed to load exercises. Make sure exercises.json exists.</p><p class="text-muted" style="font-size:12px">${err.message}</p></div>`;
    return;
  }

  let searchTerm = '';

  function renderList() {
    const list = $('#ext-list');
    if (!list) return;
    let filtered = mapped;
    if (searchTerm) filtered = filtered.filter(e => e.name.toLowerCase().includes(searchTerm));
    list.innerHTML = filtered.length ? filtered.map(e => `<div class="ext-ex-card ${selected.has(e.id) ? 'selected' : ''}" data-id="${e.id}">
      <div class="ext-check">${selected.has(e.id) ? icons.check : ''}</div>
      <div class="ext-ex-info">
        <h4>${e.name}</h4>
        <div class="sub">${e.equipment}${e.secondaryMuscles.length ? ' &middot; ' + e.secondaryMuscles.join(', ') : ''}</div>
      </div>
    </div>`).join('') : '<div class="empty-state" style="padding:32px"><p>All ${muscleGroup} exercises already in your library!</p></div>';
  }

  function updateCount() {
    const bar = $('#ext-count-bar');
    const text = $('#ext-count-text');
    if (bar) bar.classList.toggle('hidden', selected.size === 0);
    if (text) text.textContent = `${selected.size} selected`;
  }

  renderList();

  $('#ext-search')?.addEventListener('input', e => { searchTerm = e.target.value.toLowerCase(); renderList(); });

  document.querySelector('#ext-list')?.addEventListener('click', e => {
    const card = e.target.closest('.ext-ex-card');
    if (!card) return;
    const id = card.dataset.id;
    if (selected.has(id)) selected.delete(id); else selected.add(id);
    card.classList.toggle('selected');
    card.querySelector('.ext-check').innerHTML = selected.has(id) ? icons.check : '';
    updateCount();
  });

  $('#ext-add-btn')?.addEventListener('click', async () => {
    if (selected.size === 0) return;
    const toAdd = mapped.filter(e => selected.has(e.id));
    for (const ex of toAdd) {
      await DB.put('exercises', ex);
    }
    toast(`${toAdd.length} exercise${toAdd.length > 1 ? 's' : ''} added!`);
    Router.navigate('library');
  });
}

// --- EXERCISE DETAIL VIEW ---
async function viewExerciseDetail(id){
  const ex=await DB.get('exercises',id);
  if(!ex){renderApp('<div class="empty-state"><p>Exercise not found</p></div>');return}
  const pr=await DB.get('personalRecords',id);
  const sessions=await DB.getAll('sessions');
  const history=sessions.filter(s=>s.exercises?.some(e=>e.exerciseId===id)).sort((a,b)=>b.completedAt-a.completedAt).slice(0,10);
  const unit=Settings.get('weightUnit');
  renderApp(`
    <div class="app-header">
      <button class="back-btn" onclick="Router.navigate('library')">${icons.chevronLeft}</button>
      <h1>${ex.name}</h1>
    </div>
    ${ex.images&&ex.images.length>0?`<div style="display:flex;gap:8px;padding:16px;justify-content:center;background:var(--bg-surface)">
      ${ex.images.map(img=>`<img src="${img}" alt="${ex.name}" loading="lazy" style="max-height:220px;max-width:48%;object-fit:contain;border-radius:var(--radius);background:var(--bg-surface)" onerror="this.style.display='none'"/>`).join('')}
    </div>`:ex.imageUrl?`<div style="text-align:center;padding:16px;background:var(--bg-surface)">
      <img src="${ex.imageUrl}" alt="${ex.name}" loading="lazy" style="max-height:240px;object-fit:contain;border-radius:var(--radius)" onerror="this.style.display='none'"/>
    </div>`:`<div class="exercise-svg-container">${SVGAnimations.get(ex.animationId,ex.muscleGroup)}</div>`}
    <div class="card">
      <div style="font-size:14px;color:var(--text-secondary)">${ex.description}</div>
      <div class="flex gap-8 mt-8" style="flex-wrap:wrap">
        <span class="chip" style="background:${muscleColor(ex.muscleGroup)};color:#fff;border:none">${ex.muscleGroup}</span>
        ${ex.secondaryMuscles.map(m=>`<span class="chip">${m}</span>`).join('')}
        <span class="chip">${ex.equipment}</span>
        <span class="chip">${ex.category}</span>
      </div>
    </div>
    ${ex.tips?.length?`<div class="card">
      <div style="font-weight:600;margin-bottom:8px">Tips</div>
      <ul style="padding-left:20px;color:var(--text-secondary);font-size:14px">${ex.tips.map(t=>`<li style="margin-bottom:4px">${t}</li>`).join('')}</ul>
    </div>`:''}
    ${pr?`<div class="card pr-glow" style="border-color:var(--accent)">
      <div style="font-weight:600;margin-bottom:8px">${icons.trophy} Personal Records</div>
      <div class="stats-grid" style="padding:0">
        <div class="stat-card"><div class="stat-value">${pr.maxWeight?.value||0}<small>${unit}</small></div><div class="stat-label">Best Weight</div></div>
        <div class="stat-card"><div class="stat-value">${pr.maxReps?.value||0}</div><div class="stat-label">Best Reps</div></div>
      </div>
    </div>`:''}
    ${history.length?`<div class="section-label">History</div>
    ${history.map(s=>{const exData=s.exercises.find(e=>e.exerciseId===id);
      return `<div class="card"><div class="flex items-center" style="justify-content:space-between"><strong>${fmt.date(s.completedAt)}</strong><span class="text-muted" style="font-size:13px">${exData.sets.length} sets</span></div>
      <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">${exData.sets.map(st=>`${st.weight}${unit}x${st.reps}`).join(', ')}</div></div>`}).join('')}
    `:''}
  `);
}

// --- TEMPLATES VIEW ---
async function viewTemplates(param){
  if(param==='new')return viewTemplateEditor(null);
  if(param)return viewTemplateEditor(param);

  const templates=await DB.getAll('templates');
  renderApp(`
    <div class="app-header"><h1>Workout Templates</h1>
      <button class="btn btn-sm btn-primary" onclick="Router.navigate('templates/new')">${icons.plus} New</button>
    </div>
    ${templates.length?templates.sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0)).map(t=>`
      <div class="template-card" style="cursor:default">
        <div class="flex items-center" style="justify-content:space-between">
          <h3>${t.name||'Untitled'}</h3>
        </div>
        <div class="meta mt-8">${t.exercises?.length||0} exercises${t.updatedAt?` &middot; Updated ${fmt.dateShort(t.updatedAt)}`:''}</div>
        <div style="margin-top:8px;display:flex;gap:4px;flex-wrap:wrap">
          ${(t.exercises||[]).map(e=>`<span class="chip" style="font-size:11px;padding:3px 8px">${e.exerciseName||e.exerciseId}</span>`).join('')}
        </div>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="btn btn-sm btn-primary flex-1" onclick="event.stopPropagation();Session.start('${t.id}')">${icons.play} Start</button>
          <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();Router.navigate('templates/${t.id}')">${icons.edit} Edit</button>
        </div>
      </div>
    `).join(''):'<div class="empty-state mt-24"><p>No routines yet. Create your first workout routine!</p><button class="btn btn-primary" onclick="Router.navigate(\'templates/new\')">Create Routine</button></div>'}
  `);
}

// --- SPLIT EDITOR COMPONENT ---
function SplitEditor({ exercises, allExercises, title, nameValue, showNameInput, onSave, onCancel, onDelete }) {
  const groups = ['All', ...new Set(allExercises.map(e => e.muscleGroup))].sort((a, b) => a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b));
  let filterGroup = 'All', searchTerm = '';
  let dragFromIdx = null, touchDragIdx = null, ghostEl = null;

  function render() {
    // Preserve field values before re-render
    const nameInput = $('#split-name');
    if (nameInput) nameValue = nameInput.value;
    $$('.routine-ex-item').forEach(item => {
      const idx = parseInt(item.dataset.idx);
      if (isNaN(idx) || !exercises[idx]) return;
      const setsInput = item.querySelector('[data-field="targetSets"]');
      const repsInput = item.querySelector('[data-field="targetReps"]');
      const restInput = item.querySelector('[data-field="restSeconds"]');
      if (setsInput) exercises[idx].targetSets = parseInt(setsInput.value) || 3;
      if (repsInput) exercises[idx].targetReps = parseInt(repsInput.value) || 10;
      if (restInput) exercises[idx].restSeconds = parseInt(restInput.value) || 90;
    });

    const app = $('#app');
    const filteredExercises = getFilteredExercises();

    app.innerHTML = `
      <div class="app-header">
        <button class="back-btn" id="split-back">${icons.chevronLeft}</button>
        <h1>${title}</h1>
        <button class="btn btn-sm btn-primary" id="split-save">Save</button>
      </div>
      <div class="split-editor">
        <div class="split-left">
          <div class="split-left-header">
            <input class="input" id="split-search" placeholder="Search exercises..." autocomplete="off" style="background-image:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%236a6a80' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E&quot;);background-repeat:no-repeat;background-position:10px center"/>
            <div class="split-chip-row" id="split-chips">
              ${groups.map(g => `<button class="chip ${g === filterGroup ? 'active' : ''}" data-group="${g}">${g}</button>`).join('')}
            </div>
          </div>
          <div class="split-left-list" id="split-left-list">
            ${filteredExercises.map(ex => renderLeftCard(ex)).join('')}
          </div>
        </div>
        <div class="split-right">
          ${showNameInput ? `<div class="split-right-header"><input class="input" id="split-name" placeholder="Routine name (e.g. Push Day)" value="${nameValue || ''}"/></div>` : ''}
          <div class="split-right-list" id="split-right-list">
            ${exercises.length ? exercises.map((te, i) => renderDropZone(i) + renderRightItem(te, i)).join('') + renderDropZone(exercises.length) :
            `<div class="split-empty">${icons.plus}<span>Add exercises from the left panel</span><span style="font-size:12px;color:var(--text-muted)">Click + or drag exercises here</span></div>`}
          </div>
          ${onDelete ? `<div style="padding:12px 16px"><button class="btn btn-danger btn-block btn-sm" id="split-delete">${icons.trash} Delete</button></div>` : ''}
        </div>
      </div>
      ${renderNav()}
    `;

    attachListeners();
  }

  function getFilteredExercises() {
    let list = allExercises;
    if (filterGroup !== 'All') list = list.filter(e => e.muscleGroup === filterGroup);
    if (searchTerm) list = list.filter(e => e.name.toLowerCase().includes(searchTerm));
    return list;
  }

  function renderLeftCard(ex) {
    return `<div class="split-ex-card" draggable="true" data-exid="${ex.id}" data-name="${ex.name}">
      <div class="exercise-icon" style="background:${muscleColor(ex.muscleGroup)}">${ex.name[0]}</div>
      <div style="flex:1;min-width:0"><div class="ex-name">${ex.name}</div><div class="ex-sub">${ex.muscleGroup} &middot; ${ex.equipment}</div></div>
      <button class="add-btn" data-action="add-ex" data-exid="${ex.id}" title="Add">${icons.plus}</button>
    </div>`;
  }

  function renderRightItem(te, i) {
    const ex = allExercises.find(e => e.id === te.exerciseId);
    return `<div class="routine-ex-item" data-idx="${i}" draggable="true">
      <div class="ex-header">
        <div class="drag-handle">${icons.grip}</div>
        <span class="ex-name">${te.exerciseName || ex?.name || te.exerciseId}</span>
        <button class="del-btn" data-action="remove-ex" data-idx="${i}">${icons.trash}</button>
      </div>
      <div class="ex-fields">
        <div class="field-group"><label>Sets</label><input data-field="targetSets" value="${te.targetSets || 3}" type="number" min="1" max="20"/></div>
        <div class="field-group"><label>Reps</label><input data-field="targetReps" value="${te.targetReps || 10}" type="number" min="1" max="100"/></div>
        <div class="field-group"><label>Rest</label><input data-field="restSeconds" value="${te.restSeconds || 90}" type="number" min="0" max="600" style="width:56px"/></div>
        <span class="text-muted" style="font-size:11px;margin-left:2px">sec</span>
      </div>
    </div>`;
  }

  function renderDropZone(i) {
    return `<div class="drop-zone" data-dropidx="${i}"></div>`;
  }

  function addExercise(exId) {
    const ex = allExercises.find(e => e.id === exId);
    if (!ex) return;
    exercises.push({ exerciseId: ex.id, exerciseName: ex.name, orderIndex: exercises.length, targetSets: 3, targetReps: 10, targetWeight: 0, restSeconds: 90 });
    render();
    // Scroll to bottom of right panel
    const rightList = $('#split-right-list');
    if (rightList) rightList.scrollTop = rightList.scrollHeight;
  }

  function removeExercise(idx) {
    exercises.splice(idx, 1);
    render();
  }

  function moveExercise(fromIdx, toIdx) {
    if (fromIdx === toIdx || fromIdx === toIdx - 1) return;
    const item = exercises.splice(fromIdx, 1)[0];
    const insertAt = toIdx > fromIdx ? toIdx - 1 : toIdx;
    exercises.splice(insertAt, 0, item);
    render();
  }

  function attachListeners() {
    // Back button
    $('#split-back')?.addEventListener('click', () => onCancel());

    // Save button
    $('#split-save')?.addEventListener('click', () => {
      const nameInput = $('#split-name');
      if (nameInput) nameValue = nameInput.value;
      // Collect field values
      $$('.routine-ex-item').forEach(item => {
        const idx = parseInt(item.dataset.idx);
        if (isNaN(idx) || !exercises[idx]) return;
        const setsInput = item.querySelector('[data-field="targetSets"]');
        const repsInput = item.querySelector('[data-field="targetReps"]');
        const restInput = item.querySelector('[data-field="restSeconds"]');
        if (setsInput) exercises[idx].targetSets = parseInt(setsInput.value) || 3;
        if (repsInput) exercises[idx].targetReps = parseInt(repsInput.value) || 10;
        if (restInput) exercises[idx].restSeconds = parseInt(restInput.value) || 90;
      });
      onSave(nameValue, exercises);
    });

    // Delete button
    $('#split-delete')?.addEventListener('click', () => { if (onDelete) onDelete(); });

    // Search
    $('#split-search')?.addEventListener('input', e => {
      searchTerm = e.target.value.toLowerCase();
      const list = $('#split-left-list');
      if (list) list.innerHTML = getFilteredExercises().map(ex => renderLeftCard(ex)).join('');
      attachLeftDrag();
      attachAddButtons();
    });

    // Chips
    $('#split-chips')?.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      $$('#split-chips .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filterGroup = chip.dataset.group;
      const list = $('#split-left-list');
      if (list) list.innerHTML = getFilteredExercises().map(ex => renderLeftCard(ex)).join('');
      attachLeftDrag();
      attachAddButtons();
    });

    attachAddButtons();
    attachLeftDrag();
    attachRightDrag();
    attachTouchReorder();
  }

  function attachAddButtons() {
    document.querySelectorAll('[data-action="add-ex"]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        addExercise(btn.dataset.exid);
      });
    });
    document.querySelectorAll('[data-action="remove-ex"]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        removeExercise(parseInt(btn.dataset.idx));
      });
    });
  }

  // --- Desktop HTML5 Drag from left to right ---
  function attachLeftDrag() {
    document.querySelectorAll('.split-ex-card[draggable]').forEach(card => {
      card.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', card.dataset.exid);
        e.dataTransfer.effectAllowed = 'copy';
        card.classList.add('dragging');
        showDropZones();
      });
      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
        hideDropZones();
      });
    });
  }

  // --- Desktop drag within right panel (reorder) ---
  function attachRightDrag() {
    document.querySelectorAll('.routine-ex-item[draggable]').forEach(item => {
      item.addEventListener('dragstart', e => {
        dragFromIdx = parseInt(item.dataset.idx);
        e.dataTransfer.setData('text/plain', '__reorder__');
        e.dataTransfer.effectAllowed = 'move';
        item.style.opacity = '0.4';
        showDropZones();
      });
      item.addEventListener('dragend', () => {
        item.style.opacity = '1';
        dragFromIdx = null;
        hideDropZones();
      });
    });

    // Drop zones
    document.querySelectorAll('.drop-zone').forEach(zone => {
      zone.addEventListener('dragover', e => { e.preventDefault(); e.dataTransfer.dropEffect = dragFromIdx !== null ? 'move' : 'copy'; zone.classList.add('over'); });
      zone.addEventListener('dragleave', () => zone.classList.remove('over'));
      zone.addEventListener('drop', e => {
        e.preventDefault();
        zone.classList.remove('over');
        const dropIdx = parseInt(zone.dataset.dropidx);
        const data = e.dataTransfer.getData('text/plain');
        if (data === '__reorder__' && dragFromIdx !== null) {
          moveExercise(dragFromIdx, dropIdx);
        } else {
          // Insert at position from left panel
          const ex = allExercises.find(ex => ex.id === data);
          if (ex) {
            exercises.splice(dropIdx, 0, { exerciseId: ex.id, exerciseName: ex.name, orderIndex: dropIdx, targetSets: 3, targetReps: 10, targetWeight: 0, restSeconds: 90 });
            render();
          }
        }
        hideDropZones();
      });
    });

    // Also allow dropping on the right list itself (for empty state)
    const rightList = $('#split-right-list');
    if (rightList) {
      rightList.addEventListener('dragover', e => e.preventDefault());
      rightList.addEventListener('drop', e => {
        const data = e.dataTransfer.getData('text/plain');
        if (data && data !== '__reorder__') {
          e.preventDefault();
          addExercise(data);
        }
      });
    }
  }

  function showDropZones() { document.querySelectorAll('.drop-zone').forEach(z => z.classList.add('active')); }
  function hideDropZones() { document.querySelectorAll('.drop-zone').forEach(z => { z.classList.remove('active'); z.classList.remove('over'); }); }

  // --- Mobile touch reorder within right panel ---
  function attachTouchReorder() {
    document.querySelectorAll('.routine-ex-item .drag-handle').forEach(handle => {
      handle.addEventListener('touchstart', onTouchStart, { passive: false });
    });
  }

  function onTouchStart(e) {
    const item = e.target.closest('.routine-ex-item');
    if (!item) return;
    touchDragIdx = parseInt(item.dataset.idx);
    const rect = item.getBoundingClientRect();
    const touch = e.touches[0];

    ghostEl = document.createElement('div');
    ghostEl.className = 'drag-ghost';
    ghostEl.textContent = exercises[touchDragIdx]?.exerciseName || '';
    ghostEl.style.left = rect.left + 'px';
    ghostEl.style.top = touch.clientY - 20 + 'px';
    document.body.appendChild(ghostEl);

    item.style.opacity = '0.3';
    showDropZones();

    const onTouchMove = (e2) => {
      e2.preventDefault();
      const t = e2.touches[0];
      if (ghostEl) { ghostEl.style.left = rect.left + 'px'; ghostEl.style.top = t.clientY - 20 + 'px'; }
      // Highlight nearest drop zone
      document.querySelectorAll('.drop-zone').forEach(zone => {
        const r = zone.getBoundingClientRect();
        const inside = t.clientY >= r.top - 20 && t.clientY <= r.bottom + 20;
        zone.classList.toggle('over', inside);
      });
    };

    const onTouchEnd = (e2) => {
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
      if (ghostEl) { ghostEl.remove(); ghostEl = null; }
      item.style.opacity = '1';

      // Find the drop zone that was hovered
      const t = e2.changedTouches[0];
      let targetIdx = null;
      document.querySelectorAll('.drop-zone').forEach(zone => {
        const r = zone.getBoundingClientRect();
        if (t.clientY >= r.top - 20 && t.clientY <= r.bottom + 20) {
          targetIdx = parseInt(zone.dataset.dropidx);
        }
      });
      hideDropZones();

      if (targetIdx !== null && touchDragIdx !== null) {
        moveExercise(touchDragIdx, targetIdx);
      }
      touchDragIdx = null;
    };

    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);
  }

  render();
  return { render, exercises };
}

// --- TEMPLATE EDITOR VIEW (uses SplitEditor) ---
async function viewTemplateEditor(id){
  let template=id?await DB.get('templates',id):null;
  const isEdit = !!template;
  if(!template){template={id:uid(),name:'',exercises:[],updatedAt:Date.now()}}
  const allExercises=await DB.getAll('exercises');

  SplitEditor({
    exercises: template.exercises,
    allExercises,
    title: isEdit ? 'Edit Routine' : 'New Routine',
    nameValue: template.name,
    showNameInput: true,
    onSave: async (name, exercises) => {
      template.name = name || 'Untitled';
      template.exercises = exercises;
      template.updatedAt = Date.now();
      await DB.put('templates', template);
      toast('Routine saved!');
      Router.navigate('templates');
    },
    onCancel: () => Router.navigate('templates'),
    onDelete: isEdit ? async () => {
      if(confirm('Delete this routine?')){await DB.delete('templates',template.id);Router.navigate('templates')}
    } : null,
  });
}

// --- EMPTY WORKOUT BUILDER (uses SplitEditor) ---
async function viewEmptyWorkoutBuilder(){
  const allExercises=await DB.getAll('exercises');
  const workoutExercises = [];

  SplitEditor({
    exercises: workoutExercises,
    allExercises,
    title: 'Build Workout',
    nameValue: '',
    showNameInput: false,
    onSave: async (name, exercises) => {
      if(exercises.length===0){toast('Add at least one exercise');return}
      // Create a temporary template and start session
      const tpl={id:uid(),name:'Quick Workout',exercises:exercises.map((e,i)=>({
        exerciseId:e.exerciseId,exerciseName:e.exerciseName,orderIndex:i,
        targetSets:e.targetSets||3,targetReps:e.targetReps||10,targetWeight:e.targetWeight||0,restSeconds:e.restSeconds||90
      })),updatedAt:Date.now()};
      await DB.put('templates',tpl);
      await Session.start(tpl.id);
    },
    onCancel: () => Router.navigate('dashboard'),
    onDelete: null,
  });
}

function showExercisePicker(exercises,onSelect){
  const root=$('#overlay-root');
  root.innerHTML=`<div class="modal-overlay fade-in"><div class="modal slide-up">
    <div class="flex items-center" style="justify-content:space-between;margin-bottom:16px">
      <h2 style="margin:0">Add Exercise</h2>
      <button class="btn btn-ghost btn-sm" data-action="close-picker">${icons.x}</button>
    </div>
    <input class="input mb-16" id="picker-search" placeholder="Search exercises..." autocomplete="off"/>
    <div id="picker-list" style="max-height:50vh;overflow-y:auto">
      ${exercises.map(ex=>`<div class="exercise-card" data-action="pick-ex" data-id="${ex.id}">
        <div class="exercise-icon" style="background:${muscleColor(ex.muscleGroup)}">${ex.name[0]}</div>
        <div><h3>${ex.name}</h3><div class="sub">${ex.muscleGroup} &middot; ${ex.equipment}</div></div>
      </div>`).join('')}
    </div>
  </div></div>`;

  root.onclick=e=>{
    const el=e.target.closest('[data-action]');if(!el)return;
    if(el.dataset.action==='close-picker'){root.innerHTML='';root.onclick=null}
    else if(el.dataset.action==='pick-ex'){
      const ex=exercises.find(x=>x.id===el.dataset.id);
      if(ex){root.innerHTML='';root.onclick=null;onSelect(ex)}
    }
  };
  $('#picker-search')?.addEventListener('input',e=>{
    const q=e.target.value.toLowerCase();
    const list=$('#picker-list');if(!list)return;
    const filtered=exercises.filter(ex=>ex.name.toLowerCase().includes(q));
    list.innerHTML=filtered.map(ex=>`<div class="exercise-card" data-action="pick-ex" data-id="${ex.id}">
      <div class="exercise-icon" style="background:${muscleColor(ex.muscleGroup)}">${ex.name[0]}</div>
      <div><h3>${ex.name}</h3><div class="sub">${ex.muscleGroup} &middot; ${ex.equipment}</div></div>
    </div>`).join('');
  });
}

// --- ACTIVE WORKOUT SESSION VIEW ---
async function viewSession(param){
  if(param&&param.startsWith('start/')){
    const tplId=param.slice(6);
    await Session.start(tplId);return;
  }
  const data=Session.getData();
  if(!data){
    await Session.load();
    if(!Session.isActive()){
      renderApp(`<div class="empty-state" style="height:60vh"><p>No active workout</p>
        <button class="btn btn-primary" onclick="startWorkoutFlow()">Start Workout</button></div>`);
      return;
    }
  }
  Session._startTimer();
  renderSession();
}

let _activeExIdx = 0;

async function renderSession(){
  const data=Session.getData();
  if(!data)return;
  const unit=Settings.get('weightUnit');
  const elapsed=fmt.duration(Date.now()-data.startedAt);

  // Clamp active index
  if(_activeExIdx>=data.exercises.length)_activeExIdx=Math.max(0,data.exercises.length-1);

  const activeEx=data.exercises[_activeExIdx];
  let exInfo=activeEx?EXERCISES.find(e=>e.id===activeEx.exerciseId):null;
  if(!exInfo&&activeEx){exInfo=await DB.get('exercises',activeEx.exerciseId)||null;}

  const app=$('#app');
  app.innerHTML=`
    <div class="session-header">
      <div style="flex:1"><strong>${data.name||'Workout'}</strong><div class="session-timer text-muted" style="font-size:13px;font-family:var(--font-mono)">${elapsed}</div></div>
      <button class="btn btn-sm btn-danger" id="cancel-session-btn">Cancel</button>
      <button class="btn btn-sm btn-primary finish-btn" id="finish-session-btn">Finish</button>
    </div>
    <div class="session-content">
      <div class="session-ex-tabs">
        ${data.exercises.map((ex,ei)=>{
          const done=ex.sets.every(s=>s.completed);
          const partial=ex.sets.some(s=>s.completed);
          return `<button class="session-ex-tab ${ei===_activeExIdx?'active':''} ${done?'has-completed':partial?'has-partial':''}" data-action="switch-tab" data-idx="${ei}">
            <span>${ex.exerciseName}</span>
            ${done?`<span class="tab-dot" style="display:block;background:var(--success)"></span>`:partial?`<span class="tab-dot" style="display:block;background:var(--warning)"></span>`:''}
          </button>`;
        }).join('')}
        <button class="session-ex-tab" data-action="session-add-ex-tab" style="color:var(--accent)">+ Add</button>
      </div>
      ${activeEx?`<div class="session-ex-view">
        <div class="session-media">
          ${exInfo&&exInfo.images&&exInfo.images.length>0?`<div style="display:flex;gap:8px;justify-content:center">
            ${exInfo.images.map(img=>`<img src="${img}" alt="${activeEx.exerciseName}" loading="lazy" onerror="this.style.display='none'"/>`).join('')}
          </div>`:exInfo&&exInfo.imageUrl?`<img src="${exInfo.imageUrl}" alt="${activeEx.exerciseName}" loading="lazy" onerror="this.style.display='none'"/>`:
          `<div class="exercise-svg-container" style="margin:0">${SVGAnimations.get(exInfo?.animationId,exInfo?.muscleGroup)}</div>`}
          <div class="ex-desc">${exInfo?.description||''}</div>
          ${exInfo?.tips?.length?`<ul class="ex-tips">${exInfo.tips.map(t=>`<li>${t}</li>`).join('')}</ul>`:''}
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">
            <span class="chip" style="font-size:11px;padding:3px 8px;background:${muscleColor(exInfo?.muscleGroup||'Full Body')};color:#fff;border:none">${exInfo?.muscleGroup||''}</span>
            ${(exInfo?.secondaryMuscles||[]).map(m=>`<span class="chip" style="font-size:11px;padding:3px 8px">${m}</span>`).join('')}
          </div>
        </div>
        <div class="session-sets-panel">
          <div class="flex items-center" style="justify-content:space-between;margin-bottom:12px">
            <h3 style="font-size:16px;font-weight:700">${activeEx.exerciseName}</h3>
            <button class="btn btn-ghost btn-sm" data-action="remove-ex" data-idx="${_activeExIdx}" style="color:var(--danger);padding:4px">${icons.trash}</button>
          </div>
          <table class="set-table">
            <thead><tr><th>SET</th><th>PREV</th><th>${unit.toUpperCase()}</th><th>REPS</th><th></th></tr></thead>
            <tbody>
              ${activeEx.sets.map((set,si)=>{
                const typeLabel=set.type==='warmup'?'W':set.type==='dropset'?'D':set.type==='failure'?'F':'';
                return `<tr class="set-row ${set.completed?'completed':''}">
                  <td>${typeLabel?`<span class="set-type-badge" data-action="cycle-type" data-ei="${_activeExIdx}" data-si="${si}" style="cursor:pointer">${typeLabel}</span>`:`<span class="set-num" data-action="cycle-type" data-ei="${_activeExIdx}" data-si="${si}" style="cursor:pointer">${set.setNumber}</span>`}</td>
                  <td class="prev-col">-</td>
                  <td><input class="set-input" value="${set.weight||''}" placeholder="0" data-action="edit-weight" data-ei="${_activeExIdx}" data-si="${si}" readonly/></td>
                  <td><input class="set-input" value="${set.reps||''}" placeholder="0" data-action="edit-reps" data-ei="${_activeExIdx}" data-si="${si}" readonly/></td>
                  <td><button class="set-check ${set.completed?'done':''}" data-action="complete-set" data-ei="${_activeExIdx}" data-si="${si}">${set.completed?icons.check:''}</button></td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
          <div class="flex gap-8 mt-8">
            <button class="btn btn-ghost btn-sm btn-block" data-action="add-set" data-idx="${_activeExIdx}">${icons.plus} Add Set</button>
          </div>
        </div>
      </div>`:
      `<div class="empty-state" style="flex:1"><p>No exercises added yet</p>
        <button class="btn btn-primary" id="session-add-ex">${icons.plus} Add Exercise</button>
      </div>`}
    </div>
    ${renderNav()}
  `;

  // Load previous data for the active exercise
  loadPreviousData(data,unit);

  // Attach event listeners
  attachSessionListeners(data,unit);
}

async function loadPreviousData(data,unit){
  for(let ei=0;ei<data.exercises.length;ei++){
    const prev=await Session._getPrevious(data.exercises[ei].exerciseId);
    const rows=$$(`[data-ei="${ei}"] .prev-col`);
    rows.forEach((td,si)=>{
      if(prev[si]){td.textContent=`${prev[si].weight}x${prev[si].reps}`}
    });
  }
}

function attachSessionListeners(data,unit){
  document.querySelectorAll('[data-action]').forEach(el=>{
    const action=el.dataset.action;
    if(action==='switch-tab'){
      el.addEventListener('click',()=>{_activeExIdx=parseInt(el.dataset.idx);renderSession()});
    }
    else if(action==='session-add-ex-tab'){
      el.addEventListener('click',async()=>{
        const allEx=await DB.getAll('exercises');
        showExercisePicker(allEx,async ex=>{
          await Session.addExercise(ex.id);
          _activeExIdx=data.exercises.length;
          renderSession();
        });
      });
    }
    else if(action==='remove-ex'){
      el.addEventListener('click',()=>{
        if(confirm('Remove this exercise?')){
          Session.removeExercise(parseInt(el.dataset.idx));
          if(_activeExIdx>=data.exercises.length-1)_activeExIdx=Math.max(0,_activeExIdx-1);
          renderSession();
        }
      });
    }
    else if(action==='add-set'){
      el.addEventListener('click',()=>{Session.addSet(parseInt(el.dataset.idx));renderSession()});
    }
    else if(action==='complete-set'){
      el.addEventListener('click',async()=>{
        const ei=parseInt(el.dataset.ei),si=parseInt(el.dataset.si);
        await Session.completeSet(ei,si);renderSession();
      });
    }
    else if(action==='edit-weight'){
      el.addEventListener('click',async()=>{
        const ei=parseInt(el.dataset.ei),si=parseInt(el.dataset.si);
        const val=await NumPad.open(`Weight (${unit})`,data.exercises[ei]?.sets[si]?.weight||0,5);
        if(val!==null){Session.updateSet(ei,si,'weight',val);renderSession()}
      });
    }
    else if(action==='edit-reps'){
      el.addEventListener('click',async()=>{
        const ei=parseInt(el.dataset.ei),si=parseInt(el.dataset.si);
        const val=await NumPad.open('Reps',data.exercises[ei]?.sets[si]?.reps||0,1);
        if(val!==null){Session.updateSet(ei,si,'reps',val);renderSession()}
      });
    }
    else if(action==='cycle-type'){
      el.addEventListener('click',(e)=>{
        e.stopPropagation();
        Session.cycleSetType(parseInt(el.dataset.ei),parseInt(el.dataset.si));renderSession();
      });
    }
  });

  $('#session-add-ex')?.addEventListener('click',async()=>{
    const allEx=await DB.getAll('exercises');
    showExercisePicker(allEx,async ex=>{
      await Session.addExercise(ex.id);
      _activeExIdx=data.exercises.length;
      renderSession();
    });
  });

  $('#finish-session-btn')?.addEventListener('click',async()=>{
    if(!confirm('Finish workout?'))return;
    const result=await Session.finish();
    if(result){
      if(result.newPRs.length>0){confetti();toast(`New PRs: ${result.newPRs.map(p=>`${p.exerciseName} ${p.type}`).join(', ')}!`)}
      else{toast('Workout saved!')}
      _activeExIdx=0;
      Router.navigate('history/'+result.session.id);
    }
  });

  $('#cancel-session-btn')?.addEventListener('click',async()=>{
    if(!confirm('Cancel workout? All progress will be lost.'))return;
    await DB.delete('appState','activeSession');
    Session._data=null;clearInterval(Session._timerInterval);
    _activeExIdx=0;
    Router.navigate('dashboard');
  });
}

// --- HISTORY VIEW ---
async function viewHistory(param){
  if(param)return viewHistoryDetail(param);
  const sessions=await DB.getAll('sessions');
  const sorted=sessions.sort((a,b)=>b.completedAt-a.completedAt);
  const unit=Settings.get('weightUnit');

  // Calendar data
  const now=new Date();
  const year=now.getFullYear(),month=now.getMonth();
  const firstDay=new Date(year,month,1).getDay();
  const daysInMonth=new Date(year,month+1,0).getDate();
  const workoutDays=new Set(sessions.filter(s=>{const d=new Date(s.completedAt);return d.getMonth()===month&&d.getFullYear()===year}).map(s=>new Date(s.completedAt).getDate()));
  const today=now.getDate();

  const monthName=now.toLocaleDateString('en-US',{month:'long',year:'numeric'});

  renderApp(`
    <div class="app-header"><h1>History</h1></div>
    <div class="card">
      <div class="text-center mb-8"><strong>${monthName}</strong></div>
      <div class="calendar-grid">
        ${['S','M','T','W','T','F','S'].map(d=>`<div class="day-header">${d}</div>`).join('')}
        ${Array(firstDay).fill('<div class="day empty"></div>').join('')}
        ${Array.from({length:daysInMonth},(_,i)=>{
          const d=i+1;
          const cls=['day'];
          if(workoutDays.has(d))cls.push('has-workout');
          if(d===today)cls.push('today');
          return `<div class="${cls.join(' ')}">${d}</div>`;
        }).join('')}
      </div>
    </div>
    <div class="section-label">All Workouts (${sorted.length})</div>
    ${sorted.length?sorted.map(s=>`
      <div class="history-item" onclick="Router.navigate('history/${s.id}')">
        <div style="flex:1">
          <strong>${s.name||'Workout'}</strong>
          <div class="history-date">${fmt.dateFull(s.completedAt)}</div>
          <div style="font-size:13px;color:var(--text-secondary)">${s.totalSets} sets &middot; ${fmt.volume(s.totalVolume,unit)} ${unit} &middot; ${fmt.duration(s.duration)}</div>
        </div>
        <span style="color:var(--text-muted)">${icons.chevronRight}</span>
      </div>
    `).join(''):'<div class="empty-state"><p>No workouts logged yet</p></div>'}
  `);
}

// --- HISTORY DETAIL VIEW ---
async function viewHistoryDetail(id){
  const session=await DB.get('sessions',id);
  if(!session){renderApp('<div class="empty-state"><p>Workout not found</p></div>');return}
  const unit=Settings.get('weightUnit');

  renderApp(`
    <div class="app-header">
      <button class="back-btn" onclick="Router.navigate('history')">${icons.chevronLeft}</button>
      <h1>${session.name||'Workout'}</h1>
    </div>
    <div class="card">
      <div class="flex items-center gap-8" style="margin-bottom:8px">
        <span style="color:var(--text-secondary)">${fmt.dateFull(session.completedAt)}</span>
      </div>
      <div class="stats-grid" style="padding:0">
        <div class="stat-card"><div class="stat-value">${fmt.duration(session.duration)}</div><div class="stat-label">Duration</div></div>
        <div class="stat-card"><div class="stat-value">${fmt.volume(session.totalVolume,unit)}</div><div class="stat-label">Volume (${unit})</div></div>
        <div class="stat-card"><div class="stat-value">${session.totalSets}</div><div class="stat-label">Sets</div></div>
        <div class="stat-card"><div class="stat-value">${session.totalReps}</div><div class="stat-label">Reps</div></div>
      </div>
    </div>
    ${session.exercises.map(ex=>{
      const exInfo=EXERCISES.find(e=>e.id===ex.exerciseId);
      const color=exInfo?muscleColor(exInfo.muscleGroup):'var(--accent)';
      return `<div class="card">
        <div class="flex items-center gap-8 mb-8">
          <div class="exercise-icon" style="background:${color};width:32px;height:32px;font-size:14px">${(ex.exerciseName||'E')[0]}</div>
          <strong>${ex.exerciseName}</strong>
        </div>
        <table class="set-table">
          <thead><tr><th>SET</th><th>${unit.toUpperCase()}</th><th>REPS</th></tr></thead>
          <tbody>${ex.sets.map(s=>`<tr><td class="set-num">${s.setNumber}</td><td class="mono">${s.weight}</td><td class="mono">${s.reps}</td></tr>`).join('')}</tbody>
        </table>
      </div>`;
    }).join('')}
    <div style="padding:16px;display:flex;gap:8px">
      <button class="btn btn-secondary btn-block" onclick="repeatWorkout('${session.id}')">${icons.copy} Repeat</button>
      <button class="btn btn-danger btn-block" onclick="deleteWorkout('${session.id}')">${icons.trash} Delete</button>
    </div>
  `);
}

async function repeatWorkout(sessionId){
  const session=await DB.get('sessions',sessionId);
  if(!session)return;
  // Create a new template-like start from this session
  const tpl={id:uid(),name:session.name+' (repeat)',exercises:session.exercises.map((e,i)=>({
    exerciseId:e.exerciseId,exerciseName:e.exerciseName,orderIndex:i,
    targetSets:e.sets.length,targetReps:e.sets[0]?.reps||10,targetWeight:e.sets[0]?.weight||0,restSeconds:90
  })),updatedAt:Date.now()};
  await DB.put('templates',tpl);
  await Session.start(tpl.id);
}

async function deleteWorkout(sessionId){
  if(!confirm('Delete this workout?'))return;
  await DB.delete('sessions',sessionId);
  toast('Workout deleted');
  Router.navigate('history');
}

// --- SETTINGS VIEW ---
async function viewSettings(){
  const s=Settings.getAll();
  const sessions=await DB.getAll('sessions');
  const templates=await DB.getAll('templates');

  renderApp(`
    <div class="app-header"><h1>Settings</h1></div>
    <div class="section-label">Appearance</div>
    <div class="settings-row">
      <div><label>Dark Mode</label><div class="sub">Toggle dark/light theme</div></div>
      <button class="toggle ${s.theme==='dark'?'on':''}" id="theme-toggle"></button>
    </div>

    <div class="section-label">Units</div>
    <div class="settings-row">
      <div><label>Weight Unit</label><div class="sub">Currently: ${s.weightUnit}</div></div>
      <button class="btn btn-sm btn-secondary" id="unit-toggle">${s.weightUnit==='lbs'?'Switch to kg':'Switch to lbs'}</button>
    </div>

    <div class="section-label">Timer</div>
    <div class="settings-row">
      <div><label>Default Rest Time</label><div class="sub">${s.restDefault} seconds</div></div>
      <div class="flex gap-8">
        <button class="btn btn-sm btn-ghost" id="rest-dec">-15</button>
        <span class="mono" style="min-width:40px;text-align:center">${s.restDefault}s</span>
        <button class="btn btn-sm btn-ghost" id="rest-inc">+15</button>
      </div>
    </div>

    <div class="settings-row">
      <div><label>Sound Effects</label><div class="sub">Timer beep sounds</div></div>
      <button class="toggle ${s.soundEnabled?'on':''}" id="sound-toggle"></button>
    </div>

    <div class="section-label">Data</div>
    <div class="settings-row" style="flex-direction:column;align-items:stretch;gap:8px">
      <div style="font-size:13px;color:var(--text-secondary)">${sessions.length} workouts, ${templates.length} templates</div>
      <div class="flex gap-8">
        <button class="btn btn-sm btn-secondary flex-1" id="export-btn">${icons.download} Export</button>
        <button class="btn btn-sm btn-secondary flex-1" id="import-btn">${icons.upload} Import</button>
      </div>
      <button class="btn btn-sm btn-danger" id="clear-btn">${icons.trash} Clear All Data</button>
    </div>

    <div class="section-label">About</div>
    <div class="card">
      <div style="text-align:center">
        <div style="font-size:24px;font-weight:800;color:var(--accent)">Iron Log</div>
        <div class="text-muted" style="font-size:13px">v1.0 &middot; Portable Weight Lifting Journal</div>
        <div class="text-muted" style="font-size:12px;margin-top:8px">No server. No signup. Your data stays on your device.</div>
      </div>
    </div>
  `);

  // Listeners
  $('#theme-toggle')?.addEventListener('click',()=>{
    const newTheme=Settings.get('theme')==='dark'?'light':'dark';
    Settings.set('theme',newTheme);applyTheme();viewSettings();
  });
  $('#unit-toggle')?.addEventListener('click',()=>{
    Settings.set('weightUnit',Settings.get('weightUnit')==='lbs'?'kg':'lbs');viewSettings();
  });
  $('#rest-dec')?.addEventListener('click',()=>{
    Settings.set('restDefault',Math.max(15,Settings.get('restDefault')-15));viewSettings();
  });
  $('#rest-inc')?.addEventListener('click',()=>{
    Settings.set('restDefault',Math.min(600,Settings.get('restDefault')+15));viewSettings();
  });
  $('#sound-toggle')?.addEventListener('click',()=>{
    Settings.set('soundEnabled',!Settings.get('soundEnabled'));viewSettings();
  });
  $('#export-btn')?.addEventListener('click',exportData);
  $('#import-btn')?.addEventListener('click',importData);
  $('#clear-btn')?.addEventListener('click',clearAllData);
}

async function exportData(){
  try{
    const data={
      version:1,
      exportedAt:Date.now(),
      exercises:await DB.getAll('exercises'),
      templates:await DB.getAll('templates'),
      sessions:await DB.getAll('sessions'),
      personalRecords:await DB.getAll('personalRecords'),
      settings:Settings.getAll()
    };
    const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;a.download=`ironlog-backup-${new Date().toISOString().slice(0,10)}.json`;
    a.click();URL.revokeObjectURL(url);
    toast('Data exported!');
  }catch(e){toast('Export failed: '+e.message)}
}

function importData(){
  const input=document.createElement('input');
  input.type='file';input.accept='.json';
  input.onchange=async e=>{
    try{
      const file=e.target.files[0];if(!file)return;
      const text=await file.text();
      const data=JSON.parse(text);
      if(!data.version){throw new Error('Invalid backup file')}
      if(!confirm(`Import ${data.sessions?.length||0} workouts, ${data.templates?.length||0} templates? This will merge with existing data.`))return;
      if(data.exercises)for(const item of data.exercises)await DB.put('exercises',item);
      if(data.templates)for(const item of data.templates)await DB.put('templates',item);
      if(data.sessions)for(const item of data.sessions)await DB.put('sessions',item);
      if(data.personalRecords)for(const item of data.personalRecords)await DB.put('personalRecords',item);
      if(data.settings){for(const[k,v]of Object.entries(data.settings))Settings.set(k,v);applyTheme()}
      toast('Data imported successfully!');
      viewSettings();
    }catch(e){toast('Import failed: '+e.message)}
  };
  input.click();
}

async function clearAllData(){
  if(!confirm('Delete ALL data? This cannot be undone!'))return;
  if(!confirm('Are you REALLY sure? All workouts, templates, and records will be permanently deleted.'))return;
  await DB.clear('sessions');
  await DB.clear('templates');
  await DB.clear('personalRecords');
  await DB.clear('appState');
  // Re-seed exercises
  await DB.clear('exercises');
  for(const ex of EXERCISES)await DB.put('exercises',{...ex,isCustom:false});
  Session._data=null;
  toast('All data cleared');
  viewSettings();
}

// --- APP INITIALIZATION ---
async function init(){
  await initDB();
  await Session.load();

  Router.register('dashboard',viewDashboard);
  Router.register('library',viewLibrary);
  Router.register('templates',viewTemplates);
  Router.register('session',viewSession);
  Router.register('history',viewHistory);
  Router.register('settings',viewSettings);

  window.addEventListener('hashchange',()=>Router.resolve());
  await Router.resolve();

  // Register service worker
  if('serviceWorker' in navigator){
    try{await navigator.serviceWorker.register('sw.js')}catch(e){}
  }
}

init();

