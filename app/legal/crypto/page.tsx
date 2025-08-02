import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bitcoin, ArrowLeft, AlertTriangle, Shield, DollarSign, Clock, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Términos de Criptomonedas | Rulo.pro",
  description: "Términos y condiciones para pagos con criptomonedas en Rulo.pro. Información sobre el uso de Bitcoin y otras criptomonedas.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Términos de Criptomonedas | Rulo.pro",
    description: "Términos y condiciones para pagos con criptomonedas en Rulo.pro.",
    url: "https://rulo.pro/legal/crypto",
  },
}

export default function CryptoTerms() {
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
                <Bitcoin className="h-8 w-8 text-[#FFD700]" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Términos de Pagos Crypto</h1>
                  <p className="text-sm text-gray-600">Rulo.pro - Actualizada: 30 de Enero, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Critical Warning */}
        <Card className="mb-8 border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 to-red-100/50">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-8 w-8 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-3">⚠️ ADVERTENCIA IMPORTANTE</h2>
                <div className="space-y-2 text-red-800">
                  <p className="text-lg font-semibold">
                    Los pagos en criptomonedas son IRREVOCABLES una vez confirmados en la blockchain.
                  </p>
                  <p>
                    <strong>Recomendamos usar USDC (stablecoin)</strong> para evitar volatilidad de precios.
                  </p>
                  <p>
                    <strong>Consulte a su contador</strong> sobre implicaciones fiscales en Estados Unidos.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1: Accepted Cryptocurrencies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bitcoin className="h-5 w-5 text-[#FFD700]" />
                <span>1. Criptomonedas Aceptadas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                  <Bitcoin className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900">Bitcoin (BTC)</h3>
                  <p className="text-sm text-gray-600">Red principal de Bitcoin</p>
                  <Badge className="mt-2 bg-orange-500 text-white">Volátil</Badge>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Ξ</span>
                  </div>
                  <h3 className="font-bold text-gray-900">Ethereum (ETH)</h3>
                  <p className="text-sm text-gray-600">Red Ethereum mainnet</p>
                  <Badge className="mt-2 bg-blue-500 text-white">Volátil</Badge>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <h3 className="font-bold text-gray-900">USDC</h3>
                  <p className="text-sm text-gray-600">USD Coin (Stablecoin)</p>
                  <Badge className="mt-2 bg-green-500 text-white">Recomendado</Badge>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                  Criptomonedas NO Aceptadas:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>Memecoins (DOGE, SHIB, PEPE, etc.)</li>
                  <li>Tokens experimentales o de bajo volumen</li>
                  <li>NFTs como forma de pago</li>
                  <li>Criptomonedas de privacidad (Monero, Zcash)</li>
                  <li>Tokens en redes de prueba (testnets)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Pricing and Conversion */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-[#2E8B57]" />
                <span>2. Precios y Conversión</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Metodología de Precios:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>
                    <strong>Moneda base:</strong> Todos los precios se cotizan en USD
                  </li>
                  <li>
                    <strong>Conversión crypto:</strong> Tipo de cambio al momento del pago
                  </li>
                  <li>
                    <strong>Fuente de precios:</strong> CoinGecko API (promedio de múltiples exchanges)
                  </li>
                  <li>
                    <strong>Ventana de pago:</strong> 15 minutos para completar la transacción
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">💡 Ejemplo de Checkout:</h3>
                <div className="bg-white border rounded-lg p-4 font-mono text-sm">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-gray-900">Total: $4,900 USD</div>
                    <div className="text-lg text-blue-600">Equivalente ETH: Ξ 1.72</div>
                    <div className="text-sm text-gray-600">
                      <Clock className="h-4 w-4 inline mr-1" />
                      Precio válido por 15 minutos
                    </div>
                    <div className="text-xs text-gray-500">Tasa: 1 ETH = $2,849.12 USD (CoinGecko)</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Política de Volatilidad:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>El cliente acepta la volatilidad inherente de las criptomonedas</li>
                  <li>No hacemos reembolsos por fluctuaciones de precio post-pago</li>
                  <li>Recomendamos USDC para pagos estables (1 USDC ≈ 1 USD)</li>
                  <li>Los precios en crypto se actualizan cada 60 segundos</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 3: Payment Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-[#2E8B57]" />
                <span>3. Proceso de Pago Seguro</span>
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
                      <h3 className="font-semibold text-gray-900">Generar Dirección</h3>
                      <p className="text-gray-600 text-sm">Dirección única para tu transacción</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#FFD700] text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Enviar Pago</h3>
                      <p className="text-gray-600 text-sm">Desde tu wallet a nuestra dirección</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#2E8B57] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Confirmación</h3>
                      <p className="text-gray-600 text-sm">Esperamos confirmaciones de red</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#FFD700] text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Activación</h3>
                      <p className="text-gray-600 text-sm">Comenzamos tu proyecto</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Confirmaciones Requeridas:</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 flex items-center">
                      <Bitcoin className="h-4 w-4 text-orange-500 mr-2" />
                      Bitcoin (BTC)
                    </span>
                    <span className="text-sm font-semibold text-gray-900">3 confirmaciones (~30 min)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 flex items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                      Ethereum (ETH)
                    </span>
                    <span className="text-sm font-semibold text-gray-900">12 confirmaciones (~3 min)</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 flex items-center">
                      <DollarSign className="h-4 w-4 text-green-500 mr-2" />
                      USDC
                    </span>
                    <span className="text-sm font-semibold text-gray-900">12 confirmaciones (~3 min)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: Legal Compliance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-[#2E8B57]" />
                <span>4. Cumplimiento Legal (Estados Unidos)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🏛️ FinCEN (MSB)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>Registro como MSB si superamos $100k/año</li>
                    <li>Reportes de transacciones sospechosas (SAR)</li>
                    <li>Programa de cumplimiento AML/KYC</li>
                    <li>Mantenimiento de registros por 5 años</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">💰 IRS (Impuestos)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                    <li>Formulario 1099-B para pagos &gt;$600</li>
                    <li>Reporte de transacciones crypto</li>
                    <li>Valoración en USD al momento del pago</li>
                    <li>Cooperación con auditorías fiscales</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📋 FTC (Protección al Consumidor)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>No garantizamos ganancias con NFTs o inversiones crypto</li>
                  <li>Advertencias claras sobre volatilidad y riesgos</li>
                  <li>Prohibición de esquemas piramidales o Ponzi</li>
                  <li>Transparencia total en términos y condiciones</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Información Requerida (KYC):</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Para pagos crypto superiores a $3,000 USD, podemos solicitar:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>Identificación oficial con foto</li>
                  <li>Comprobante de domicilio</li>
                  <li>Fuente de fondos para la transacción</li>
                  <li>Información sobre el wallet utilizado</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 5: Risks and Disclaimers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                <span>5. Riesgos y Deslindes</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">⚠️ Riesgos del Cliente:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>
                    <strong>Volatilidad:</strong> Los precios crypto pueden fluctuar dramáticamente
                  </li>
                  <li>
                    <strong>Irreversibilidad:</strong> Las transacciones no se pueden cancelar
                  </li>
                  <li>
                    <strong>Errores de envío:</strong> Direcciones incorrectas resultan en pérdida total
                  </li>
                  <li>
                    <strong>Regulaciones:</strong> Cambios legales pueden afectar el uso de crypto
                  </li>
                  <li>
                    <strong>Tecnología:</strong> Fallos de red o wallet son responsabilidad del usuario
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🚫 Lo que NO Somos:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>
                    <strong>Asesores financieros:</strong> No damos consejos de inversión
                  </li>
                  <li>
                    <strong>Exchange:</strong> No compramos/vendemos crypto por ti
                  </li>
                  <li>
                    <strong>Custodios:</strong> No almacenamos tus criptomonedas
                  </li>
                  <li>
                    <strong>Garantía de ganancias:</strong> No prometemos retornos de inversión
                  </li>
                  <li>
                    <strong>Soporte técnico de wallets:</strong> No ayudamos con problemas de wallet
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">✅ Nuestra Responsabilidad:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>Proporcionar direcciones de pago correctas y seguras</li>
                  <li>Confirmar recepción de pagos dentro de 24 horas</li>
                  <li>Cumplir con todas las regulaciones aplicables</li>
                  <li>Mantener registros precisos de transacciones</li>
                  <li>Entregar servicios según lo acordado tras confirmación de pago</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 6: Tax Implications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-[#2E8B57]" />
                <span>6. Implicaciones Fiscales</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🧾 Para el Cliente:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>Pagar con crypto puede ser un evento gravable</li>
                  <li>Debes reportar ganancias/pérdidas de capital al IRS</li>
                  <li>Mantén registros del precio de compra original de tu crypto</li>
                  <li>Consulta con un contador especializado en crypto</li>
                  <li>Considera las implicaciones antes de pagar</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">📊 Para Rulo.pro:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>Reportamos pagos crypto &gt;$600 al IRS (Formulario 1099-B)</li>
                  <li>Valoramos transacciones en USD al momento del pago</li>
                  <li>Mantenemos registros detallados por 7 años</li>
                  <li>Cooperamos con auditorías fiscales cuando sea requerido</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">⚖️ Importante:</h3>
                <p className="text-gray-700 text-sm">
                  <strong>No somos asesores fiscales.</strong> Esta información es solo educativa. Siempre consulta con
                  un profesional fiscal calificado antes de realizar transacciones significativas en criptomonedas.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 7: Contact */}
          <Card className="bg-gradient-to-r from-[#FFD700]/5 to-[#FFA500]/5">
            <CardHeader>
              <CardTitle>7. Soporte para Pagos Crypto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Si tienes preguntas sobre pagos en criptomonedas o necesitas asistencia técnica:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Soporte Técnico:</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>
                      <strong>Email:</strong> crypto@rulo.pro
                    </li>
                    <li>
                      <strong>WhatsApp:</strong> +1 (555) RULO-PRO
                    </li>
                    <li>
                      <strong>Horario:</strong> 24/7 para pagos crypto
                    </li>
                    <li>
                      <strong>Respuesta:</strong> Máximo 2 horas
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Antes de Pagar:</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>✅ Verifica la dirección de pago</li>
                    <li>✅ Confirma el monto exacto</li>
                    <li>✅ Usa la red correcta (mainnet)</li>
                    <li>✅ Ten suficiente crypto para fees</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">🚀 Pago Express:</h3>
                <p className="text-gray-700 text-sm">
                  Para pagos crypto urgentes o de alto valor (&gt;$10,000), contáctanos directamente para recibir
                  atención personalizada y confirmación inmediata.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                  <strong>Última actualización:</strong> 30 de Enero, 2025
                  <br />
                  <strong>Versión:</strong> 2.0
                  <br />
                  <strong>Cumplimiento:</strong> FinCEN, IRS, FTC
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
