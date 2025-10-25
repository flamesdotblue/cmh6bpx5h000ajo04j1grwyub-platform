import { TrendingUp } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
            <TrendingUp className="h-4 w-4 text-emerald-400" />
            <span>Forex Trade Journal</span>
          </div>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Trade smarter with a journal built for Forex
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-neutral-300">
            Capture every position, measure performance, and refine your edge. FXJournal turns your raw trade data into clear, actionable insights.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 font-medium text-neutral-950 shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
            >
              Get Started Free
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              <span>Export CSV & charts</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto w-full max-w-md rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-lg border border-white/10 bg-neutral-900 p-4">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>EUR/USD</span>
                <span>H1</span>
                <span>Risk 1R</span>
              </div>
              <div className="mt-3 h-40 w-full rounded-md bg-gradient-to-b from-neutral-800 to-neutral-900 ring-1 ring-inset ring-white/5" />
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-md border border-white/10 bg-neutral-800 p-3">
                  <div className="text-xs text-neutral-400">Win rate</div>
                  <div className="mt-1 text-lg font-semibold text-emerald-400">58%</div>
                </div>
                <div className="rounded-md border border-white/10 bg-neutral-800 p-3">
                  <div className="text-xs text-neutral-400">Avg R</div>
                  <div className="mt-1 text-lg font-semibold text-cyan-400">1.8R</div>
                </div>
                <div className="rounded-md border border-white/10 bg-neutral-800 p-3">
                  <div className="text-xs text-neutral-400">Max DD</div>
                  <div className="mt-1 text-lg font-semibold text-rose-400">-3.2R</div>
                </div>
              </div>
              <div className="mt-4 rounded-md border border-white/10 bg-neutral-800 p-3 text-sm">
                <div className="text-xs text-neutral-400">Notes</div>
                <p className="mt-1 text-neutral-200">London session breakout, strong DXY confluence. Trailed stop after 1.5R.</p>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-4 -top-4 hidden h-24 w-24 rotate-6 rounded-lg bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 blur-lg md:block" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
