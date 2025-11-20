import { motion } from 'framer-motion'
import { Section } from './Section'

export const ReservationSection = () => {
  return (
    <Section id="reservation" className="bg-slate-950">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">Reservations</p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Reserve your evening by the river.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              Submit a request and our team will confirm your reservation details by email within a few hours. For
              last-minute tables, please call the restaurant directly.
            </p>
          </div>

          <form className="glass-panel grid gap-4 rounded-3xl border-slate-800 bg-slate-900/70 p-5 text-xs md:p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-1.5">
                <label
                  htmlFor="date"
                  className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                >
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="time"
                  className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                >
                  Time
                </label>
                <select
                  id="time"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs text-slate-50 outline-none ring-0 transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                >
                  <option>5:30 pm</option>
                  <option>6:00 pm</option>
                  <option>7:30 pm</option>
                  <option>8:00 pm</option>
                  <option>8:30 pm</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="guests"
                  className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                >
                  Guests
                </label>
                <select
                  id="guests"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs text-slate-50 outline-none ring-0 transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                >
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                  <option>5 guests</option>
                  <option>6 guests</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="notes"
                className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
              >
                Notes
              </label>
              <textarea
                id="notes"
                rows={3}
                placeholder="Allergies, occasions, or special requests."
                className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-xs text-slate-50 outline-none ring-0 transition placeholder:text-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="rounded-full bg-brand-500 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-soft transition hover:bg-brand-400"
              >
                Request reservation
              </button>
              <p className="max-w-xs text-[11px] text-slate-400">
                Submitting this form does not guarantee a table. Our team will confirm your booking by email.
              </p>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="space-y-4"
        >
          <div className="glass-panel relative overflow-hidden rounded-3xl p-5 md:p-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Find us</p>
            <p className="mt-1 text-sm font-semibold text-slate-50">Boulevard de la Corniche, Agadir 80000</p>
            <div className="mt-4 h-52 overflow-hidden rounded-2xl border border-slate-800">
              <iframe
                title="Riverstone in Agadir on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55557.43529634916!2d-9.637475004799426!3d30.420236934875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b63399df4ab7%3A0xe71d64e9107f21d8!2sAgadir%2C%20Morocco!5e0!3m2!1sen!2sus!4v1732100000000!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                allowFullScreen
              />
            </div>
          </div>

          <div className="grid gap-3 text-xs text-slate-300 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Hours</p>
              <p className="mt-1 font-medium text-slate-50">Wednesday &ndash; Sunday</p>
              <p className="mt-1 text-[11px] text-slate-400">Seatings at 5:30pm &amp; 8:00pm</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Contact</p>
              <p className="mt-1 font-medium text-slate-50">reservations@riverstone.dining</p>
              <p className="mt-1 text-[11px] text-slate-400">Call (555) 013-9976 for same-day bookings.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}


