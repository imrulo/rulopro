import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos de Uso | Rulo.pro",
  description: "Términos y condiciones de uso de los servicios de Rulo.pro",
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-rulo-off-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-rulo-navy mb-8">Términos de Uso</h1>

        <div className="prose prose-lg max-w-none">
          <p className="font-body text-rulo-navy/80 mb-6">
            <strong>Última actualización:</strong> Enero 2025
          </p>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">1. Aceptación de Términos</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              Al acceder y utilizar los servicios de Rulo.pro, aceptas estar sujeto a estos términos y condiciones. Si
              no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">2. Servicios Ofrecidos</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed mb-4">
              Rulo.pro ofrece servicios de consultoría digital premium, incluyendo:
            </p>
            <ul className="font-body text-rulo-navy/80 space-y-2 ml-6">
              <li>• Desarrollo de sitios web bilingües</li>
              <li>• Automatización de marketing y citas</li>
              <li>• Integración de sistemas de pago</li>
              <li>• Consultoría en transformación digital</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">
              3. Responsabilidades del Cliente
            </h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              El cliente se compromete a proporcionar información precisa y completa, colaborar en el proceso de
              implementación, y cumplir con todas las regulaciones aplicables en su jurisdicción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">
              4. Limitación de Responsabilidad
            </h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              Rulo.pro no será responsable por daños indirectos, incidentales o consecuentes que puedan surgir del uso
              de nuestros servicios. Nuestra responsabilidad se limita al valor de los servicios contratados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">5. Contacto</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              Para preguntas sobre estos términos, contáctanos en:
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
