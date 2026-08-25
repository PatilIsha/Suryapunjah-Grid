import { motion } from 'framer-motion'
import { PageHero, CTA, Accordion } from '../components/common'
import { Btn, Icon, Reveal, SectionHeading, Tag, Tick, stagger, staggerItem } from '../components/ui'
import { services, capabilities, process, faqs, company } from '../data/site'

function ServiceBlock({ s, flip }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <Reveal className={flip ? 'lg:order-2' : ''}>
        <div className="relative overflow-hidden rounded-[4px]">
          <img src={s.image} alt={s.title} className="h-72 w-full object-cover lg:h-[26rem]" />
          <div className="absolute left-0 top-0"><Tag>Service {s.no}</Tag></div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <span className="eyebrow">{s.id === 'epc' ? 'Turnkey execution' : '0.1 MW to infinite'}</span>
        <h2 className="mt-3.5 text-[1.75rem] leading-[1.06] sm:text-[2.15rem]">{s.title}</h2>
        <p className="mt-5 text-[0.94rem] leading-relaxed">{s.short}</p>

        <ul className="mt-6 space-y-3">
          {s.points.map((p) => <Tick key={p}>{p}</Tick>)}
        </ul>

        <div className="mt-7 grid gap-px bg-line sm:grid-cols-2">
          {s.specs.map((sp) => (
            <div key={sp.k} className="bg-white px-5 py-4">
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-muted">{sp.k}</span>
              <span className="mt-1 block font-display text-[0.98rem] font-semibold text-ink">{sp.v}</span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Btn to="/contact" variant={flip ? 'gold' : 'dark'}>
            {s.id === 'epc' ? 'Discuss an EPC project' : 'Request a BOS quote'}
          </Btn>
        </div>
      </Reveal>
    </div>
  )
}

export default function Services() {
  return (
    <>
      <PageHero
        title={<>Our <span className="accent-light">Services</span></>}
        crumb="Services"
        image="/img/hero-3.jpg"
        text="Solar ground mounted project EPC and balance of system from 0.1 MW to infinite."
      />

      <section className="bg-white py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            split
            eyebrow="What we do"
            title={<>Two core offerings, <span className="accent">delivered completely</span></>}
            text="One accountable team from drawing board to first unit generated — no scope divided between vendors when a decision is needed."
          />
          <div className="mt-14"><ServiceBlock s={services[0]} flip={false} /></div>
        </div>
      </section>

      <section className="bg-mist py-18 lg:py-24">
        <div className="shell"><ServiceBlock s={services[1]} flip /></div>
      </section>

      {/* capabilities */}
      <section className="bg-white py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            center
            eyebrow="Supporting capabilities"
            title={<>Everything around <span className="accent">the core scope</span></>}
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {capabilities.map((c, i) => (
              <motion.div key={c.title} variants={staggerItem} className="card p-7">
                <div className="flex items-center justify-between">
                  <span className="icon-tile"><Icon name={c.icon} /></span>
                  <span className="ghost-num">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-[1.02rem] text-ink">{c.title}</h3>
                <p className="mt-2.5 text-[0.87rem] leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* process */}
      <section className="bg-navy-950 py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            light
            split
            eyebrow="How we work"
            title={<>Our execution <span className="accent-light">process</span></>}
            text="Four stages, each with a clear output the client signs off before the next one starts."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {process.map((p, i) => (
              <motion.div key={p.no} variants={staggerItem} className="card-dark p-7">
                <div className="flex items-center justify-between">
                  <span className="icon-tile icon-tile-light">
                    <Icon name={['draft', 'boxes', 'hat', 'check'][i]} />
                  </span>
                  <span className="font-display text-[1.55rem] font-medium leading-none text-white/15">{p.no}</span>
                </div>
                <h4 className="mt-5 text-[0.98rem] text-white">{p.title}</h4>
                <p className="mt-2.5 text-[0.86rem] leading-relaxed text-slate-400">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* faq */}
      <section className="bg-white py-18 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Common questions"
              title={<>Things clients <span className="accent">ask us first</span></>}
            />
            <Reveal delay={0.1}>
              <p className="mt-5 text-[0.92rem] leading-relaxed">
                If your question is not here, call{' '}
                <a href={`tel:${company.phones[0].tel}`} className="font-semibold text-gold-600 hover:underline">
                  {company.phones[0].display}
                </a>{' '}
                — you will speak to someone who has actually been on site.
              </p>
              <img src="/img/hero-1.jpg" alt="Solar plant" className="mt-8 h-56 w-full rounded-[4px] object-cover" />
            </Reveal>
          </div>
          <Reveal delay={0.1}><Accordion items={faqs} /></Reveal>
        </div>
      </section>

      <CTA
        eyebrow="Ready when you are"
        title="Need EPC or a BOS package priced?"
        text="Send us your capacity, land details or bill of materials and we will come back with a clear scope and price."
      />
    </>
  )
}
