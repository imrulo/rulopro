"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export function PackagesSection() {
  const packages = [
    {
      name: "BÁSICO",
      price: "$2,500",
      subtitle: "Ideal para startups profesionales",
      features: [
        "Sitio web bilingüe (español/inglés) optimizado para móviles",
        "Agenda online integrada con calendarios (Google Calendar)",
        "Formulario de contacto con validación y lead capture",
        "Integración básica de analytics para rastrear visitas y conversiones",
      ],
      result: "Atrae clientes iniciales y establece presencia digital sólida",
      popular: false,
    },
    {
      name: "PREMIUM",
      price: "$4,900",
      subtitle: "Para escalar tu práctica",
      features: [
        "Todo lo incluido en Básico",
        "Automatización de WhatsApp/SMS para recordatorios y follow-ups",
        "Pasarela de pagos segura (Stripe, con soporte para tarjetas internacionales)",
        "Email marketing básico para nurturing leads",
      ],
      result: "Aumenta conversiones en un 30-50% al reducir no-shows y facilitar pagos",
      popular: true,
    },
    {
      name: "ÉLITE",
      price: "$7,400",
      subtitle: "Para líderes premium",
      features: [
        "Todo lo incluido en Premium",
        "Integración de pagos crypto (via wallets compatibles con compliance)",
        "NFTs para citas prioritarias o membresías exclusivas",
        "Dashboard personalizado con reportes de ROI",
        "Optimización avanzada para lead generation (incluyendo funnels personalizados)",
      ],
      result: "Posiciona tu negocio como innovador, atrayendo clientes de alto valor y diversificando ingresos",
      popular: false,
    },
  ]

  return (
    <section className="py-16 px-4 bg-rulo-navy">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-white mb-4">
          Paquetes de Transformación Digital
        </h2>
        <p className="font-body text-lg text-white/80 text-center mb-12 max-w-3xl mx-auto">
          Soluciones diseñadas específicamente para profesionales latinos de ingresos medios-altos
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative p-8 ${pkg.popular ? "border-rulo-gold border-2 transform scale-105" : "border-white/20"} bg-white/95 backdrop-blur-sm`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rulo-emerald text-white px-4 py-1">
                  <Star className="h-4 w-4 mr-1" />
                  Más Popular
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading font-bold text-2xl text-rulo-navy mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-rulo-emerald mb-2">
                  {pkg.price} <span className="text-lg text-rulo-navy/60">USD</span>
                </div>
                <p className="font-body text-rulo-navy/70">{pkg.subtitle}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-rulo-emerald flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-rulo-navy/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6 p-4 bg-rulo-emerald/10 rounded-lg">
                <p className="font-body text-sm text-rulo-navy font-medium">
                  <strong>Resultado:</strong> {pkg.result}
                </p>
              </div>

              <Button
                className={`w-full ${pkg.popular ? "bg-rulo-emerald hover:bg-rulo-gold" : "bg-rulo-navy hover:bg-rulo-emerald"} text-white font-semibold py-3 rounded-xl transition-all duration-300`}
                onClick={() => window.open("https://wa.link/6difl3", "_blank")}
              >
                Seleccionar {pkg.name}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
