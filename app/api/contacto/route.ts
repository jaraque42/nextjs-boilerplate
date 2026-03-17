import { NextResponse } from "next/server"
import { Resend } from "resend"
import { getSupabaseAdmin } from "@/lib/supabase/admin"

export async function POST(req: Request) {
  const payload = await req.json().catch(() => null)
  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
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
  } = payload as Record<string, unknown>

  if (!nombre || !email) {
    return NextResponse.json(
      { error: "Missing nombre or email" },
      { status: 400 }
    )
  }

  const nombreText = String(nombre).trim()
  const emailText = String(email).trim()

  let stored = false
  let emailed = false
  let storeError: string | null = null
  let emailError: string | null = null

  try {
    const supabase = getSupabaseAdmin()
    const forwardedFor = req.headers.get("x-forwarded-for") ?? ""
    const ip = forwardedFor.split(",")[0]?.trim() || null
    const userAgent = req.headers.get("user-agent") || null

    const { error } = await supabase.from("leads").insert({
      nombre: nombreText,
      email: emailText,
      tipo_negocio: tipoNegocio ? String(tipoNegocio) : null,
      paginas: paginas ? String(paginas) : null,
      idioma: idioma ? String(idioma) : null,
      objetivo: objetivo ? String(objetivo) : null,
      plazo: plazo ? String(plazo) : null,
      presupuesto: presupuesto ? String(presupuesto) : null,
      source: "api/contacto",
      user_agent: userAgent,
      ip,
    })

    if (error) throw error
    stored = true
  } catch (err) {
    storeError = err instanceof Error ? err.message : "Unknown error"
  }

  const apiKey = process.env.RESEND_API_KEY
  if (apiKey) {
    try {
      const resend = new Resend(apiKey)
      const toAddress = process.env.LEADS_TO ?? "kjaraquer@gmail.com"
      const fromAddress = process.env.RESEND_FROM ?? "onboarding@resend.dev"

      const text = [
        "Nueva solicitud desde el chat:",
        "",
        `Nombre: ${nombreText}`,
        `Email: ${emailText}`,
        `Tipo de negocio: ${tipoNegocio ?? "-"}`,
        `Número de páginas: ${paginas ?? "-"}`,
        `Idioma: ${idioma ?? "-"}`,
        `Objetivo: ${objetivo ?? "-"}`,
        `Plazo: ${plazo ?? "-"}`,
        `Presupuesto: ${presupuesto ?? "-"}`,
      ].join("\n")

      await resend.emails.send({
        from: fromAddress,
        to: toAddress,
        subject: `Nuevo lead: ${nombreText}`,
        text,
      })

      emailed = true
    } catch (err) {
      emailError = err instanceof Error ? err.message : "Unknown error"
    }
  }

  if (!stored && !emailed) {
    return NextResponse.json(
      { ok: false, stored, emailed, storeError, emailError },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true, stored, emailed })
}
