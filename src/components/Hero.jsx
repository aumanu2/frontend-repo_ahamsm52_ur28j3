import Spline from '@splinetool/react-spline'

export default function Hero({ theme }) {
  return (
    <section id="home" className={`relative overflow-hidden ${theme.sectionBg}`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Soft decorative glows that adapt to dark/light themes */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl" />
        <div className="absolute top-10 -right-16 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${theme.badge}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            Available for freelance projects
          </div>
          <h1 className={`mt-4 text-4xl md:text-5xl font-bold tracking-tight ${theme.title}`}>
            Hi, I’m <span className={`${theme.accentText.replace('text-', 'text-')}`}>Your Name</span> —
            <br className="hidden sm:block" /> Frontend Developer & UI Explorer
          </h1>
          <p className={`mt-4 text-base md:text-lg leading-7 ${theme.body}`}>
            I craft delightful interfaces and interactive experiences. Explore my projects and design experiments below.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className={`px-4 py-2 rounded-md font-semibold ${theme.ctaPrimary}`}>View Projects</a>
            <a href="#contact" className={`px-4 py-2 rounded-md font-semibold ${theme.ctaGhost}`}>Contact Me</a>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}
