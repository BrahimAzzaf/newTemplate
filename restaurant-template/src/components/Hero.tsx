import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-slate-50"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="gradient-overlay pointer-events-none absolute inset-0 opacity-95" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0),_rgba(15,23,42,1))]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-24 md:flex-row md:items-center md:gap-16 md:px-8 lg:pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 space-y-8"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Tonight&apos;s experience awaits
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
          >
            Modern seasonal cuisine on the riverside.
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-pretty text-sm leading-relaxed text-slate-300 md:text-base"
          >
            Riverstone is an intimate dining room celebrating local producers, wood-fired cooking, and an ever-changing
            tasting menu designed to be shared.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#reservation"
              className="rounded-full bg-brand-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-soft transition hover:bg-brand-400"
            >
              Reserve a table
            </a>
            <a
              href="#menu"
              className="rounded-full border border-slate-600/80 bg-slate-900/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100 transition hover:border-slate-300 hover:bg-slate-900/70"
            >
              View the menu
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-6 text-xs text-slate-300"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700 text-[10px]">M</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700 text-[10px]">C</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700 text-[10px]">J</span>
              </div>
              <div>
                <p className="font-medium text-slate-100">Loved by local regulars</p>
                <p className="text-[11px] text-slate-400">4.9 average across 1,200+ reviews</p>
              </div>
            </div>
            <div className="h-10 w-px bg-slate-700/70" />
            <div>
              <p className="font-medium text-slate-100">Open Wed – Sun</p>
              <p className="text-[11px] text-slate-400">Seatings at 5:30pm and 8:00pm</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-4 flex-1 md:mt-0"
        >
          <div className="glass-panel relative overflow-hidden rounded-3xl p-5 md:p-6">
            <div className="flex items-center justify-between gap-4 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Tonight&apos;s feature</p>
                <p className="mt-1 text-sm font-semibold text-slate-50">Wood-fired halibut, charred leek, citrus.</p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                Seasonal tasting
              </span>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
                alt="Plated fine dining dish"
                className="h-full w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/0" />

              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-xs text-slate-100">
                <div>
                  <p className="font-medium">Chef&apos;s counter</p>
                  <p className="text-[11px] text-slate-300">Eight-course menu, limited to 10 seats</p>
                </div>
                <div className="rounded-full bg-slate-950/70 px-3 py-1 text-[11px] font-semibold">
                  2 seats left
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


