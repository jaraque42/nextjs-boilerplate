"use client"

import { useEffect, useMemo, useState } from "react"

const questions = [
  {
    key: "tipoNegocio",
    label: "Perfecto. ¿Qué tipo de negocio tienes?",
    placeholder: "Ej: restaurante, clínica, e-commerce",
  },
  {
    key: "paginas",
    label: "¿Cuántas páginas necesitas?",
    placeholder: "Ej: 1, 5, 10",
  },
  {
    key: "idioma",
    label: "¿En qué idioma debe estar la web?",
    placeholder: "Ej: español, inglés",
  },
  {
    key: "objetivo",
    label: "¿Cuál es el objetivo principal de la web?",
    placeholder: "Ej: captar leads, vender, informar",
  },
  {
    key: "plazo",
    label: "¿Qué plazo tienes en mente?",
    placeholder: "Ej: 2 semanas, 1 mes",
  },
  {
    key: "presupuesto",
    label: "¿Tienes un presupuesto estimado?",
    placeholder: "Ej: pendiente, 500€, 1.500€",
  },
]

type Message = { role: "bot" | "user"; text: string }

type Answers = Record<string, string>

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [answers, setAnswers] = useState<Answers>({})
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)

  const currentQuestion = useMemo(() => questions[step], [step])

  useEffect(() => {
    if (!open || messages.length > 0) return

    setMessages([
      {
        role: "bot",
        text: "Hola, soy el asistente de Juan. Vamos a preparar tu propuesta.",
      },
      {
        role: "bot",
        text: questions[0].label,
      },
    ])
  }, [open, messages.length])

  function buildProposal(payload: Answers) {
    return [
      "Resumen de tu proyecto:",
      `- Tipo de negocio: ${payload.tipoNegocio}`,
      `- Número de páginas: ${payload.paginas}`,
      `- Idioma: ${payload.idioma}`,
      `- Objetivo: ${payload.objetivo}`,
      `- Plazo: ${payload.plazo}`,
      `- Presupuesto: ${payload.presupuesto}`,
      "",
      "Plan sugerido:",
      "- Discovery y propuesta de estructura.",
      "- Diseño UI moderno alineado a tu marca.",
      "- Implementación con rendimiento optimizado.",
      "- Revisión final y publicación.",
      "",
      "Siguientes pasos:",
      "Agenda tu entrevista en /reservas",
    ].join("\n")
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (!input.trim() || !currentQuestion) return

    const value = input.trim()
    setInput("")

    setMessages((prev) => [...prev, { role: "user", text: value }])
    setAnswers((prev) => ({ ...prev, [currentQuestion.key]: value }))

    const nextStep = step + 1
    const nextQuestion = questions[nextStep]

    if (nextQuestion) {
      setStep(nextStep)
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: nextQuestion.label },
      ])
      return
    }

    setLoading(true)
    setMessages((prev) => [
      ...prev,
      { role: "bot", text: "Genial, preparando tu propuesta..." },
    ])

    const finalPayload = { ...answers, [currentQuestion.key]: value }
    const proposal = buildProposal(finalPayload)

    setMessages((prev) => [
      ...prev,
      { role: "bot", text: proposal },
      {
        role: "bot",
        text: "Si quieres, agenda tu entrevista aqui: /reservas",
      },
    ])
    setDone(true)
    setLoading(false)
  }

  function handleReset() {
    setMessages([])
    setAnswers({})
    setInput("")
    setLoading(false)
    setStep(0)
    setDone(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-[320px] rounded-3xl border border-white/10 bg-[#0b0f14]/90 p-4 text-white shadow-[0_30px_120px_rgba(15,23,42,0.55)] backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Asistente IA
              </p>
              <p className="text-sm text-white/80">
                Te ayudo a preparar tu propuesta
              </p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-white/50 hover:text-white"
            >
              Reiniciar
            </button>
          </div>

          <div className="mt-4 max-h-64 space-y-3 overflow-y-auto pr-1 text-sm">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={
                  message.role === "user"
                    ? "ml-auto w-fit rounded-2xl bg-emerald-300/90 px-3 py-2 text-black"
                    : "mr-auto w-fit rounded-2xl bg-white/10 px-3 py-2 text-white/80"
                }
              >
                {message.text}
              </div>
            ))}
            {loading && (
              <div className="mr-auto w-fit rounded-2xl bg-white/10 px-3 py-2 text-white/70">
                Pensando...
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="mt-4 grid gap-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={currentQuestion?.placeholder ?? "Escribe tu mensaje"}
              disabled={loading || done}
              className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !currentQuestion || done}
              className="rounded-full bg-emerald-300 px-3 py-2 text-xs font-semibold text-black disabled:opacity-60"
            >
              Enviar
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-emerald-300 px-4 py-3 text-xs font-semibold text-black shadow-lg"
      >
        {open ? "Cerrar" : "Chat IA"}
      </button>
    </div>
  )
}
