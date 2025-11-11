import { motion } from 'framer-motion'

export default function About({ theme }) {
  return (
    <section id="about" className={`py-24 ${theme.sectionBg}`}>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-3xl sm:text-4xl font-bold ${theme.title}`}>Tentang Saya</h2>
          <p className={`mt-4 leading-relaxed ${theme.body}`}>
            Saya seorang developer dan designer yang fokus pada pembuatan pengalaman web yang cepat, estetis, dan menyenangkan.
            Saya suka mengeksplorasi berbagai gaya: minimalis, brutalist, glassmorphism, hingga neomorphism.
          </p>
          <ul className={`mt-6 grid sm:grid-cols-2 gap-3 text-sm ${theme.muted}`}>
            <li>• Desain Sistem</li>
            <li>• Interaksi & Animasi</li>
            <li>• 3D & Visual Eksperimen</li>
            <li>• Optimasi Performa</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl p-8 border ${theme.card}`}
        >
          <h3 className={`text-xl font-semibold ${theme.title}`}>Gaya Desain</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {['Minimal', 'Playful', 'Brutalist', 'Glass', 'Neo', 'Gradient'].map(s => (
              <span key={s} className={`px-3 py-2 rounded-lg text-center ${theme.tag}`}>{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
