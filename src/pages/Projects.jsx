import { motion } from 'framer-motion'
import { MapPin, Zap } from 'lucide-react'
import { PageHero, CTA } from '../components/common'
import { Btn, Reveal, SectionHeading, Tag, Tick, stagger, staggerItem } from '../components/ui'
import { projects } from '../data/site'

export default function Projects() {
  return (
    <>
      <PageHero
        title={<>Our <span className="accent-light">Projects</span></>}
        crumb="Projects"
        image="/img/hero-2.jpg"
        text="Ground mounted plants and balance of system packages executed across Maharashtra."
      />

      {/* cards */}
      <section className="bg-white py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            split
            eyebrow="Work done"
            title={<>Projects delivered <span className="accent">&amp; in progress</span></>}
            text="Executed in the Solapur and Jalgaon districts of Maharashtra, engineered and procured from our Ahmedabad office."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((p) => (
              <motion.article key={p.title} variants={staggerItem} className="card group h-full overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <div className="absolute left-0 top-0">
                    <Tag tone={p.status === 'Completed' ? 'gold' : 'leaf'}>{p.status} · {p.year}</Tag>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[1.08rem] leading-snug text-ink transition-colors group-hover:text-gold-600">
                    {p.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-4 text-[0.76rem] text-muted">
                    <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-gold-600" />{p.location}</span>
                    <span className="flex items-center gap-1.5"><Zap className="h-3 w-3 text-gold-600" />{p.capacity}</span>
                  </div>
                  <p className="mt-4 border-t border-line pt-4 text-[0.86rem] leading-relaxed">{p.detail}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* register */}
      <section className="bg-mist py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            center
            eyebrow="Project register"
            title={<>Work done <span className="accent">at a glance</span></>}
          />

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto border border-line bg-white">
              <table className="w-full min-w-[46rem] border-collapse text-left">
                <thead>
                  <tr className="bg-navy-950 text-white">
                    {['Project', 'Scope', 'Location', 'Year', 'Status'].map((h) => (
                      <th key={h} className="px-6 py-4 font-sans text-[0.62rem] font-bold uppercase tracking-[0.18em]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {projects.map((p) => (
                    <tr key={p.title} className="border-b border-line transition-colors last:border-0 hover:bg-mist">
                      <td className="px-6 py-5">
                        <span className="block font-display text-[0.98rem] font-semibold uppercase text-ink">
                          {p.title.split(' — ')[0]}
                        </span>
                        <span className="text-[0.76rem] text-muted">{p.capacity}</span>
                      </td>
                      <td className="px-6 py-5 text-[0.87rem]">{p.scope}</td>
                      <td className="px-6 py-5 text-[0.87rem]">{p.location}</td>
                      <td className="px-6 py-5 font-display text-[0.95rem] font-semibold text-ink">{p.year}</td>
                      <td className="px-6 py-5">
                        <Tag tone={p.status === 'Completed' ? 'leaf' : 'gold'}>{p.status}</Tag>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-[0.8rem] text-muted">
              Capacities and dates as recorded by the project team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* coverage */}
      <section className="bg-white py-18 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img src="/img/hero-3.jpg" alt="Utility scale solar rows" className="h-80 w-full rounded-[4px] object-cover lg:h-[25rem]" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Where we work</span>
            <h2 className="mt-3.5 text-[1.75rem] leading-[1.06] sm:text-[2.15rem]">
              Registered in Ahmedabad,<br /> <span className="accent">executing across states</span>
            </h2>
            <p className="mt-5 text-[0.94rem] leading-relaxed">
              Our registered office is at World Trade Tower, Makarba, Ahmedabad, while our completed and running
              projects are in the Solapur and Jalgaon districts of Maharashtra.
            </p>
            <ul className="mt-6 space-y-3">
              <Tick><strong className="text-ink">Solapur District</strong> — Mangalwedha and Mahud sites completed in 2026</Tick>
              <Tick><strong className="text-ink">Jalgaon District</strong> — BOS and supply running through 2026–27</Tick>
              <Tick><strong className="text-ink">Ahmedabad, Gujarat</strong> — head office, engineering and procurement</Tick>
            </ul>
            <div className="mt-8"><Btn to="/contact">Enquire about your site</Btn></div>
          </Reveal>
        </div>
      </section>

      <CTA
        eyebrow="Your site next"
        title="Have a site that needs executing?"
        text="Whether it is a fresh ground mounted plant or a balance of system package, we would like to look at it."
      />
    </>
  )
}
