import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const sampleProjects = [
  {
    title: 'Dashboard Analitik',
    desc: 'UI dashboard modern dengan chart interaktif dan dark mode.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
    repo: '#'
  },
  {
    title: 'Landing Page Startup',
    desc: 'Halaman promosi produk dengan animasi halus dan CTA jelas.',
    tags: ['Vite', 'Tailwind', 'SEO'],
    link: '#',
    repo: '#'
  },
  {
    title: 'Galeri 3D',
    desc: 'Eksperimen interaktif menggunakan Spline dan WebGL.',
    tags: ['Spline', 'WebGL'],
    link: '#',
    repo: '#'
  }
]

export default function Projects({ theme }) {
  return (
    <section id="projects" className={`py-24 ${theme.sectionBg}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl font-bold ${theme.title}`}>Proyek Pilihan</h2>
        <p className={`mt-2 ${theme.muted}`}>Kumpulan karya dengan berbagai pendekatan desain.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-xl p-6 border ${theme.card}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className={`text-xl font-semibold ${theme.title}`}>{p.title}</h3>
                  <p className={`mt-1 text-sm ${theme.muted}`}>{p.desc}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className={`text-xs px-2 py-1 rounded-md ${theme.tag}`}>{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a href={p.link} className={`inline-flex items-center gap-2 text-sm ${theme.link}`}>
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className={`inline-flex items-center gap-2 text-sm ${theme.link}`}>
                  <Github size={16} /> Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
