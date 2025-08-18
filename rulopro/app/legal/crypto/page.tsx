import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimers Crypto | Rulo.pro",
  description: "Información importante sobre servicios de criptomonedas de Rulo.pro",
}

export default function CryptoPage() {
  return (
    <div className="min-h-screen bg-rulo-off-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-rulo-navy mb-8">
          Disclaimers sobre Criptomonedas
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="font-body text-rulo-navy/80 mb-6">
            <strong>Última actualización:</strong> Enero 2025
          </p>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">1. Riesgos de las Criptomonedas</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed mb-4">
              Las criptomonedas son activos digitales altamente volátiles. Los precios pueden fluctuar
              significativamente en períodos cortos de tiempo. Considera los siguientes riesgos:
            </p>
            <ul className="font-body text-rulo-navy/80 space-y-2 ml-6">
              <li>• Volatilidad extrema de precios</li>
              <li>• Riesgo de pérdida total de la inversión</li>
              <li>• Cambios regulatorios impredecibles</li>
              <li>• Riesgos tecnológicos y de seguridad</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">
              2. No Constituye Asesoramiento Financiero
            </h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              Los servicios de integración de pagos crypto que ofrecemos son puramente técnicos. No proporcionamos
              asesoramiento financiero, de inversión o fiscal. Recomendamos encarecidamente consultar con profesionales
              calificados antes de implementar soluciones de criptomonedas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">3. Cumplimiento Regulatorio</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              Es responsabilidad del cliente asegurar el cumplimiento con todas las regulaciones locales, estatales y
              federales aplicables en su jurisdicción. Las regulaciones sobre criptomonedas varían significativamente
              entre países y pueden cambiar frecuentemente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">
              4. Limitación de Responsabilidad
            </h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              Rulo.pro no será responsable por pérdidas financieras, cambios regulatorios, o cualquier otro daño
              relacionado con el uso de criptomonedas. El cliente asume todos los riesgos asociados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">5. Contacto</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              Para preguntas sobre nuestros servicios crypto, contáctanos en:
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
