"use client"

import { useState } from "react"

export default function ReservasPage() {
  const [step, setStep] = useState<"form" | "calendar">("form")
  const [loading, setLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    notas: "",
  })

  const calUrl = process.env.NEXT_PUBLIC_CAL_COM_URL ?? "https://cal.com/juan-araque"

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          objetivo: formData.notas,
          tipoNegocio: "Reserva de entrevista",
          paginas: "-",
          idioma: "-",
          plazo: "-",
          presupuesto: "-",
        }),
      })
      setStep("calendar")
    } catch (error) {
      console.error("Error enviando datos:", error)
      // Aun si falla el envío del correo, dejamos que agende
      setStep("calendar")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen px-6 pb-24 pt-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            Reservas
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Agenda una entrevista
          </h1>
          <p className="mt-3 text-white/60">
            {step === "form" 
              ? "Introduce tus datos para comenzar." 
              : "Ahora selecciona el día y hora que mejor te venga."}
          </p>
        </div>

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="mx-auto max-w-xl grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Nombre
              </label>
              <input
                required
                type="text"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                placeholder=""
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-emerald-300/50 outline-none transition"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Email
              </label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder=""
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-emerald-300/50 outline-none transition"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-xs uppercase tracking-[0.2em] text-white/50">
                Escriba aqui lo que necesita para ponernos en contacto
              </label>
              <textarea
                required
                rows={4}
                value={formData.notas}
                onChange={(e) => setFormData({ ...formData, notas: e.target.value })}
                placeholder=""
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-emerald-300/50 outline-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 rounded-full bg-emerald-300 py-4 text-sm font-semibold text-black transition hover:bg-emerald-200 disabled:opacity-50"
            >
              {loading ? "Procesando..." : "Continuar para elegir fecha"}
            </button>
          </form>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 animate-in fade-in duration-700">
            <iframe
              src={`${calUrl}?name=${encodeURIComponent(formData.nombre)}&email=${encodeURIComponent(formData.email)}&notes=${encodeURIComponent(formData.notas)}`}
              className="h-[700px] w-full rounded-2xl"
              title="Reservas"
            />
            <button 
              onClick={() => setStep("form")}
              className="mt-4 text-xs text-white/30 hover:text-white transition"
            >
              ← Volver a editar mis datos
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
