import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0E1A] text-slate-50">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-24 px-6 py-16">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[2fr,1.5fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Jose Bernard R. Fernandez
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-mono font-semibold">
              I build{' '}
              <span className="text-[#00D4FF]">scalable web &amp; mobile systems.</span>
            </h1>
            <div className="mt-4 text-lg text-slate-300">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  1800,
                  'Laravel Engineer',
                  1800,
                  'Flutter Builder',
                  1800,
                  'AI Systems Thinker',
                  1800,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="font-mono text-[#F5A623]"
              />
            </div>
            <p className="mt-6 max-w-xl text-slate-300">
              PH-based developer crafting Laravel backends, Flutter apps, and AI‑aware systems for
              real‑world problems like reservations and disaster response.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#00D4FF] px-5 py-2 text-sm font-semibold text-[#0A0E1A] hover:brightness-110 transition">
                View Projects
              </button>
              <button className="rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-[#00D4FF] transition">
                GitHub ↗
              </button>
              <button className="rounded-full border border-[#F5A623]/80 px-5 py-2 text-sm font-semibold text-[#F5A623] hover:bg-[#F5A623]/10 transition">
                Download CV
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-900/20 p-6 shadow-xl">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
              pseudo-terminal
            </p>
            <div className="mt-4 rounded-xl bg-black/70 p-4 font-mono text-xs text-slate-200">
              <p className="text-[#00D4FF]">~/josepolar $ git log --oneline</p>
              <p className="mt-2">
                <span className="text-emerald-400">b7c9e21</span> feat: court reservation system
                (Laravel + MySQL)
              </p>
              <p>
                <span className="text-emerald-400">a4f8c90</span> proto: AI disaster monitoring
                concept (PAGASA + IoT)
              </p>
              <p>
                <span className="text-emerald-400">89d1aa2</span> build: Flutter mobile client for
                REST API
              </p>
            </div>
          </div>
        </section>

        {/* Simple About placeholder so the old text is gone */}
        <section className="border-t border-slate-800 pt-10 text-slate-300">
          <h2 className="text-2xl font-mono text-[#00D4FF]">About</h2>
          <p className="mt-4 max-w-2xl">
            Full‑stack developer from the Philippines focused on Laravel, Flutter, and
            AI‑integrated systems. This section will expand into your full “Digital Craftsman”
            profile with skills, GitHub data, featured projects, and more.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App