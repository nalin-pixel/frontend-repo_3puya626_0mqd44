import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Experience() {
  const items = [
    {
      role: 'Trainee AI Developer',
      org: 'Nile Technologies Pvt. Ltd., Noida',
      period: 'Oct 2025 – Present',
      desc: 'Building AI-driven assistants and internal automation using LLMs, speech tech and pragmatic engineering.'
    },
    {
      role: 'Trainee',
      org: 'GLA University',
      period: 'June 2024 – July 2024',
      desc: 'Worked on emotion recognition in virtual meetings using Deep Learning and Computer Vision.'
    }
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20">
            <Briefcase className="h-5 w-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Experience</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.role} – <span className="text-indigo-600">{item.org}</span></h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.period}</p>
              <p className="mt-3 text-slate-700/90 dark:text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
