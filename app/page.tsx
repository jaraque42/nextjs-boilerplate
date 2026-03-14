"use client"

import { useState } from "react"

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resultado, setResultado] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    setResultado(null)

    const payload = {
      tipoNegocio: formData.get("tipoNegocio"),
      paginas: formData.get("paginas"),
      idioma: formData.get("idioma"),
      objetivo: formData.get("objetivo"),
      plazo: formData.get("plazo"),
      presupuesto: formData.get("presupuesto"),
    }

    try {
      const res = await fetch("/api/propuesta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error("No se pudo generar la propuesta")
      }

      const data = await res.json()
      setResultado(data.text ?? "Sin respuesta")
    } catch (err) {
      setError("Hubo un problema. Intenta de nuevo en un minuto.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 gap-10">
      <section className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Construcción web con IA</h1>
        <p className="text-lg text-gray-600 mb-6">
          Creamos tu web rápida, moderna y enfocada a convertir. Cuéntanos tu
          idea y te devolvemos un plan claro en minutos.
        </p>
        <a
          href="/reservas"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 inline-block"
        >
          Agendar entrevista
        </a>
      </section>

      <section className="w-full max-w-3xl border rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Genera tu propuesta</h2>
        <form action={onSubmit} className="grid gap-4">
          <div className="grid gap-1">
            <label className="text-sm text-gray-700">Tipo de negocio</label>
            <input
              name="tipoNegocio"
              required
              className="border rounded-lg px-3 py-2"
              placeholder="Ej: restaurante, clínica, e-commerce..."
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-gray-700">Número de páginas</label>
            <input
              name="paginas"
              required
              className="border rounded-lg px-3 py-2"
              placeholder="Ej: 1, 5, 10"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-gray-700">Idioma</label>
            <input
              name="idioma"
              required
              className="border rounded-lg px-3 py-2"
              placeholder="Ej: español, inglés"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-gray-700">Objetivo principal</label>
            <input
              name="objetivo"
              required
              className="border rounded-lg px-3 py-2"
              placeholder="Ej: captar leads, vender, informar"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-gray-700">Plazo</label>
            <input
              name="plazo"
              required
              className="border rounded-lg px-3 py-2"
              placeholder="Ej: 2 semanas, 1 mes"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-sm text-gray-700">Presupuesto</label>
            <input
              name="presupuesto"
              required
              className="border rounded-lg px-3 py-2"
              placeholder="Ej: pendiente, 500€, 1.500€"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Generando propuesta..." : "Generar propuesta"}
          </button>
        </form>

        {error && <p className="text-red-600 mt-4">{error}</p>}

        {resultado && (
          <div className="mt-6 whitespace-pre-wrap border-t pt-4 text-gray-800">
            {resultado}
          </div>
        )}
      </section>
    </main>
  )
}
