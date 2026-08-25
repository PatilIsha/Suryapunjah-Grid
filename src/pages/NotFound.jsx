import { Btn } from '../components/ui'

export default function NotFound() {
  return (
    <section className="flex min-h-[62vh] items-center bg-navy-950 py-24">
      <div className="shell text-center">
        <span className="font-display text-[5rem] font-semibold leading-none text-white/10 sm:text-[7rem]">404</span>
        <h1 className="mt-3 text-[1.9rem] text-white sm:text-[2.5rem]">
          This page has drifted <span className="accent-light">off the grid</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-[0.93rem] text-slate-400">
          The page you are looking for does not exist. Head back to the homepage or tell us what you were after.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Btn to="/" variant="gold" size="lg">Back to home</Btn>
          <Btn to="/contact" variant="ghost" size="lg" icon={false}>Contact us</Btn>
        </div>
      </div>
    </section>
  )
}
