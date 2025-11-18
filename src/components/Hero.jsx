import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/40 to-slate-900 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-sm border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available for freelance & full-time
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            SharePoint & Power Platform Developer
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100/90">
            I design and build modern intranets, business apps, and automations across SharePoint, Power Apps, Power Automate, and Power BI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#work" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition">
              View Selected Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
