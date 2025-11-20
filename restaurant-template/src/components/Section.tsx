import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { Variants } from 'framer-motion'

const container: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
}

export const Section = ({ id, className = '', children }: SectionProps) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-8"
    >
      {children}
    </motion.div>
  </section>
)


