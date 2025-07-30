import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle,
  Clock,
  Zap,
  Search,
  Lightbulb,
  Target,
  MessageCircle,
  Star,
  Shield,
  Globe,
  Bitcoin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RuloProLanding() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <header className="bg-[#0F4C81] text-white py-6 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#2E8B57] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold">RULO.PRO</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#servicios" className="hover:text-[#FFD700] transition-colors">
              Servicios
            </Link>
            <Link href="#casos" className="hover:text-[#FFD700] transition-colors">
              Casos de Éxito
            </Link>
            <Link href="#contacto" className="hover:text-[#FFD700] transition-colors">
              Contacto
            </Link>
            <Button className="bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white px-6">Consulta Gratuita</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F4C81] to-[#1a5a96] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-[#2E8B57] text-white mb-8 px-6 py-3 text-lg">🎯 Diseño Web Profesional Premium</Badge>
          </div>

          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl lg:text-7xl font-bold mb-8 leading-tight">
              Deja de perder <span className="text-[#FFD700]">$500</span> por cada cita que se te escapa.
              <span className="text-[#2E8B57]"> Yo lo soluciono.</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-12 text-gray-200 leading-relaxed max-w-4xl mx-auto">
              Soy Rulo — construyo sistemas digitales todo-en-uno para profesionales hispanos en EEUU que quieren
              <span className="text-[#FFD700] font-semibold"> captar más clientes, sin complicaciones técnicas.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white px-12 py-6 text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all"
                asChild
              >
                <Link href="https://wa.link/cbvfs0" target="_blank">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Agenda Auditoría Gratuita (15 min) →
                </Link>
              </Button>

              <div className="flex items-center text-lg text-gray-300">
                <Clock className="mr-3 h-6 w-6 text-[#FFD700]" />
                Entrega garantizada en 72 horas
              </div>
            </div>

            {/* Visual Elements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🏥</div>
                <div className="text-sm text-gray-300">Clínicas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚖️</div>
                <div className="text-sm text-gray-300">Abogados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🦷</div>
                <div className="text-sm text-gray-300">Dentistas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🔬</div>
                <div className="text-sm text-gray-300">Cirujanos</div>
              </div>
            </div>
          </div>

          {/* Stats with better spacing */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#FFD700] mb-2">500+</div>
              <div className="text-gray-300">Proyectos Exitosos</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#2E8B57] mb-2">72H</div>
              <div className="text-gray-300">Entrega Rápida</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#FFD700] mb-2">100%</div>
              <div className="text-gray-300">Satisfacción</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#2E8B57] mb-2">24/7</div>
              <div className="text-gray-300">Funcionamiento</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F4C81] mb-6">¿Te Suena Familiar?</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Estos son los dolores más comunes que veo en profesionales exitosos:
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
            <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
              <div className="text-red-500 mt-1">❌</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Perdés citas de alto valor porque confiás en WhatsApp manual
                </h3>
                <p className="text-gray-600">
                  Sin recordatorios automáticos, confirmaciones o seguimiento profesional.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
              <div className="text-red-500 mt-1">❌</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Tu web no genera confianza en clientes hispanos</h3>
                <p className="text-gray-600">¡Y la competencia sí! Perdés pacientes antes de que te conozcan.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
              <div className="text-red-500 mt-1">❌</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Gastás horas en procesos que podrían ser 100% automáticos
                </h3>
                <p className="text-gray-600">Tiempo que podrías invertir en más pacientes o con tu familia.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
              <div className="text-red-500 mt-1">❌</div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Quisieras aceptar pagos internacionales en crypto</h3>
                <p className="text-gray-600">Pero no sabés por dónde empezar ni cómo implementarlo de forma segura.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-[#0F4C81] text-white rounded-lg">
            <h3 className="text-2xl font-bold mb-4">La Realidad:</h3>
            <p className="text-xl">
              Tú sos el experto en tu profesión.
              <span className="text-[#FFD700] font-semibold">
                {" "}
                Yo soy el experto en hacer que la tecnología trabaje PARA VOS.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Process */}
      <section className="py-24 px-6 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F4C81] mb-6">Cómo Te Ayudo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Mi proceso probado en 4 pasos simples:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <Card className="text-center p-6 border-2 border-[#2E8B57]/20 hover:border-[#2E8B57] transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#2E8B57] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F4C81] mb-3">1. Auditoría Express</h3>
                <p className="text-gray-600">Identificamos fugas de dinero en tu proceso actual en 15 minutos.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-[#2E8B57]/20 hover:border-[#2E8B57] transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-[#0F4C81]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F4C81] mb-3">2. Solución a Medida</h3>
                <p className="text-gray-600">Diseñamos tu sistema ideal basado en tu tipo de práctica.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-[#2E8B57]/20 hover:border-[#2E8B57] transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#2E8B57] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0F4C81] mb-3">3. Implementación Relámpago</h3>
                <p className="text-gray-600">72 horas con IA avanzada para tener todo funcionando.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-[#2E8B57]/20 hover:border-[#2E8B57] transition-colors">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#0F4C81]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F4C81] mb-3">4. Entrenamiento 'Sin Dolor'</h3>
                <p className="text-gray-600">Aprendés a usarlo en 60 minutos. ¡Garantizado!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="servicios" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F4C81] mb-6">Paquetes de Transformación Digital</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Elegí el nivel que mejor se adapte a tu práctica:</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Basic Package */}
            <Card className="relative border-2 border-gray-200 hover:border-[#2E8B57] transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#0F4C81] mb-2">BÁSICO</h3>
                  <div className="text-4xl font-bold text-[#2E8B57] mb-2">$2,500</div>
                  <p className="text-gray-600">Presencia digital profesional</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>Web bilingüe (ES/EN) responsive</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>Sistema de agenda online</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>Formulario de contacto inteligente</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>Optimización SEO básica</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>Hosting y dominio incluido (1 año)</span>
                  </li>
                </ul>

                <Button className="w-full bg-[#0F4C81] hover:bg-[#0F4C81]/90" asChild>
                  <Link href="https://wa.link/cbvfs0" target="_blank">
                    Empezar Ahora
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="relative border-2 border-[#FFD700] hover:border-[#FFD700] transition-colors transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#FFD700] text-[#0F4C81] px-4 py-1 font-bold">MÁS POPULAR</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#0F4C81] mb-2">PREMIUM</h3>
                  <div className="text-4xl font-bold text-[#2E8B57] mb-2">$4,900</div>
                  <p className="text-gray-600">Automatización completa</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>
                      <strong>Todo del paquete Básico +</strong>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>Automatización WhatsApp/SMS</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>Pasarela de pagos (Stripe)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>Recordatorios automáticos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>Dashboard de métricas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>Integración con Google Calendar</span>
                  </li>
                </ul>

                <Button className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0F4C81] font-bold" asChild>
                  <Link href="https://wa.link/cbvfs0" target="_blank">
                    ¡Lo Quiero!
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Elite Package */}
            <Card className="relative border-2 border-[#2E8B57] hover:border-[#2E8B57] transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#0F4C81] mb-2">ÉLITE</h3>
                  <div className="text-4xl font-bold text-[#2E8B57] mb-2">$7,400</div>
                  <p className="text-gray-600">Tecnología del futuro</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>
                      <strong>Todo del paquete Premium +</strong>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Bitcoin className="h-5 w-5 text-[#FFD700] mr-3" />
                    <span>Pasarela de pagos Crypto</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-[#FFD700] mr-3" />
                    <span>NFTs para citas prioritarias*</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>IA para atención al cliente</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>App móvil personalizada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3" />
                    <span>Soporte prioritario 24/7</span>
                  </li>
                </ul>

                <p className="text-sm text-gray-600 mb-4">
                  *Ej: NFT para acceso VIP a cirujanos estéticos o abogados corporativos
                </p>

                <Button className="w-full bg-[#2E8B57] hover:bg-[#2E8B57]/90" asChild>
                  <Link href="https://wa.link/cbvfs0" target="_blank">
                    Ser Élite
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="casos" className="py-24 px-6 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F4C81] mb-6">Casos de Éxito Reales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Resultados que hablan por sí solos:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="p-6 bg-white border-l-4 border-[#2E8B57]">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Dr. Carlos Vega"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#0F4C81]">Dr. Carlos Vega</h4>
                    <p className="text-sm text-gray-600">Clínica Dental, Miami</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Rulo implementó un sistema de recordatorios automáticos para mi clínica dental. En 1 mes, reduje
                  citas perdidas de 12 a 2. <strong className="text-[#2E8B57]">¡Eso son $5,000 extra!</strong>"
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border-l-4 border-[#FFD700]">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Lic. María González"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#0F4C81]">Lic. María González</h4>
                    <p className="text-sm text-gray-600">Abogada de Inmigración, Houston</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Mi web bilingüe me posicionó como la abogada #1 en Google para 'inmigración Houston'.
                  <strong className="text-[#2E8B57]">Tripliqué mis consultas en 3 meses.</strong>"
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white border-l-4 border-[#2E8B57]">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Dr. Roberto Silva"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#0F4C81]">Dr. Roberto Silva</h4>
                    <p className="text-sm text-gray-600">Cirujano Plástico, Los Angeles</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "Los pagos en crypto me abrieron un mercado internacional. Ahora recibo pacientes de toda
                  Latinoamérica.
                  <strong className="text-[#2E8B57]">ROI del 400% en 6 meses.</strong>"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 text-center">
            <div className="flex items-center justify-center space-x-4 p-6 bg-[#0F4C81]/5 rounded-lg">
              <Globe className="h-8 w-8 text-[#0F4C81]" />
              <div>
                <h3 className="font-bold text-[#0F4C81]">Enfocado 100% en EEUU</h3>
                <p className="text-gray-600">Compliance y regulaciones locales</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 p-6 bg-[#2E8B57]/5 rounded-lg">
              <Shield className="h-8 w-8 text-[#2E8B57]" />
              <div>
                <h3 className="font-bold text-[#0F4C81]">Garantía Rulo</h3>
                <p className="text-gray-600">Recuperas tu inversión en 90 días o te devuelvo 50%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0F4C81] to-[#1a5a96] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            ¿Listo para dejar de <span className="text-[#FFD700]">regalar dinero?</span>
          </h2>

          <p className="text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
            Trabajo solo con <span className="text-[#FFD700] font-semibold">3 clientes por mes</span> — asegurando
            máxima atención a tu proyecto.
          </p>

          <div className="mb-10">
            <Badge className="bg-red-500 text-white px-6 py-3 text-lg mb-6">
              ⚠️ Solo quedan 2 cupos para Febrero 2025
            </Badge>
          </div>

          <Button
            size="lg"
            className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0F4C81] px-16 py-6 text-xl font-bold mb-8"
            asChild
          >
            <Link href="https://wa.link/cbvfs0" target="_blank">
              <MessageCircle className="mr-3 h-6 w-6" />
              Hablar por WhatsApp Ahora →
            </Link>
          </Button>

          <p className="mt-8 text-gray-300 text-lg">
            Soy Latino y hoy ayudo a profesionales como tú a conquistar el sueño americano... digitalmente.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-24 px-6 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F4C81] mb-6">¿Prefieres escribir?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Déjame tus datos y te contacto en menos de 2 horas:
            </p>
          </div>

          <Card className="p-10 shadow-xl">
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                    <Input placeholder="Dr. Juan Pérez" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profesión</label>
                    <Input placeholder="Dentista, Abogado, Cirujano..." className="w-full" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="doctor@ejemplo.com" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <Input placeholder="+1 (555) 123-4567" className="w-full" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Cuál es tu mayor dolor digital?
                  </label>
                  <Textarea
                    placeholder="Ej: Pierdo muchas citas porque todo lo manejo manual..."
                    className="w-full h-32"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white py-4 text-lg">
                  Enviar Consulta →
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F4C81] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#2E8B57] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="text-xl font-bold">RULO.PRO</span>
              </div>
              <p className="text-gray-300">Consultoría Digital Premium para Profesionales Hispanos en EEUU</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 marketing@rulo.pro</p>
                
                <p>🌍 Enfocado 100% en EEUU</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Especialidades</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Clínicas Dentales</li>
                <li>• Bufetes de Abogados</li>
                <li>• Consultorios Médicos</li>
                <li>• Cirujanos Plásticos</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Rulo.pro - Consultoría Digital para Profesionales de Élite |
              <Link href="https://rulo.pro" className="text-[#FFD700] hover:underline ml-2">
                Made by Rulo.pro
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full p-4 shadow-2xl animate-pulse"
          asChild
        >
          <Link href="https://wa.link/cbvfs0" target="_blank">
            <MessageCircle className="h-8 w-8" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
