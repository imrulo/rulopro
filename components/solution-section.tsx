"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Coins, TrendingUp, ArrowRight, Shield, Globe, Users } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    {
      icon: Zap,
      title: "Automatización Inteligente",
      description: "Sistemas que trabajan 24/7 para optimizar tus procesos y liberar tu tiempo para estrategia.",
      benefits: ["Ahorra 40+ horas/semana", "Reduce errores humanos 95%", "Escalabilidad automática"],
      color: "accent",
    },
    {
      icon: Coins,
      title: "Integración Crypto & Web3",
      description: "Aprovecha las oportunidades emergentes en criptomonedas y tecnología blockchain.",
      benefits: ["Nuevas fuentes de ingresos", "Ventaja competitiva", "Mercados globales 24/7"],
      color: "secondary",
    },
    {
      icon: TrendingUp,
      title: "Transformación Digital Especializada",
      description: "Estrategias diseñadas específicamente para el mercado latino y sus particularidades.",
      benefits: ["ROI promedio 300%", "Culturalmente relevante", "Resultados medibles"],
      color: "primary",
    },
  ]

  const features = [
    { icon: Shield, text: "100% Seguro y Confiable" },
    { icon: Globe, text: "Experiencia en US y LATAM" },
    { icon: Users, text: "Especializado en Latinos" },
    { icon: CheckCircle, text: "Resultados Garantizados" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            La Solución{" "}
            <span className="text-transparent bg-gradient-to-r from-accent to-secondary bg-clip-text">
              Especializada
            </span>{" "}
            que Necesitas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Consultoría digital premium diseñada específicamente para profesionales latinos que buscan transformar sus
            negocios con tecnología de vanguardia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl group relative overflow-hidden bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-8 relative z-10">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <solution.icon className="w-8 h-8 text-accent" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Beneficios Clave:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border hover:border-accent/30 transition-colors"
            >
              <feature.icon className="w-6 h-6 text-accent flex-shrink-0" />
              <span className="font-medium text-foreground">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center bg-primary/5 rounded-2xl p-12 border border-primary/20">
          <h3 className="text-3xl font-bold text-foreground mb-4">¿Listo para Transformar tu Negocio?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            No esperes más. Agenda una auditoría gratuita de 15 minutos y descubre cómo podemos multiplicar tus
            resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://wa.link/6difl3", "_blank")}
            >
              Agenda tu Auditoría Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://wa.link/6difl3", "_blank")}
            >
              Hablar por WhatsApp Ahora
            </Button>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>✓ Sin compromiso ✓ Resultados garantizados ✓ Especializado en latinos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
