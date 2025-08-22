"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from "lucide-react"

export function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "¿Cómo sé si mi negocio necesita automatización?",
      answer:
        "Si dedicas más de 10 horas semanales a tareas repetitivas como seguimiento de clientes, procesamiento de pagos, o gestión de citas, definitivamente necesitas automatización. En nuestra auditoría gratuita identificamos exactamente qué procesos pueden optimizarse y cuánto tiempo puedes ahorrar.",
    },
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer:
        "Los primeros resultados son visibles en 2-4 semanas con automatizaciones básicas. Para transformaciones completas, el impacto significativo se ve en 60-90 días. Cada proyecto incluye hitos específicos para que puedas medir el progreso constantemente.",
    },
    {
      question: "¿Es seguro integrar crypto en mi negocio?",
      answer:
        "Absolutamente. Utilizamos las mejores prácticas de seguridad y solo trabajamos con plataformas reguladas y confiables. Todas las integraciones crypto incluyen múltiples capas de seguridad, auditorías de código y seguros contra hackeos. Tu seguridad es nuestra prioridad número uno.",
    },
    {
      question: "¿Qué pasa si no estoy satisfecho con los resultados?",
      answer:
        "Ofrecemos una garantía de satisfacción de 90 días. Si no ves mejoras medibles en tu negocio dentro de este período, te devolvemos tu inversión completa. Además, todos nuestros proyectos incluyen soporte continuo para asegurar el éxito a largo plazo.",
    },
    {
      question: "¿Por qué elegir Rulo.pro sobre otras consultorías?",
      answer:
        "Somos la única consultoría especializada exclusivamente en profesionales latinos. Entendemos las particularidades culturales, económicas y regulatorias de nuestros mercados. Además, combinamos automatización tradicional con tecnologías emergentes como crypto y IA, algo que las consultorías tradicionales no ofrecen.",
    },
    {
      question: "¿Necesito conocimientos técnicos para trabajar con ustedes?",
      answer:
        "Para nada. Nos encargamos de toda la implementación técnica y te capacitamos en el uso de los sistemas. Nuestro enfoque es 'llave en mano': tú te enfocas en tu negocio, nosotros en la tecnología. Incluimos documentación completa y sesiones de capacitación personalizadas.",
    },
    {
      question: "¿Cómo funciona la consulta inicial gratuita?",
      answer:
        "Es una videollamada de 15 minutos donde analizamos tu situación actual, identificamos las mayores oportunidades de mejora y te mostramos exactamente cómo podemos ayudarte. No hay presión de venta, solo valor puro. Al final, tendrás un plan claro de acción, independientemente de si decides trabajar con nosotros.",
    },
    {
      question: "¿Trabajan con negocios de cualquier tamaño?",
      answer:
        "Trabajamos principalmente con profesionales independientes, pequeñas y medianas empresas (hasta 50 empleados). Nuestras soluciones están diseñadas para ser escalables, así que crecen contigo. Si tienes más de 50 empleados, contáctanos para evaluar si podemos ayudarte con un enfoque personalizado.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Preguntas{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestros servicios, procesos y garantías. Si no encuentras tu
            respuesta, contáctanos directamente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-border hover:border-primary/30 transition-colors duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-card/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-accent/5 via-primary/5 to-secondary/5 rounded-2xl p-12 border border-accent/20">
          <h3 className="text-3xl font-bold text-foreground mb-4">¿Tienes Más Preguntas?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estamos aquí para resolver todas tus dudas. Agenda una consulta gratuita o escríbenos directamente por
            WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://wa.link/6difl3", "_blank")}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Consulta Gratuita por WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://wa.link/6difl3", "_blank")}
            >
              Hacer una Pregunta Específica
            </Button>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">15 min</div>
              <div className="text-sm text-muted-foreground">Consulta gratuita</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Respuesta por WhatsApp</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-secondary">100%</div>
              <div className="text-sm text-muted-foreground">Sin compromiso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
