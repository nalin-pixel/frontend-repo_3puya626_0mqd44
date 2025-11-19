import { motion } from 'framer-motion'
import { MapPin, Download, Mail } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-sky-400/10 to-amber-300/10 pointer-events-none" />
        <div className="h-[520px] w-full">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-1 text-sm text-slate-700 dark:text-slate-200 ring-1 ring-slate-200/60 dark:ring-white/10 shadow-sm">
            <MapPin className="h-4 w-4 text-indigo-600" /> Gwalior / Noida, India
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            Aadrika Jain
          </h1>

          <p className="mt-2 text-lg sm:text-xl text-indigo-700 dark:text-indigo-300">
            Trainee AI Developer at Nile Technologies Pvt. Ltd., Noida
          </p>

          <p className="mt-6 text-base sm:text-lg leading-7 text-slate-700/90 dark:text-slate-300">
            I build intelligent systems that feel helpful and human. Passionate about AI/ML and GenAI, I love turning ideas into practical products—AI agents, voice assistants, and no‑code automation tools that ship real value.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:aadrika.jain_cs.aiml22@gla.ac.in?subject=Resume%20Request%20-%20Aadrika%20Jain"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-5 py-2.5 text-sm font-medium shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-slate-800 px-5 py-2.5 text-sm font-medium shadow hover:shadow-md transition ring-1 ring-slate-200"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
