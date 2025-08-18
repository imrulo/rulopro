import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | Rulo.pro",
  description: "Política de privacidad de Rulo.pro - Protección de datos para profesionales latinos",
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-rulo-off-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-rulo-navy mb-8">Política de Privacidad</h1>

        <div className="prose prose-lg max-w-none">
          <p className="font-body text-rulo-navy/80 mb-6">
            <strong>Última actualización:</strong> Enero 2025
          </p>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">1. Información que Recopilamos</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed mb-4">
              En Rulo.pro, recopilamos información personal que nos proporcionas voluntariamente cuando:
            </p>
            <ul className="font-body text-rulo-navy/80 space-y-2 ml-6">
              <li>• Solicitas una auditoría gratuita</li>
              <li>• Te suscribes a nuestros servicios</li>
              <li>• Nos contactas por email o WhatsApp</li>
              <li>• Participas en nuestras consultas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">2. Uso de la Información</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed mb-4">Utilizamos tu información personal para:</p>
            <ul className="font-body text-rulo-navy/80 space-y-2 ml-6">
              <li>• Proporcionar nuestros servicios de consultoría digital</li>
              <li>• Comunicarnos contigo sobre tu proyecto</li>
              <li>• Enviar actualizaciones sobre nuestros servicios</li>
              <li>• Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">3. Protección de Datos</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
              personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">4. Cumplimiento Legal</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              Esta política cumple con las regulaciones de privacidad aplicables en Estados Unidos (CCPA) y América
              Latina, incluyendo la LGPD de Brasil.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading font-semibold text-2xl text-rulo-navy mb-4">5. Contacto</h2>
            <p className="font-body text-rulo-navy/80 leading-relaxed">
              Para preguntas sobre esta política de privacidad, contáctanos en:
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
