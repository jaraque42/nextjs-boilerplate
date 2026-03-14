import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY" },
      { status: 500 }
    )
  }

  const {
    nombre,
    email,
    tipoNegocio,
    paginas,
    idioma,
    objetivo,
    plazo,
    presupuesto,
  } = await req.json()

  if (!nombre || !email) {
    return NextResponse.json(
      { error: "Missing nombre or email" },
      { status: 400 }
    )
  }

  const resend = new Resend(apiKey)
  const toAddress = process.env.LEADS_TO ?? "kjaraquer@gmail.com"
  const fromAddress = process.env.RESEND_FROM ?? "onboarding@resend.dev"

  const text = [
    "Nueva solicitud desde el chat:",
    "",
    `Nombre: ${nombre}`,
    `Email: ${email}`,
    `Tipo de negocio: ${tipoNegocio}`,
    `Número de páginas: ${paginas}`,
    `Idioma: ${idioma}`,
    `Objetivo: ${objetivo}`,
    `Plazo: ${plazo}`,
    `Presupuesto: ${presupuesto}`,
  ].join("\n")

  await resend.emails.send({
    from: fromAddress,
    to: toAddress,
    subject: `Nuevo lead: ${nombre}`,
    text,
  })

  return NextResponse.json({ ok: true })
}
