import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'
import { company, heroStats, heroImages } from '../data/site'
import { Btn } from './ui'

export default function Hero() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % heroImages.length), 5200)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-16 lg:pt-16 lg:pb-20">
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">

        {/* ---- copy ---- */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 border border-line bg-mist px-3.5 py-1.5"
          >
            <span className="h-1.5 w-1.5 bg-gold-600" />
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-ink">
              Clean energy · Brighter future
            </span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[2.5rem] leading-[0.98] sm:text-[3.3rem] lg:text-[3.9rem]"
          >
            Ground mounted solar EPC<br className="hidden sm:block" />{' '}
            <span className="accent">&amp; balance of system.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-[0.97rem] leading-relaxed"
          >
            From bare land to first unit generated — design, supply, execution, testing and
            commissioning of solar power plants from <strong className="text-ink">0.1 MW to utility scale</strong>,
            across Gujarat and Maharashtra.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Btn to="/services" size="lg">View our services</Btn>
            <a
              href={`tel:${company.phones[0].tel}`}
              className="btn btn--outline px-6 py-3.5 text-[0.76rem]"
            >
              <Phone className="h-3.5 w-3.5" />
              {company.phones[0].display}
            </a>
          </motion.div>

          {/* inline stat row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-7 sm:grid-cols-4"
          >
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[1.6rem] font-semibold leading-none text-ink">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---- image panel ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3.1] overflow-hidden rounded-[6px] bg-mist">
            <AnimatePresence initial={false}>
              <motion.img
                key={i}
                src={heroImages[i].src}
                alt={heroImages[i].caption}
                initial={{ opacity: 0, scale: 1.07 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.9 }, scale: { duration: 6, ease: 'linear' } }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* caption badge */}
          <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-navy-900 px-5 py-3.5">
            <span className="font-display text-[1.1rem] font-semibold leading-none text-gold-500">
              {heroImages[i].tag}
            </span>
            <span className="h-6 w-px bg-white/20" />
            <span className="text-[0.62rem] font-bold uppercase leading-tight tracking-[0.14em] text-slate-300">
              {heroImages[i].caption}
            </span>
          </div>

          {/* slide dots */}
          <div className="absolute right-4 top-4 flex gap-1.5">
            {heroImages.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Image ${k + 1}`}
                className={`h-1.5 transition-all duration-300 ${
                  k === i ? 'w-6 bg-gold-500' : 'w-1.5 bg-white/70 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
