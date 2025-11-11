import { motion } from 'framer-motion'

export default function Contact({ theme }) {
  return (
    <section id="contact" className={`py-24 ${theme.sectionBg}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl font-bold ${theme.title}`}>Kontak</h2>
        <p className={`mt-2 ${theme.muted}`}>Ingin berdiskusi proyek? Kirim pesan Anda.</p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => { e.preventDefault(); alert('Terima kasih! Pesan Anda terkirim.'); }}
          className={`mt-8 grid md:grid-cols-2 gap-4 rounded-2xl p-6 border ${theme.card}`}
        >
          <input required placeholder="Nama" className={`px-4 py-3 rounded-lg ${theme.input}`} />
          <input required type="email" placeholder="Email" className={`px-4 py-3 rounded-lg ${theme.input}`} />
          <textarea required placeholder="Pesan" rows={5} className={`md:col-span-2 px-4 py-3 rounded-lg ${theme.input}`} />
          <div className="md:col-span-2 flex justify-end">
            <button className={`px-5 py-3 rounded-lg font-semibold ${theme.ctaPrimary}`}>Kirim</button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
