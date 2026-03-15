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
              <div className="flex items-center gap-4">
                <img 
                  src="/logo-emblem.png" 
                  alt="Logo JA" 
                  className="h-9 w-9 object-contain"
                />
                <img 
                  src="/logo-text.png" 
                  alt="JUAN ARAQUE" 
                  className="h-6 object-contain"
                />
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600000000"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-full bg-[#25D366]/10 px-2.5 py-1 text-[10px] font-bold text-[#25D366] transition hover:bg-[#25D366]/20"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.066 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
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
