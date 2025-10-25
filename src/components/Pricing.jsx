function Check({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`h-4 w-4 ${className}`}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    highlight: false,
    features: [
      'Up to 100 trades',
      '1 strategy, 3 tags',
      'CSV import/export',
      'Basic charts',
    ],
    cta: 'Start free',
  },
  {
    name: 'Pro',
    price: '$12',
    period: 'per month',
    highlight: true,
    features: [
      'Unlimited trades',
      'Unlimited strategies & tags',
      'Advanced analytics & R-metrics',
      'Session & pair breakdowns',
      'Screenshot storage',
      'Priority support',
    ],
    cta: 'Go Pro',
  },
  {
    name: 'Elite',
    price: '$29',
    period: 'per month',
    highlight: false,
    features: [
      'Everything in Pro',
      'Team workspaces',
      'Custom dashboards',
      'API access & webhooks',
      'White-label reports',
    ],
    cta: 'Choose Elite',
  },
];

function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-white/10 py-20">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute left-1/2 top-[-10rem] h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-neutral-300">Start free. Upgrade anytime. Cancel whenever you want.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-6 transition ${
                t.highlight
                  ? 'border-emerald-400/40 bg-gradient-to-b from-emerald-500/10 to-white/5 shadow-lg shadow-emerald-500/10'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-emerald-400/40 bg-neutral-900 px-3 py-1 text-xs font-medium text-emerald-300">
                  Most Popular
                </div>
              )}
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold">{t.price}</div>
                  <div className="text-xs text-neutral-400">{t.period}</div>
                </div>
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 text-emerald-400" />
                    <span className="text-neutral-200">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium transition ${
                  t.highlight
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-neutral-950 hover:brightness-110'
                    : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {t.cta}
              </a>
              <p className="mt-3 text-center text-xs text-neutral-400">No credit card required</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <h3 className="text-lg font-semibold">Ready to build a consistent edge?</h3>
          <p className="mt-2 text-neutral-300">Start journaling in minutes. Import your last month of trades and see what’s working—instantly.</p>
          <a
            href="#"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 font-medium text-neutral-950 shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
          >
            Create your free account
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
