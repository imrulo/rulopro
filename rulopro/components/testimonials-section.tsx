import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Carlos Vega",
      profession: "Dentista",
      location: "Miami, EE.UU.",
      quote:
        "Gracias a Rulo, mi clínica dental en Miami ahora tiene un sistema automatizado que redujo citas perdidas en un 80%, generando $5,000 extra mensuales.",
      avatar: "/latino-dentist-avatar.png",
    },
    {
      name: "Dra. María González",
      profession: "Psicóloga",
      location: "Bogotá, Colombia",
      quote:
        "La integración de pagos crypto me permitió atraer clientes internacionales. Mis ingresos aumentaron 45% en solo 3 meses.",
      avatar: "/latina-psychologist-avatar.png",
    },
    {
      name: "Lic. Roberto Martínez",
      profession: "Abogado",
      location: "Ciudad de México, México",
      quote:
        "El sistema de automatización de WhatsApp transformó mi práctica legal. Ahora capturo 3x más leads cualificados sin esfuerzo adicional.",
      avatar: "/latino-lawyer-avatar.png",
    },
    {
      name: "Dr. Ana Rodríguez",
      profession: "Cirujana",
      location: "Buenos Aires, Argentina",
      quote:
        "La presencia digital premium que creó Rulo posicionó mi consulta como líder. Mis pacientes ahora me ven como la opción más confiable.",
      avatar: "/latina-surgeon-avatar.png",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-rulo-off-white to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-rulo-navy mb-4">
          Resultados Reales de Profesionales Como Tú
        </h2>
        <p className="font-body text-lg text-rulo-navy/70 text-center mb-12 max-w-3xl mx-auto">
          Descubre cómo otros profesionales latinos han transformado sus negocios con nuestras soluciones
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-white border-rulo-gold/20 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-rulo-gold text-rulo-gold" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-rulo-gold/30 absolute -top-2 -left-2" />
                <p className="font-body text-rulo-navy/80 leading-relaxed pl-6">"{testimonial.quote}"</p>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={`Avatar de ${testimonial.name}, ${testimonial.profession}`}
                  className="w-12 h-12 rounded-full border-2 border-rulo-gold/30"
                />
                <div>
                  <h4 className="font-heading font-semibold text-rulo-navy">{testimonial.name}</h4>
                  <p className="font-body text-sm text-rulo-navy/60">
                    {testimonial.profession}, {testimonial.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
