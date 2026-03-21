import type { Metadata } from "next"
import Link from "next/link"
import Header from "./components/Header"
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

          <Header />

          {children}
          <Chatbot />
        </div>
      </body>
    </html>
  )
}
