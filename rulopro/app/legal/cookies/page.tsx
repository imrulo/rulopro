import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies | Rulo.pro",
  description: "Información sobre el uso de cookies en Rulo.pro",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-rulo-off-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-rulo-navy mb-8">Política de Cookies</h1>

        <div className="prose prose-lg max-w-none">
          <p className="font-body text-rulo-navy/80 mb-6">
            <strong>Última actualización:</strong> Enero 2025
          </p>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">1. ¿Qué son las Cookies?</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio
              web. Nos ayudan a mejorar tu experiencia y analizar el uso del sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">
              2. Tipos de Cookies que Utilizamos
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-heading font-medium text-lg text-rulo-navy mb-2">Cookies Esenciales</h3>
                <p className="font-body text-rulo-navy/80 leading-relaxed">
                  Necesarias para el funcionamiento básico del sitio web.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-medium text-lg text-rulo-navy mb-2">Cookies de Analytics</h3>
                <p className="font-body text-rulo-navy/80 leading-relaxed">
                  Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">3. Control de Cookies</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              Puedes controlar y/o eliminar las cookies según desees. Puedes eliminar todas las cookies que ya están en
              tu dispositivo y configurar la mayoría de navegadores para evitar que se coloquen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">4. Contacto</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              Para preguntas sobre nuestra política de cookies, contáctanos en:
              <a href="mailto:marketing@rulo.pro" className="text-rulo-emerald hover:text-rulo-gold">
                marketing@rulo.pro
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a href="/" className="font-body text-rulo-emerald hover:text-rulo-gold transition-colors">
            ← Volver al inicio
          </a>
        </div>
      </div>
    </div>
  )
}
