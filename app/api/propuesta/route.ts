import OpenAI from "openai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing OPENAI_API_KEY" },
      { status: 500 }
    )
  }

  const {
    tipoNegocio,
    paginas,
    idioma,
    objetivo,
    plazo,
    presupuesto,
  } = await req.json()

  const client = new OpenAI({ apiKey })

  const input = [
    "Eres un consultor experto en creación de páginas web con IA.",
    "Genera un plan de propuesta breve y accionable.",
    "No inventes precios si el presupuesto está pendiente.",
    "Devuelve el resultado en español, usando viñetas y un bloque final 'Siguientes pasos'.",
    "Incluye un CTA final para agendar entrevista: 'Agenda tu entrevista en /reservas'.",
    "",
    `Tipo de negocio: ${tipoNegocio}`,
    `Número de páginas: ${paginas}`,
    `Idioma: ${idioma}`,
    `Objetivo: ${objetivo}`,
    `Plazo: ${plazo}`,
    `Presupuesto: ${presupuesto}`,
  ].join("\n")

  const response = await client.responses.create({
    model: "gpt-5",
    input,
  })

  return NextResponse.json({ text: response.output_text })
}
