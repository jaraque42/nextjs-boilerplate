export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a mi web</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Describe aquí brevemente tu servicio y propuesta de valor.
      </p>
      <a
        href="/reservas"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
      >
        Reservar cita
      </a>
    </main>
  )
}
