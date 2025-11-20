import { motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#menu', label: 'Menu' },
  { href: '#testimonials', label: 'Stories' },
  { href: '#reservation', label: 'Reservations' },
]

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-30 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-8">
        <a href="#hero" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-slate-950">
            R
          </span>
          <span className="hidden text-xs text-slate-200 sm:inline">Riverstone Dining Room</span>
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-slate-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#reservation"
            className="rounded-full border border-brand-500/70 bg-brand-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-soft transition hover:border-brand-500 hover:bg-brand-400"
          >
            Book a table
          </a>
        </div>
      </nav>
    </motion.header>
  )
}


