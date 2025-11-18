import { Menu, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 shadow-lg shadow-blue-500/30" />
          <div>
            <p className="text-white font-semibold leading-none">SharePoint & Power Platform</p>
            <p className="text-xs text-blue-200/70 leading-none mt-1">Creative Portfolio</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-blue-100/80 hover:text-white transition">Work</a>
          <a href="#skills" className="text-blue-100/80 hover:text-white transition">Skills</a>
          <a href="#contact" className="text-blue-100/80 hover:text-white transition">Contact</a>
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-blue-100 hover:text-white transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-blue-100 hover:text-white transition">
            <Github className="w-5 h-5" />
          </a>
          <a href="#contact" className="p-2 rounded-lg bg-blue-500/90 hover:bg-blue-500 text-white transition">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <button className="md:hidden p-2 rounded-lg bg-white/5 text-blue-100">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
