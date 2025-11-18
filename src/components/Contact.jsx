import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // In a later iteration we can wire this to the backend. For now, simulate.
      await new Promise(r => setTimeout(r, 900))
      setStatus('Message sent! I will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="mt-2 text-blue-200/80">Tell me about your project and how I can help.</p>

          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Name" required className="col-span-1 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <input name="email" type="email" placeholder="Email" required className="col-span-1 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <input name="company" placeholder="Company" className="sm:col-span-2 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <textarea name="message" rows="5" placeholder="Project details" required className="sm:col-span-2 px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <div className="sm:col-span-2 flex items-center justify-between">
              <button className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition">
                Send message
              </button>
              <p className="text-blue-200/70 text-sm">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
