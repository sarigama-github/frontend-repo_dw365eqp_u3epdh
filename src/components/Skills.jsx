import { Wrench, Workflow, Database, BarChart3, ShieldCheck, Rocket } from 'lucide-react'

const skills = [
  { icon: Workflow, title: 'Power Apps', points: ['Canvas & model-driven', 'Responsive design', 'Component libraries'] },
  { icon: Wrench, title: 'Power Automate', points: ['Approvals & RPA', 'SharePoint integration', 'Custom connectors'] },
  { icon: Database, title: 'SharePoint', points: ['Modern sites & SPFx', 'PnP provisioning', 'Permissions & governance'] },
  { icon: BarChart3, title: 'Power BI', points: ['Data modeling', 'DAX & visuals', 'Embedded analytics'] },
  { icon: ShieldCheck, title: 'Security', points: ['Dataverse roles', 'Conditional access', 'Environment strategy'] },
  { icon: Rocket, title: 'DevOps', points: ['ALM & pipelines', 'Solution packaging', 'Environments & releases'] }
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Core Skills</h2>
        <p className="mt-2 text-blue-200/80">What I use to turn business problems into seamless solutions.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, points }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition shadow-lg shadow-blue-500/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-500 to-violet-500 text-white">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-blue-100/90 text-sm">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
