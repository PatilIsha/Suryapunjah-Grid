import { motion } from 'framer-motion'
import { Linkedin, Mail, Phone, Quote } from 'lucide-react'
import { PageHero, CTA } from '../components/common'
import { Btn, Icon, Reveal, SectionHeading, Tick, stagger, staggerItem } from '../components/ui'
import { directors, company } from '../data/site'

const team = [
  { icon: 'hat', title: 'Site execution team', text: 'Supervisors and crews handling foundations, structure erection, module mounting and cable laying to the approved drawings.' },
  { icon: 'bolt', title: 'Electrical team', text: 'Licensed electricians for DC/AC termination, inverter and panel work, earthing, testing and synchronisation support.' },
  { icon: 'boxes', title: 'Procurement & stores', text: 'Sourcing, inspection at delivery and site stores control, so material reaches the row when the crew reaches the row.' },
]

export default function Directors() {
  return (
    <>
      <PageHero
        title={<>Our <span className="accent-light">Founders</span></>}
        crumb="Directors"
        image="/img/team.jpg"
        text="The people who run the projects — on site, not only in meeting rooms."
      />

      <section className="bg-white py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            center
            eyebrow="Leadership"
            title={<>The founders behind <span className="accent">the LLP</span></>}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {directors.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.1}>
                <article className="card group flex h-full flex-col overflow-hidden">
                  <div className="relative h-72 overflow-hidden bg-navy-950 sm:h-80">
                    {d.image && (
                      <img
                        src={d.image}
                        alt={d.name}
                        className="h-full w-full object-cover object-[50%_28%] transition-transform duration-[900ms] group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-navy-950 to-transparent p-5">
                      <div>
                        <span className="bg-gold-600 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white">
                          {d.role}
                        </span>
                        <h3 className="mt-3 text-[1.35rem] text-white">{d.name}</h3>
                      </div>
                      <div className="flex gap-2 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                        {[
                          { Ico: Linkedin, href: '#' },
                          { Ico: Mail, href: `mailto:${company.email}` },
                          { Ico: Phone, href: `tel:${d.tel}` },
                        ].map(({ Ico, href }, k) => (
                          <a
                            key={k}
                            href={href}
                            className="btn-icon h-8 w-8 bg-white/90 text-navy-950"
                          >
                            <Ico className="h-3.5 w-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-[0.9rem] leading-relaxed">{d.bio}</p>
                    <p className="mt-3 text-[0.9rem] leading-relaxed">{d.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* quote + approach */}
      <section className="bg-mist py-18 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative border-l-[3px] border-gold-600 bg-white p-9 lg:p-11">
              <Quote className="absolute right-7 top-6 h-10 w-10 text-gold-600/12" />
              <p className="font-display text-[1.1rem] font-medium normal-case leading-relaxed text-ink lg:text-[1.2rem]">
                “Solar is a twenty-five year promise. Anyone can put modules on a structure — what decides whether a
                plant still performs in year fifteen is the quality of the balance of system underneath it. That is
                where we refuse to cut corners.”
              </p>
              <div className="mt-7 border-t border-line pt-5">
                <span className="block font-display text-[1rem] font-semibold uppercase text-ink">{directors[0].name}</span>
                <span className="text-[0.72rem] uppercase tracking-[0.14em] text-muted">{directors[0].role}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Leadership approach"
              title={<>How the founders <span className="accent">run projects</span></>}
            />
            <ul className="mt-7 space-y-3.5">
              <Tick><strong className="text-ink">One point of contact</strong> — a founder stays on your project from survey to handover.</Tick>
              <Tick><strong className="text-ink">Realistic schedules</strong> — dates come after the site survey, not before it.</Tick>
              <Tick><strong className="text-ink">Material discipline</strong> — specified brands and sizes, verified at delivery.</Tick>
              <Tick><strong className="text-ink">Honest reporting</strong> — if something slips, the client hears it from us first.</Tick>
            </ul>
            <div className="mt-8"><Btn to="/contact">Speak to a founder</Btn></div>
          </Reveal>
        </div>
      </section>

      {/* team */}
      <section className="bg-white py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            center
            eyebrow="Our team"
            title={<>Behind <span className="accent">the founders</span></>}
            text="Site engineers, electricians, structure crews and procurement staff who turn drawings into a working plant."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-5 lg:grid-cols-3"
          >
            {team.map((t, i) => (
              <motion.div key={t.title} variants={staggerItem} className="card p-7">
                <div className="flex items-center justify-between">
                  <span className="icon-tile"><Icon name={t.icon} /></span>
                  <span className="ghost-num">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-[1.02rem] text-ink">{t.title}</h3>
                <p className="mt-2.5 text-[0.87rem] leading-relaxed">{t.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA
        eyebrow="Direct line"
        title="Speak directly with our founders"
        text="No call centre and no runaround — your enquiry reaches the people who run the projects."
      />
    </>
  )
}
