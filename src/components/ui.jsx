import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, animate } from 'framer-motion'
import {
  SunMedium, Zap, Truck, Ruler, Layers, Plug, ClipboardCheck, Wrench,
  Maximize2, Users, FileText, Eye, Target, HeartHandshake, HardHat, Boxes,
  ArrowRight, Check,
} from 'lucide-react'

/* ---------------- icons ---------------- */
const ICONS = {
  panel: SunMedium, bolt: Zap, truck: Truck, draft: Ruler, brick: Layers,
  plug: Plug, check: ClipboardCheck, wrench: Wrench, scale: Maximize2,
  team: Users, file: FileText, eye: Eye, target: Target, hands: HeartHandshake,
  hat: HardHat, boxes: Boxes,
}
export function Icon({ name, className = 'h-4 w-4' }) {
  const Cmp = ICONS[name] || SunMedium
  return <Cmp className={className} strokeWidth={1.9} />
}

/* ---------------- scroll reveal ---------------- */
export function Reveal({ children, y = 22, delay = 0, className = '', amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

/* ---------------- section heading ----------------
   Left-aligned heading with an optional supporting paragraph
   pushed to the right, the way industrial B2B sites lay it out. */
export function SectionHeading({
  eyebrow, title, text, light = false, center = false, split = false, className = '',
}) {
  const head = (
    <>
      <span className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}>{eyebrow}</span>
      <h2
        className={`mt-3.5 text-[1.85rem] leading-[1.05] sm:text-[2.3rem] lg:text-[2.7rem] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
    </>
  )

  if (split) {
    return (
      <Reveal className={className}>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <div>{head}</div>
          {text && (
            <p className={`text-[0.94rem] leading-relaxed ${light ? 'text-slate-400' : 'text-body'}`}>
              {text}
            </p>
          )}
        </div>
      </Reveal>
    )
  }

  return (
    <Reveal className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {head}
      {text && (
        <p className={`mt-4 text-[0.94rem] leading-relaxed ${light ? 'text-slate-400' : 'text-body'}`}>
          {text}
        </p>
      )}
    </Reveal>
  )
}

/* ---------------- buttons ---------------- */
const SIZES = {
  sm: 'px-4 py-2 text-[0.7rem]',
  md: 'px-6 py-3 text-[0.76rem]',
  lg: 'px-7 py-3.5 text-[0.8rem]',
}

export function Btn({
  to, href, children, variant = 'dark', size = 'md', icon = true, className = '', ...rest
}) {
  // hover behaviour (fill wipe + lift + icon slide) lives in .btn / .btn--* in index.css
  const cls = `btn btn--${variant} ${SIZES[size]} ${className}`

  const inner = (
    <>
      {children}
      {icon && <ArrowRight className="h-3.5 w-3.5" />}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}

/* ---------------- counter ---------------- */
export function Counter({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: setN })
    return () => c.stop()
  }, [inView, value])

  return <span ref={ref}>{n.toFixed(decimals)}{suffix}</span>
}

/* ---------------- small bits ---------------- */
export function Tick({ children, light = false }) {
  return (
    <li className="flex gap-3">
      <Check className={`mt-1 h-3.5 w-3.5 shrink-0 ${light ? 'text-gold-500' : 'text-leaf-600'}`} strokeWidth={3} />
      <span className={`text-[0.92rem] leading-relaxed ${light ? 'text-slate-400' : ''}`}>{children}</span>
    </li>
  )
}

export function Tag({ children, tone = 'navy' }) {
  const tones = {
    navy: 'bg-navy-900 text-white',
    gold: 'bg-gold-600 text-white',
    leaf: 'bg-leaf-600 text-white',
    soft: 'bg-mist text-ink border border-line',
  }
  return (
    <span className={`inline-block px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] ${tones[tone]}`}>
      {children}
    </span>
  )
}

/* inline stat used in the hero and in stat rows */
export function Stat({ value, label, decimals, suffix = '', plain }) {
  return (
    <div>
      <div className="font-display text-[1.65rem] font-semibold leading-none text-ink lg:text-[1.9rem]">
        {plain ?? <><Counter value={value} decimals={decimals || 0} />{suffix}</>}
      </div>
      <div className="mt-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted">{label}</div>
    </div>
  )
}
