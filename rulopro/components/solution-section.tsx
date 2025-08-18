import { Search, Lightbulb, Zap, Target } from "lucide-react"

export function SolutionSection() {
  const steps = [
    {
      icon: Search,
      title: "Auditoría Express",
      description:
        "Analizo tu setup actual para identificar fugas de ingresos (ej: citas perdidas o leads no capturados) y oportunidades de optimización inmediata.",
    },
    {
      icon: Lightbulb,
      title: "Solución Personalizada",
      description:
        "Diseñamos un sistema a medida, integrando herramientas como CRM y automatizaciones, adaptado a tu profesión y mercado (EE.UU./LATAM).",
    },
    {
      icon: Zap,
      title: "Implementación Rápida",
      description:
        "Despliego todo en 72 horas usando IA avanzada, asegurando compliance con regulaciones locales y seguridad de datos.",
    },
    {
      icon: Target,
      title: "Entrenamiento Sencillo",
      description:
        "Te capacito en 60 minutos para que manejes el sistema con facilidad, incluyendo analytics para medir ROI en tiempo real.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-rulo-off-white to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-rulo-navy mb-12">
          Cómo Te Ayudo a Transformar Tu Negocio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-rulo-emerald rounded-full flex items-center justify-center group-hover:bg-rulo-gold transition-colors duration-300">
                <step.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-rulo-navy mb-4">
                {index + 1}. {step.title}
              </h3>
              <p className="font-body text-rulo-navy/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
