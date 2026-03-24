"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import Link from "next/link"
import {
  COOKIE_CONSENT_CHANGED_EVENT,
  createDefaultConsent,
  parseConsent,
  readConsentFromBrowser,
  readConsentRawFromBrowser,
  writeConsentToBrowser,
} from "@/lib/cookies/consent"

const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings"

function Toggle({
  checked,
  onChange,
  label,
  description,
  disabled,
}: {
  checked: boolean
  onChange: (next: boolean) => void
  label: string
  description: string
  disabled?: boolean
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="min-w-0">
        <div className="text-sm font-semibold text-white">{label}</div>
        <div className="mt-1 text-xs text-white/60">{description}</div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={[
          "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition",
          disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
          checked ? "bg-emerald-300 border-emerald-200/50" : "bg-white/10 border-white/15",
        ].join(" ")}
      >
        <span
          className={[
            "inline-block h-5 w-5 rounded-full bg-black transition-transform",
            checked ? "translate-x-5" : "translate-x-0.5",
          ].join(" ")}
        />
      </button>
    </div>
  )
}

export default function CookieBanner() {
  const [isForceOpen, setIsForceOpen] = useState(false)
  const [isConfigOpen, setIsConfigOpen] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  const rawConsent = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, onStoreChange)
      window.addEventListener("storage", onStoreChange)
      return () => {
        window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, onStoreChange)
        window.removeEventListener("storage", onStoreChange)
      }
    },
    () => readConsentRawFromBrowser(),
    () => undefined,
  )

  const consent = rawConsent === undefined ? undefined : parseConsent(rawConsent)
  const isOpen = consent === undefined ? isForceOpen : isForceOpen || consent === null

  useEffect(() => {
    const openSettings = () => {
      const current = readConsentFromBrowser()
      setAnalytics(current?.analytics ?? false)
      setMarketing(current?.marketing ?? false)
      setIsForceOpen(true)
      setIsConfigOpen(true)
    }

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings)
  }, [])

  const acceptAll = () => {
    writeConsentToBrowser(createDefaultConsent({ analytics: true, marketing: true }))
    setIsForceOpen(false)
    setIsConfigOpen(false)
  }

  const rejectAll = () => {
    writeConsentToBrowser(createDefaultConsent({ analytics: false, marketing: false }))
    setIsForceOpen(false)
    setIsConfigOpen(false)
  }

  const savePreferences = () => {
    writeConsentToBrowser(createDefaultConsent({ analytics, marketing }))
    setIsForceOpen(false)
    setIsConfigOpen(false)
  }

  if (consent === undefined && !isForceOpen) return null
  if (!isOpen) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-black/80 shadow-2xl backdrop-blur">
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="text-sm font-semibold text-white">Cookies</div>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                Usamos cookies técnicas necesarias y, si lo aceptas, cookies de analítica y
                marketing para mejorar la experiencia. Puedes cambiar tu decisión cuando quieras.
                Consulta la{" "}
                <Link href="/politica-de-cookies" className="underline hover:text-white">
                  política de cookies
                </Link>
                .
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsConfigOpen((v) => !v)}
              className="shrink-0 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 hover:text-white transition"
            >
              {isConfigOpen ? "Ocultar" : "Configurar"}
            </button>
          </div>

          {isConfigOpen ? (
            <div className="mt-4 space-y-3">
              <Toggle
                checked={true}
                onChange={() => {}}
                disabled
                label="Necesarias"
                description="Imprescindibles para el funcionamiento de la web y para guardar tus preferencias."
              />
              <Toggle
                checked={analytics}
                onChange={setAnalytics}
                label="Analítica"
                description="Nos ayudan a entender cómo se usa la web para mejorar contenidos y rendimiento."
              />
              <Toggle
                checked={marketing}
                onChange={setMarketing}
                label="Marketing"
                description="Permiten medir campañas y mostrar contenido más relevante."
              />

              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={rejectAll}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 hover:text-white transition"
                >
                  Rechazar
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="rounded-full bg-emerald-300 px-4 py-2 text-xs font-semibold text-black hover:bg-emerald-200 transition"
                >
                  Aceptar todo
                </button>
                <button
                  type="button"
                  onClick={savePreferences}
                  className="rounded-full border border-emerald-200/40 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:bg-emerald-400/15 transition"
                >
                  Guardar preferencias
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-emerald-300 px-4 py-2 text-xs font-semibold text-black hover:bg-emerald-200 transition"
              >
                Aceptar todo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function openCookieSettings() {
  if (typeof window === "undefined") return
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT))
}
