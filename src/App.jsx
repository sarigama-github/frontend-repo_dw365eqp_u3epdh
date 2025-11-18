import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.10),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.10),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.06),transparent_40%)]" />
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Contact />
      <footer className="relative border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300/70 text-sm">© {new Date().getFullYear()} Your Name — SharePoint & Power Platform Developer</p>
          <div className="text-blue-300/60 text-sm">Built with care • Interactive 3D hero</div>
        </div>
      </footer>
    </div>
  )
}

export default App