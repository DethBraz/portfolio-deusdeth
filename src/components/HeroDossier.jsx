import { profile } from '../data'

const fields = [
  { label: 'Nome completo', value: profile.fullName },
  { label: 'Cargo', value: profile.role },
  { label: 'Localidade', value: profile.location },
  { label: 'Situação', value: profile.availability },
]

export default function HeroDossier() {
  return (
    <div className="relative mx-auto max-w-sm animate-rise" style={{ animationDelay: '0.25s' }}>
      <div
        className="relative bg-paper border-2 border-ink px-7 pt-7 pb-9 rotate-[1.5deg] shadow-[6px_6px_0_0_var(--color-ink)]"
        style={{ clipPath: 'polygon(0 0, 88% 0, 100% 8%, 100% 100%, 0 100%)' }}
      >
        <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-widest text-ink-soft mb-6">
          <span>Ficha Nº 2026·014</span>
          <span>Via&nbsp;única</span>
        </div>

        <div className="flex items-center gap-4 mb-7">
          <div className="w-16 h-16 shrink-0 rounded-full border-2 border-ink flex items-center justify-center font-display font-black text-xl">
            DB
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">Registro profissional</p>
            <p className="font-display font-bold text-lg leading-tight">{profile.name}</p>
          </div>
        </div>

        <dl className="space-y-4">
          {fields.map((f) => (
            <div key={f.label}>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                {f.label}
              </dt>
              <dd className="font-display text-base leading-snug border-b border-dotted border-ink/25 pb-1.5">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-7 font-display italic text-ink-soft text-sm">
          assinado digitalmente por {profile.name.split(' ')[0]}
        </p>
      </div>

      <div
        className="stamp animate-stamp absolute -right-5 -bottom-6 sm:-right-8 w-28 h-28 rounded-full flex items-center justify-center text-approved -rotate-[10deg]"
        style={{ animationDelay: '0.75s' }}
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
        </svg>
        <span className="font-mono font-extrabold text-[13px] leading-tight text-center">
          APTO
          <br />P/ REMOTO
        </span>
      </div>
    </div>
  )
}
