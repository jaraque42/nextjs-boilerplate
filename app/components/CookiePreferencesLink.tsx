"use client"

export default function CookiePreferencesLink({
  className,
  children = "Configurar cookies",
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("open-cookie-settings"))}
    >
      {children}
    </button>
  )
}

