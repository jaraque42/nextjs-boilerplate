import { createClient } from "@supabase/supabase-js"

function requiredEnv(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing ${name}`)
  return value
}

export function getSupabaseAdmin() {
  const url = requiredEnv("NEXT_PUBLIC_SUPABASE_URL")
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_SECRET_KEY ??
    ""

  if (!serviceKey) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY")
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

