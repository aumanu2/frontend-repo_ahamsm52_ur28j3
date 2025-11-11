import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const THEMES = [
  {
    key: 'glass',
    label: 'Glassmorphism',
    bg: 'bg-slate-950',
    navBg: 'bg-white/5',
    badge: 'bg-white/10 text-white',
    accentText: 'text-cyan-300',
    ctaPrimary: 'bg-cyan-500 hover:bg-cyan-400 text-white',
    ctaGhost: 'bg-white/10 hover:bg-white/20 text-white',
    sectionBg: 'bg-slate-950',
    title: 'text-white',
    body: 'text-white/80',
    muted: 'text-white/60',
    card: 'bg-white/5 border-white/10',
    tag: 'bg-white/10 text-white/90',
    link: 'text-cyan-300 hover:text-cyan-200',
    input: 'bg-white/10 border border-white/10 text-white placeholder-white/50',
    select: 'bg-white/10 border border-white/10 text-white'
  },
  {
    key: 'brutal',
    label: 'Brutalist',
    bg: 'bg-yellow-50',
    navBg: 'bg-black text-yellow-50',
    badge: 'bg-black text-yellow-50',
    accentText: 'text-black',
    ctaPrimary: 'bg-black hover:bg-neutral-800 text-yellow-50',
    ctaGhost: 'bg-yellow-200 hover:bg-yellow-300 text-black',
    sectionBg: 'bg-yellow-50',
    title: 'text-black',
    body: 'text-neutral-800',
    muted: 'text-neutral-600',
    card: 'bg-yellow-100 border-black',
    tag: 'bg-black text-yellow-50',
    link: 'text-black underline underline-offset-4',
    input: 'bg-yellow-100 border border-black text-black placeholder-neutral-500',
    select: 'bg-black text-yellow-50'
  },
  {
    key: 'neo',
    label: 'Neumorphism',
    bg: 'bg-neutral-100',
    navBg: 'bg-neutral-100/80',
    badge: 'bg-neutral-900 text-white',
    accentText: 'text-indigo-600',
    ctaPrimary: 'bg-indigo-600 hover:bg-indigo-500 text-white',
    ctaGhost: 'bg-white hover:bg-neutral-50 text-neutral-900',
    sectionBg: 'bg-neutral-100',
    title: 'text-neutral-900',
    body: 'text-neutral-700',
    muted: 'text-neutral-500',
    card: 'bg-neutral-100 border-white shadow-[10px_10px_20px_#cfcfcf,-10px_-10px_20px_#ffffff]',
    tag: 'bg-white text-neutral-700 shadow-sm',
    link: 'text-indigo-600 hover:text-indigo-500',
    input: 'bg-white border border-neutral-200 text-neutral-900 placeholder-neutral-400 shadow-sm',
    select: 'bg-white text-neutral-900 border border-neutral-200 shadow-sm'
  },
  {
    key: 'gradient',
    label: 'Gradient',
    bg: 'bg-gradient-to-br from-indigo-900 via-fuchsia-700 to-cyan-700',
    navBg: 'bg-black/20',
    badge: 'bg-white/10 text-white',
    accentText: 'text-fuchsia-300',
    ctaPrimary: 'bg-fuchsia-500 hover:bg-fuchsia-400 text-white',
    ctaGhost: 'bg-white/10 hover:bg-white/20 text-white',
    sectionBg: 'bg-transparent',
    title: 'text-white',
    body: 'text-white/80',
    muted: 'text-white/60',
    card: 'bg-white/10 border-white/10',
    tag: 'bg-white/10 text-white',
    link: 'text-fuchsia-200 hover:text-fuchsia-100',
    input: 'bg-white/10 border border-white/20 text-white placeholder-white/60',
    select: 'bg-white/10 border border-white/20 text-white'
  }
]

export default function App() {
  const [activeTheme, setActiveTheme] = useState('glass')
  const theme = useMemo(() => THEMES.find(t => t.key === activeTheme) || THEMES[0], [activeTheme])

  const themesForSelect = useMemo(() => THEMES.map(({ key, label }) => ({ key, label })), [])

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      <Navbar theme={theme} onThemeChange={setActiveTheme} themes={themesForSelect} active={activeTheme} />
      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  )
}
