"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Cómo puede Rulo.pro ayudar a mi práctica dental en EE.UU.?",
      answer:
        "Automatizo citas, recordatorios via WhatsApp/SMS y pagos seguros, reduciendo pérdidas y atrayendo clientes latinos cualificados. Mi sistema integrado optimiza tu flujo de pacientes y aumenta la retención.",
    },
    {
      question: "¿Incluyen los paquetes integración con crypto?",
      answer:
        "Sí, en el paquete Élite: Pasarelas crypto con compliance, ideal para pagos internacionales en LATAM. Incluye wallets seguros y cumplimiento regulatorio completo.",
    },
    {
      question: "¿Cuánto tiempo toma la implementación?",
      answer:
        "72 horas para setups completos, usando IA avanzada, con entrenamiento en 60 minutos. Mi proceso optimizado garantiza una transición suave sin interrumpir tu práctica.",
    },
    {
      question: "¿Trabajas solo con profesionales latinos?",
      answer:
        "Especializado en dentistas, abogados, psicólogos y cirujanos latinos de ingresos altos en EE.UU. y LATAM, para soluciones culturales y bilingües que realmente conectan con tu audiencia.",
    },
    {
      question: "¿Cómo mido el ROI de tus servicios?",
      answer:
        "Incluyo dashboards con analytics para rastrear leads, conversiones y ingresos generados. Verás métricas claras de citas programadas, tasas de conversión y crecimiento de ingresos.",
    },
    {
      question: "¿Qué pasa si necesito soporte post-implementación?",
      answer:
        "Ofrezco mantenimiento mensual opcional y soporte via WhatsApp para asegurar crecimiento continuo. Tu éxito es mi prioridad a largo plazo.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 bg-rulo-navy">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-white mb-12">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm border-rulo-gold/20">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-rulo-off-white/50 transition-colors duration-200"
              >
                <h3 className="font-heading font-semibold text-lg text-rulo-navy pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-rulo-emerald flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-rulo-emerald flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 fade-in">
                  <p className="font-body text-rulo-navy/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
