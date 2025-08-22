import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: "Pérdida de Tiempo en Tareas Manuales",
      description:
        "Horas perdidas en procesos repetitivos que podrían automatizarse, limitando el crecimiento del negocio.",
      impact: "40+ horas/semana",
    },
    {
      icon: TrendingDown,
      title: "Oportunidades Perdidas en Crypto",
      description: "Falta de conocimiento en integración crypto y Web3, perdiendo ventajas competitivas emergentes.",
      impact: "Hasta 300% ROI perdido",
    },
    {
      icon: Users,
      title: "Desconexión con el Mercado Latino",
      description: "Estrategias genéricas que no consideran las particularidades culturales y económicas de LATAM.",
      impact: "50% menos conversiones",
    },
    {
      icon: AlertTriangle,
      title: "Tecnología Obsoleta",
      description: "Sistemas desactualizados que frenan la innovación y competitividad en mercados digitales.",
      impact: "Pérdida de clientes",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Los Desafíos que Enfrentan los{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Profesionales Latinos
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            Mientras el mundo digital avanza a velocidad exponencial, muchos profesionales latinos se quedan atrás por
            falta de estrategias especializadas y tecnología adecuada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="border-border hover:border-destructive/30 transition-all duration-300 hover:shadow-lg group bg-card"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{problem.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{problem.description}</p>
                    <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-3 py-1 rounded-full text-sm font-medium">
                      <AlertTriangle className="w-4 h-4" />
                      {problem.impact}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center rounded-2xl p-8 border border-border bg-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">¿Te Identificas con Estos Problemas?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            No estás solo. Miles de profesionales latinos enfrentan estos mismos desafíos. La buena noticia es que
            existe una solución probada y especializada.
          </p>
          <div className="inline-flex items-center gap-2 text-accent font-medium">
            <span>Descubre la solución a continuación</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
