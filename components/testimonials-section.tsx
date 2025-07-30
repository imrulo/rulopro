import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Lo Que Dicen Mis Clientes</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-slate-50 to-amber-50 border-amber-200 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-amber-500" />
              </div>

              <blockquote className="text-xl md:text-2xl text-slate-700 text-center mb-8 leading-relaxed italic">
                "Rulo implementó recordatorios automáticos para mi clínica dental. Pasamos de 12 citas perdidas a solo
                2. Son $5,000 más al mes."
              </blockquote>

              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="font-bold text-slate-800 text-lg">Dr. Carlos Vega</div>
                <div className="text-slate-600">Clínica Dental Premium, Miami</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
