export default function SobreMi() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            Sobre mí
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            Estrategia, diseño y automatización para tu negocio
          </h1>
        </div>

        <div className="flex flex-col gap-6 text-white/70 leading-relaxed">
        <p>
          Soy especialista en desarrollo web y tecnologías de inteligencia artificial aplicadas
          al mundo empresarial. Mi enfoque va más allá del diseño: construyo herramientas digitales
          que automatizan procesos y generan valor real para el negocio.
        </p>
        <p>
          Después de años trabajando en proyectos de transformación digital, decidí crear esta
          agencia con una premisa clara: las empresas no necesitan simplemente una web bonita,
          necesitan una web que trabaje por ellas.
        </p>
        <p>
          Cada proyecto que desarrollo integra las mejores tecnologías disponibles — IA, pagos
          automáticos, gestión de citas — para que mis clientes puedan centrarse en lo que
          realmente importa: hacer crecer su negocio.
        </p>
      </div>

        <div className="grid gap-6 mt-12 text-center md:grid-cols-3">
          {[
            { numero: "+50", etiqueta: "Proyectos entregados" },
            { numero: "+30", etiqueta: "Clientes satisfechos" },
            { numero: "5+", etiqueta: "Años de experiencia" },
          ].map((stat) => (
            <div
              key={stat.etiqueta}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-3xl font-semibold text-white mb-1">
                {stat.numero}
              </div>
              <div className="text-sm text-white/60">{stat.etiqueta}</div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/contacto"
            className="rounded-full bg-emerald-300 px-8 py-3 text-sm font-semibold text-black"
          >
            Trabajemos juntos
          </a>
        </div>
      </div>
    </main>
  )
}
