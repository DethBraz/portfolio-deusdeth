import { experience, education } from '../data'

export default function Experience() {
  return (
    <section id="experiencia" className="section-pad py-28 px-6 bg-paper-dark border-y border-ink/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-stamp mb-3">
            Entrada 04 — Trajetória
          </p>
          <h2 className="font-display font-black text-4xl text-ink mb-11 tracking-[-0.01em]">
            Experiência
          </h2>

          <ol className="space-y-9">
            {experience.map((e, i) => (
              <li key={e.role} className="border-l-2 border-ink/20 pl-6 relative">
                <span className="absolute -left-[7px] top-1 w-3 h-3 bg-stamp border-2 border-paper-dark" />
                <div className="flex items-baseline gap-3 font-mono text-xs text-ink-soft mb-1.5">
                  <span>Lanç. {String(i + 1).padStart(2, '0')}</span>
                  <span>·</span>
                  <span>{e.period}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-ink">{e.role}</h3>
                <p className="text-ink-soft">
                  {e.company}
                  {e.place ? ` · ${e.place}` : ''}
                </p>
                <ul className="mt-2 space-y-1">
                  {e.bullets.map((b) => (
                    <li key={b} className="text-sm text-ink-soft leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-stamp mb-3">
            Entrada 05 — Formação
          </p>
          <h2 className="font-display font-black text-4xl text-ink mb-11 tracking-[-0.01em]">
            Educação
          </h2>

          <div className="space-y-5">
            {education.map((ed) => (
              <div key={ed.title} className="paper-card p-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-lg text-ink leading-snug">{ed.title}</h3>
                  <p className="text-ink-soft mt-1">{ed.place}</p>
                </div>
                <span className="font-mono text-xs text-ink-soft whitespace-nowrap border border-ink/20 px-2 py-1 shrink-0">
                  {ed.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
