import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Intranet Hub for 5k+ employees',
    desc: 'Modern SharePoint hub with targeted news, Viva Connections, and governance.',
    tags: ['SharePoint', 'Viva', 'PnP'],
  },
  {
    title: 'Inspection app for field engineers',
    desc: 'Responsive Power Apps canvas app with offline sync and barcode scanning.',
    tags: ['Power Apps', 'Offline', 'Dataverse'],
  },
  {
    title: 'Invoice approvals automation',
    desc: 'End-to-end Power Automate flow with adaptive cards and audit logging.',
    tags: ['Power Automate', 'Approvals', 'Graph'],
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(56,189,248,0.15),transparent)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
            <p className="mt-2 text-blue-200/80 max-w-2xl">A glimpse into platforms, apps, and automations I shipped.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-blue-300 hover:text-white">Discuss your project <ArrowUpRight className="w-4 h-4" /></a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-violet-500/20" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-blue-300 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <p className="mt-2 text-blue-100/90 text-sm">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-blue-100 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
