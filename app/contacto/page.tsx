"use client"

import { useState } from "react"

type FormState = "idle" | "loading" | "success" | "error"

export default function Contacto() {
  const [state, setState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    tipoNegocio: "",
    paginas: "",
    idioma: "",
    objetivo: "",
    plazo: "",
    presupuesto: "",
    website: "", // honeypot
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState("loading")
    setErrorMessage(null)

    try {
      if (formData.website.trim()) {
        setState("success")
        return
      }

      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          tipoNegocio: formData.tipoNegocio || "-",
          paginas: formData.paginas || "-",
          idioma: formData.idioma || "-",
          objetivo: formData.objetivo,
          plazo: formData.plazo || "-",
          presupuesto: formData.presupuesto || "-",
        }),
      })

      const json = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null

      if (!res.ok || !json?.ok) {
        throw new Error(json?.error ?? "No se pudo enviar el formulario")
      }

      setState("success")
      setFormData({
        nombre: "",
        email: "",
        tipoNegocio: "",
        paginas: "",
        idioma: "",
        objetivo: "",
        plazo: "",
        presupuesto: "",
        website: "",
      })
    } catch (err) {
      setState("error")
      setErrorMessage(err instanceof Error ? err.message : "Error desconocido")
    }
  }

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
            Cuéntame un poco sobre lo que necesitas y te respondo lo antes posible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid min-w-0 gap-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Nombre
              </label>
              <input
                required
                type="text"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                className="w-full min-w-0 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-emerald-300/50"
              />
            </div>

            <div className="grid min-w-0 gap-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Email
              </label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full min-w-0 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-emerald-300/50"
              />
            </div>
          </div>

          <input
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid min-w-0 gap-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Tipo de negocio (opcional)
              </label>
              <input
                type="text"
                value={formData.tipoNegocio}
                onChange={(e) =>
                  setFormData({ ...formData, tipoNegocio: e.target.value })
                }
                className="w-full min-w-0 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-emerald-300/50"
              />
            </div>

            <div className="grid min-w-0 gap-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Idioma (opcional)
              </label>
              <input
                type="text"
                placeholder="Español, Inglés..."
                value={formData.idioma}
                onChange={(e) =>
                  setFormData({ ...formData, idioma: e.target.value })
                }
                className="w-full min-w-0 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-emerald-300/50"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="grid min-w-0 gap-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Páginas (opcional)
              </label>
              <input
                type="text"
                placeholder="Landing, 5 páginas..."
                value={formData.paginas}
                onChange={(e) =>
                  setFormData({ ...formData, paginas: e.target.value })
                }
                className="w-full min-w-0 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-emerald-300/50"
              />
            </div>

            <div className="grid min-w-0 gap-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Plazo (opcional)
              </label>
              <input
                type="text"
                placeholder="2 semanas..."
                value={formData.plazo}
                onChange={(e) =>
                  setFormData({ ...formData, plazo: e.target.value })
                }
                className="w-full min-w-0 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-emerald-300/50"
              />
            </div>

            <div className="grid min-w-0 gap-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Presupuesto (opcional)
              </label>
              <input
                type="text"
                placeholder="€1.000–€3.000..."
                value={formData.presupuesto}
                onChange={(e) =>
                  setFormData({ ...formData, presupuesto: e.target.value })
                }
                className="w-full min-w-0 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-emerald-300/50"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.2em] text-white/50">
              ¿Qué necesitas?
            </label>
            <textarea
              required
              rows={5}
              value={formData.objetivo}
              onChange={(e) =>
                setFormData({ ...formData, objetivo: e.target.value })
              }
              className="w-full min-w-0 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-emerald-300/50"
            />
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <button
              type="submit"
              disabled={state === "loading"}
              className="rounded-full bg-emerald-300 px-6 py-4 text-sm font-semibold text-black transition hover:bg-emerald-200 disabled:opacity-50"
            >
              {state === "loading" ? "Enviando..." : "Enviar propuesta"}
            </button>

            {state === "success" ? (
              <p className="text-sm text-emerald-200">
                Recibido. Te contactaré pronto.
              </p>
            ) : state === "error" ? (
              <p className="text-sm text-red-200">
                {errorMessage ?? "No se pudo enviar. Intenta de nuevo."}
              </p>
            ) : (
              <p className="text-sm text-white/40">
                También puedes escribir por WhatsApp o Instagram.
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  )
}
