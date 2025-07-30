import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bitcoin, AlertTriangle, Clock } from "lucide-react"

export default function CryptoTerms() {
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
            <div className="flex items-center justify-center mb-4">
              <Bitcoin className="h-12 w-12 text-[#FFD700] mr-3" />
              <CardTitle className="text-3xl font-bold text-gray-900">Términos de Pagos en Criptomonedas</CardTitle>
            </div>
            <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded-xl">
              <p>
                <strong>Documento generado el:</strong> 30 de enero, 2025
              </p>
              <p>
                <strong>Última actualización:</strong> 30 de enero, 2025
              </p>
              <p>
                <strong>Anexo a:</strong> Términos de Servicio de Rulo.pro
              </p>
            </div>
          </CardHeader>

          <CardContent className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Warning Banner */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="h-8 w-8 mr-3" />
                  <h2 className="text-2xl font-bold">⚠️ ADVERTENCIA IMPORTANTE</h2>
                </div>
                <div className="text-lg leading-relaxed">
                  <p className="mb-3">
                    <strong>Los pagos en criptomonedas son IRREVOCABLES.</strong> Una vez confirmada la transacción en
                    la blockchain, no se puede deshacer.
                  </p>
                  <p className="mb-3">
                    <strong>Recomendamos usar USDC (stablecoin)</strong> para evitar volatilidad de precios.
                  </p>
                  <p>
                    <strong>Consulte a su contador</strong> sobre implicaciones fiscales de pagos crypto en EEUU.
                  </p>
                </div>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">1. Criptomonedas Aceptadas</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 text-center">
                    <div className="text-4xl mb-3">₿</div>
                    <h3 className="text-lg font-semibold text-gray-900">Bitcoin (BTC)</h3>
                    <p className="text-sm text-gray-600">Red principal únicamente</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 text-center">
                    <div className="text-4xl mb-3">Ξ</div>
                    <h3 className="text-lg font-semibold text-gray-900">Ethereum (ETH)</h3>
                    <p className="text-sm text-gray-600">Red Ethereum mainnet</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 text-center">
                    <div className="text-4xl mb-3">💵</div>
                    <h3 className="text-lg font-semibold text-gray-900">USD Coin (USDC)</h3>
                    <p className="text-sm text-gray-600 font-semibold text-green-600">RECOMENDADO</p>
                  </div>
                </div>

                <div className="mt-6 bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                  <p className="text-red-700 font-semibold">
                    ❌ <strong>NO ACEPTAMOS:</strong> Memecoins, tokens experimentales, o criptomonedas no listadas
                    arriba.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">2. Proceso de Pago Crypto</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">Ejemplo de Checkout</h3>
                    </div>
                    <div className="bg-white p-6 rounded-lg border-2 border-blue-200">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900 mb-2">Total: $4,900 USD</div>
                        <div className="text-xl text-blue-600 mb-2">Equivalente ETH: Ξ 1.72</div>
                        <Badge className="bg-red-500 text-white animate-pulse">⏰ Precio válido por 15 minutos</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">📊 Conversión de Precios</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                          Precios base siempre en <strong>USD</strong>
                        </li>
                        <li>Conversión crypto al tipo de cambio del momento de pago</li>
                        <li>
                          Usamos precios de <strong>CoinGecko API</strong>
                        </li>
                        <li>Ventana de 15 minutos para completar pago</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ Confirmación</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                          Mínimo <strong>1 confirmación</strong> en blockchain
                        </li>
                        <li>Notificación automática por email</li>
                        <li>Inicio inmediato del proyecto</li>
                        <li>Recibo fiscal generado automáticamente</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">3. Riesgos y Limitaciones</h2>
                <div className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">⚠️ Volatilidad de Precios</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>El cliente acepta completamente la volatilidad de las criptomonedas.</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>NO hacemos reembolsos por fluctuaciones de precio</li>
                      <li>El valor en USD se fija al momento del pago</li>
                      <li>Recomendamos USDC para evitar volatilidad</li>
                      <li>Bitcoin y Ethereum pueden fluctuar ±20% diariamente</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🚫 Limitaciones Técnicas</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Transacciones irreversibles:</strong> No se pueden cancelar una vez enviadas
                      </li>
                      <li>
                        <strong>Fees de red:</strong> Corren por cuenta del cliente
                      </li>
                      <li>
                        <strong>Tiempo de confirmación:</strong> Puede variar según congestión de red
                      </li>
                      <li>
                        <strong>Direcciones incorrectas:</strong> Pérdida total de fondos
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">4. Deslinde Legal</h2>
                <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-300">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                      <h3 className="text-lg font-semibold text-red-700 mb-2">🚨 NO Somos Asesores Financieros</h3>
                      <p className="text-gray-700">
                        Rulo.pro <strong>NO proporciona asesoramiento financiero o de inversión</strong>. Los pagos en
                        crypto son bajo su propio riesgo y responsabilidad.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                      <h3 className="text-lg font-semibold text-yellow-700 mb-2">📋 Responsabilidad Fiscal</h3>
                      <p className="text-gray-700">
                        <strong>El cliente es responsable</strong> de reportar transacciones crypto a las autoridades
                        fiscales (IRS en EEUU). Proporcionamos recibos pero NO asesoramiento fiscal.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                      <h3 className="text-lg font-semibold text-blue-700 mb-2">🔒 Seguridad</h3>
                      <p className="text-gray-700">
                        Usamos wallets seguros y mejores prácticas, pero <strong>NO garantizamos</strong>
                        protección contra hackeos, errores de usuario, o fallas de terceros.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">5. Cumplimiento Regulatorio (EEUU)</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      🏛️ FinCEN (Financial Crimes Enforcement Network)
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Registrados como MSB si superamos $100,000/año en transacciones crypto</li>
                      <li>Cumplimos con regulaciones AML (Anti-Money Laundering)</li>
                      <li>Reportamos transacciones sospechosas según requerido</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">📊 IRS (Internal Revenue Service)</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        Emitimos <strong>Formulario 1099-B</strong> para pagos &gt;$600 en crypto
                      </li>
                      <li>Mantenemos registros detallados de todas las transacciones</li>
                      <li>Cooperamos con auditorías fiscales cuando sea requerido</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ FTC (Federal Trade Commission)</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Cláusula específica para NFTs:</strong>
                    </p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                      <p className="text-gray-700 italic">
                        "Los NFTs para citas prioritarias son utilidades digitales, NO inversiones. No garantizamos
                        ganancias, apreciación de valor, o retornos financieros de ningún tipo."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">6. Soporte Técnico Crypto</h2>
                <div className="bg-[#2E8B57]/5 p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ Sí Ayudamos Con:</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Generar direcciones de pago</li>
                        <li>Verificar transacciones en blockchain</li>
                        <li>Resolver problemas técnicos de pago</li>
                        <li>Proporcionar recibos y documentación</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">❌ NO Ayudamos Con:</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Configurar wallets personales</li>
                        <li>Recuperar fondos perdidos</li>
                        <li>Asesoramiento sobre qué crypto comprar</li>
                        <li>Problemas con exchanges externos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">7. Contacto Especializado</h2>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">Para consultas específicas sobre pagos en criptomonedas:</p>
                  <ul className="list-none text-gray-700 space-y-2">
                    <li>
                      <strong>📧 Email Crypto:</strong> crypto@rulo.pro
                    </li>
                    <li>
                      <strong>📱 WhatsApp Técnico:</strong>{" "}
                      <Link href="https://wa.link/6difl3" className="text-[#2E8B57] hover:underline">
                        Soporte Crypto
                      </Link>
                    </li>
                    <li>
                      <strong>⏰ Horario:</strong> Lunes a Viernes, 9 AM - 6 PM EST
                    </li>
                  </ul>

                  <div className="mt-4 p-4 bg-white rounded-lg border-2 border-blue-300">
                    <p className="text-blue-700 font-semibold text-center">
                      🔐 <strong>Recuerda:</strong> Nunca compartas tus claves privadas con nadie, incluyendo nuestro
                      equipo.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
