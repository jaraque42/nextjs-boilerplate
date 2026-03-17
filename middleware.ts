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

export function middleware(req: NextRequest) {
  const user = process.env.ADMIN_USER
  const pass = process.env.ADMIN_PASSWORD

  // If not configured, do not block (useful for local dev); but configure these in Vercel.
  if (!user || !pass) return NextResponse.next()

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

