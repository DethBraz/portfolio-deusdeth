import { profile } from '../data'
import HeroDossier from './HeroDossier'

export default function Hero() {
  return (
    <section id="top" className="section-pad pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
            <span className="w-8 h-px bg-ink-soft" />
            Livro-caixa profissional
          </div>

          <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-[84px] leading-[0.98] tracking-[-0.015em] text-ink">
            Deusdeth
            <br />
            Braz
          </h1>

          <div className="mt-6 inline-flex items-baseline gap-2 font-mono">
            <span className="text-ink-soft text-sm">cargo:</span>
            <span className="text-lg font-bold text-seal border-b-2 border-seal/40">
              {profile.role}
            </span>
          </div>

          <p className="mt-7 text-ink-soft text-lg max-w-lg leading-[1.5]">
            Construo APIs REST sólidas com Java e Spring Boot — da modelagem do
            banco à documentação e aos testes automatizados. Regras de negócio
            fiscais entram como debitado; código funcionando sai como
            creditado.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 bg-stamp hover:bg-stamp-dark transition-colors text-paper font-mono font-bold uppercase text-sm tracking-wide px-6 h-12"
            >
              Ver projetos
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 border-2 border-ink hover:bg-ink hover:text-paper transition-colors font-mono font-bold uppercase text-sm tracking-wide px-6 h-12"
            >
              Baixar currículo
            </a>
          </div>
        </div>

        <HeroDossier />
      </div>
    </section>
  )
}
