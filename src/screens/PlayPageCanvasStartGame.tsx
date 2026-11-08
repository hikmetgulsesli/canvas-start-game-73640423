// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play page - Canvas Start Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasStartGameActionId = "start-1";

export interface PlayPageCanvasStartGameProps {
  actions?: {
    "start-1"?: () => void;
  };

}

export type PlayPageCanvasStartGameActionCallbacks = NonNullable<PlayPageCanvasStartGameProps["actions"]>;

export function PlayPageCanvasStartGame({ actions }: PlayPageCanvasStartGameProps) {
  return (
    <>
      <div data-surface-id="SURF_PLAY_PAGE" data-route="/play" className="flex-1 flex flex-col min-h-screen" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE">
          {/* Header / Brand Bar */}
          <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-8 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-sm">
                C
              </div>
              <span className="text-base font-semibold text-slate-100 tracking-wide">Canvas Start Game</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Route: /play</span>
            </div>
          </header>
      
          {/* Main Content Area */}
          <main className="flex-1 max-w-5xl w-full mx-auto p-8 flex flex-col gap-6">
            {/* Status & High Score Stats Panel */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Game Status Widget */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
                <div className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-2">Game Status</div>
                <div className="text-xl font-semibold text-emerald-400 tracking-tight" data-setfarm-element-ref="E000002" role="status" aria-label="Game status" data-observable-refs="OBS_START_GAME_GAME_STARTED_MESSAGE">Game started</div>
              </div>
      
              {/* High Score Widget */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm">
                <div className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-2">High Score</div>
                <div data-value="0" className="text-2xl font-bold font-mono text-slate-100" data-setfarm-element-ref="E000003" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_HIGH_SCORE_VALUE">0</div>
              </div>
            </section>
      
            {/* Game Arena Canvas Surface */}
            <section className="flex-1 flex flex-col bg-slate-900/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden min-h-[460px]">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Simulation Viewport</span>
                </div>
                <span className="text-xs font-mono text-slate-500">60 FPS • Native Canvas</span>
              </div>
      
              {/* Declared contained surface SURF_GAME_CANVAS */}
              <div data-surface-id="SURF_GAME_CANVAS" className="flex-1 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col items-center justify-center relative p-8 shadow-inner overflow-hidden" data-setfarm-element-ref="E000004" data-observable-refs="OBS_START_GAME_CANVAS_VISIBILITY">
                {/* Background Grid Simulation */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25"></div>
      
                {/* Arena Center Motif */}
                <div className="relative z-10 flex flex-col items-center text-center max-w-md">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth="2"></circle>
                      <polygon points="10,8 16,12 10,16" fill="currentColor"></polygon>
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-200 mb-1">Interactive Simulation Canvas</h2>
                  <p className="text-sm text-slate-400">The game arena is initialized and ready for gameplay session input.</p>
                </div>
              </div>
            </section>
      
            {/* Controls Deck */}
            <footer className="flex items-center justify-center pt-2 pb-6">
              <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-semibold rounded-xl shadow-lg shadow-emerald-500/20 transition-colors duration-150 flex items-center space-x-2 text-sm tracking-wide" data-setfarm-element-ref="E000005" data-observable-refs="OBS_START_GAME_START_BUTTON_STATE" data-action-id="start-1" onClick={actions?.["start-1"]}>
                <span>Start</span>
              </button>
            </footer>
          </main>
        </div>
    </>
  );
}
