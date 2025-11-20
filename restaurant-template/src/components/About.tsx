import { motion } from 'framer-motion'
import { Section } from './Section'

export const About = () => {
  return (
    <Section id="about">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 md:order-1"
        >
          <div className="glass-panel relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1100&q=80"
              alt="Restaurant interior with warm lighting"
              className="h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-slate-950/0" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-panel absolute -bottom-8 left-6 flex max-w-xs items-center gap-4 rounded-2xl border-slate-700/80 bg-slate-900/90 px-4 py-3 text-xs text-slate-200 shadow-soft"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-[11px] font-semibold text-slate-950">
              14
            </div>
            <div>
              <p className="font-semibold text-slate-50">Years of service on the river</p>
              <p className="text-[11px] text-slate-400">
                A neighborhood dining room dedicated to thoughtful hospitality.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 space-y-6 md:order-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">About the restaurant</p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Thoughtful plates, an intimate room, and a view of the water.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            At Riverstone, we cook with the seasons. Our wood-fired kitchen highlights regional produce, sustainably
            caught seafood, and ethical meat, paired with a considered wine list and zero-proof pairings.
          </p>
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            The dining room is designed for lingering conversations&mdash;soft light, warm textures, and a soundtrack
            that moves gently with the evening. Whether it&apos;s a quiet weeknight or a celebration, we&apos;re here
            to make it feel special.
          </p>

          <div className="grid gap-4 pt-2 text-xs text-slate-200 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Chef</p>
              <p className="mt-1 text-sm font-semibold text-slate-50">Mara Ellis</p>
              <p className="mt-1 text-xs text-slate-400">Formerly of Alder &amp; Field, New York.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Menu</p>
              <p className="mt-1 text-sm font-semibold text-slate-50">Tasting &amp; à la carte</p>
              <p className="mt-1 text-xs text-slate-400">With vegetarian and gluten-free pathways.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Location</p>
              <p className="mt-1 text-sm font-semibold text-slate-50">Riverside District</p>
              <p className="mt-1 text-xs text-slate-400">Steps away from the old stone bridge.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}


