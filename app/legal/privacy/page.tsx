import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, ArrowLeft, FileText, Lock, Eye, Globe } from "lucide-react"

export default function PrivacyPolicy() {
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
                <Shield className="h-8 w-8 text-[#2E8B57]" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Política de Privacidad</h1>
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
        <Card className="mb-8 border-l-4 border-l-[#2E8B57] bg-gradient-to-r from-[#2E8B57]/5 to-transparent">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <Lock className="h-6 w-6 text-[#2E8B57] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">🔒 NO VENDEMOS TUS DATOS - GARANTIZADO</h2>
                <p className="text-gray-700">
                  Tu información personal es sagrada para nosotros. Nunca vendemos, alquilamos o compartimos tus datos
                  con terceros para fines comerciales. Esta política explica exactamente cómo protegemos tu privacidad.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1: Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-[#2E8B57]" />
                <span>1. Información que Recolectamos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Información Personal:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Nombre completo y título profesional</li>
                  <li>Dirección de email y número de teléfono</li>
                  <li>Tipo de práctica profesional (dentista, abogado, médico, etc.)</li>
                  <li>Ubicación geográfica (ciudad, estado)</li>
                  <li>Información de contacto de WhatsApp Business</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Información Técnica:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Dirección IP y datos de navegación</li>
                  <li>Tipo de dispositivo y navegador utilizado</li>
                  <li>Páginas visitadas y tiempo de permanencia</li>
                  <li>Cookies técnicas y de análisis (Google Analytics)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Shield className="h-4 w-4 text-yellow-600 mr-2" />
                  Protección Especial para Datos Médicos y Legales
                </h3>
                <p className="text-gray-700 text-sm">
                  <strong>HIPAA Compliance:</strong> Si eres profesional de la salud, cumplimos con todas las
                  regulaciones HIPAA para proteger información médica sensible.
                  <br />
                  <strong>FTC Compliance:</strong> Para abogados, seguimos las regulaciones FTC sobre confidencialidad
                  attorney-client privilege.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-[#2E8B57]" />
                <span>2. Cómo Usamos tu Información</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Propósitos Legítimos:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Proporcionar consultoría digital personalizada</li>
                  <li>Desarrollar y implementar sistemas automatizados</li>
                  <li>Comunicarnos contigo sobre proyectos y servicios</li>
                  <li>Enviar recordatorios de citas y seguimientos</li>
                  <li>Procesar pagos y generar facturas</li>
                  <li>Mejorar nuestros servicios basados en feedback</li>
                  <li>Cumplir con obligaciones legales y fiscales</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">❌ Lo que NUNCA hacemos:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                  <li>Vender tu información a terceros</li>
                  <li>Usar tus datos para publicidad no solicitada</li>
                  <li>Compartir información con competidores</li>
                  <li>Acceder a datos de tus pacientes sin autorización</li>
                  <li>Almacenar información de tarjetas de crédito</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-[#2E8B57]" />
                <span>3. Compartir Información con Terceros</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Terceros Autorizados:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>
                    <strong>Stripe:</strong> Procesamiento seguro de pagos (PCI DSS compliant)
                  </li>
                  <li>
                    <strong>Google Workspace:</strong> Email y almacenamiento en la nube
                  </li>
                  <li>
                    <strong>WhatsApp Business API:</strong> Comunicación automatizada
                  </li>
                  <li>
                    <strong>Calendly:</strong> Gestión de citas y calendarios
                  </li>
                  <li>
                    <strong>Vercel:</strong> Hosting y infraestructura web
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Casos Excepcionales:</h3>
                <p className="text-gray-700 text-sm">
                  Solo compartimos información cuando es legalmente requerido por:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 text-sm">
                  <li>Órdenes judiciales o citaciones legales</li>
                  <li>Investigaciones de fraude o actividades ilegales</li>
                  <li>Protección de derechos y seguridad de terceros</li>
                  <li>Cumplimiento con regulaciones fiscales (IRS, SAT)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-[#2E8B57]" />
                <span>4. Tus Derechos (GDPR & CCPA)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Derechos GDPR (Europa):</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>Acceso a tus datos personales</li>
                    <li>Rectificación de información incorrecta</li>
                    <li>Eliminación ("derecho al olvido")</li>
                    <li>Portabilidad de datos</li>
                    <li>Restricción del procesamiento</li>
                    <li>Oposición al procesamiento</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Derechos CCPA (California):</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>Conocer qué información recolectamos</li>
                    <li>Eliminar información personal</li>
                    <li>Opt-out de la venta de datos</li>
                    <li>No discriminación por ejercer derechos</li>
                    <li>Acceso a categorías de datos</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#2E8B57]/5 border border-[#2E8B57]/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📧 Ejercer tus Derechos:</h3>
                <p className="text-gray-700 text-sm">
                  Para ejercer cualquiera de estos derechos, contáctanos en:
                  <strong> privacy@rulo.pro</strong> o a través de WhatsApp. Responderemos en un máximo de 30 días.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-[#2E8B57]" />
                <span>5. Seguridad y Protección</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Medidas Técnicas:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Encriptación SSL/TLS para todas las comunicaciones</li>
                  <li>Autenticación de dos factores (2FA) en sistemas críticos</li>
                  <li>Backups automáticos encriptados diariamente</li>
                  <li>Monitoreo 24/7 de actividades sospechosas</li>
                  <li>Actualizaciones de seguridad automáticas</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Medidas Organizacionales:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Acceso limitado solo a personal autorizado</li>
                  <li>Acuerdos de confidencialidad con todos los empleados</li>
                  <li>Auditorías de seguridad trimestrales</li>
                  <li>Capacitación continua en protección de datos</li>
                  <li>Plan de respuesta a incidentes de seguridad</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 6: Contact */}
          <Card className="bg-gradient-to-r from-[#2E8B57]/5 to-[#20B2AA]/5">
            <CardHeader>
              <CardTitle>6. Contacto y Preguntas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Si tienes preguntas sobre esta política de privacidad o cómo manejamos tus datos, contáctanos:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Datos de Contacto:</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>
                      <strong>Email:</strong> privacy@rulo.pro
                    </li>
                    <li>
                      <strong>WhatsApp:</strong> +1 (555) RULO-PRO
                    </li>
                    <li>
                      <strong>Dirección:</strong> Miami, FL, USA
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tiempo de Respuesta:</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>Consultas generales: 24 horas</li>
                    <li>Solicitudes GDPR/CCPA: 30 días</li>
                    <li>Incidentes de seguridad: 2 horas</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong>Última actualización:</strong> 30 de Enero, 2025
                  <br />
                  <strong>Próxima revisión:</strong> 30 de Julio, 2025
                  <br />
                  <strong>Versión:</strong> 2.1
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link href="/legal/terms">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Términos de Servicio
            </Link>
          </Button>

          <Button asChild>
            <Link href="/legal/cookies">
              Política de Cookies
              <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
