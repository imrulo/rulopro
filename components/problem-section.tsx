import { AlertTriangle, Clock, TrendingDown, CreditCard } from "lucide-react"

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Pierdes citas valiosas porque dependes de WhatsApp manual",
      description: "Cada cita perdida son $500+ que se van por el desagüe",
    },
    {
      icon: TrendingDown,
      title: "Tu web no transmite confianza a tus clientes",
      description: "Los pacientes se van a la competencia que se ve más profesional",
    },
    {
      icon: AlertTriangle,
      title: "Pierdes tiempo en tareas repetitivas que podrían estar automatizadas",
      description: "Horas perdidas que podrías usar atendiendo más pacientes",
    },
    {
      icon: CreditCard,
      title: "Quieres aceptar pagos en crypto pero no sabes cómo",
      description: "Te pierdes clientes de alto valor que prefieren pagar con crypto",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">¿Te Suena Familiar?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{problem.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-slate-700 font-medium max-w-2xl mx-auto">
            Tú eres el experto en tu campo. Yo soy el experto en hacer que la tecnología trabaje para ti.
          </p>
        </div>
      </div>
    </section>
  )
}
