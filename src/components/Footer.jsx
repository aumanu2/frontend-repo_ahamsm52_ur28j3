export default function Footer({ theme }) {
  return (
    <footer className={`py-10 ${theme.sectionBg}`}>
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p className={`${theme.muted}`}>© {new Date().getFullYear()} MyPortfolio. Dibuat dengan cinta.</p>
        <div className="flex items-center gap-4">
          <a href="#" className={`${theme.link}`}>LinkedIn</a>
          <a href="#" className={`${theme.link}`}>Twitter</a>
          <a href="#" className={`${theme.link}`}>GitHub</a>
        </div>
      </div>
    </footer>
  )
}
