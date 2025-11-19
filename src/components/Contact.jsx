import { Mail, Linkedin, Github, Code2 } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-sky-500 p-1 shadow-lg">
          <div className="rounded-3xl bg-white dark:bg-slate-900 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Let’s build something intelligent</h2>
                <p className="mt-2 text-slate-700/90 dark:text-slate-300">Open to internships, collaborations, and AI product work.</p>
                <a href="mailto:aadrika.jain_cs.aiml22@gla.ac.in" className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-indigo-700 transition">
                  <Mail className="h-4 w-4" /> aadrika.jain_cs.aiml22@gla.ac.in
                </a>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <a href="https://www.linkedin.com/in/aadrika-jain/" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200/70 dark:border-white/10 p-4 hover:shadow-md transition flex items-center justify-center gap-2 text-slate-700 dark:text-slate-200">
                  <Linkedin className="h-5 w-5 text-indigo-600" /> LinkedIn
                </a>
                <a href="https://github.com/Aadrika13" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200/70 dark:border-white/10 p-4 hover:shadow-md transition flex items-center justify-center gap-2 text-slate-700 dark:text-slate-200">
                  <Github className="h-5 w-5 text-indigo-600" /> GitHub
                </a>
                <a href="https://leetcode.com/u/Aadrika_Jain/" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200/70 dark:border-white/10 p-4 hover:shadow-md transition flex items-center justify-center gap-2 text-slate-700 dark:text-slate-200">
                  <Code2 className="h-5 w-5 text-indigo-600" /> LeetCode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
