"use client"

export default function Home() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-16 lg:pt-24">
      <section className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
              Studio de webs con IA
            </div>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              Tu web moderna, lista para vender en semanas, no meses.
            </h1>
            <h2 className="text-xl text-white/80">
              Diseño premium + automatización con IA para que tu negocio tenga un
              sitio rápido, claro y con foco en conversión.
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/reservas"
                className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-200 hover:translate-y-[-1px]"
              >
                Agendar cita con Juan
              </a>
              <a
                href="/sobre-mi"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60"
              >
                Saber más
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-xs text-white/50">
              <span>Tiempo medio: 2-4 semanas</span>
              <span>Entrega por fases</span>
              <span>Soporte y mejoras</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 rounded-[32px] bg-[radial-gradient(circle_at_top,#5eead4,transparent_55%)] blur-2xl opacity-40" />
            <div className="relative rounded-[28px] border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Mapa de proyecto
                </span>
                <span className="rounded-full bg-emerald-400/20 px-2 py-1 text-[11px] text-emerald-200">
                  IA activa
                </span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  "Discovery + posicionamiento",
                  "Wireframes y copy",
                  "Diseño UI moderno",
                  "Implementación Next.js",
                  "Optimización SEO y performance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-300/20 via-cyan-300/10 to-transparent p-4 text-sm text-white/70">
                Entrega incremental y métricas desde el primer día.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Estrategia clara",
              text: "Definimos objetivos, contenido y propuesta antes de diseñar.",
            },
            {
              title: "Diseño premium",
              text: "UI moderna, tipografía cuidada y experiencia mobile-first.",
            },
            {
              title: "Automatización IA",
              text: "Propuestas, copy y soporte inteligente para tus clientes.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white">¿Listo para empezar?</h2>
        <p className="mt-4 text-white/60">
          Hablemos sobre cómo podemos escalar tu negocio con una web de alto impacto.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/reservas"
            className="rounded-full bg-emerald-300 px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            Ir a cita con Juan
          </a>
        </div>
      </section>
    </main>
  )
}
