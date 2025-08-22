import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, TrendingUp, Users, Zap } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Fundadora, MG Consulting",
      location: "Miami, FL",
      image: "/professional-latina-woman-smiling.png",
      rating: 5,
      result: "+250% ingresos en 6 meses",
      quote:
        "Rulo transformó completamente mi negocio. La automatización que implementó me ahorra 30 horas semanales y mis clientes están más satisfechos que nunca. Finalmente puedo enfocarme en estrategia en lugar de tareas repetitivas.",
      icon: TrendingUp,
      color: "accent",
    },
    {
      name: "Carlos Mendoza",
      role: "CEO, TechLatino",
      location: "México City, MX",
      image: "/latino-professional-suit.png",
      rating: 5,
      result: "Integración crypto exitosa",
      quote:
        "La integración crypto que desarrolló Rulo nos abrió mercados completamente nuevos. Ahora procesamos pagos globales 24/7 y hemos diversificado nuestros ingresos significativamente. Su conocimiento del mercado latino es invaluable.",
      icon: Zap,
      color: "secondary",
    },
    {
      name: "Ana Rodríguez",
      role: "Directora, AR Digital",
      location: "Los Angeles, CA",
      image: "/latina-businesswoman.png",
      rating: 5,
      result: "500+ clientes nuevos",
      quote:
        "El sistema de automatización de Rulo no solo mejoró nuestra eficiencia, sino que nos posicionó como líderes tecnológicos en nuestro sector. Nuestros competidores aún no entienden cómo logramos estos resultados.",
      icon: Users,
      color: "primary",
    },
  ]

  const stats = [
    { number: "95%", label: "Satisfacción del Cliente" },
    { number: "300%", label: "ROI Promedio" },
    { number: "50+", label: "Proyectos Exitosos" },
    { number: "24/7", label: "Soporte Disponible" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Lo que Dicen Nuestros{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Clientes Exitosos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Profesionales latinos de toda América que han transformado sus negocios con nuestras soluciones
            especializadas.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-card rounded-lg p-6 border border-border">
              <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl group relative overflow-hidden bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-8 relative z-10">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="w-8 h-8 text-accent opacity-50" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Result Badge */}
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                    <testimonial.icon className="w-4 h-4" />
                    {testimonial.result}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 rounded-2xl p-12 border border-primary/20">
          <h3 className="text-3xl font-bold text-foreground mb-4">¿Quieres Ser el Próximo Caso de Éxito?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a los profesionales latinos que ya están transformando sus negocios. Tu historia de éxito podría ser
            la siguiente.
          </p>

          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">Garantía de Resultados</div>
              <p className="text-muted-foreground">
                Si no ves mejoras medibles en 90 días, te devolvemos tu inversión completa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
