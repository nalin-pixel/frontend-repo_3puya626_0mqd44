import { Brain, Code, Wrench, Sparkles } from 'lucide-react'

export default function Skills() {
  const groups = [
    {
      icon: Brain,
      title: 'AI / ML',
      items: ['Deep Learning', 'NLP', 'GenAI', 'AI Agents']
    },
    {
      icon: Code,
      title: 'Programming',
      items: ['Java', 'Python', 'JavaScript', 'HTML', 'CSS']
    },
    {
      icon: Wrench,
      title: 'Tools',
      items: ['Git', 'GitHub', 'REST APIs']
    },
    {
      icon: Sparkles,
      title: 'Soft Skills',
      items: ['Communication', 'Teamwork', 'Critical Thinking']
    }
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-8">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <g.icon className="h-5 w-5 text-indigo-600" />
                <h3 className="font-semibold text-slate-900 dark:text-white">{g.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700/90 dark:text-slate-300 text-sm">
                {g.items.map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-indigo-500">•</span>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
