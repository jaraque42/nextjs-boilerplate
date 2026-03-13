export default function Contacto() {
  return (
    <main className="max-w-lg mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Contacto</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="border rounded-lg p-3 w-full"
        />
        <input
          type="email"
          placeholder="Tu email"
          className="border rounded-lg p-3 w-full"
        />
        <textarea
          placeholder="Tu mensaje"
          rows={5}
          className="border rounded-lg p-3 w-full"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          Enviar mensaje
        </button>
      </form>
    </main>
  )
}