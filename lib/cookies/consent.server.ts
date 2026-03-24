import { cookies } from "next/headers"
import { COOKIE_CONSENT_COOKIE_NAME, parseConsent } from "./consent"

export async function getCookieConsentFromRequest() {
  const store = await cookies()
  const raw = store.get(COOKIE_CONSENT_COOKIE_NAME)?.value
  return parseConsent(raw)
}
