import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-500" />
          <span className="text-lg font-semibold tracking-tight">FXJournal</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#" className="transition hover:text-white">Login</a>
          <a
            href="#pricing"
            className="rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 font-medium text-neutral-950 shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
          >
            Get Started
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-neutral-200 hover:bg-white/5"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6 lg:px-8">
            <a onClick={() => setOpen(false)} href="#features" className="rounded-md px-2 py-2 text-neutral-300 hover:bg-white/5">Features</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="rounded-md px-2 py-2 text-neutral-300 hover:bg-white/5">Pricing</a>
            <a onClick={() => setOpen(false)} href="#" className="rounded-md px-2 py-2 text-neutral-300 hover:bg-white/5">Login</a>
            <a
              onClick={() => setOpen(false)}
              href="#pricing"
              className="mt-1 rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-2 text-center font-medium text-neutral-950"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
