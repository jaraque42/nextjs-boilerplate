import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Admin", charset="UTF-8"',
    },
  })
}

function forbidden() {
  return new NextResponse("Forbidden", { status: 403 })
}

function getRequestIp(req: NextRequest): string | null {
  const forwardedFor = req.headers.get("x-forwarded-for") ?? ""
  const first = forwardedFor.split(",")[0]?.trim()
  if (first) return first
  // Some setups use x-real-ip
  const realIp = req.headers.get("x-real-ip")?.trim()
  return realIp || null
}

export function middleware(req: NextRequest) {
  const user = process.env.ADMIN_USER
  const pass = process.env.ADMIN_PASSWORD
  const isProd =
    process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production"

  // Fail-closed in production: if credentials are not set, block /admin.
  if (!user || !pass) {
    return isProd ? unauthorized() : NextResponse.next()
  }

  const allowlist = (process.env.ADMIN_IP_ALLOWLIST ?? "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean)

  if (allowlist.length > 0) {
    const ip = getRequestIp(req)
    if (!ip || !allowlist.includes(ip)) return forbidden()
  }

  const auth = req.headers.get("authorization")
  if (!auth?.startsWith("Basic ")) return unauthorized()

  const base64 = auth.slice("Basic ".length)
  let decoded = ""
  try {
    decoded = atob(base64)
  } catch {
    return unauthorized()
  }

  const [givenUser, givenPass] = decoded.split(":")
  if (givenUser !== user || givenPass !== pass) return unauthorized()

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
