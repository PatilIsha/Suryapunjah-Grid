import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, Plus, ChevronRight } from 'lucide-react'
import { company, keywords } from '../data/site'
import { Btn } from './ui'

/* ---------- scroll to top on route change ---------- */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

/* ---------- keyword ticker strip ---------- */
export function Ticker() {
  return (
    <div className="overflow-hidden border-y border-white/8 bg-navy-950 py-3">
      <div className="flex w-max animate-ticker gap-10 hover:[animation-play-state:paused]">
        {[...keywords, ...keywords].map((k, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap text-[0.66rem] font-bold uppercase tracking-[0.2em] text-slate-400"
          >
            {k}
            <span className="h-1 w-1 shrink-0 bg-gold-600" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------- inner page banner ---------- */
export function PageHero({ title, crumb, image, text }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-20">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.18]" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/60" />

      <div className="shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <nav className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-slate-500">
              <Link to="/" className="transition hover:text-gold-500">Home</Link>
              <ChevronRight className="h-3 w-3 text-gold-600" />
              <span className="text-gold-500">{crumb}</span>
            </nav>
            <h1 className="mt-4 text-[2.3rem] leading-[1.02] text-white sm:text-[2.9rem] lg:text-[3.2rem]">
              {title}
            </h1>
          </div>
          {text && <p className="max-w-md text-[0.92rem] leading-relaxed text-slate-400">{text}</p>}
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- dark inline CTA bar ---------- */
export function CTA({ eyebrow = 'Get in touch', title, text, label = 'Request a quote' }) {
  return (
    <section className="bg-mist py-16 lg:py-20">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden border-l-[3px] border-gold-600 bg-navy-950 px-8 py-9 lg:px-12 lg:py-11"
        >
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="eyebrow eyebrow-light">{eyebrow}</span>
              <h2 className="mt-3 text-[1.55rem] leading-tight text-white sm:text-[1.95rem]">{title}</h2>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-slate-400">{text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Btn to="/contact" variant="gold" size="lg">{label}</Btn>
              <Btn href={`tel:${company.phones[1].tel}`} variant="ghost" size="lg" icon={false}>
                {company.phones[1].display}
              </Btn>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- accordion ---------- */
export function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={`flex w-full items-center justify-between gap-5 py-5 text-left font-display text-[1.02rem] font-semibold uppercase leading-snug transition-colors duration-300 ${
                isOpen ? 'text-gold-600' : 'text-ink hover:text-gold-600'
              }`}
            >
              {item.q}
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center transition-all duration-300 ${
                  isOpen ? 'rotate-45 bg-gold-600 text-white' : 'bg-mist text-ink'
                }`}
              >
                <Plus className="h-3.5 w-3.5" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-10 text-[0.92rem] leading-relaxed">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

/* ---------- back to top ---------- */
export function FloatingActions() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="btn-icon fixed bottom-6 right-6 z-50 h-11 w-11 bg-navy-900 text-white"
        >
          <ChevronUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
