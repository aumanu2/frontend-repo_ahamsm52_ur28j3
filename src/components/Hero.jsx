import Spline from '@splinetool/react-spline'

export default function Hero({ variant }) {
  const styles = getStyles(variant)
  return (
    <section id="home" className={`${styles.bg} relative overflow-hidden`}> 
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {styles.decor}
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${styles.badge}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            Available for freelance projects
          </div>
          <h1 className={`mt-4 text-4xl md:text-5xl font-bold tracking-tight ${styles.title}`}>
            Hi, I’m <span className={styles.accent}>Your Name</span> —
            Frontend Developer & UI Explorer
          </h1>
          <p className={`mt-4 text-base md:text-lg leading-7 ${styles.text}`}>I craft delightful interfaces and interactive experiences. Explore my projects and design experiments below.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className={`${styles.primaryBtn}`}>View Projects</a>
            <a href="#contact" className={`${styles.ghostBtn}`}>Contact Me</a>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[520px] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}

function getStyles(variant) {
  switch (variant) {
    case 'minimal':
      return {
        bg: 'bg-white',
        badge: 'bg-neutral-100 text-neutral-700',
        title: 'text-neutral-900',
        text: 'text-neutral-600',
        accent: 'text-neutral-900 underline underline-offset-4 decoration-neutral-300',
        primaryBtn: 'px-4 py-2 rounded-md bg-black text-white hover:bg-neutral-800',
        ghostBtn: 'px-4 py-2 rounded-md border border-neutral-300 text-neutral-800 hover:bg-neutral-50',
        decor: null,
      }
    case 'brutalist':
      return {
        bg: 'bg-yellow-300',
        badge: 'bg-black text-yellow-300',
        title: 'text-black',
        text: 'text-black/80',
        accent: 'bg-black text-yellow-300 px-2',
        primaryBtn: 'px-4 py-2 rounded-sm border-2 border-black bg-yellow-200 hover:translate-x-0.5 hover:translate-y-0.5 transition',
        ghostBtn: 'px-4 py-2 rounded-sm border-2 border-black bg-transparent hover:bg-yellow-200',
        decor: null,
      }
    case 'glass':
      return {
        bg: 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950',
        badge: 'bg-white/10 text-white/90 border border-white/20',
        title: 'text-white',
        text: 'text-white/70',
        accent: 'text-cyan-300',
        primaryBtn: 'px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/20',
        ghostBtn: 'px-4 py-2 rounded-md bg-white/5 text-white hover:bg-white/10 border border-white/10',
        decor: (
          <div className="absolute inset-0">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl" />
            <div className="absolute top-10 -right-16 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
          </div>
        ),
      }
    default:
      return {
        bg: 'bg-gradient-to-b from-indigo-50 via-white to-cyan-50',
        badge: 'bg-indigo-100 text-indigo-800',
        title: 'text-indigo-950',
        text: 'text-indigo-700',
        accent: 'text-indigo-600',
        primaryBtn: 'px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 shadow',
        ghostBtn: 'px-4 py-2 rounded-md bg-white text-indigo-700 hover:bg-indigo-50 border border-indigo-100',
        decor: (
          <div className="absolute inset-0">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-300/40 rounded-full blur-3xl" />
            <div className="absolute top-10 -right-16 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl" />
          </div>
        )
      }
  }
}
