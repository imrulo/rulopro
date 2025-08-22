"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, CheckCircle, Zap, TrendingUp, MessageCircle } from "lucide-react"

export function ClosingSection() {
  const urgencyPoints = [
    {
      icon: Clock,
      title: "Cada día que esperas",
      description: "es dinero que dejas sobre la mesa",
      color: "destructive",
    },
    {
      icon: TrendingUp,
      title: "Tus competidores",
      description: "ya están automatizando sus procesos",
      color: "primary",
    },
    {
      icon: Zap,
      title: "La tecnología avanza",
      description: "más rápido de lo que imaginas",
      color: "accent",
    },
  ]

  const guarantees = [
    "Auditoría gratuita de 15 minutos",
    "Garantía de satisfacción 90 días",
    "Resultados medibles garantizados",
    "Soporte especializado incluido",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tu Momento es{" "}
            <span className="text-transparent bg-gradient-to-r from-accent to-secondary bg-clip-text">AHORA</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Mientras lees esto, profesionales latinos como tú están transformando sus negocios y multiplicando sus
            ingresos. ¿Vas a ser el próximo o vas a seguir viendo cómo otros toman la delantera?
          </p>
        </div>

        {/* Urgency Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {urgencyPoints.map((point, index) => (
            <Card
              key={index}
              className={`border-${point.color}/30 hover:border-${point.color}/50 transition-all duration-300 hover:shadow-lg group`}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-${point.color}/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${point.color}/20 transition-colors`}
                >
                  <point.icon className={`w-8 h-8 text-${point.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Action Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-primary-foreground mb-16 opacity-100">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-50">Agenda tu Auditoría Gratuita AHORA</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto text-slate-50">
            15 minutos que pueden cambiar el futuro de tu negocio. Sin compromiso, sin presión de venta. Solo valor puro
            y un plan claro de acción.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-10 py-5 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => window.open("https://wa.link/6difl3", "_blank")}
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              Inicia una Conversación por WhatsApp Ahora
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>

          {/* Guarantees */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-2 justify-center">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm opacity-90">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Push */}
        <div className="text-center bg-card/50 rounded-2xl p-12 border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-4">¿Qué Tienes que Perder?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            La consulta es completamente gratuita. En 15 minutos descubrirás exactamente cómo automatizar tu negocio y
            multiplicar tus ingresos. Si no te convence, no pasa nada. Pero si te convence...
          </p>

          <div className="bg-accent/10 rounded-xl p-8 mb-8 border border-accent/20">
            <h4 className="text-2xl font-bold text-accent mb-4">Imagínate en 6 meses:</h4>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Trabajando 30 horas menos por semana</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Ingresos duplicados o triplicados</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Clientes más satisfechos</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Sistemas que trabajan por ti</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Ventaja competitiva sostenible</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Libertad financiera y temporal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              <strong className="text-foreground">Solo hay dos opciones:</strong> Seguir como hasta ahora o dar el paso
              que cambiará todo.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-5 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => window.open("https://wa.link/6difl3", "_blank")}
            >
              Sí, Quiero Transformar mi Negocio AHORA
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ⚡ Respuesta inmediata por WhatsApp • 🎯 Sin compromiso • 🚀 Resultados garantizados
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
