export default function ReservasPage() {
  const calUrl =
    process.env.NEXT_PUBLIC_CAL_COM_URL ?? "https://cal.com/juan-araque"

  return (
    <main className="min-h-screen px-6 pb-24 pt-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            Reservas
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Agenda una entrevista
          </h1>
          <p className="mt-3 text-white/60">
            Elige un horario para tu llamada y revisamos tu proyecto juntos.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <iframe
            src={calUrl}
            className="h-[720px] w-full rounded-2xl"
            title="Reservas"
          />
        </div>

        <p className="mt-4 text-sm text-white/50">
          Puedes actualizar el enlace con la variable de entorno
          <code className="ml-2 rounded bg-white/10 px-2 py-1 text-xs">
            NEXT_PUBLIC_CAL_COM_URL
          </code>
          .
        </p>
      </div>
    </main>
  )
}
