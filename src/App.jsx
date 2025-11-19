import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import CoCurricular from './components/CoCurricular'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/70 dark:border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 py-3">
          <a href="#" className="font-semibold">Aadrika Jain</a>
          <nav className="hidden sm:flex items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
            <a href="#experience" className="hover:text-indigo-600">Experience</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#achievements" className="hover:text-indigo-600">Achievements</a>
            <a href="#co-curricular" className="hover:text-indigo-600">Co‑Curricular</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <CoCurricular />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Aadrika Jain · Built with a love for AI
      </footer>
    </div>
  )
}

export default App
