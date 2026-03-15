"use client"

import { useState } from "react"

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resultado, setResultado] = useState<string | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError(null)
    setResultado(null)

    const formData = new FormData(event.currentTarget)
    const payload = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      tipoNegocio: formData.get("tipoNegocio"),
      paginas: formData.get("paginas"),
      idioma: formData.get("idioma"),
      objetivo: formData.get("objetivo"),
      plazo: formData.get("plazo"),
      presupuesto: formData.get("presupuesto"),
    }

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error("No se pudo enviar la solicitud")
      }

      setResultado("¡Listo! Te contactaremos pronto. Puedes agendar ahora.")
    } catch (err) {
      setError("Hubo un problema. Intenta de nuevo en un minuto.")
    } finally {
      setLoading(false)
    }
  }

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
            <p className="text-base text-white/70 sm:text-lg">
              Diseño premium + automatización con IA para que tu negocio tenga un
              sitio rápido, claro y con foco en conversión.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/reservas"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px]"
              >
                Agendar entrevista
              </a>
              <a
                href="#propuesta"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60"
              >
                Generar propuesta con IA
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

      <section id="propuesta" className="mx-auto mt-20 max-w-4xl">
        <div className="rounded-[32px] border border-white/15 bg-white/5 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.45)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold text-white">
              Genera tu propuesta con IA
            </h2>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
              Respuesta en minutos
            </span>
          </div>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-1">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Nombre
              </label>
              <input
                name="nombre"
                required
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40"
                placeholder="Tu nombre"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40"
                placeholder="tu@email.com"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Tipo de negocio
              </label>
              <input
                name="tipoNegocio"
                required
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40"
                placeholder="Ej: restaurante, clínica, e-commerce..."
              />
            </div>

            <div className="grid gap-1">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Número de páginas
              </label>
              <input
                name="paginas"
                required
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40"
                placeholder="Ej: 1, 5, 10"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Idioma
              </label>
              <input
                name="idioma"
                required
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40"
                placeholder="Ej: español, inglés"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Objetivo principal
              </label>
              <input
                name="objetivo"
                required
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40"
                placeholder="Ej: captar leads, vender, informar"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Plazo
              </label>
              <input
                name="plazo"
                required
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40"
                placeholder="Ej: 2 semanas, 1 mes"
              />
            </div>

            <div className="grid gap-1">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Presupuesto
              </label>
              <input
                name="presupuesto"
                required
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40"
                placeholder="Ej: pendiente, 500€, 1.500€"
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px] disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Generando propuesta..." : "Generar propuesta"}
            </button>
          </form>

          {error && <p className="mt-4 text-red-300">{error}</p>}

          {resultado && (
            <div className="mt-6 whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80">
              {resultado}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
