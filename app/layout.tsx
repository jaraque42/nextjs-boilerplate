import type { Metadata } from "next"
import Chatbot from "./components/Chatbot"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mi Web de Negocio",
  description: "Descripción de tu negocio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl floaty" />

          <header className="sticky top-0 z-20 border-b border-white/10 bg-black/30 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <div className="text-sm font-semibold tracking-[0.2em] text-white/70">
                JUAN ARAQUE
              </div>
              <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
                <a href="/" className="hover:text-white">Inicio</a>
                <a href="/sobre-mi" className="hover:text-white">Sobre mí</a>
                <a href="/servicios" className="hover:text-white">Servicios</a>
                <a href="/contacto" className="hover:text-white">Contacto</a>
                <a href="/reservas" className="hover:text-white">Reservas</a>
              </nav>
              <a
                href="/reservas"
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black"
              >
                Agendar
              </a>
            </div>
          </header>

          {children}
          <Chatbot />
        </div>
      </body>
    </html>
  )
}
