import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Zap } from 'lucide-react'
import Hero from '../components/Hero'
import { CTA, Ticker } from '../components/common'
import { Btn, Icon, Reveal, SectionHeading, Tag, Tick, stagger, staggerItem } from '../components/ui'
import { services, capabilities, projects, process, whyUs, company } from '../data/site'

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />

      {/* ---------------- about ---------------- */}
      <section className="bg-white py-18 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative self-end">
                <img src="/img/about-1.jpg" alt="Ground mounted solar array" className="h-60 w-full rounded-[4px] object-cover lg:h-72" />
                <div className="absolute bottom-0 left-0 bg-navy-950 px-5 py-4">
                  <span className="block font-display text-[1.5rem] font-semibold leading-none text-gold-500">2021</span>
                  <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                    In solar since
                  </span>
                </div>
              </div>
              <img src="/img/epc.jpg" alt="Solar plant under construction" className="h-72 w-full rounded-[4px] object-cover lg:h-88" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">About the company</span>
            <h2 className="mt-3.5 text-[1.85rem] leading-[1.05] sm:text-[2.3rem] lg:text-[2.6rem]">
              A professionally run name in<br className="hidden lg:block" />{' '}
              <span className="accent">solar EPC &amp; balance of system</span>
            </h2>
            <p className="mt-5 text-[0.94rem] leading-relaxed">
              Our people have been working in solar since <strong className="text-ink">2021</strong> — on ground
              mounted plants, mounting structures, cabling and complete balance of system packages across
              Maharashtra. In <strong className="text-ink">2026</strong> that experience was launched separately
              under its own identity: <strong className="text-ink">{company.name}</strong>.
            </p>
            <p className="mt-3.5 text-[0.94rem] leading-relaxed">
              We take on packages from 0.1 MW to utility scale and stay accountable for the whole scope —
              design, supply, execution, testing and handover.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                { icon: 'check', t: 'Documented quality' },
                { icon: 'hat', t: 'Our own site crew' },
                { icon: 'scale', t: '0.1 MW to infinite' },
                { icon: 'file', t: 'As-built handover' },
              ].map((f) => (
                <div key={f.t} className="flex items-center gap-3 border-l-2 border-gold-600 bg-mist px-4 py-3">
                  <Icon name={f.icon} className="h-4 w-4 text-navy-900" />
                  <span className="text-[0.84rem] font-semibold text-ink">{f.t}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/about">More about us</Btn>
              <Btn to="/projects" variant="outline">Our projects</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- services ---------------- */}
      <section className="bg-mist py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            split
            eyebrow="Services"
            title={<>Two core offerings, <span className="accent">delivered completely</span></>}
            text="Solar ground mounted project EPC and complete balance of system — plus supply, design, civil, electrical, testing and rectification around them."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.08}>
                <Link to="/services" className="group block h-full overflow-hidden rounded-[4px] bg-white">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                    <div className="absolute left-0 top-0"><Tag>Service {s.no}</Tag></div>
                  </div>
                  <div className="border border-t-0 border-line p-7">
                    <h3 className="text-[1.25rem] leading-snug text-ink transition-colors group-hover:text-gold-600">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[0.9rem] leading-relaxed">{s.short}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span key={t} className="border border-line bg-mist px-2.5 py-1 text-[0.66rem] font-semibold text-ink">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gold-600">
                      Explore the scope
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {capabilities.map((c) => (
              <motion.div key={c.title} variants={staggerItem} className="card p-6">
                <div className="flex items-start gap-4">
                  <span className="icon-tile"><Icon name={c.icon} /></span>
                  <div>
                    <h4 className="text-[0.98rem] text-ink">{c.title}</h4>
                    <p className="mt-2 text-[0.86rem] leading-relaxed">{c.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- process ---------------- */}
      <section className="bg-white py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            center
            eyebrow="How we work"
            title={<>From site survey to <span className="accent">first unit generated</span></>}
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {process.map((p, i) => (
              <motion.div key={p.no} variants={staggerItem} className="card p-7">
                <div className="flex items-center justify-between">
                  <span className="icon-tile">
                    <Icon name={['draft', 'boxes', 'hat', 'check'][i]} />
                  </span>
                  <span className="ghost-num">{p.no}</span>
                </div>
                <h4 className="mt-5 text-[0.98rem] text-ink">{p.title}</h4>
                <p className="mt-2.5 text-[0.86rem] leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- projects ---------------- */}
      <section className="bg-navy-950 py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            light
            split
            eyebrow="Work done"
            title={<>Projects we have <span className="accent-light">executed</span></>}
            text="Ground mounted plants and balance of system packages delivered in the Solapur and Jalgaon districts of Maharashtra."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="card-dark group h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover opacity-90 transition-transform duration-[900ms] group-hover:scale-105"
                    />
                    <div className="absolute left-0 top-0">
                      <Tag tone={p.status === 'Completed' ? 'gold' : 'leaf'}>{p.status} · {p.year}</Tag>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[1.05rem] leading-snug text-white">{p.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-4 text-[0.76rem] text-slate-400">
                      <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-gold-600" />{p.location}</span>
                      <span className="flex items-center gap-1.5"><Zap className="h-3 w-3 text-gold-600" />{p.capacity}</span>
                    </div>
                    <p className="mt-4 border-t border-white/8 pt-4 text-[0.84rem] leading-relaxed text-slate-400">
                      {p.detail}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10">
            <Btn to="/projects" variant="light">See all projects</Btn>
          </Reveal>
        </div>
      </section>

      {/* ---------------- why us ---------------- */}
      <section className="bg-white py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            split
            eyebrow="Why Suryapunjah"
            title={<>Four reasons clients<br className="hidden lg:block" /> <span className="accent">hand us the scope</span></>}
            text="Ground mount is not a side business for us. Structures, foundations, rows and cabling are our daily work."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {whyUs.map((w, i) => (
              <motion.div key={w.title} variants={staggerItem} className="card p-7">
                <div className="flex items-center justify-between">
                  <span className="icon-tile"><Icon name={w.icon} /></span>
                  <span className="ghost-num">0{i + 1}</span>
                </div>
                <h4 className="mt-5 text-[0.98rem] text-ink">{w.title}</h4>
                <p className="mt-2.5 text-[0.86rem] leading-relaxed">{w.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.15} className="mt-12">
            <div className="grid items-center gap-10 border border-line p-8 lg:grid-cols-2 lg:p-10">
              <div>
                <span className="eyebrow">Coverage</span>
                <h3 className="mt-3 text-[1.5rem] leading-tight text-ink sm:text-[1.8rem]">
                  Registered in Ahmedabad,<br /> <span className="accent">executing across states</span>
                </h3>
                <ul className="mt-6 space-y-3">
                  <Tick><strong className="text-ink">Solapur District</strong> — Mangalwedha and Mahud sites completed in 2026</Tick>
                  <Tick><strong className="text-ink">Jalgaon District</strong> — BOS and supply running through 2026–27</Tick>
                  <Tick><strong className="text-ink">Ahmedabad, Gujarat</strong> — head office, engineering and procurement</Tick>
                </ul>
              </div>
              <img src="/img/hero-3.jpg" alt="Utility scale solar rows" className="h-64 w-full rounded-[4px] object-cover lg:h-72" />
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Tell us what you need — we'll scope and quote it"
        text="Share your land, capacity requirement or balance of system list. We come back with a scope, a schedule and a clear price."
      />
    </>
  )
}
