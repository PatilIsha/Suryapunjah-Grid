import { motion } from 'framer-motion'
import { PageHero, CTA } from '../components/common'
import { Btn, Counter, Icon, Reveal, SectionHeading, Tick, stagger, staggerItem } from '../components/ui'
import { company, timeline, whyUs, stats } from '../data/site'

const pillars = [
  { icon: 'eye', title: 'Vision', text: 'To be a trusted execution partner for ground mounted solar in India — the team a developer calls when the plant has to be built right the first time.' },
  { icon: 'target', title: 'Mission', text: 'To deliver EPC and balance of system packages from 0.1 MW to utility scale with sound engineering, safe site practice and schedules we actually keep.' },
  { icon: 'hands', title: 'Values', text: 'Honest reporting, quality material, no shortcuts on earthing or cabling, and a handover pack the client can actually use for years afterwards.' },
]

export default function About() {
  return (
    <>
      <PageHero
        title={<>About <span className="accent-light">Suryapunjah</span></>}
        crumb="About"
        image="/img/hero-1.jpg"
        text="In solar since 2021, launched separately as SURYAPUNJAH GRID ENERGY LLP in 2026."
      />

      {/* story */}
      <section className="bg-white py-18 lg:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <img src="/img/epc.jpg" alt="Ground mounted solar plant" className="h-80 w-full rounded-[4px] object-cover lg:h-[27rem]" />
              <img
                src="/img/about-2.jpg"
                alt="Design and engineering"
                className="absolute -bottom-8 -right-4 hidden h-44 w-56 rounded-[4px] border-4 border-white object-cover sm:block"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-3.5 text-[1.85rem] leading-[1.05] sm:text-[2.3rem] lg:text-[2.6rem]">
              Built on five years of<br className="hidden lg:block" />{' '}
              <span className="accent">solar site experience</span>
            </h2>
            <p className="mt-5 text-[0.94rem] leading-relaxed">
              The team behind <strong className="text-ink">{company.name}</strong> has been working in solar since{' '}
              <strong className="text-ink">2021</strong> — on ground mounted plants, mounting structures, cabling and
              complete balance of system packages. Those years were spent on site, not on paper.
            </p>
            <p className="mt-3.5 text-[0.94rem] leading-relaxed">
              In <strong className="text-ink">2026</strong> the business was launched separately under its own name, so
              that clients get a single accountable partner for design, supply, execution and commissioning of ground
              mounted solar projects.
            </p>
            <ul className="mt-6 space-y-3">
              <Tick>Packages from <strong className="text-ink">0.1 MW to utility scale</strong></Tick>
              <Tick>Execution by our own trained and supervised site crew</Tick>
              <Tick>Realistic schedules committed only after a site survey</Tick>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/projects">See our work</Btn>
              <Btn to="/contact" variant="outline">Contact the team</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* stats band */}
      <section className="border-y border-line bg-mist py-12">
        <div className="shell grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="font-display text-[2rem] font-semibold leading-none text-ink lg:text-[2.4rem]">
                <Counter value={s.value} decimals={s.decimals || 0} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* timeline */}
      <section className="bg-white py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            split
            eyebrow="Our journey"
            title={<>From first site to <span className="accent">our own identity</span></>}
            text="Every milestone below is real work delivered on the ground — in Solapur, in Jalgaon, and now from our office in Ahmedabad."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-px bg-line lg:grid-cols-5"
          >
            {timeline.map((t, i) => (
              <motion.div key={t.title} variants={staggerItem} className="group bg-white p-6 transition-colors duration-300 hover:bg-mist">
                <div className="flex items-center justify-between">
                  <span className="bg-navy-950 px-2.5 py-1 font-display text-[0.78rem] font-semibold tracking-wide text-white">
                    {t.year}
                  </span>
                  <span className="ghost-num">0{i + 1}</span>
                </div>
                <h4 className="mt-5 text-[0.94rem] leading-snug text-ink">{t.title}</h4>
                <p className="mt-2.5 text-[0.84rem] leading-relaxed">{t.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* vision / mission / values */}
      <section className="bg-navy-950 py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            light
            center
            eyebrow="What drives us"
            title={<>Vision, mission <span className="accent-light">&amp; values</span></>}
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-5 lg:grid-cols-3"
          >
            {pillars.map((p) => (
              <motion.div key={p.title} variants={staggerItem} className="card-dark p-8">
                <span className="icon-tile icon-tile-light"><Icon name={p.icon} /></span>
                <h3 className="mt-5 text-[1.15rem] text-white">{p.title}</h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-slate-400">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* why us */}
      <section className="bg-white py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            center
            eyebrow="Why choose us"
            title={<>Reasons clients <span className="accent">hand us the scope</span></>}
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
        </div>
      </section>

      <CTA
        eyebrow="Work with us"
        title="Let's build your solar plant together"
        text="From a first site survey to a commissioned plant, our team stays with you through the entire scope."
      />
    </>
  )
}
