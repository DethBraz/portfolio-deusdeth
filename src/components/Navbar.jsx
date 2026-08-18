import { useEffect, useState } from 'react'
import { profile } from '../data'

const links = [
  { href: '#sobre', label: '01 · Sobre' },
  { href: '#skills', label: '02 · Habilidades' },
  { href: '#projetos', label: '03 · Projetos' },
  { href: '#experiencia', label: '04 · Trajetória' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-[68px] border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-sm border-ink/15'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="h-full max-w-6xl mx-auto flex items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-full border-2 border-ink flex items-center justify-center font-mono font-bold text-xs text-ink group-hover:border-stamp group-hover:text-stamp transition-colors">
            DB
          </span>
          <span className="font-display font-bold text-lg text-ink hidden sm:inline">
            Deusdeth Braz
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7 font-mono text-[13px] tracking-tight text-ink-soft">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-stamp transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-flex items-center border-2 border-ink hover:bg-ink hover:text-paper transition-colors font-mono font-bold text-[13px] uppercase tracking-wide px-4 h-10"
        >
          Contato →
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-50 flex flex-col gap-1.5 p-2"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className={`w-6 h-0.5 bg-ink transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-ink transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 top-[68px] bg-paper flex flex-col justify-center px-8 gap-2 transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft mb-4">
          Índice
        </span>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display font-bold text-3xl text-ink hover:text-stamp py-2.5 border-b border-dashed border-ink/20"
          >
            {l.label}
          </a>
        ))}
        <a
          href={`mailto:${profile.email}`}
          onClick={() => setOpen(false)}
          className="mt-8 inline-flex justify-center items-center border-2 border-ink font-mono font-bold uppercase text-sm px-5 h-12"
        >
          Contato →
        </a>
      </div>
    </header>
  )
}
