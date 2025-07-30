import { Search, Lightbulb, Zap, Target } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Auditoría Express",
      description: "Identificamos fugas de dinero en tu sistema actual en 15 minutos",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Solución a Medida",
      description: "Diseñamos tu sistema ideal basado en tu tipo de práctica y objetivos",
    },
    {
      icon: Zap,
      number: "03",
      title: "Implementación en 72h",
      description: "IA + automatización real funcionando en menos de 3 días",
    },
    {
      icon: Target,
      number: "04",
      title: "Entrenamiento Rápido",
      description: "Usas tu sistema completo en solo 60 minutos de capacitación",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Cómo Te Ayudo</h2>
          <p className="text-xl text-slate-600">Proceso de trabajo en 4 pasos simples</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-slate-800 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>

              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
