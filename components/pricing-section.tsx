import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Crown, Zap } from "lucide-react"
import Link from "next/link"

export default function PricingSection() {
  const plans = [
    {
      name: "PROFESIONAL",
      price: "$2,500",
      originalPrice: "$4,200",
      savings: "$1,700",
      icon: Star,
      description: "Perfecto para consultorios que quieren profesionalizar su presencia digital",
      features: [
        "Sitio web bilingüe (ES/EN) completamente responsive",
        "Sistema de citas online con calendario inteligente",
        "Formularios de contacto con validación avanzada",
        "Integración con Google My Business y Maps",
        "Hosting premium incluido por 1 año",
        "5 cuentas de email profesionales (@tudominio.com)",
        "Certificado SSL y seguridad avanzada",
        "Optimización SEO básica para búsquedas locales",
        "Panel de administración fácil de usar",
        "Capacitación completa (2 horas)",
        "Soporte técnico por 3 meses",
        "Entrega garantizada en 72 horas",
      ],
      cta: "Empezar Ahora",
      popular: false,
    },
    {
      name: "AUTOMATIZACIÓN",
      price: "$4,900",
      originalPrice: "$8,500",
      savings: "$3,600",
      icon: Zap,
      description: "Para profesionales que quieren automatizar completamente su captación",
      features: [
        "Todo lo incluido en PROFESIONAL +",
        "Bot de WhatsApp 24/7 con IA conversacional",
        "Automatización de recordatorios por SMS y email",
        "Sistema CRM integrado para gestión de pacientes",
        "Pasarela de pagos completa (Stripe + PayPal)",
        "Formularios inteligentes con lógica condicional",
        "Reportes automáticos de conversión y ventas",
        "Integración con redes sociales (FB, IG, LinkedIn)",
        "Sistema de reviews y testimonios automatizado",
        "Backup automático diario en la nube",
        "Capacitación avanzada (4 horas)",
        "Soporte prioritario por 6 meses",
        "Actualizaciones gratuitas por 1 año",
        "Garantía de satisfacción 100%",
        "Consultoría mensual incluida (3 meses)",
      ],
      cta: "Automatizar Mi Práctica",
      popular: true,
    },
    {
      name: "ÉLITE VIP",
      price: "$7,400",
      originalPrice: "$12,800",
      savings: "$5,400",
      icon: Crown,
      description: "La solución más exclusiva para profesionales de alto nivel",
      features: [
        "Todo lo incluido en AUTOMATIZACIÓN +",
        "Pagos en criptomonedas (Bitcoin, Ethereum, USDC)",
        "Sistema de NFTs para citas VIP y membresías",
        "App móvil personalizada (iOS + Android)",
        "Inteligencia artificial predictiva para citas",
        "Sistema de lealtad con tokens y recompensas",
        "Integración con telemedicina avanzada",
        "Dashboard ejecutivo con métricas en tiempo real",
        "API personalizada para integraciones especiales",
        "Consultoría estratégica mensual (6 meses)",
        "Soporte VIP 24/7 con línea directa",
        "Actualizaciones y mejoras ilimitadas",
        "Garantía extendida de 2 años",
        "Acceso a beta de nuevas funcionalidades",
        "Sesión de estrategia digital personalizada",
        "Implementación de marca personal premium",
        "Certificación como 'Práctica Digital Élite'",
      ],
      cta: "Acceso VIP Exclusivo",
      popular: false,
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Planes de Servicio</h2>
          <p className="text-xl text-slate-600">Elige el nivel que transformará tu práctica profesional</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "ring-2 ring-amber-500 scale-105" : ""} hover:shadow-2xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MÁS POPULAR
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      plan.popular
                        ? "bg-gradient-to-r from-amber-500 to-amber-600"
                        : "bg-gradient-to-r from-slate-700 to-slate-800"
                    }`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <CardTitle className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</CardTitle>

                <div className="mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                    <div className="text-left">
                      <div className="text-lg text-slate-400 line-through">{plan.originalPrice}</div>
                      <div className="text-sm text-green-600 font-semibold">Ahorras {plan.savings}</div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">Pago único • Sin mensualidades</div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full py-3 font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl"
                      : "bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white"
                  }`}
                >
                  <Link href="https://wa.link/6difl3" target="_blank">
                    {plan.cta}
                  </Link>
                </Button>

                <div className="text-center mt-4">
                  <div className="text-sm text-slate-500">✓ Consulta gratuita incluida</div>
                  <div className="text-sm text-slate-500">✓ Garantía de satisfacción</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 max-w-2xl mx-auto">
            <strong>Garantía total:</strong> Si no estás 100% satisfecho en los primeros 30 días, te devolvemos tu
            dinero completo. Sin preguntas.
          </p>
        </div>
      </div>
    </section>
  )
}
