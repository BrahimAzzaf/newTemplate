import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-8"
      >
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">Riverstone</p>
          <p>Modern riverside restaurant &amp; bar.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Riverstone Dining Room. All rights reserved.</p>
          <span className="hidden h-3 w-px bg-slate-700/70 md:inline-block" />
          <div className="flex gap-3">
            <a href="#hero" className="transition-colors hover:text-slate-200">
              Instagram
            </a>
            <a href="#hero" className="transition-colors hover:text-slate-200">
              Newsletter
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}


