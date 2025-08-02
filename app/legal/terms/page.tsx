import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, ArrowLeft, CheckCircle, AlertTriangle, DollarSign, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Términos de Servicio | Rulo.pro",
  description: "Términos y condiciones de servicio de Rulo.pro. Conoce las condiciones de uso de nuestros servicios de consultoría digital premium.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Términos de Servicio | Rulo.pro",
    description: "Términos y condiciones de servicio de Rulo.pro. Conoce las condiciones de uso de nuestros servicios.",
    url: "https://rulo.pro/legal/terms",
  },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Inicio
                </Link>
              </Button>
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-[#2E8B57]" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Términos de Servicio</h1>
                  <p className="text-sm text-gray-600">Rulo.pro - Actualizada: 30 de Enero, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Notice */}
        <Card className="mb-8 border-l-4 border-l-[#FFD700] bg-gradient-to-r from-[#FFD700]/5 to-transparent">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-[#FFD700] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">⚡ Proceso Claro y Transparente</h2>
                <p className="text-gray-700">
                  Estos términos explican exactamente cómo trabajamos juntos, qué puedes esperar de nuestros servicios y
                  cuáles son nuestras responsabilidades mutuas. Todo en español claro, sin letra pequeña.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1: Service Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-[#2E8B57]" />
                <span>1. Servicios de Consultoría Digital</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Ámbito de Servicios:</h3>
                <p className="text-gray-700 mb-3">
                  Rulo.pro proporciona servicios de consultoría digital especializados para profesionales de la salud y
                  servicios legales, incluyendo pero no limitado a:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Desarrollo de sitios web profesionales bilingües</li>
                  <li>Sistemas de automatización de citas y recordatorios</li>
                  <li>Implementación de pasarelas de pago (tradicionales y crypto)</li>
                  <li>Integración con herramientas de terceros (Calendly, WhatsApp, Stripe)</li>
                  <li>Optimización SEO y marketing digital</li>
                  <li>Desarrollo de aplicaciones móviles personalizadas</li>
                  <li>Consultoría en transformación digital</li>
                </ul>
              </div>

              <div className="bg-[#2E8B57]/5 border border-[#2E8B57]/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🎯 Enfoque Especializado:</h3>
                <p className="text-gray-700 text-sm">
                  Nuestros servicios están específicamente diseñados para profesionales latinos en Estados Unidos, con
                  especial atención a las necesidades culturales, lingüísticas y regulatorias de este mercado.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-[#2E8B57]" />
                <span>2. Proceso de Trabajo</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#2E8B57] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Auditoría Express (15 min)</h3>
                      <p className="text-gray-600 text-sm">Análisis gratuito de tu situación actual</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#FFD700] text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Propuesta Personalizada</h3>
                      <p className="text-gray-600 text-sm">Solución a medida para tu práctica</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#2E8B57] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Pago Inicial (50%)</h3>
                      <p className="text-gray-600 text-sm">Para comenzar el desarrollo</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#FFD700] text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Entrega y Pago Final</h3>
                      <p className="text-gray-600 text-sm">Implementación completa en 72h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">⏰ Garantía de Tiempo:</h3>
                <p className="text-gray-700 text-sm">
                  Nos comprometemos a entregar tu proyecto completo y funcional en un máximo de 72 horas hábiles desde
                  la confirmación del pago inicial. Si no cumplimos este plazo, recibes un descuento del 20% en tu
                  proyecto.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Payment Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-[#2E8B57]" />
                <span>3. Términos de Pago</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Estructura de Pagos:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>
                    <strong>50% inicial:</strong> Requerido para comenzar el proyecto
                  </li>
                  <li>
                    <strong>50% final:</strong> Al completar la entrega y entrenamiento
                  </li>
                  <li>
                    <strong>Métodos aceptados:</strong> Stripe, transferencia bancaria, criptomonedas
                  </li>
                  <li>
                    <strong>Moneda base:</strong> Dólares estadounidenses (USD)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Política de Reembolsos:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Reembolso completo si cancelamos nosotros el proyecto</li>
                  <li>50% de reembolso si cancelas antes de comenzar el desarrollo</li>
                  <li>No hay reembolso una vez iniciado el desarrollo (después de 24h del pago inicial)</li>
                  <li>Garantía Rulo: 50% de reembolso si no recuperas la inversión en 90 días</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">💰 Garantía Rulo:</h3>
                <p className="text-gray-700 text-sm">
                  Si después de 90 días de usar nuestro sistema no has recuperado tu inversión a través de nuevos
                  clientes, citas adicionales o ahorro de tiempo, te devolvemos el 50% de lo pagado. Solo necesitas
                  mostrar evidencia de uso activo del sistema.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: Limitations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-[#FFD700]" />
                <span>4. Limitaciones de Responsabilidad</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Limitaciones Técnicas:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>
                    <strong>APIs de Terceros:</strong> No somos responsables por fallos en servicios externos (Stripe,
                    WhatsApp, Google, etc.)
                  </li>
                  <li>
                    <strong>Conectividad:</strong> Problemas de internet o hosting están fuera de nuestro control
                  </li>
                  <li>
                    <strong>Actualizaciones:</strong> Cambios en plataformas de terceros pueden requerir ajustes
                    adicionales
                  </li>
                  <li>
                    <strong>Compatibilidad:</strong> Garantizamos funcionamiento en navegadores modernos principales
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Limitaciones Financieras:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>
                    <strong>Volatilidad Crypto:</strong> No somos responsables por fluctuaciones en precios de
                    criptomonedas
                  </li>
                  <li>
                    <strong>Comisiones:</strong> Fees de procesadores de pago son responsabilidad del cliente
                  </li>
                  <li>
                    <strong>Impuestos:</strong> Cada cliente es responsable de sus obligaciones fiscales
                  </li>
                  <li>
                    <strong>ROI:</strong> Los resultados pueden variar según el mercado y esfuerzo del cliente
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">⚠️ Importante:</h3>
                <p className="text-gray-700 text-sm">
                  Nuestra responsabilidad máxima está limitada al monto total pagado por el proyecto. No somos
                  responsables por daños indirectos, pérdida de ingresos o daños consecuenciales.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-[#2E8B57]" />
                <span>5. Propiedad Intelectual</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Lo que es Tuyo:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Todo el código fuente desarrollado específicamente para tu proyecto</li>
                  <li>Diseños, contenido y materiales personalizados</li>
                  <li>Bases de datos y información de tus clientes/pacientes</li>
                  <li>Configuraciones y personalizaciones específicas</li>
                  <li>Dominio y hosting (si los proporcionamos)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Lo que Conservamos:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Metodologías y procesos de desarrollo</li>
                  <li>Frameworks y librerías de código abierto</li>
                  <li>Conocimiento y experiencia adquirida</li>
                  <li>Derecho a usar el proyecto como caso de estudio (con tu permiso)</li>
                </ul>
              </div>

              <div className="bg-[#2E8B57]/5 border border-[#2E8B57]/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">✅ Transferencia Completa:</h3>
                <p className="text-gray-700 text-sm">
                  Al completar el pago final, recibes todos los archivos fuente, documentación y accesos
                  administrativos. Puedes modificar, vender o transferir tu proyecto sin restricciones.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 6: Support & Maintenance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-[#2E8B57]" />
                <span>6. Soporte y Mantenimiento</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Incluido Gratis:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>30 días de soporte técnico completo</li>
                    <li>Corrección de bugs y errores</li>
                    <li>1 sesión de entrenamiento (60 min)</li>
                    <li>Documentación completa del sistema</li>
                    <li>Actualizaciones de seguridad críticas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Servicios Adicionales:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>Soporte extendido: $200/mes</li>
                    <li>Nuevas funcionalidades: Cotización separada</li>
                    <li>Entrenamiento adicional: $150/hora</li>
                    <li>Mantenimiento preventivo: $300/mes</li>
                    <li>Monitoreo 24/7: $500/mes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🚀 Soporte Prioritario:</h3>
                <p className="text-gray-700 text-sm">
                  Clientes del paquete ÉLITE reciben soporte prioritario 24/7 incluido por 6 meses, con tiempo de
                  respuesta garantizado de menos de 2 horas.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 7: Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-[#FFD700]" />
                <span>7. Terminación del Servicio</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Terminación por el Cliente:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Puedes cancelar antes de comenzar el desarrollo (reembolso 50%)</li>
                  <li>Una vez iniciado el desarrollo, no hay cancelación posible</li>
                  <li>Puedes discontinuar servicios de soporte en cualquier momento</li>
                  <li>Conservas todos los archivos y accesos entregados hasta la fecha</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Terminación por Rulo.pro:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Incumplimiento de pagos (después de 15 días de gracia)</li>
                  <li>Uso indebido o ilegal de nuestros servicios</li>
                  <li>Comportamiento abusivo hacia nuestro equipo</li>
                  <li>Violación de estos términos de servicio</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📋 Proceso de Terminación:</h3>
                <p className="text-gray-700 text-sm">
                  En caso de terminación, proporcionamos 30 días de aviso y entregamos todos los archivos completados
                  hasta la fecha. Los pagos realizados no son reembolsables excepto en casos de terminación por nuestra
                  parte sin causa justificada.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 8: Contact */}
          <Card className="bg-gradient-to-r from-[#2E8B57]/5 to-[#20B2AA]/5">
            <CardHeader>
              <CardTitle>8. Contacto y Resolución de Disputas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contacto Legal:</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>
                      <strong>Email:</strong> legal@rulo.pro
                    </li>
                    <li>
                      <strong>WhatsApp:</strong> +1 (555) RULO-PRO
                    </li>
                    <li>
                      <strong>Dirección:</strong> Miami, FL, USA
                    </li>
                    <li>
                      <strong>Horario:</strong> Lun-Vie 9AM-6PM EST
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Resolución de Disputas:</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>1. Comunicación directa (preferida)</li>
                    <li>2. Mediación profesional</li>
                    <li>3. Arbitraje vinculante</li>
                    <li>4. Jurisdicción: Florida, USA</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong>Última actualización:</strong> 30 de Enero, 2025
                  <br />
                  <strong>Versión:</strong> 3.2
                  <br />
                  <strong>Ley aplicable:</strong> Estado de Florida, Estados Unidos
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link href="/legal/privacy">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Política de Privacidad
            </Link>
          </Button>

          <Button asChild>
            <Link href="/legal/crypto">
              Términos Crypto
              <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
