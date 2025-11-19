import { HeartPulse } from 'lucide-react'

export default function CoCurricular() {
  const items = [
    'National Yoga Champion',
    'IBM ICE Day & SRIJAN Coordinator'
  ]

  return (
    <section id="co-curricular" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20">
            <HeartPulse className="h-5 w-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Co-Curricular</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((a) => (
            <div key={a} className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm text-slate-700/90 dark:text-slate-300">
              • {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
