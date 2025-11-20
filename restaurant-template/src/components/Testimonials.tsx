import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from './Section'

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Local guest',
    quote:
      'Every visit feels like a small celebration. The menu is familiar enough to be comforting but surprising in all the right ways.',
  },
  {
    name: 'Amira Solberg',
    role: 'Food writer',
    quote:
      'Riverstone is quietly one of the city’s most thoughtful dining rooms&mdash;humble, precise cooking and a room you never want to leave.',
  },
  {
    name: 'Jonah Rivera',
    role: 'Anniversary dinner',
    quote:
      'They somehow remembered every detail from our first visit. It felt like dining in a friend’s home, just with impeccably plated food.',
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (newIndex: number) => {
    if (newIndex === index) return
    setDirection(newIndex > index ? 1 : -1)
    setIndex((newIndex + testimonials.length) % testimonials.length)
  }

  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  const active = testimonials[index]

  return (
    <Section id="testimonials">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">Guest stories</p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Evenings that linger long after dessert.
          </h2>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-400">
          <div className="flex -space-x-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700 text-[10px]">M</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700 text-[10px]">A</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700 text-[10px]">J</span>
          </div>
          <div className="h-8 w-px bg-slate-700/70" />
          <p>Over 1,200 five-star evenings and counting.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] md:items-center">
        <div className="relative">
          <div className="glass-panel relative overflow-hidden rounded-3xl px-6 py-7 md:px-8 md:py-9">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={active.name}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-5"
              >
                <p className="text-sm leading-relaxed text-slate-100 md:text-base">&ldquo;{active.quote}&rdquo;</p>
                <div className="flex items-center justify-between gap-4 text-xs text-slate-300">
                  <div>
                    <p className="font-semibold text-slate-50">{active.name}</p>
                    <p className="text-[11px] text-slate-400">{active.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Rated</span>
                    <span className="inline-flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-[11px] font-semibold text-amber-300">
                      ★ 4.9 / 5
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-200 transition hover:border-slate-400 hover:text-slate-50"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-200 transition hover:border-slate-400 hover:text-slate-50"
                >
                  ›
                </button>
              </div>
              <div className="flex items-center gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? 'w-6 bg-slate-50' : 'w-2 bg-slate-600'
                    }`}
                    aria-label={`Go to testimonial from ${t.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 text-xs text-slate-300"
        >
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Occasions</p>
            <p className="mt-1 text-sm font-semibold text-slate-50">A dining room built for moments.</p>
            <p className="mt-2 text-xs text-slate-400">
              From quiet solo dinners at the bar to anniversaries and small celebrations, our team designs the evening
              around you.
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/40 p-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Private dining</p>
              <p className="mt-1 text-sm font-semibold text-slate-50">Up to 18 guests in our river room.</p>
            </div>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-semibold text-slate-200">
              Inquire with our team
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}


