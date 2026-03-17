import { getSupabaseAdmin } from "@/lib/supabase/admin"

type Lead = {
  id: string
  created_at: string
  nombre: string
  email: string
  tipo_negocio: string | null
  paginas: string | null
  idioma: string | null
  objetivo: string | null
  plazo: string | null
  presupuesto: string | null
}

export const runtime = "nodejs"

export default async function AdminLeadsPage() {
  const supabase = getSupabaseAdmin()

  const { data, error } = await supabase
    .from("leads")
    .select(
      "id, created_at, nombre, email, tipo_negocio, paginas, idioma, objetivo, plazo, presupuesto"
    )
    .order("created_at", { ascending: false })
    .limit(200)

  if (error) {
    return (
      <main className="min-h-screen px-6 pb-24 pt-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-2xl font-semibold text-white">Leads</h1>
          <p className="mt-4 text-sm text-red-200">
            No se pudo cargar la tabla <code>leads</code>: {error.message}
          </p>
        </div>
      </main>
    )
  }

  const leads = (data ?? []) as Lead[]

  return (
    <main className="min-h-screen px-6 pb-24 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-white">Leads</h1>
            <p className="mt-2 text-sm text-white/50">
              Mostrando los últimos {leads.length} (máx. 200).
            </p>
          </div>
          <a
            href="/admin/leads/export"
            className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-5 py-3 text-xs font-semibold text-black transition hover:bg-emerald-200"
          >
            Exportar CSV
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-white/80">
              <thead className="border-b border-white/10 text-[11px] uppercase tracking-[0.2em] text-white/50">
                <tr>
                  <th className="px-4 py-3">Fecha</th>
                  <th className="px-4 py-3">Nombre</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Objetivo</th>
                  <th className="px-4 py-3">Plazo</th>
                  <th className="px-4 py-3">Presupuesto</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td className="px-4 py-6 text-white/50" colSpan={6}>
                      No hay leads todavía.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-white/10">
                      <td className="whitespace-nowrap px-4 py-3 text-white/60">
                        {new Date(lead.created_at).toLocaleString("es-ES")}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">
                        {lead.nombre}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">
                        <a
                          className="text-emerald-200 hover:underline"
                          href={`mailto:${lead.email}`}
                        >
                          {lead.email}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-white/70">
                        {lead.objetivo ?? "-"}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-white/70">
                        {lead.plazo ?? "-"}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-white/70">
                        {lead.presupuesto ?? "-"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

