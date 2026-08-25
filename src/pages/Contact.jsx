import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import { PageHero, CTA } from '../components/common'
import { Icon, Reveal, SectionHeading, stagger, staggerItem } from '../components/ui'
import { company } from '../data/site'

const SERVICE_OPTIONS = [
  'Solar Ground Mounted Project EPC',
  'Balance of System (0.1 MW to Infinite)',
  'Material Supply Only',
  'Design & Engineering',
  'Testing, Repair & Rectification',
  'Other / Not sure yet',
]
const EMPTY = { name: '', phone: '', email: '', location: '', service: SERVICE_OPTIONS[0], message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((x) => ({ ...x, [k]: undefined }))
  }

  const submit = (ev) => {
    ev.preventDefault()
    const e = {}
    if (form.name.trim().length < 3) e.name = 'Please enter your full name.'
    if (!/^[0-9+\-\s()]{10,16}$/.test(form.phone.trim())) e.phone = 'Enter a valid mobile number.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) e.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) e.message = 'Tell us a little about your requirement.'
    setErrors(e)
    if (Object.keys(e).length) return

    const body = [
      `Name: ${form.name}`, `Mobile: ${form.phone}`, `Email: ${form.email}`,
      `Service: ${form.service}`, `Location: ${form.location || '-'}`, '', 'Requirement:', form.message,
    ].join('\n')

    window.location.href =
      `mailto:${company.email}?subject=${encodeURIComponent(`Website Enquiry - ${form.name}`)}` +
      `&body=${encodeURIComponent(body)}`

    setSent(true)
    setForm(EMPTY)
  }

  const label = 'mb-2 block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink'
  const field =
    'w-full rounded-[3px] border bg-white px-4 py-3 text-[0.9rem] outline-none transition-colors duration-300 focus:border-gold-600'

  const cards = [
    { Ico: MapPin, title: 'Office address', lines: [company.address.line1, company.address.line2, company.address.line3] },
    { Ico: Phone, title: 'Call us', links: company.phones.map((p) => ({ label: p.display, href: `tel:${p.tel}` })), note: company.hours },
    { Ico: Mail, title: 'Email us', links: [{ label: company.email, href: `mailto:${company.email}` }], note: 'We reply within one working day.' },
  ]

  return (
    <>
      <PageHero
        title={<>Contact <span className="accent-light">Us</span></>}
        crumb="Contact"
        image="/img/team.jpg"
        text="Send us your land size, capacity requirement or the balance of system list you need priced."
      />

      {/* contact cards */}
      <section className="bg-white py-16 lg:py-20">
        <div className="shell">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 lg:grid-cols-3"
          >
            {cards.map((c) => (
              <motion.div key={c.title} variants={staggerItem} className="card flex gap-5 p-7">
                <span className="icon-tile"><c.Ico className="h-4 w-4" strokeWidth={1.9} /></span>
                <div>
                  <h3 className="text-[0.98rem] text-ink">{c.title}</h3>
                  <div className="mt-2.5 space-y-0.5 text-[0.88rem] leading-relaxed">
                    {c.lines?.map((l) => <p key={l}>{l}</p>)}
                    {c.links?.map((l) => (
                      <a key={l.href} href={l.href} className="block break-all transition-colors hover:text-gold-600">
                        {l.label}
                      </a>
                    ))}
                  </div>
                  {c.note && <p className="mt-2.5 text-[0.78rem] text-muted">{c.note}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* form + map */}
      <section className="bg-mist py-18 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <span className="eyebrow">Send an enquiry</span>
            <h2 className="mt-3.5 text-[1.75rem] leading-[1.06] sm:text-[2.1rem]">
              Tell us about <span className="accent">your project</span>
            </h2>
            <p className="mt-4 text-[0.93rem] leading-relaxed">
              Fill in the form and our team will get back with the right scope and a clear price.
            </p>

            <form onSubmit={submit} noValidate className="mt-8 border border-line bg-white p-7 lg:p-9">
              <div className="grid gap-x-5 sm:grid-cols-2">
                <div className="mb-5">
                  <label htmlFor="name" className={label}>Full name *</label>
                  <input id="name" value={form.name} onChange={set('name')} placeholder="Your name"
                    className={`${field} ${errors.name ? 'border-red-400' : 'border-line'}`} />
                  {errors.name && <small className="mt-1.5 block text-[0.74rem] text-red-500">{errors.name}</small>}
                </div>
                <div className="mb-5">
                  <label htmlFor="phone" className={label}>Mobile number *</label>
                  <input id="phone" value={form.phone} onChange={set('phone')} placeholder="10 digit mobile number"
                    className={`${field} ${errors.phone ? 'border-red-400' : 'border-line'}`} />
                  {errors.phone && <small className="mt-1.5 block text-[0.74rem] text-red-500">{errors.phone}</small>}
                </div>
              </div>

              <div className="grid gap-x-5 sm:grid-cols-2">
                <div className="mb-5">
                  <label htmlFor="email" className={label}>Email address *</label>
                  <input id="email" value={form.email} onChange={set('email')} placeholder="you@example.com"
                    className={`${field} ${errors.email ? 'border-red-400' : 'border-line'}`} />
                  {errors.email && <small className="mt-1.5 block text-[0.74rem] text-red-500">{errors.email}</small>}
                </div>
                <div className="mb-5">
                  <label htmlFor="location" className={label}>Project location</label>
                  <input id="location" value={form.location} onChange={set('location')} placeholder="District / State"
                    className={`${field} border-line`} />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="service" className={label}>Service required</label>
                <select id="service" value={form.service} onChange={set('service')} className={`${field} border-line`}>
                  {SERVICE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className={label}>Your requirement *</label>
                <textarea id="message" rows={5} value={form.message} onChange={set('message')}
                  placeholder="Capacity required, land available, timeline, or the BOS list you want priced..."
                  className={`${field} resize-y ${errors.message ? 'border-red-400' : 'border-line'}`} />
                {errors.message && <small className="mt-1.5 block text-[0.74rem] text-red-500">{errors.message}</small>}
              </div>

              <button
                type="submit"
                className="btn btn--dark w-full py-4 text-[0.76rem]"
              >
                Send enquiry
                <Send className="h-3.5 w-3.5" />
              </button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-start gap-3 border-l-2 border-leaf-500 bg-leaf-500/8 px-5 py-4 text-[0.85rem] text-leaf-600"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>Thank you — your mail app is opening with the enquiry ready to send. You can also call {company.phones[0].display}.</span>
                </motion.div>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Find us</span>
            <h2 className="mt-3.5 text-[1.75rem] leading-[1.06] sm:text-[2.1rem]">
              Our <span className="accent">Ahmedabad office</span>
            </h2>
            <p className="mt-4 text-[0.93rem] leading-relaxed">
              World Trade Tower, behind Skoda Showroom, Makarba — easily reached from S.G. Highway.
            </p>

            <div className="mt-8 overflow-hidden border border-line">
              <iframe
                src={company.mapEmbed}
                title="Suryapunjah Grid Energy LLP office location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[24rem] w-full grayscale-[30%] transition-all duration-500 hover:grayscale-0"
                style={{ border: 0 }}
              />
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="card flex gap-4 p-6">
                <span className="icon-tile"><Clock className="h-4 w-4" strokeWidth={1.9} /></span>
                <div>
                  <h4 className="text-[0.94rem] text-ink">Working hours</h4>
                  <p className="mt-1.5 text-[0.85rem]">Monday – Saturday<br />9:30 AM – 7:00 PM</p>
                </div>
              </div>
              <div className="card flex gap-4 p-6">
                <span className="icon-tile"><Icon name="file" /></span>
                <div>
                  <h4 className="text-[0.94rem] text-ink">Site visits</h4>
                  <p className="mt-1.5 text-[0.85rem]">Surveys arranged<br />across Gujarat &amp; Maharashtra</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* what helps us quote */}
      <section className="bg-white py-18 lg:py-24">
        <div className="shell">
          <SectionHeading
            center
            eyebrow="Before you write"
            title={<>What helps us <span className="accent">quote faster</span></>}
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: 'draft', t: 'Land / roof area', d: 'Approximate area available and its location.' },
              { icon: 'bolt', t: 'Capacity target', d: 'Plant size in kW or MW, if already decided.' },
              { icon: 'check', t: 'Scope needed', d: 'Full EPC, BOS only, or material supply.' },
              { icon: 'file', t: 'Timeline', d: 'When you want the plant generating.' },
            ].map((s, i) => (
              <motion.div key={s.t} variants={staggerItem} className="card p-7">
                <div className="flex items-center justify-between">
                  <span className="icon-tile"><Icon name={s.icon} /></span>
                  <span className="ghost-num">0{i + 1}</span>
                </div>
                <h4 className="mt-5 text-[0.98rem] text-ink">{s.t}</h4>
                <p className="mt-2.5 text-[0.86rem] leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA
        eyebrow="Prefer to talk?"
        title="Call us and get straight to an engineer"
        text="Two lines, both answered by the people who run the projects — not by an answering service."
        label="Send an enquiry"
      />
    </>
  )
}
