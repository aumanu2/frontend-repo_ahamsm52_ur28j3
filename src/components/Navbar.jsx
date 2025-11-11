import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ theme, onThemeChange, themes, active }) {
  const [open, setOpen] = useState(false)

  const NavLink = ({ href, children }) => (
    <a href={href} className={`text-sm font-medium hover:opacity-90 transition ${active === href ? 'opacity-100' : 'opacity-80'}`} onClick={() => setOpen(false)}>
      {children}
    </a>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${theme.navBg} backdrop-blur border-b border-white/10`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-white text-lg tracking-wide">MyPortfolio</a>
        <nav className="hidden md:flex items-center gap-6 text-white">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">Tentang</NavLink>
          <NavLink href="#projects">Proyek</NavLink>
          <NavLink href="#contact">Kontak</NavLink>
          <div className="h-6 w-px bg-white/20" />
          <select
            aria-label="Tema"
            className={`rounded-md px-2 py-1 text-xs ${theme.select}`}
            onChange={(e) => onThemeChange(e.target.value)}
            value={active}
          >
            {themes.map(t => (
              <option key={t.key} value={t.key}>{t.label}</option>
            ))}
          </select>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className={`md:hidden px-6 pb-6 space-y-4 ${theme.navBg} border-t border-white/10 text-white`}>
          <div className="grid gap-3">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">Tentang</NavLink>
            <NavLink href="#projects">Proyek</NavLink>
            <NavLink href="#contact">Kontak</NavLink>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs opacity-80">Tema:</span>
            <select
              aria-label="Tema"
              className={`rounded-md px-2 py-1 text-xs ${theme.select}`}
              onChange={(e) => onThemeChange(e.target.value)}
              value={active}
            >
              {themes.map(t => (
                <option key={t.key} value={t.key}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}
    </header>
  )
}
