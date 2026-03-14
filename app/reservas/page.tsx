export default function ReservasPage() {
  const calUrl =
    process.env.NEXT_PUBLIC_CAL_COM_URL ??
    "https://cal.com/juan-araque"

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-3">Agenda una entrevista</h1>
        <p className="text-gray-600 mb-6">
          Elige un horario para tu llamada y revisamos tu proyecto juntos.
        </p>

        <div className="border rounded-2xl overflow-hidden">
          <iframe
            src={calUrl}
            className="w-full h-[720px]"
            title="Reservas"
          />
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Configura tu enlace en la variable de entorno
          {" "}
          <code className="px-1 py-0.5 bg-gray-100 rounded">
            NEXT_PUBLIC_CAL_COM_URL
          </code>
          .
        </p>
      </div>
    </main>
  )
}
