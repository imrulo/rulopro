import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookiesPolicy() {
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
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Política de Cookies</CardTitle>
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
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">¿Qué son las Cookies?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro
                  sitio web. Nos ayudan a mejorar tu experiencia y proporcionar servicios personalizados.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">Tipos de Cookies que Utilizamos</h2>

                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-[#2E8B57]">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🔒 Cookies Técnicas (Esenciales)</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Cookies de sesión:</strong> Mantienen tu sesión activa durante la navegación
                      </li>
                      <li>
                        <strong>Cookies de seguridad:</strong> Protegen contra ataques y fraudes
                      </li>
                      <li>
                        <strong>Cookies de funcionalidad:</strong> Recuerdan tus preferencias (idioma, configuración)
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-3">
                      <em>Estas cookies son necesarias para el funcionamiento del sitio y no se pueden desactivar.</em>
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">📊 Cookies Analíticas</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Google Analytics:</strong> Nos ayuda a entender cómo usas nuestro sitio
                      </li>
                      <li>
                        <strong>Métricas de rendimiento:</strong> Optimizamos la velocidad y funcionalidad
                      </li>
                      <li>
                        <strong>Análisis de comportamiento:</strong> Mejoramos la experiencia del usuario
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">🔗 Cookies de Terceros</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Calendly:</strong> Para programar citas y consultas
                      </li>
                      <li>
                        <strong>WhatsApp Business:</strong> Para comunicación directa
                      </li>
                      <li>
                        <strong>Stripe/PayPal:</strong> Para procesar pagos de forma segura
                      </li>
                      <li>
                        <strong>Crypto Wallets:</strong> Para pagos en criptomonedas
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">Cumplimiento Legal</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    🇪🇺 GDPR (Reglamento General de Protección de Datos)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Para usuarios en la Unión Europea, cumplimos con todas las regulaciones GDPR:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Consentimiento explícito para cookies no esenciales</li>
                    <li>Derecho a retirar el consentimiento en cualquier momento</li>
                    <li>Acceso, rectificación y eliminación de datos personales</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                    🇺🇸 CCPA (California Consumer Privacy Act)
                  </h3>
                  <p className="text-gray-700 mb-4">Para residentes de California, garantizamos:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Derecho a saber qué información personal recopilamos</li>
                    <li>Derecho a eliminar información personal</li>
                    <li>Derecho a optar por no vender información personal</li>
                    <li>No discriminación por ejercer derechos de privacidad</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">Gestión de Cookies</h2>
                <div className="bg-[#2E8B57]/5 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    Puedes gestionar tus preferencias de cookies de las siguientes maneras:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      <strong>Banner de cookies:</strong> Acepta o rechaza cookies al visitar el sitio
                    </li>
                    <li>
                      <strong>Configuración del navegador:</strong> Bloquea o elimina cookies desde tu navegador
                    </li>
                    <li>
                      <strong>Herramientas de terceros:</strong> Usa extensiones de privacidad
                    </li>
                  </ul>

                  <div className="mt-6 p-4 bg-white rounded-lg border-2 border-[#2E8B57]">
                    <p className="text-center text-gray-700 mb-4">
                      <strong>¿Quieres cambiar tus preferencias ahora?</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button className="bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white">
                        Aceptar Todas las Cookies
                      </Button>
                      <Button
                        variant="outline"
                        className="border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57]/10 bg-transparent"
                      >
                        Configuración Avanzada
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">Contacto</h2>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    Si tienes preguntas sobre nuestra Política de Cookies, contáctanos:
                  </p>
                  <ul className="list-none text-gray-700 space-y-2">
                    <li>
                      <strong>📧 Email:</strong> privacy@rulo.pro
                    </li>
                    <li>
                      <strong>📱 WhatsApp:</strong>{" "}
                      <Link href="https://wa.link/6difl3" className="text-[#2E8B57] hover:underline">
                        Contactar por WhatsApp
                      </Link>
                    </li>
                    <li>
                      <strong>🌐 Web:</strong> rulo.pro
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
