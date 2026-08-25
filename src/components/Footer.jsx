import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { company, nav, developer } from '../data/site'

const SERVICE_LINKS = [
  'Ground Mounted EPC', 'Balance of System', 'Material Supply',
  'Design & Engineering', 'Testing & Commissioning',
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 text-slate-400">
      <div className="shell">
        <div className="grid gap-11 pb-14 lg:grid-cols-[1.7fr_1fr_1fr_1.3fr]">
          <div>
            <span className="inline-block bg-white px-4 py-3">
              <img src="/img/logo-header.png" alt={company.name} className="h-11" />
            </span>
            <p className="mt-6 max-w-sm text-[0.87rem] leading-relaxed">
              Solar ground mounted project EPC and complete balance of system packages from
              0.1 MW to utility scale — engineered, supplied and commissioned by our own team.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-600" />
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-slate-500">
                In solar since {company.since}
              </span>
            </div>
          </div>

          <div>
            <h5 className="footer-head">Explore</h5>
            <ul className="mt-5 space-y-2.5">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-[0.87rem] transition-colors hover:text-gold-500">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="footer-head">Services</h5>
            <ul className="mt-5 space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-[0.87rem] transition-colors hover:text-gold-500">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="footer-head">Contact</h5>
            <ul className="mt-5 space-y-4 text-[0.87rem]">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-600" />
                <span className="leading-relaxed">{company.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-600" />
                <span>
                  {company.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="block transition-colors hover:text-gold-500">
                      {p.display}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-600" />
                <a href={`mailto:${company.email}`} className="break-all transition-colors hover:text-gold-500">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-white/8 py-5 text-[0.76rem]">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>

          <span className="flex items-center gap-1.5">
            Developed by
            <a
              href={developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative font-bold text-gold-500 transition-colors duration-300 hover:text-gold-400"
            >
              {developer.name}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </span>

          <span className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-slate-600">
            Clean Energy · Brighter Future
          </span>
        </div>
      </div>
    </footer>
  )
}
