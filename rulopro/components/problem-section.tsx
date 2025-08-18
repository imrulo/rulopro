import { AlertTriangle, Clock, TrendingDown, CreditCard } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      text: "Pierdes citas valiosas por depender de procesos manuales en WhatsApp o email, lo que reduce tus ingresos potenciales.",
    },
    {
      icon: TrendingDown,
      text: "Tu presencia digital no inspira confianza, permitiendo que competidores capturen a tus clientes ideales.",
    },
    {
      icon: AlertTriangle,
      text: "Dedicas horas a tareas repetitivas que podrían automatizarse, limitando tu crecimiento.",
    },
    {
      icon: CreditCard,
      text: "Quieres integrar pagos internacionales, incluyendo crypto, pero la complejidad técnica te detiene.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-rulo-navy">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-white mb-4">
          ¿Reconoces Estos Desafíos en Tu Práctica?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-rulo-gold/20"
            >
              <problem.icon className="h-8 w-8 text-rulo-gold flex-shrink-0 mt-1" />
              <p className="font-body text-white/90 leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-body text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
            Como experto en tu campo, mereces una solución digital que eleve tu negocio. Yo soy esa solución, enfocada
            en generar leads cualificados y conversiones para profesionales como tú en EE.UU. y LATAM.
          </p>
        </div>
      </div>
    </section>
  )
}
