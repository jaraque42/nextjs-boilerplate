import Link from "next/link"
import CookiePreferencesLink from "./CookiePreferencesLink"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link href="/politica-de-cookies" className="hover:text-white transition-colors">
            Política de cookies
          </Link>
          <CookiePreferencesLink className="hover:text-white transition-colors">
            Preferencias de cookies
          </CookiePreferencesLink>
        </div>
        <div className="text-xs text-white/40">
          © {new Date().getFullYear()} Todos los derechos reservados
        </div>
      </div>
    </footer>
  )
}

