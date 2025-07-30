import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2E8B57] to-[#20B2AA] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">RULO.PRO</span>
                <span className="text-xs text-gray-500 font-mono">Digital Consulting</span>
              </div>
            </Link>
            <Button asChild className="bg-gradient-to-r from-[#2E8B57] to-[#20B2AA] text-white">
              <Link href="/">Volver al Inicio</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="shadow-2xl border-0 rounded-2xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Términos de Servicio</CardTitle>
            <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded-xl">
              <p>
                <strong>Documento generado el:</strong> 30 de enero, 2025
              </p>
              <p>
                <strong>Última actualización:</strong> 30 de enero, 2025
              </p>
              <p>
                <strong>Empresa:</strong> Rulo.pro - Consultoría Digital Premium
              </p>
            </div>
          </CardHeader>

          <CardContent className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">1. Ámbito de Servicios</h2>
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-[#2E8B57]">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Rulo.pro ofrece <strong>servicios digitales exclusivamente</strong>. No vendemos productos físicos.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Nuestros Servicios Incluyen:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Desarrollo de sitios web premium bilingües</li>
                    <li>Automatización de citas y procesos de negocio</li>
                    <li>Implementación de sistemas de pago (tradicionales y crypto)</li>
                    <li>Integración con herramientas de terceros (Calendly, WhatsApp, etc.)</li>
                    <li>Consultoría digital especializada para profesionales hispanos</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">2. Proceso de Trabajo</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">📋 Fase 1: Auditoría</h3>
                    <p className="text-gray-700">
                      Análisis gratuito de 15 minutos para identificar oportunidades de mejora.
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Fase 2: Propuesta</h3>
                    <p className="text-gray-700">Presentación de solución personalizada con presupuesto detallado.</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">💰 Fase 3: Pago Inicial</h3>
                    <p className="text-gray-700">
                      <strong>50% del total</strong> para iniciar el desarrollo del proyecto.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🚀 Fase 4: Entrega</h3>
                    <p className="text-gray-700">
                      Implementación en <strong>72 horas</strong> + pago final del 50%.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">3. Limitación de Responsabilidad</h2>
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <p className="text-gray-700 mb-4">
                    <strong>Rulo.pro NO se hace responsable por:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      <strong>Fallos en integraciones de terceros:</strong> APIs de Google, Calendly, WhatsApp, etc.
                    </li>
                    <li>
                      <strong>Pérdidas por volatilidad crypto:</strong> Fluctuaciones en el valor de Bitcoin, Ethereum,
                      etc.
                    </li>
                    <li>
                      <strong>Cambios en políticas de terceros:</strong> Actualizaciones que afecten funcionalidades
                    </li>
                    <li>
                      <strong>Fuerza mayor:</strong> Eventos fuera de nuestro control
                    </li>
                  </ul>

                  <div className="mt-4 p-4 bg-white rounded-lg border-2 border-red-300">
                    <p className="text-red-700 font-semibold">
                      ⚠️ <strong>Importante:</strong> Nuestra responsabilidad máxima se limita al monto pagado por el
                      servicio.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">4. Propiedad Intelectual</h2>
                <div className="bg-[#2E8B57]/5 p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ El Cliente Posee:</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Código fuente final del proyecto</li>
                        <li>Diseños y contenido personalizado</li>
                        <li>Accesos completos a hosting/dominio</li>
                        <li>Documentación técnica</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">🔒 Rulo.pro Retiene:</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Metodologías y procesos propios</li>
                        <li>Templates y frameworks base</li>
                        <li>Conocimiento técnico especializado</li>
                        <li>Derecho a mostrar el trabajo en portfolio</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">5. Garantías y Soporte</h2>
                <div className="space-y-4">
                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ Garantía Rulo</h3>
                    <p className="text-gray-700">
                      <strong>Si no recuperas tu inversión en 90 días, te devolvemos el 50% del pago.</strong>
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      *Aplica solo para paquetes Premium y Élite. Requiere documentación de métricas.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🛠️ Soporte Técnico</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>
                        <strong>Básico:</strong> 30 días de soporte por email
                      </li>
                      <li>
                        <strong>Premium:</strong> 90 días de soporte + 2 sesiones de entrenamiento
                      </li>
                      <li>
                        <strong>Élite:</strong> Soporte prioritario 24/7 por 6 meses
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">6. Modificaciones y Cancelaciones</h2>
                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">📝 Cambios en el Proyecto</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Cambios menores (hasta 20% del alcance): Sin costo adicional</li>
                    <li>Cambios mayores: Se cotizarán por separado</li>
                    <li>Cambios después de la entrega: Tarifa de $150/hora</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">❌ Política de Cancelación</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      <strong>Antes del desarrollo:</strong> Reembolso del 80% del pago inicial
                    </li>
                    <li>
                      <strong>Durante el desarrollo:</strong> No hay reembolso del pago inicial
                    </li>
                    <li>
                      <strong>Después de la entrega:</strong> No hay reembolsos
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">7. Jurisdicción y Ley Aplicable</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    Estos términos se rigen por las leyes de <strong>Estados Unidos</strong> y el estado de{" "}
                    <strong>Florida</strong>.
                  </p>
                  <p className="text-gray-700">
                    Cualquier disputa será resuelta mediante <strong>arbitraje vinculante</strong> en Miami, FL, de
                    acuerdo con las reglas de la American Arbitration Association (AAA).
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">8. Contacto Legal</h2>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Para asuntos legales o disputas, contáctanos:</p>
                  <ul className="list-none text-gray-700 space-y-2">
                    <li>
                      <strong>📧 Email Legal:</strong> legal@rulo.pro
                    </li>
                    <li>
                      <strong>📧 Email General:</strong> marketing@rulo.pro
                    </li>
                    <li>
                      <strong>📱 WhatsApp:</strong>{" "}
                      <Link href="https://wa.link/6difl3" className="text-[#2E8B57] hover:underline">
                        Contactar por WhatsApp
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
