import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cookie, ArrowLeft, Settings, Eye, BarChart, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Cookies | Rulo.pro",
  description: "Política de cookies de Rulo.pro. Información sobre el uso de cookies y tecnologías similares en nuestro sitio web.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Política de Cookies | Rulo.pro",
    description: "Política de cookies de Rulo.pro. Información sobre el uso de cookies en nuestro sitio web.",
    url: "https://rulo.pro/legal/cookies",
  },
}

export default function CookiePolicy() {
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
                <Cookie className="h-8 w-8 text-[#2E8B57]" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Política de Cookies</h1>
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
              <Cookie className="h-6 w-6 text-[#2E8B57] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">🍪 Uso Responsable de Cookies</h2>
                <p className="text-gray-700">
                  Usamos cookies solo para mejorar tu experiencia de navegación y analizar el tráfico de nuestro sitio.
                  No vendemos ni compartimos esta información con terceros para fines publicitarios.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1: What are Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-[#2E8B57]" />
                <span>1. ¿Qué son las Cookies?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro
                sitio web. Nos ayudan a recordar tus preferencias y mejorar tu experiencia de usuario.
              </p>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tipos de Cookies que Usamos:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">🔧 Cookies Técnicas</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>Gestión de sesiones de usuario</li>
                      <li>Recordar preferencias de idioma</li>
                      <li>Mantener configuraciones de seguridad</li>
                      <li>Funcionalidad del carrito de compras</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">📊 Cookies Analíticas</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                      <li>Google Analytics (tráfico web)</li>
                      <li>Tiempo de permanencia en páginas</li>
                      <li>Páginas más visitadas</li>
                      <li>Comportamiento de navegación</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">⚠️ Importante:</h3>
                <p className="text-gray-700 text-sm">
                  NO usamos cookies para publicidad dirigida, seguimiento entre sitios web o venta de datos personales.
                  Todas nuestras cookies tienen propósitos técnicos o analíticos legítimos.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Third Party Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-[#2E8B57]" />
                <span>2. Herramientas de Terceros</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Servicios Integrados:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <BarChart className="h-5 w-5 text-[#4285F4] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Google Analytics</h4>
                      <p className="text-gray-600 text-sm">
                        Analiza el tráfico web y comportamiento de usuarios. Datos anonimizados y agregados.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Política:{" "}
                        <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">
                          Google Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Settings className="h-5 w-5 text-[#00A4EF] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Calendly</h4>
                      <p className="text-gray-600 text-sm">
                        Sistema de agendamiento de citas. Cookies para recordar preferencias de horario.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Política:{" "}
                        <a href="https://calendly.com/privacy" className="text-blue-600 hover:underline">
                          Calendly Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Globe className="h-5 w-5 text-[#25D366] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">WhatsApp Business</h4>
                      <p className="text-gray-600 text-sm">
                        Widget de chat y comunicación. Cookies para mantener conversaciones activas.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Política:{" "}
                        <a
                          href="https://www.whatsapp.com/legal/privacy-policy"
                          className="text-blue-600 hover:underline"
                        >
                          WhatsApp Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Settings className="h-5 w-5 text-[#635BFF] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Stripe</h4>
                      <p className="text-gray-600 text-sm">
                        Procesamiento de pagos. Cookies de seguridad para prevenir fraude.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Política:{" "}
                        <a href="https://stripe.com/privacy" className="text-blue-600 hover:underline">
                          Stripe Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Cookie Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-[#2E8B57]" />
                <span>3. Gestión de Cookies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Controla tus Cookies:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">✅ Aceptar Todas</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Permite todas las cookies para una experiencia completa del sitio web.
                    </p>
                    <Button className="w-full bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white">
                      Aceptar Todas las Cookies
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">⚙️ Configuración Avanzada</h4>
                    <p className="text-gray-600 text-sm mb-3">Personaliza qué tipos de cookies quieres permitir.</p>
                    <Button variant="outline" className="w-full bg-transparent">
                      Configurar Cookies
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Configuración del Navegador:</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Chrome</span>
                    <span className="text-xs text-gray-500">Configuración → Privacidad → Cookies</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Firefox</span>
                    <span className="text-xs text-gray-500">Opciones → Privacidad → Cookies</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Safari</span>
                    <span className="text-xs text-gray-500">Preferencias → Privacidad → Cookies</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Edge</span>
                    <span className="text-xs text-gray-500">Configuración → Privacidad → Cookies</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: GDPR & CCPA Compliance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-[#2E8B57]" />
                <span>4. Cumplimiento GDPR y CCPA</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🇪🇺 GDPR (Europa)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>Consentimiento explícito para cookies no esenciales</li>
                    <li>Derecho a retirar consentimiento en cualquier momento</li>
                    <li>Información clara sobre el propósito de cada cookie</li>
                    <li>Opción de rechazar cookies no técnicas</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🇺🇸 CCPA (California)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>Derecho a saber qué información recolectamos</li>
                    <li>Derecho a eliminar información personal</li>
                    <li>Derecho a opt-out de la venta de datos</li>
                    <li>No discriminación por ejercer derechos</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#2E8B57]/5 border border-[#2E8B57]/20 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🛡️ Tu Control:</h3>
                <p className="text-gray-700 text-sm">
                  Puedes cambiar tus preferencias de cookies en cualquier momento usando el botón "Configurar Cookies"
                  en el footer de nuestro sitio web, o contactándonos directamente en <strong>privacy@rulo.pro</strong>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: Cookie Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart className="h-5 w-5 text-[#2E8B57]" />
                <span>5. Detalles Técnicos de Cookies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 font-semibold text-gray-900">Cookie</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900">Propósito</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900">Duración</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900">Tipo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-2 px-3 font-mono text-xs">_ga</td>
                      <td className="py-2 px-3 text-gray-700">Google Analytics - Identificador único</td>
                      <td className="py-2 px-3 text-gray-600">2 años</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Analítica
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-xs">_gid</td>
                      <td className="py-2 px-3 text-gray-700">Google Analytics - Sesión</td>
                      <td className="py-2 px-3 text-gray-600">24 horas</td>
                      <td className="py-2 px-3">
                        <Badge variant="secondary" className="text-xs">
                          Analítica
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-xs">session_id</td>
                      <td className="py-2 px-3 text-gray-700">Gestión de sesión de usuario</td>
                      <td className="py-2 px-3 text-gray-600">Sesión</td>
                      <td className="py-2 px-3">
                        <Badge className="text-xs bg-[#2E8B57] text-white">Técnica</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-xs">lang_pref</td>
                      <td className="py-2 px-3 text-gray-700">Preferencia de idioma</td>
                      <td className="py-2 px-3 text-gray-600">1 año</td>
                      <td className="py-2 px-3">
                        <Badge className="text-xs bg-[#2E8B57] text-white">Técnica</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-xs">cookie_consent</td>
                      <td className="py-2 px-3 text-gray-700">Recordar preferencias de cookies</td>
                      <td className="py-2 px-3 text-gray-600">1 año</td>
                      <td className="py-2 px-3">
                        <Badge className="text-xs bg-[#2E8B57] text-white">Técnica</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Section 6: Contact */}
          <Card className="bg-gradient-to-r from-[#2E8B57]/5 to-[#20B2AA]/5">
            <CardHeader>
              <CardTitle>6. Contacto sobre Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Si tienes preguntas sobre nuestra política de cookies o quieres ejercer tus derechos de privacidad,
                contáctanos:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contacto Directo:</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>
                      <strong>Email:</strong> privacy@rulo.pro
                    </li>
                    <li>
                      <strong>WhatsApp:</strong> +1 (555) RULO-PRO
                    </li>
                    <li>
                      <strong>Respuesta:</strong> Máximo 48 horas
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Configuración Rápida:</h3>
                  <div className="space-y-2">
                    <Button size="sm" className="w-full bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white">
                      Aceptar Solo Técnicas
                    </Button>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      Rechazar Todas (No Técnicas)
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong>Última actualización:</strong> 30 de Enero, 2025
                  <br />
                  <strong>Próxima revisión:</strong> 30 de Julio, 2025
                  <br />
                  <strong>Versión:</strong> 1.3
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link href="/legal/crypto">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Términos Crypto
            </Link>
          </Button>

          <Button asChild>
            <Link href="/legal/privacy">
              Política de Privacidad
              <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
