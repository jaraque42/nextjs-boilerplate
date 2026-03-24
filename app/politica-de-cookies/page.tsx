import Link from "next/link"

export default function PoliticaDeCookiesPage() {
  const lastUpdated = "24 de marzo de 2026"

  return (
    <main className="min-h-screen px-6 pb-24 pt-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Política de cookies
          </h1>
          <p className="mt-2 text-sm text-white/60">Última actualización: {lastUpdated}</p>
        </div>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos que se descargan en tu dispositivo al acceder a
              una web. Sirven para, por ejemplo, recordar tus preferencias, permitir el
              funcionamiento técnico del sitio o medir el uso de la página.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">Tipos de cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="text-white">Necesarias (técnicas):</span> imprescindibles para
                que la web funcione y para guardar tus elecciones sobre cookies.
              </li>
              <li>
                <span className="text-white">Analítica:</span> ayudan a entender el uso de la web
                (por ejemplo, páginas visitadas) para mejorar la experiencia.
              </li>
              <li>
                <span className="text-white">Marketing:</span> permiten medir campañas o mostrar
                contenido más relevante.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">Cookies utilizadas en esta web</h2>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50">Nombre</div>
                  <div className="mt-1 font-mono text-sm text-white/80">cookie_consent_v1</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50">Finalidad</div>
                  <div className="mt-1 text-sm text-white/70">
                    Guardar tus preferencias de cookies.
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50">Tipo</div>
                  <div className="mt-1 text-sm text-white/70">Técnica / necesaria</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50">Duración</div>
                  <div className="mt-1 text-sm text-white/70">Hasta 12 meses</div>
                </div>
              </div>
              <p className="mt-4 text-xs text-white/50">
                Nota: si activas cookies de analítica/marketing en el banner, podrían cargarse
                servicios de terceros que instalen sus propias cookies. Esta plantilla debe
                actualizarse si se añaden dichos servicios.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">¿Cómo puedes gestionar las cookies?</h2>
            <p>
              Puedes aceptar, rechazar o configurar las cookies desde el banner de cookies o desde
              el enlace &quot;Preferencias de cookies&quot; que aparece en el pie de página.
              También puedes eliminar o bloquear cookies desde la configuración de tu navegador.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">Contacto</h2>
            <p>
              Si tienes dudas sobre esta política, escríbenos desde{" "}
              <Link href="/contacto" className="underline hover:text-white">
                contacto
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">Aviso importante</h2>
            <p className="text-sm text-white/60">
              Esta página es una plantilla informativa y no constituye asesoramiento legal. Revisa
              el contenido con tu asesoría legal y actualízalo si incorporas analítica (p. ej.
              Google Analytics), píxeles publicitarios u otros proveedores.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

