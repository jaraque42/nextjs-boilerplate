import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase/admin"

export const runtime = "nodejs"

function escapeCsv(value: unknown): string {
  const text = value == null ? "" : String(value)
  if (/[",\n\r]/.test(text)) return `"${text.replaceAll('"', '""')}"`
  return text
}

export async function GET() {
  const supabase = getSupabaseAdmin()

  const { data, error } = await supabase
    .from("leads")
    .select(
      "created_at, nombre, email, tipo_negocio, paginas, idioma, objetivo, plazo, presupuesto, source, ip, user_agent"
    )
    .order("created_at", { ascending: false })
    .limit(5000)

  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }

  const rows = data ?? []
  const header = [
    "created_at",
    "nombre",
    "email",
    "tipo_negocio",
    "paginas",
    "idioma",
    "objetivo",
    "plazo",
    "presupuesto",
    "source",
    "ip",
    "user_agent",
  ]

  const csv = [
    header.join(","),
    ...rows.map((row) =>
      header.map((key) => escapeCsv((row as Record<string, unknown>)[key])).join(",")
    ),
  ].join("\n")

  return new NextResponse(csv, {
    status: 200,
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": 'attachment; filename="leads.csv"',
      "cache-control": "no-store",
    },
  })
}

