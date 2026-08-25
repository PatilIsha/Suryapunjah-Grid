import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, MapPin, FileText } from 'lucide-react'
import { company, nav } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* utility strip */}
      <div className="hidden bg-navy-950 text-slate-400 lg:block">
        <div className="shell flex items-center justify-between py-2 text-[0.72rem]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3 text-gold-500" />
              A-610 World Trade Tower, Makarba, Ahmedabad — 380051
            </span>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 transition hover:text-white">
              <Mail className="h-3 w-3 text-gold-500" />
              {company.email}
            </a>
          </div>
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-500">
            Clean Energy · Brighter Future
          </span>
        </div>
      </div>

      {/* main bar */}
      <header
        className={`sticky top-0 z-50 border-b bg-white transition-shadow duration-300 ${
          scrolled ? 'border-line shadow-[0_10px_30px_-24px_rgba(12,21,36,0.6)]' : 'border-transparent'
        }`}
      >
        <div className="shell flex items-center justify-between gap-6 py-3.5">
          <Link to="/" className="shrink-0">
            <img src="/img/logo-compact.svg" alt={company.name} className="h-10 w-auto sm:h-11" />
          </Link>

          <nav className="hidden items-center lg:flex">
            {nav.map((item, i) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {({ isActive }) => (
                  <span
                    className={`relative block px-4 py-1 font-sans text-[0.72rem] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                      i !== 0 ? 'border-l border-line' : ''
                    } ${isActive ? 'text-gold-600' : 'text-ink hover:text-gold-600'}`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-4 -bottom-[15px] h-[2px] bg-gold-600"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${company.phones[0].tel}`}
              className="hidden items-center gap-2.5 xl:flex"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-gold-600">
                <Phone className="h-3.5 w-3.5" />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.58rem] font-bold uppercase tracking-[0.18em] text-muted">Call us</span>
                <span className="block font-display text-[0.95rem] font-semibold text-ink">
                  {company.phones[0].display}
                </span>
              </span>
            </a>

            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 font-sans text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-gold-600 sm:inline-flex"
            >
              <FileText className="h-3.5 w-3.5" />
              Get a quote
            </Link>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full bg-navy-900 text-white transition hover:bg-gold-600 lg:hidden"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </header>

      {/* mobile sheet */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[80] bg-navy-950/70"
            />
            <motion.aside
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 34 }}
              className="fixed inset-y-0 right-0 z-[90] flex w-[min(21rem,86vw)] flex-col overflow-y-auto bg-white p-6"
            >
              <div className="flex items-center justify-between border-b border-line pb-5">
                <img src="/img/logo-compact.svg" alt={company.name} className="h-9" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-full bg-mist text-ink transition hover:bg-navy-900 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="mt-2 flex flex-col">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.4 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `block border-b border-line py-3.5 font-sans text-[0.78rem] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                          isActive ? 'pl-2 text-gold-600' : 'text-ink hover:pl-2 hover:text-gold-600'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-7 space-y-4 text-[0.85rem]">
                <a href={`tel:${company.phones[0].tel}`} className="flex gap-3">
                  <Phone className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-600" />
                  <span>{company.phones[0].display}<br />{company.phones[1].display}</span>
                </a>
                <a href={`mailto:${company.email}`} className="flex gap-3 break-all">
                  <Mail className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-600" />
                  {company.email}
                </a>
                <p className="flex gap-3">
                  <MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-600" />
                  {company.address.full}
                </p>
              </div>

              <Link
                to="/contact"
                className="mt-7 bg-navy-900 py-3.5 text-center font-sans text-[0.72rem] font-bold uppercase tracking-[0.15em] text-white"
              >
                Request a callback
              </Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
