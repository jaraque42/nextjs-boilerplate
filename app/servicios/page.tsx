export default function Servicios() {
  const servicios = [
    { titulo: "Servicio 1", descripcion: "Describe qué incluye este servicio." },
    { titulo: "Servicio 2", descripcion: "Describe qué incluye este servicio." },
    { titulo: "Servicio 3", descripcion: "Describe qué incluye este servicio." },
  ]

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Mis servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicios.map((s) => (
          <div key={s.titulo} className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">{s.titulo}</h2>
            <p className="text-gray-600">{s.descripcion}</p>
          </div>
        ))}
      </div>
    </main>
  )
}