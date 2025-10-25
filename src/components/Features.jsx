import { BookOpen, BarChart3, Shield, Zap, TrendingUp, Clock } from 'lucide-react';

const features = [
  {
    title: 'Fast trade logging',
    description: 'Log entries, exits, screenshots, and tags in seconds. Import from MT4/5 or cTrader CSV.',
    icon: BookOpen,
  },
  {
    title: 'Performance analytics',
    description: 'Win rate, expectancy, R-multiple distribution, and equity curve—broken down by pair, session, and setup.',
    icon: BarChart3,
  },
  {
    title: 'Risk management',
    description: 'Position sizing calculator and risk per trade tracking to keep your drawdowns controlled.',
    icon: Shield,
  },
  {
    title: 'Strategy tracking',
    description: 'Tag trades by strategy and instantly see which playbook prints the most R.',
    icon: TrendingUp,
  },
  {
    title: 'Session insights',
    description: 'Analyze performance by London, New York, and Asia sessions to align with your edge.',
    icon: Clock,
  },
  {
    title: 'Smart automation',
    description: 'Auto-calc fees, swap, and R; detect partials; and sync screenshots from your charting workflow.',
    icon: Zap,
  },
];

function Features() {
  return (
    <section id="features" className="relative border-t border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to journal like a pro</h2>
          <p className="mt-3 text-neutral-300">
            Designed for currency traders who care about data-driven improvements and consistent execution.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 ring-1 ring-inset ring-white/10">
                <f.icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
