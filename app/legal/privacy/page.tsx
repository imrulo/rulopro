import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, UserCheck } from "lucide-react"

export default function PrivacyPolicy() {
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
              <Shield className="h-12 w-12 text-[#2E8B57] mr-3" />
              <CardTitle className="text-3xl font-bold text-gray-900">Política de Privacidad</CardTitle>
            </div>
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
              {/* No Vendemos Datos Banner */}
              <div className="bg-gradient-to-r from-[#2E8B57] to-[#20B2AA] text-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Lock className="h-8 w-8 mr-3" />
                  <h2 className="text-2xl font-bold">🔒 COMPROMISO PRINCIPAL</h2>
                </div>
                <div className="text-xl leading-relaxed">
                  <p className="mb-3">
                    <strong>NO VENDEMOS TUS DATOS. NUNCA.</strong>
                  </p>
                  <p>Tu información personal es sagrada. Solo la usamos para brindarte el mejor servicio posible.</p>
                </div>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">1. Información que Recolectamos</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <div className="flex items-center mb-3">
                      <UserCheck className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Datos Personales Básicos</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Nombre completo:</strong> Para personalizar nuestro servicio
                      </li>
                      <li>
                        <strong>Email:</strong> Para comunicación y envío de propuestas
                      </li>
                      <li>
                        <strong>Número de WhatsApp:</strong> Para consultas rápidas y soporte
                      </li>
                      <li>
                        <strong>Tipo de negocio/profesión:</strong> Para adaptar nuestras soluciones
                      </li>
                      <li>
                        <strong>Ubicación general:</strong> Para cumplir regulaciones locales
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="flex items-center mb-3">
                      <Eye className="h-6 w-6 text-yellow-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Datos de Navegación</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Dirección IP:</strong> Para seguridad y análisis geográfico
                      </li>
                      <li>
                        <strong>Tipo de dispositivo:</strong> Para optimizar la experiencia
                      </li>
                      <li>
                        <strong>Páginas visitadas:</strong> Para mejorar nuestro contenido
                      </li>
                      <li>
                        <strong>Tiempo en el sitio:</strong> Para análisis de usabilidad
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                    <div className="flex items-center mb-3">
                      <Shield className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Datos de Proyecto</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Requerimientos técnicos:</strong> Para desarrollar tu solución
                      </li>
                      <li>
                        <strong>Presupuesto aproximado:</strong> Para crear propuestas adecuadas
                      </li>
                      <li>
                        <strong>Cronograma preferido:</strong> Para planificar entregas
                      </li>
                      <li>
                        <strong>Feedback y comunicaciones:</strong> Para mejorar continuamente
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">2. Cómo Usamos Tu Información</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ Usos Permitidos</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Proporcionar servicios contratados</li>
                      <li>Comunicación sobre proyectos</li>
                      <li>Soporte técnico y consultas</li>
                      <li>Mejoras en nuestros servicios</li>
                      <li>Cumplimiento legal y fiscal</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">❌ NUNCA Hacemos</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Vender datos a terceros</strong>
                      </li>
                      <li>Spam o marketing no solicitado</li>
                      <li>Compartir con competidores</li>
                      <li>Usar para otros fines comerciales</li>
                      <li>Almacenar innecesariamente</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">3. Protección de Datos Sensibles</h2>
                <div className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🏥 HIPAA (Datos Médicos)</h3>
                    <p className="text-gray-700 mb-4">Para clientes del sector salud (médicos, dentistas, clínicas):</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Cumplimiento HIPAA:</strong> Protección de información médica protegida (PHI)
                      </li>
                      <li>
                        <strong>Encriptación:</strong> Todos los datos médicos se encriptan en tránsito y reposo
                      </li>
                      <li>
                        <strong>Acceso limitado:</strong> Solo personal autorizado puede acceder
                      </li>
                      <li>
                        <strong>Auditorías:</strong> Registros detallados de todos los accesos
                      </li>
                      <li>
                        <strong>Acuerdos BAA:</strong> Business Associate Agreements cuando sea requerido
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ FTC (Datos Legales)</h3>
                    <p className="text-gray-700 mb-4">Para clientes del sector legal (abogados, bufetes):</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Privilegio abogado-cliente:</strong> Respetamos la confidencialidad legal
                      </li>
                      <li>
                        <strong>Seguridad reforzada:</strong> Protocolos adicionales para datos legales
                      </li>
                      <li>
                        <strong>Retención limitada:</strong> Eliminamos datos según cronogramas legales
                      </li>
                      <li>
                        <strong>Cumplimiento FTC:</strong> Seguimos regulaciones de protección al consumidor
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">4. Compartir Información con Terceros</h2>
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🤝 Socios Tecnológicos Autorizados</h3>
                    <p className="text-gray-700 mb-4">Solo compartimos datos mínimos necesarios con:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Calendly:</strong> Para programación de citas (solo nombre y email)
                      </li>
                      <li>
                        <strong>Stripe/PayPal:</strong> Para procesamiento de pagos (datos de facturación)
                      </li>
                      <li>
                        <strong>Google Workspace:</strong> Para comunicación y documentos (encriptado)
                      </li>
                      <li>
                        <strong>Hosting providers:</strong> Para almacenamiento seguro (encriptado)
                      </li>
                    </ul>

                    <div className="mt-4 p-4 bg-white rounded-lg border-2 border-yellow-300">
                      <p className="text-yellow-700 font-semibold">
                        ⚠️ <strong>Todos nuestros socios</strong> firman acuerdos de confidencialidad y cumplen con
                        GDPR/CCPA.
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🚫 Excepciones Legales</h3>
                    <p className="text-gray-700 mb-4">
                      Solo compartiremos información si es <strong>legalmente requerido</strong>:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Orden judicial o citación legal</li>
                      <li>Investigación criminal por autoridades</li>
                      <li>Cumplimiento de regulaciones fiscales (IRS)</li>
                      <li>Protección contra fraude o actividad ilegal</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">5. Tus Derechos de Privacidad</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🇪🇺 Derechos GDPR</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Acceso:</strong> Ver qué datos tenemos
                      </li>
                      <li>
                        <strong>Rectificación:</strong> Corregir datos incorrectos
                      </li>
                      <li>
                        <strong>Eliminación:</strong> "Derecho al olvido"
                      </li>
                      <li>
                        <strong>Portabilidad:</strong> Exportar tus datos
                      </li>
                      <li>
                        <strong>Restricción:</strong> Limitar el procesamiento
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🇺🇸 Derechos CCPA</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Conocer:</strong> Qué información recopilamos
                      </li>
                      <li>
                        <strong>Eliminar:</strong> Borrar información personal
                      </li>
                      <li>
                        <strong>Opt-out:</strong> No vender datos (ya no lo hacemos)
                      </li>
                      <li>
                        <strong>No discriminación:</strong> Mismo servicio sin importar tus elecciones
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-[#2E8B57]/5 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">📧 Cómo Ejercer Tus Derechos</h3>
                  <p className="text-gray-700 mb-4">Para ejercer cualquiera de estos derechos, contáctanos:</p>
                  <ul className="list-none text-gray-700 space-y-2">
                    <li>
                      <strong>📧 Email de Privacidad:</strong> privacy@rulo.pro
                    </li>
                    <li>
                      <strong>📱 WhatsApp:</strong>{" "}
                      <Link href="https://wa.link/6difl3" className="text-[#2E8B57] hover:underline">
                        Contactar por WhatsApp
                      </Link>
                    </li>
                    <li>
                      <strong>⏰ Tiempo de respuesta:</strong> Máximo 30 días
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">6. Seguridad de Datos</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🔐 Medidas Técnicas</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                          <strong>Encriptación SSL/TLS:</strong> Datos en tránsito
                        </li>
                        <li>
                          <strong>Encriptación AES-256:</strong> Datos en reposo
                        </li>
                        <li>
                          <strong>Autenticación 2FA:</strong> Acceso a sistemas
                        </li>
                        <li>
                          <strong>Firewalls avanzados:</strong> Protección perimetral
                        </li>
                      </ul>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                          <strong>Backups automáticos:</strong> Recuperación de datos
                        </li>
                        <li>
                          <strong>Monitoreo 24/7:</strong> Detección de amenazas
                        </li>
                        <li>
                          <strong>Actualizaciones regulares:</strong> Parches de seguridad
                        </li>
                        <li>
                          <strong>Auditorías externas:</strong> Verificación independiente
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">👥 Medidas Organizacionales</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Capacitación del equipo:</strong> Mejores prácticas de seguridad
                      </li>
                      <li>
                        <strong>Acceso por roles:</strong> Principio de menor privilegio
                      </li>
                      <li>
                        <strong>Acuerdos de confidencialidad:</strong> Todo el personal
                      </li>
                      <li>
                        <strong>Políticas internas:</strong> Manejo seguro de datos
                      </li>
                      <li>
                        <strong>Respuesta a incidentes:</strong> Plan de contingencia
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">7. Retención de Datos</h2>
                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">📅 Cronograma de Retención</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Datos de Proyecto Activo</h4>
                      <p className="text-gray-700">
                        Se mantienen durante la duración del proyecto + 1 año para soporte
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Datos Fiscales</h4>
                      <p className="text-gray-700">7 años (requerimiento del IRS para transacciones comerciales)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Datos de Marketing</h4>
                      <p className="text-gray-700">Hasta que solicites eliminación o retires consentimiento</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Datos Médicos/Legales</h4>
                      <p className="text-gray-700">Según regulaciones específicas del sector (HIPAA/FTC)</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">8. Transferencias Internacionales</h2>
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-gray-700 mb-4">
                    Como servimos clientes internacionalmente, algunos datos pueden transferirse fuera de tu país:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      <strong>Servidores principales:</strong> Estados Unidos (protegidos por Privacy Shield)
                    </li>
                    <li>
                      <strong>Backups:</strong> Unión Europea (cumplimiento GDPR)
                    </li>
                    <li>
                      <strong>Soporte técnico:</strong> Equipos distribuidos con acceso encriptado
                    </li>
                    <li>
                      <strong>Garantías:</strong> Mismo nivel de protección en todos los países
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">9. Menores de Edad</h2>
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">🚫 Política Estricta</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>NO recolectamos intencionalmente datos de menores de 18 años.</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Nuestros servicios están dirigidos a profesionales adultos</li>
                    <li>Si descubrimos datos de menores, los eliminamos inmediatamente</li>
                    <li>Los padres pueden contactarnos para verificar/eliminar datos</li>
                    <li>Cumplimos con COPPA (Children's Online Privacy Protection Act)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">10. Cambios en esta Política</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    Podemos actualizar esta política ocasionalmente. Cuando lo hagamos:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      <strong>Notificación por email:</strong> 30 días antes de cambios importantes
                    </li>
                    <li>
                      <strong>Aviso en el sitio web:</strong> Banner visible durante 60 días
                    </li>
                    <li>
                      <strong>Versión actualizada:</strong> Siempre disponible en rulo.pro/legal/privacy
                    </li>
                    <li>
                      <strong>Historial de cambios:</strong> Documentamos todas las modificaciones
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#2E8B57] mb-4">11. Contacto y Quejas</h2>
                <div className="bg-[#2E8B57]/5 p-6 rounded-xl">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">📞 Contacto Directo</h3>
                      <ul className="list-none text-gray-700 space-y-2">
                        <li>
                          <strong>📧 Email:</strong> privacy@rulo.pro
                        </li>
                        <li>
                          <strong>📱 WhatsApp:</strong>{" "}
                          <Link href="https://wa.link/6difl3" className="text-[#2E8B57] hover:underline">
                            Soporte Privacidad
                          </Link>
                        </li>
                        <li>
                          <strong>⏰ Horario:</strong> 24/7 para emergencias
                        </li>
                        <li>
                          <strong>🌍 Idiomas:</strong> Español e Inglés
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">⚖️ Autoridades Regulatorias</h3>
                      <ul className="list-none text-gray-700 space-y-2">
                        <li>
                          <strong>🇪🇺 GDPR:</strong> Tu autoridad local de protección de datos
                        </li>
                        <li>
                          <strong>🇺🇸 CCPA:</strong> California Attorney General
                        </li>
                        <li>
                          <strong>🏥 HIPAA:</strong> HHS Office for Civil Rights
                        </li>
                        <li>
                          <strong>⚖️ FTC:</strong> Federal Trade Commission
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-lg border-2 border-[#2E8B57]">
                    <p className="text-center text-gray-700">
                      <strong>Compromiso:</strong> Respondemos a todas las consultas de privacidad en menos de 48 horas.
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
