"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Zap, Crown } from "lucide-react"

export function PackagesSection() {
  const packages = [
    {
      name: "BÁSICO",
      subtitle: "Ideal para emprendedores",
      price: "Desde $2,500",
      period: "proyecto",
      description: "Perfecto para profesionales que inician su transformación digital",
      features: [
        "Auditoría completa de procesos",
        "1 automatización básica",
        "Configuración inicial",
        "Soporte por 30 días",
        "Documentación completa",
        "1 sesión de capacitación",
      ],
      result: "Atrae clientes iniciales y establece presencia digital sólida",
      color: "primary",
      popular: false,
      icon: Zap,
    },
    {
      name: "PREMIUM",
      subtitle: "Más popular",
      price: "Desde $5,500",
      period: "proyecto",
      description: "La opción más elegida por profesionales serios",
      features: [
        "Todo lo del plan Básico",
        "3-5 automatizaciones avanzadas",
        "Integración crypto básica",
        "Dashboard personalizado",
        "Soporte por 90 días",
        "3 sesiones de capacitación",
        "Optimización SEO",
        "Analytics avanzados",
      ],
      result: "Aumenta conversiones en un 30-50% al reducir no-shows y facilitar pagos",
      color: "accent",
      popular: true,
      icon: Star,
    },
    {
      name: "ÉLITE",
      subtitle: "Transformación completa",
      price: "Desde $12,000",
      period: "proyecto",
      description: "Para empresarios que buscan dominar su mercado",
      features: [
        "Todo lo del plan Premium",
        "Automatización completa end-to-end",
        "Integración crypto avanzada",
        "IA personalizada",
        "Soporte por 6 meses",
        "Capacitación ilimitada",
        "Consultoría estratégica mensual",
        "Acceso prioritario a nuevas tecnologías",
      ],
      result: "Posiciona tu negocio como innovador, atrayendo clientes de alto valor y diversificando ingresos",
      color: "secondary",
      popular: false,
      icon: Crown,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Elige el{" "}
            <span className="text-transparent bg-gradient-to-r from-accent to-secondary bg-clip-text">
              Plan Perfecto
            </span>{" "}
            para tu Negocio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada plan está diseñado para diferentes etapas de crecimiento. Todos incluyen resultados garantizados y
            soporte especializado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-2xl bg-card ${
                pkg.popular ? "border-accent shadow-xl scale-105 lg:scale-110" : "border-border hover:border-primary/30"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold">
                    MÁS POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <pkg.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-foreground">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground">por {pkg.period}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center">{pkg.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Incluye:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-semibold text-foreground mb-2">Resultado:</h4>
                  <p className="text-sm text-muted-foreground">{pkg.result}</p>
                </div>

                <Button
                  className={`w-full py-3 font-semibold transition-all duration-300 hover:scale-105 ${
                    pkg.popular
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                      : pkg.name === "BÁSICO"
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                  onClick={() => window.open("https://wa.link/6difl3", "_blank")}
                >
                  Seleccionar {pkg.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">¿No estás seguro cuál elegir?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Agenda una consulta gratuita de 15 minutos y te ayudaremos a elegir el plan perfecto para tus necesidades y
            presupuesto.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
            onClick={() => window.open("https://wa.link/6difl3", "_blank")}
          >
            Consulta Gratuita por WhatsApp
          </Button>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>✓ Sin compromiso ✓ Asesoría personalizada ✓ Respuesta inmediata</p>
          </div>
        </div>
      </div>
    </section>
  )
}
