import { Sparkles } from 'lucide-react'

const variants = [
  { key: 'default', label: 'Modern' },
  { key: 'glass', label: 'Glassmorphism' },
  { key: 'minimal', label: 'Minimal' },
  { key: 'brutalist', label: 'Brutalist' },
]

export default function ThemeSwitcher({ value, onChange }) {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <div className="bg-white/90 backdrop-blur border border-black/5 shadow-xl rounded-full p-2 flex items-center gap-1">
        <span className="px-2 py-1 text-xs font-medium text-neutral-700 hidden sm:flex items-center gap-1"><Sparkles size={14}/> Tema</span>
        {variants.map(v => (
          <button
            key={v.key}
            onClick={() => onChange(v.key)}
            className={`px-3 py-1.5 rounded-full text-sm transition ${value===v.key ? 'bg-black text-white' : 'hover:bg-neutral-100 text-neutral-700'}`}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  )
}
