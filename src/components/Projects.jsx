import { motion } from 'framer-motion'
import { Hammer, MicVocal, Globe2 } from 'lucide-react'

const projects = [
  {
    title: 'GLAVOX – Real-Time Conversational AI Voice Assistant',
    year: '2025 – Present',
    tech: ['GPT-4', 'OpenAI', 'Google STT', 'AWS Polly', 'Express.js'],
    features: [
      'Live speech-to-speech conversations',
      'Latency-optimized streaming pipeline',
      'Context memory and intent routing'
    ],
    link: null
  },
  {
    title: 'WEBGINI – No-Code AI Website Builder',
    year: '2025',
    tech: ['Codellama', 'Ollama', 'LangChain', 'CrewAI', 'Node.js'],
    features: [
      'Describe and deploy websites in minutes',
      'Multi-agent collaboration for content & layout',
      'Local model support via Ollama'
    ],
    link: null
  },
  {
    title: 'MapNation – Path to Progress',
    year: '2024',
    tech: ['Gemini API', 'AI Roadmaps', 'JSON Parsing'],
    features: [
      'Goal-based learning maps',
      'Generative explanations and next steps',
      'Shareable progress plans'
    ],
    link: null
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20">
            <Hammer className="h-5 w-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm flex flex-col"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-snug">{p.title}</h3>
                {i === 0 ? <MicVocal className="h-5 w-5 text-indigo-600" /> : i === 1 ? <Globe2 className="h-5 w-5 text-indigo-600" /> : null}
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{p.year}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 ring-1 ring-indigo-200/70 dark:ring-indigo-400/20 px-2.5 py-1 text-xs font-medium">{t}</span>
                ))}
              </div>

              <ul className="mt-4 space-y-2 text-slate-700/90 dark:text-slate-300 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-indigo-500">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700">
                  View project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
