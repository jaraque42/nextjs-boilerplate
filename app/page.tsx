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

      <section className="mx-auto mt-32 max-w-6xl">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Mis Proyectos</h2>
          <p className="mx-auto max-w-2xl text-white/60">
            Una selección de trabajos recientes enfocados en diseño premium, 
            experiencia de usuario y optimización para conversión.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Next.js Boilerplate",
              description: "Estructura profesional de Next.js optimizada para SEO y performance, con integración de Supabase.",
              url: "https://nextjs-boilerplate-ivory-theta-38.vercel.app/",
              gradient: "from-emerald-400/20 to-cyan-400/10",
              tag: "Development"
            },
            {
              title: "San Fernando Psicotécnico",
              description: "Landing page estratégica para centro médico, diseñada para maximizar la agenda de citas.",
              url: "https://landing-san-fernando-psicotecnico-s.vercel.app/",
              gradient: "from-blue-400/20 to-emerald-400/10",
              tag: "Landing Page"
            },
          ].map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-2 transition-all hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className={`relative aspect-[16/10] overflow-hidden rounded-[24px] bg-gradient-to-br ${project.gradient} flex items-center justify-center transition-transform duration-500`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Placeholder for project preview */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                    <svg className="h-8 w-8 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Preview coming soon</span>
                </div>

                {/* Tag */}
                <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-wider text-white/70 backdrop-blur-md">
                  {project.tag}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="rounded-full bg-white/5 p-2 text-white/40 transition-all group-hover:bg-emerald-400 group-hover:text-black">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {project.description}
                </p>
              </div>
            </a>
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
