import { profile, languages, certifications } from '../data'

export default function About() {
  return (
    <section id="sobre" className="section-pad py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-14">
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-stamp mb-3">
            Entrada 01 — Sobre
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-ink mb-7 tracking-[-0.01em] leading-tight">
            Backend com raízes no fiscal/contábil
          </h2>
          <p className="text-ink-soft text-lg leading-[1.65]">{profile.summary}</p>

          <div className="mt-9 flex flex-wrap gap-6 font-mono text-sm">
            {languages.map((l) => (
              <div key={l.name} className="flex items-baseline gap-2">
                <span className="text-ink-soft">{l.name}</span>
                <span className="leader" />
                <span className="text-ink font-bold">{l.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 paper-card p-7">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-5">
            Certificações registradas
          </p>
          <ul className="space-y-4">
            {certifications.map((c) => (
              <li key={c} className="flex items-start gap-3 text-ink">
                <span className="mt-0.5 shrink-0 w-4 h-4 border border-approved text-approved flex items-center justify-center">
                  <svg viewBox="0 0 12 12" className="w-2.5 h-2.5">
                    <path d="M1 6l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="leading-snug">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
