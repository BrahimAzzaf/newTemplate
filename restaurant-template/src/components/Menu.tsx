import { motion } from 'framer-motion'
import { Section } from './Section'

const dishes = [
  {
    name: 'Charred Leek & Halibut',
    description: 'Wood-fired Atlantic halibut, ember-roasted leeks, preserved lemon, fennel oil.',
    price: '34',
    tag: 'From the hearth',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Seared white fish plated with greens and sauce',
  },
  {
    name: 'Coal-Roasted Carrots',
    description: 'Smoked carrot glaze, cultured cream, toasted buckwheat, garden herbs.',
    price: '19',
    tag: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Roasted root vegetables on rustic plate',
  },
  {
    name: 'Riverstone Tartare',
    description: 'Grass-fed beef, cured egg yolk, pickled shallot, grilled sourdough.',
    price: '28',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Beef tartare topped with herbs and egg yolk',
  },
  {
    name: 'Wild Mushroom Cappelletti',
    description: 'Handmade pasta, roasted mushrooms, aged parmesan broth, thyme.',
    price: '26',
    tag: 'House-made pasta',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Fresh stuffed pasta served with wild mushrooms and herbs',
  },
  {
    name: 'Citrus & Olive Oil Cake',
    description: 'Candied citrus, whipped mascarpone, warm vanilla bean syrup.',
    price: '14',
    tag: 'Dessert',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Slice of citrus cake with candied garnish',
  },
  {
    name: 'Pear & Smoke',
    description: 'Smoked pear, rye crumble, brown butter gelato, winter spices.',
    price: '15',
    tag: 'After dinner',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Poached pear dessert with ice cream and crumble',
  },
]

export const Menu = () => {
  return (
    <Section id="menu" className="bg-slate-950">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">Seasonal menu</p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            A short menu that changes as the river does.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
            Our kitchen writes the menu around what&apos;s freshest each week. Below is a small glimpse of what you
            might find when you visit.
          </p>
        </div>
        <p className="text-xs text-slate-400">
          Tasting menu available for the whole table. Vegetarian and gluten-free paths by request.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {dishes.map((dish) => (
          <motion.article
            key={dish.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="group flex flex-col rounded-3xl border border-slate-800 bg-slate-900/40 p-5 shadow-soft"
          >
            <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={dish.image}
                alt={dish.imageAlt}
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[11px] text-slate-100">
                <span className="rounded-full bg-slate-950/80 px-3 py-1 font-semibold uppercase tracking-[0.25em]">
                  {dish.tag}
                </span>
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-[10px] font-semibold text-slate-200">
                  ${dish.price}
                </span>
              </div>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">{dish.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{dish.description}</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Seasonal course</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
              <p className="inline-flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-emerald-400" />
                Sourced from regional farms and fisheries
              </p>
              <p className="opacity-0 transition group-hover:opacity-100">Ask your server for pairing suggestions</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}


