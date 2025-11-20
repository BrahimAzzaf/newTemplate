import { motion } from 'framer-motion'
import { Section } from './Section'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=900&q=80',
    alt: 'Chef plating a modern dish under warm lighting',
    caption: 'Chef’s pass',
    detail: 'Precision plating for the signature tasting menu.',
    layout: 'md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    alt: 'Dining room with floor-to-ceiling windows at dusk',
    caption: 'River room',
    detail: 'Sunset service overlooking the water.',
  },
  {
    src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=900&q=80',
    alt: 'Close-up of artisan cocktail being stirred',
    caption: 'Bar program',
    detail: 'Zero-proof pairings and stirred classics.',
  },
  {
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80',
    alt: 'Fresh bread loaf on wooden board with butter',
    caption: 'Hearth bread',
    detail: 'Naturally leavened, fired daily.',
  },
  {
    src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80',
    alt: 'Intimate table setting with candles and wine glasses',
    caption: 'Private table',
    detail: 'Candlelit corner for anniversaries.',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    alt: 'Assorted seasonal ingredients arranged on counter',
    caption: 'Market haul',
    detail: 'Sourcing from nearby growers each morning.',
    layout: 'md:col-span-2',
  },
]

export const Gallery = () => {
  return (
    <Section id="gallery" className="bg-slate-950/90">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">Inside the room</p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Scenes from the kitchen, bar, and dining room.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            A glimpse at the energy that moves through Riverstone each night&mdash;glowing hearths, seasonal ingredients,
            and the calm of the river outside our windows.
          </p>
        </div>
        <p className="text-xs text-slate-400">
          Hover a frame to reveal the notes our team shares during service.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="mt-10 grid gap-5 md:auto-rows-[220px] md:grid-cols-3"
      >
        {galleryImages.map((image) => (
          <motion.figure
            key={image.src}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
            className={`group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 ${image.layout ?? ''}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 opacity-90" />
            <figcaption className="absolute inset-0 flex flex-col justify-end gap-1 p-5 text-slate-100">
              <p className="text-sm font-semibold">{image.caption}</p>
              <p className="text-[11px] text-slate-300 transition duration-300 group-hover:text-slate-100">
                {image.detail}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </Section>
  )
}



