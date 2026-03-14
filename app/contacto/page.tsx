export default function Contacto() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            Contacto
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Conversemos sobre tu proyecto
          </h1>
          <p className="mt-3 text-white/60">
            Cuéntanos lo esencial y te respondemos con una propuesta clara.
          </p>
        </div>

        <form className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-1">
            <label className="text-xs uppercase tracking-[0.2em] text-white/50">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-xs uppercase tracking-[0.2em] text-white/50">
              Email
            </label>
            <input
              type="email"
              placeholder="Tu email"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-xs uppercase tracking-[0.2em] text-white/50">
              Mensaje
            </label>
            <textarea
              placeholder="Tu mensaje"
              rows={5}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-black"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </main>
  )
}
