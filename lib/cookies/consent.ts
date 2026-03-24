export type CookieConsentV1 = {
  version: 1
  updatedAt: string
  necessary: true
  analytics: boolean
  marketing: boolean
}

export type CookieConsent = CookieConsentV1

export const COOKIE_CONSENT_VERSION = 1 as const
export const COOKIE_CONSENT_STORAGE_KEY = "cookie_consent_v1"
export const COOKIE_CONSENT_COOKIE_NAME = "cookie_consent_v1"
export const COOKIE_CONSENT_CHANGED_EVENT = "cookie-consent-changed"

export function createDefaultConsent(
  overrides?: Partial<Omit<CookieConsent, "version" | "updatedAt" | "necessary">>,
): CookieConsent {
  return {
    version: COOKIE_CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    necessary: true,
    analytics: overrides?.analytics ?? false,
    marketing: overrides?.marketing ?? false,
  }
}

export function serializeConsent(consent: CookieConsent): string {
  return JSON.stringify(consent)
}

export function parseConsent(raw: string | null | undefined): CookieConsent | null {
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as Partial<CookieConsent>
    if (parsed?.version !== COOKIE_CONSENT_VERSION) return null
    if (parsed.necessary !== true) return null
    if (typeof parsed.analytics !== "boolean") return null
    if (typeof parsed.marketing !== "boolean") return null
    if (typeof parsed.updatedAt !== "string") return null
    return parsed as CookieConsent
  } catch {
    return null
  }
}

export function readConsentRawFromDocumentCookie(): string | null {
  if (typeof document === "undefined") return null
  const cookie = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${COOKIE_CONSENT_COOKIE_NAME}=`))

  if (!cookie) return null
  return decodeURIComponent(cookie.slice(COOKIE_CONSENT_COOKIE_NAME.length + 1))
}

export function readConsentRawFromBrowser(): string | null {
  if (typeof window === "undefined") return null
  try {
    return window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY) ?? readConsentRawFromDocumentCookie()
  } catch {
    return readConsentRawFromDocumentCookie()
  }
}

export function readConsentFromDocumentCookie(): CookieConsent | null {
  return parseConsent(readConsentRawFromDocumentCookie())
}

export function readConsentFromBrowser(): CookieConsent | null {
  return parseConsent(readConsentRawFromBrowser()) ?? readConsentFromDocumentCookie()
}

export function writeConsentToBrowser(consent: CookieConsent) {
  if (typeof window === "undefined") return

  const serialized = serializeConsent(consent)
  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, serialized)
  } catch {
    // ignore
  }

  const maxAgeSeconds = 60 * 60 * 24 * 365
  const secure = window.location.protocol === "https:" ? "; Secure" : ""
  document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=${encodeURIComponent(
    serialized,
  )}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax${secure}`

  window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGED_EVENT))
}
