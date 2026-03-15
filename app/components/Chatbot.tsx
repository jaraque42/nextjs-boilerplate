"use client"

import { useState } from "react"

type SendState = "idle" | "sending" | "sent" | "error"

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [sendState, setSendState] = useState<SendState>("idle")

  async function handleSend() {
    setSendState("sending")
    try {
      await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: "Solicitud desde chat",
          email: "sin-email@chat.web",
          tipoNegocio: "-",
          paginas: "-",
          idioma: "-",
          objetivo: "-",
          plazo: "-",
          presupuesto: "-",
        }),
      })
      setSendState("sent")
    } catch {
      setSendState("error")
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-[300px] rounded-3xl border border-white/10 bg-[#0b0f14]/90 p-5 text-white shadow-[0_30px_120px_rgba(15,23,42,0.55)] backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Asistente</p>
              <p className="text-sm text-white/80">Juan Araquer</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-xs text-white/40 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-white/80">
            {sendState === "sent"
              ? "¡Perfecto! Juan se pondrá en contacto contigo pronto."
              : sendState === "error"
              ? "Algo falló. Inténtalo de nuevo o escríbeme directamente."
              : "¿Quieres concretar una cita con Juan?"}
          </div>

          {sendState === "idle" && (
            <button
              onClick={handleSend}
              className="mt-4 w-full rounded-full bg-emerald-300 py-2 text-sm font-semibold text-black transition hover:bg-emerald-200"
            >
              Enviar
            </button>
          )}

          {sendState === "sending" && (
            <p className="mt-4 text-center text-xs text-white/40">Enviando…</p>
          )}

          {sendState === "sent" && (
            <a
              href="/reservas"
              className="mt-4 inline-flex w-full justify-center rounded-full bg-emerald-300 px-4 py-2 text-xs font-semibold text-black hover:bg-emerald-200 transition-colors"
            >
              Agendar cita con Juan
            </a>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-emerald-300 px-4 py-3 text-xs font-semibold text-black shadow-lg"
      >
        {open ? "Cerrar" : "Chat"}
      </button>
    </div>
  )
}
