import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ScrollToTop, FloatingActions } from './components/common'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Directors from './pages/Directors'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const page = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
}

function Animated({ children }) {
  return <motion.main variants={page} initial="initial" animate="animate" exit="exit">{children}</motion.main>
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Animated><Home /></Animated>} />
          <Route path="/about" element={<Animated><About /></Animated>} />
          <Route path="/services" element={<Animated><Services /></Animated>} />
          <Route path="/projects" element={<Animated><Projects /></Animated>} />
          <Route path="/directors" element={<Animated><Directors /></Animated>} />
          <Route path="/contact" element={<Animated><Contact /></Animated>} />
          <Route path="*" element={<Animated><NotFound /></Animated>} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <FloatingActions />
    </>
  )
}
