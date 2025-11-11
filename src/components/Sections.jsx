import { Code2, Sparkles, Palette, Rocket, ExternalLink } from 'lucide-react'

export function About({ variant }) {
  const styles = getStyles(variant)
  return (
    <section id="about" className={`py-20 ${styles.bg}`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className={`text-3xl md:text-4xl font-bold ${styles.title}`}>About Me</h2>
          <p className={`mt-4 ${styles.text}`}>I’m a frontend developer focused on building fast, accessible, and beautiful web experiences. I love blending code and design to create interfaces that feel alive.</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {['React','TypeScript','Tailwind','Framer Motion','Three/Spline','UX Thinking'].map((s) => (
              <li key={s} className={`${styles.badge} px-3 py-2 rounded`}>{s}</li>
            ))}
          </ul>
        </div>
        <div className={`${styles.card} p-6 rounded-xl border`}> 
          <div className="flex items-center gap-3">
            <span className={`w-10 h-10 grid place-items-center rounded ${styles.iconWrap}`}><Sparkles size={20} /></span>
            <div>
              <p className={`font-semibold ${styles.title}`}>Currently Exploring</p>
              <p className={`${styles.text}`}>Procedural 3D, motion systems, and high-performance UI patterns.</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[Code2, Palette, Rocket].map((Icon,i) => (
              <div key={i} className={`p-4 rounded-lg border ${styles.tile}`}>
                <Icon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Projects({ variant }) {
  const styles = getStyles(variant)
  const projects = [
    { title: 'Interactive 3D Landing', tag: 'Spline + React', url: '#'},
    { title: 'SaaS Dashboard', tag: 'Next.js + Charts', url: '#'},
    { title: 'Motion-based Portfolio', tag: 'Framer Motion', url: '#'},
    { title: 'E-commerce UI Kit', tag: 'Tailwind', url: '#'},
    { title: 'AI Prompt App', tag: 'OpenAI + UX', url: '#'},
    { title: 'Micro Anim System', tag: 'Design System', url: '#'},
  ]

  return (
    <section id="projects" className={`py-20 ${styles.bg2}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold ${styles.title}`}>Featured Projects</h2>
            <p className={`${styles.text}`}>A selection of things I’ve designed and built recently.</p>
          </div>
          <a href="#" className={`${styles.link} inline-flex items-center gap-2`}>All projects <ExternalLink size={16} /></a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className={`${styles.card} group rounded-xl overflow-hidden border`}> 
              <div className={`h-40 ${styles.thumb}`}></div>
              <div className="p-4">
                <div className="text-sm opacity-70">{p.tag}</div>
                <h3 className={`text-lg font-semibold ${styles.title}`}>{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact({ variant }) {
  const styles = getStyles(variant)
  return (
    <section id="contact" className={`py-20 ${styles.bg}`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className={`text-3xl md:text-4xl font-bold ${styles.title}`}>Let’s work together</h2>
          <p className={`${styles.text} mt-4`}>Tell me about your project. I usually respond within 24 hours.</p>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className={`${styles.card} p-6 rounded-xl border grid grid-cols-1 gap-4`}>
          <input placeholder="Your name" className={`px-3 py-2 rounded border ${styles.input}`} />
          <input placeholder="Email" className={`px-3 py-2 rounded border ${styles.input}`} />
          <textarea placeholder="Project details" rows={4} className={`px-3 py-2 rounded border ${styles.input}`} />
          <button className={`${styles.primaryBtn}`}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

function getStyles(variant){
  switch (variant) {
    case 'minimal':
      return {
        bg: 'bg-white',
        bg2: 'bg-neutral-50',
        title: 'text-neutral-900',
        text: 'text-neutral-600',
        badge: 'bg-neutral-100 text-neutral-700',
        link: 'text-neutral-800 hover:underline',
        card: 'bg-white border-neutral-200',
        tile: 'bg-neutral-50 border-neutral-200',
        thumb: 'bg-gradient-to-br from-neutral-100 to-neutral-200',
        input: 'border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200',
        primaryBtn: 'px-4 py-2 rounded-md bg-black text-white hover:bg-neutral-800'
      }
    case 'brutalist':
      return {
        bg: 'bg-yellow-300',
        bg2: 'bg-yellow-200',
        title: 'text-black',
        text: 'text-black/80',
        badge: 'bg-black text-yellow-300',
        link: 'text-black underline decoration-4',
        card: 'bg-yellow-100 border-black border-2',
        tile: 'bg-yellow-200 border-black border-2',
        thumb: 'bg-gradient-to-br from-yellow-200 to-orange-300',
        input: 'border-black focus:outline-none focus:ring-2 focus:ring-black',
        primaryBtn: 'px-4 py-2 rounded-sm border-2 border-black bg-yellow-200 hover:translate-x-0.5 hover:translate-y-0.5 transition'
      }
    case 'glass':
      return {
        bg: 'bg-slate-900',
        bg2: 'bg-slate-950',
        title: 'text-white',
        text: 'text-white/70',
        badge: 'bg-white/10 text-white/90 border border-white/20',
        link: 'text-white hover:text-cyan-300',
        card: 'bg-white/5 border-white/10',
        tile: 'bg-white/5 border-white/10',
        thumb: 'bg-gradient-to-br from-cyan-900/40 to-fuchsia-900/20',
        input: 'border-white/10 bg-white/5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40',
        primaryBtn: 'px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/20'
      }
    default:
      return {
        bg: 'bg-white',
        bg2: 'bg-gradient-to-b from-indigo-50 to-cyan-50',
        title: 'text-indigo-950',
        text: 'text-indigo-700',
        badge: 'bg-indigo-100 text-indigo-800',
        link: 'text-indigo-700 hover:text-indigo-900',
        card: 'bg-white border-indigo-100',
        tile: 'bg-indigo-50/50 border-indigo-100',
        thumb: 'bg-gradient-to-br from-indigo-100 to-cyan-100',
        input: 'border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-200',
        primaryBtn: 'px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 shadow'
      }
  }
}
