import { skillGroups } from '../data'

const accent = {
  brand: { text: 'text-stamp', border: 'border-stamp' },
  navy: { text: 'text-seal', border: 'border-seal' },
  cyan: { text: 'text-approved', border: 'border-approved' },
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad py-28 px-6 bg-paper-dark border-y border-ink/10">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-stamp mb-3">
          Entrada 02 — Habilidades
        </p>
        <h2 className="font-display font-black text-4xl md:text-5xl text-ink mb-14 tracking-[-0.01em]">
          Ferramentas que uso no dia a dia
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const c = accent[group.color]
            return (
              <div
                key={group.title}
                className={`bg-paper border-l-4 ${c.border} border-y border-r border-ink/10 p-6 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_var(--color-ink)] transition-all`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-ink text-lg">{group.title}</h3>
                  <span className={`font-mono text-xs ${c.text}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs text-ink-soft bg-paper-darker/50 border border-ink/10 px-2.5 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
