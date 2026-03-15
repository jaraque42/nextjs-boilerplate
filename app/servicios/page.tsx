export default function Servicios() {
  const servicios = [
    {
      titulo: "Landing de alto impacto",
      descripcion:
        "Arquitectura de conversión, copy IA y diseño premium para leads.",
    },
    {
      titulo: "Web corporativa escalable",
      descripcion:
        "Estructura modular, SEO técnico y performance optimizada.",
    },
    {
      titulo: "Automatización + IA",
      descripcion:
        "Chatbot, propuestas automáticas y flujos de captación inteligentes.",
    },
  ]

  return (
    <main className="min-h-screen px-6 pb-24 pt-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            Servicios
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Soluciones para vender más con tu web
          </h1>
          <p className="mt-3 text-white/60">
            Planes flexibles y adaptados a tu modelo de negocio.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80"
            >
              <h2 className="text-lg font-semibold text-white">{s.titulo}</h2>
              <p className="mt-3 text-sm text-white/60">{s.descripcion}</p>
              <a
                href="/reservas"
                className="mt-6 inline-flex text-sm font-semibold text-emerald-200"
              >
                Agendar cita con Juan
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
