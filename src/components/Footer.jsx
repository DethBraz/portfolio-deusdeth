import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-6">
      <div className="max-w-6xl mx-auto border-t border-dashed border-ink/25 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-ink-soft tracking-wide">
        <p>© {new Date().getFullYear()} {profile.fullName} — fim do documento</p>
        <p>Feito com React &amp; Tailwind</p>
      </div>
    </footer>
  )
}
