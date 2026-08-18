import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contato" className="section-pad py-28 px-6">
      <div className="max-w-4xl mx-auto relative bg-seal text-paper p-12 md:p-16 border-2 border-ink overflow-hidden">
        <div
          className="absolute top-8 -right-10 md:right-8 rotate-[14deg] border-2 border-paper/60 rounded-full w-24 h-24 flex items-center justify-center font-mono font-extrabold text-[11px] text-paper/70 text-center leading-tight"
          aria-hidden="true"
        >
          ABERTO
          <br />A PROPOSTAS
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/60 mb-4">
          Entrada 06 — Encerramento
        </p>
        <h2 className="font-display font-black text-4xl md:text-5xl mb-5 tracking-[-0.01em] max-w-lg">
          Vamos conversar?
        </h2>
        <p className="text-paper/75 text-lg max-w-xl leading-[1.5] mb-10">
          Estou em busca de oportunidades como desenvolvedor back-end júnior.
          Se seu time precisa de alguém com Java, Spring Boot e disposição para
          aprender rápido, bora trocar uma ideia.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center border-2 border-paper bg-paper text-ink hover:bg-transparent hover:text-paper transition-colors font-mono font-bold text-sm uppercase tracking-wide px-6 h-12"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center border-2 border-paper/40 hover:border-paper transition-colors font-mono font-bold text-sm uppercase tracking-wide px-6 h-12"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center border-2 border-paper/40 hover:border-paper transition-colors font-mono font-bold text-sm uppercase tracking-wide px-6 h-12"
          >
            GitHub
          </a>
        </div>

        <p className="mt-9 font-mono text-sm text-paper/50">{profile.phone}</p>
      </div>
    </section>
  )
}
