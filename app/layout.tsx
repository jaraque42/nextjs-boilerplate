import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mi Web de Negocio",
  description: "Descripción de tu negocio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav className="flex gap-6 p-6 border-b">
          <a href="/" className="font-semibold">Inicio</a>
          <a href="/servicios" className="text-gray-600 hover:text-black">Servicios</a>
          <a href="/contacto" className="text-gray-600 hover:text-black">Contacto</a>
          <a href="/reservas" className="text-gray-600 hover:text-black">Reservas</a>
        </nav>
        {children}
      </body>
    </html>
  )
}
