import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projetos" className="section-pad py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-stamp mb-3">
          Entrada 03 — Projetos
        </p>
        <h2 className="font-display font-black text-4xl md:text-5xl text-ink mb-14 tracking-[-0.01em]">
          Coisas que eu construí
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`torn-top bg-paper border border-ink/15 px-8 pt-8 pb-7 flex flex-col shadow-[3px_3px_0_0_rgba(33,26,16,0.08)] hover:shadow-[6px_6px_0_0_var(--color-ink)] hover:-translate-y-1 transition-all ${
                i % 2 === 0 ? '-rotate-[0.4deg]' : 'rotate-[0.4deg]'
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink-soft border-b border-dashed border-ink/25 pb-4 mb-5">
                <span>Recibo Nº {String(i + 1).padStart(2, '0')}</span>
                <span>{p.demo ? 'Em produção' : 'Repositório'}</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-ink mb-3 leading-snug">{p.title}</h3>
              <p className="text-ink-soft leading-relaxed mb-6">{p.description}</p>

              <ul className="space-y-2.5 mb-7 flex-1">
                {p.bullets.map((b, bi) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-ink-soft leading-snug">
                    <span className="font-mono text-[11px] text-stamp shrink-0 pt-0.5">
                      {String(bi + 1).padStart(2, '0')}
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-7">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] font-bold text-seal border border-seal/40 px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono font-bold text-sm text-ink hover:text-stamp transition-colors pt-4 border-t border-dashed border-ink/25"
              >
                Ver no GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
