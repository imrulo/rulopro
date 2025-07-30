"use client"

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
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function RuloProLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2E8B57] to-[#20B2AA] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">RULO.PRO</span>
                <span className="text-xs text-gray-500 font-mono">Digital Consulting</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#servicios" className="text-gray-700 hover:text-[#2E8B57] transition-colors font-medium">
                Servicios
              </Link>
              <Link href="#casos" className="text-gray-700 hover:text-[#2E8B57] transition-colors font-medium">
                Casos de Éxito
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-[#2E8B57] transition-colors font-medium">
                Contacto
              </Link>
              <Button className="bg-gradient-to-r from-[#2E8B57] to-[#20B2AA] hover:from-[#20B2AA] hover:to-[#2E8B57] text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 btn-premium">
                Consulta Gratuita
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <Link
                  href="#servicios"
                  className="block text-gray-700 hover:text-[#2E8B57] transition-colors font-medium"
                >
                  Servicios
                </Link>
                <Link href="#casos" className="block text-gray-700 hover:text-[#2E8B57] transition-colors font-medium">
                  Casos de Éxito
                </Link>
                <Link
                  href="#contacto"
                  className="block text-gray-700 hover:text-[#2E8B57] transition-colors font-medium"
                >
                  Contacto
                </Link>
                <Button className="w-full bg-gradient-to-r from-[#2E8B57] to-[#20B2AA] text-white py-3 rounded-xl font-semibold">
                  Consulta Gratuita
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81]/5 via-transparent to-[#2E8B57]/5"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#FFD700]/20 to-[#2E8B57]/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#2E8B57]/10 to-[#0F4C81]/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-[#2E8B57] to-[#20B2AA] text-white mb-8 px-6 py-3 text-sm font-semibold rounded-full shadow-lg animate-pulse-glow">
              🎯 Consultoría Digital Premium
            </Badge>
          </div>

          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
              Deja de perder <span className="text-gradient-premium">$500</span> por cada cita que se te escapa.
              <span className="block mt-2 text-[#2E8B57]">Yo lo soluciono.</span>
            </h1>

            <p
              className="text-lg sm:text-xl lg:text-2xl mb-12 text-gray-600 leading-relaxed max-w-4xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Soy Rulo — transformo prácticas profesionales con sistemas digitales que
              <span className="font-semibold text-[#2E8B57]">
                {" "}
                generan resultados reales, sin complicaciones técnicas.
              </span>
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#2E8B57] to-[#20B2AA] hover:from-[#20B2AA] hover:to-[#2E8B57] text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl btn-premium mobile-optimized"
                asChild
              >
                <Link href="https://wa.link/cbvfs0" target="_blank">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Auditoría Gratuita (15 min)
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <div className="flex items-center text-sm sm:text-base text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
                <Clock className="mr-3 h-5 w-5 text-[#FFD700]" />
                <span className="font-medium">Entrega garantizada en 72h</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">🏥</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Clínicas</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">⚖️</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Abogados</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">🦷</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Dentistas</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform">🔬</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Cirujanos</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-20 text-center animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-[#2E8B57] mb-2">500+</div>
              <div className="text-gray-600 font-medium">Proyectos Exitosos</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-[#FFD700] mb-2">72H</div>
              <div className="text-gray-600 font-medium">Entrega Rápida</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-[#2E8B57] mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfacción</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-[#FFD700] mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Funcionamiento</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">¿Te Suena Familiar?</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Estos son los dolores más comunes que veo en profesionales exitosos:
          </p>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-left mb-16">
            <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl border border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-red-500 mt-1 text-xl">❌</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Pierdes citas de alto valor porque confías en WhatsApp manual
                </h3>
                <p className="text-gray-600">
                  Sin recordatorios automáticos, confirmaciones o seguimiento profesional.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl border border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-red-500 mt-1 text-xl">❌</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tu web no genera confianza en clientes latinos</h3>
                <p className="text-gray-600">¡Y la competencia sí! Pierdes pacientes antes de que te conozcan.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl border border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-red-500 mt-1 text-xl">❌</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Gastas horas en procesos que podrían ser 100% automáticos
                </h3>
                <p className="text-gray-600">Tiempo que podrías invertir en más pacientes o con tu familia.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl border border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-red-500 mt-1 text-xl">❌</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Quisieras aceptar pagos internacionales en crypto</h3>
                <p className="text-gray-600">Pero no sabes por dónde empezar ni cómo implementarlo de forma segura.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-[#0F4C81] to-[#1a5a96] text-white rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">La Realidad:</h3>
            <p className="text-xl">
              Tú eres el experto en tu profesión.
              <span className="font-semibold text-[#FFD700]">
                {" "}
                Yo soy el experto en hacer que la tecnología trabaje PARA TI.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Process */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Cómo Te Ayudo</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Mi proceso probado en 4 pasos simples:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            <Card className="text-center p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-2xl group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E8B57] to-[#20B2AA] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Auditoría Express</h3>
                <p className="text-gray-600">Identificamos fugas de dinero en tu proceso actual en 15 minutos.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-2xl group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Solución a Medida</h3>
                <p className="text-gray-600">Diseñamos tu sistema ideal basado en tu tipo de práctica.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-2xl group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E8B57] to-[#20B2AA] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Implementación Relámpago</h3>
                <p className="text-gray-600">72 horas con IA avanzada para tener todo funcionando.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-2xl group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Entrenamiento 'Sin Dolor'</h3>
                <p className="text-gray-600">Aprendes a usarlo en 60 minutos. ¡Garantizado!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="servicios" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Paquetes de Transformación Digital
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Elegí el nivel que mejor se adapte a tu práctica:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Basic Package */}
            <Card className="relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100/50 opacity-50"></div>
              <CardContent className="relative p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">BÁSICO</h3>
                  <div className="text-4xl font-bold text-[#2E8B57] mb-2">$2,500</div>
                  <p className="text-gray-600">Presencia digital profesional</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Web bilingüe (ES/EN) responsive</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Sistema de agenda online</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Formulario de contacto inteligente</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Optimización SEO básica</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Hosting y dominio incluido (1 año)</span>
                  </li>
                </ul>

                <Button
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 btn-premium"
                  asChild
                >
                  <Link href="https://wa.link/cbvfs0" target="_blank">
                    Empezar Ahora
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="relative border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white rounded-2xl overflow-hidden transform scale-105 group">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-gray-900 px-6 py-2 font-bold rounded-full shadow-lg">
                  MÁS POPULAR
                </Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-[#FFA500]/10"></div>
              <CardContent className="relative p-8 pt-12">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">PREMIUM</h3>
                  <div className="text-4xl font-bold text-[#2E8B57] mb-2">$4,900</div>
                  <p className="text-gray-600">Automatización completa</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Todo del paquete Básico +</strong>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Automatización WhatsApp/SMS</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Pasarela de pagos (Stripe)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Recordatorios automáticos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Dashboard de métricas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Integración con Google Calendar</span>
                  </li>
                </ul>

                <Button
                  className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-gray-900 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 btn-premium"
                  asChild
                >
                  <Link href="https://wa.link/cbvfs0" target="_blank">
                    ¡Lo Quiero!
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Elite Package */}
            <Card className="relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/5 to-[#20B2AA]/5"></div>
              <CardContent className="relative p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">ÉLITE</h3>
                  <div className="text-4xl font-bold text-[#2E8B57] mb-2">$7,400</div>
                  <p className="text-gray-600">Tecnología del futuro</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Todo del paquete Premium +</strong>
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Bitcoin className="h-5 w-5 text-[#FFD700] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Pasarela de pagos Crypto</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-[#FFD700] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">NFTs para citas prioritarias*</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">IA para atención al cliente</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">App móvil personalizada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#2E8B57] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Soporte prioritario 24/7</span>
                  </li>
                </ul>

                <p className="text-sm text-gray-600 mb-4">
                  *Ej: NFT para acceso VIP a cirujanos estéticos o abogados corporativos
                </p>

                <Button
                  className="w-full bg-gradient-to-r from-[#2E8B57] to-[#20B2AA] hover:from-[#20B2AA] hover:to-[#2E8B57] text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 btn-premium"
                  asChild
                >
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
      <section id="casos" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Casos de Éxito Reales</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Resultados que hablan por sí solos:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl border-l-4 border-l-[#2E8B57]">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Dr. Carlos Vega"
                    width={60}
                    height={60}
                    className="rounded-full mr-4 shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Dr. Carlos Vega</h4>
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

            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl border-l-4 border-l-[#FFD700]">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Lic. María González"
                    width={60}
                    height={60}
                    className="rounded-full mr-4 shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Lic. María González</h4>
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

            <Card className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl border-l-4 border-l-[#2E8B57]">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Dr. Roberto Silva"
                    width={60}
                    height={60}
                    className="rounded-full mr-4 shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Dr. Roberto Silva</h4>
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
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 text-center">
            <div className="flex items-center justify-center space-x-4 p-6 bg-gradient-to-br from-[#0F4C81]/5 to-[#0F4C81]/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Globe className="h-8 w-8 text-[#0F4C81] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Experiencia Internacional</h3>
                <p className="text-gray-600">Compliance y regulaciones globales</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 p-6 bg-gradient-to-br from-[#2E8B57]/5 to-[#2E8B57]/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Shield className="h-8 w-8 text-[#2E8B57] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Garantía Rulo</h3>
                <p className="text-gray-600">Recuperas tu inversión en 90 días o te devuelvo 50%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0F4C81] to-[#1a5a96] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            ¿Listo para dejar de <span className="text-[#FFD700]">regalar dinero?</span>
          </h2>

          <p className="text-lg sm:text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Cada día que pasa sin automatizar tu práctica,
            <span className="text-[#FFD700] font-semibold"> pierdes entre $300-800 en citas perdidas.</span>
          </p>

          <div className="mb-10 space-y-4">
            <div className="bg-red-500/20 border border-red-400 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-center space-x-2 text-red-200 mb-2">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">URGENTE: Temporada Alta 2025</span>
              </div>
              <p className="text-sm text-red-100">
                Los profesionales que no se digitalicen AHORA quedarán fuera del mercado. Tus competidores ya están
                automatizando.
              </p>
            </div>

            <Badge className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-gray-900 px-6 py-3 text-base rounded-full shadow-lg animate-pulse">
              🔥 Precio especial válido solo hasta fin de mes
            </Badge>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-gray-900 px-12 py-4 text-xl font-bold mb-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 btn-premium mobile-optimized"
            asChild
          >
            <Link href="https://wa.link/cbvfs0" target="_blank">
              <MessageCircle className="mr-3 h-6 w-6" />
              Hablar por WhatsApp Ahora
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>

          <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm text-blue-200">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-[#FFD700]" />
              <span>Respuesta en menos de 1 hora</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-[#FFD700]" />
              <span>Consulta 100% gratuita</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-4 w-4 text-[#FFD700]" />
              <span>Sin compromisos</span>
            </div>
          </div>

          <p className="mt-8 text-blue-200 text-lg">
            Soy Latino y hoy ayudo a profesionales como tú a conquistar sus sueños... digitalmente.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">¿Prefieres escribir?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Déjame tus datos y te contacto en menos de 2 horas:
            </p>
          </div>

          <Card className="p-8 lg:p-10 shadow-2xl border-0 rounded-2xl bg-white/90 backdrop-blur-sm">
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
                    <Input
                      placeholder="Dr. Juan Pérez"
                      className="w-full rounded-xl border-gray-200 focus:border-[#2E8B57] focus:ring-[#2E8B57]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="doctor@ejemplo.com"
                      className="w-full rounded-xl border-gray-200 focus:border-[#2E8B57] focus:ring-[#2E8B57]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Profesión</label>
                    <Input
                      placeholder="Dentista, Abogado, Cirujano..."
                      className="w-full rounded-xl border-gray-200 focus:border-[#2E8B57] focus:ring-[#2E8B57]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                    <Input
                      placeholder="+1 (555) 123-4567"
                      className="w-full rounded-xl border-gray-200 focus:border-[#2E8B57] focus:ring-[#2E8B57]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ¿Cuál es tu mayor dolor digital?
                  </label>
                  <Textarea
                    placeholder="Ej: Pierdo muchas citas porque todo lo manejo manual..."
                    className="w-full h-32 rounded-xl border-gray-200 focus:border-[#2E8B57] focus:ring-[#2E8B57]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2E8B57] to-[#20B2AA] hover:from-[#20B2AA] hover:to-[#2E8B57] text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 btn-premium"
                >
                  Enviar Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#0F4C81] to-[#1a5a96] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2E8B57] to-[#20B2AA] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">RULO.PRO</span>
                  <span className="text-xs text-blue-200 font-mono">Digital Consulting</span>
                </div>
              </div>
              <p className="text-blue-200">Consultoría Digital Premium para Profesionales Latinos</p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Contacto</h4>
              <div className="space-y-2 text-blue-200">
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  marketing@rulo.pro
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🌍</span>
                  Servicio Internacional
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Especialidades</h4>
              <ul className="space-y-2 text-blue-200">
                <li>• Clínicas Dentales</li>
                <li>• Bufetes de Abogados</li>
                <li>• Consultorios Médicos</li>
                <li>• Cirujanos Plásticos</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-400/30 pt-8 text-center">
            <p className="text-blue-200">
              © 2025 Rulo.pro - Consultoría Digital para Profesionales de Élite |
              <Link href="https://rulo.pro" className="text-[#FFD700] hover:underline ml-2 transition-colors">
                Made by Rulo.pro
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50 no-print">
        <Button
          size="lg"
          className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse-glow group"
          asChild
        >
          <Link href="https://wa.link/cbvfs0" target="_blank">
            <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
