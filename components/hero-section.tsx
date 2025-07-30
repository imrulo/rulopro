import { Button } from "@/components/ui/button"
import { Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <CheckCircle className="w-4 h-4 mr-2" />
            Consultor 100% enfocado en profesionales latinos
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Deja de perder <span className="text-gradient-gold">$500</span> por cada cita que se te escapa.{" "}
            <span className="text-amber-400">Yo lo soluciono.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Soy Rulo — construyo sistemas digitales todo-en-uno para profesionales latinos que quieren captar más
            clientes sin dolores técnicos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl btn-premium text-lg"
            >
              <Link href="https://wa.link/6difl3" target="_blank">
                Agenda Auditoría Gratuita (15 min) →
              </Link>
            </Button>

            <div className="flex items-center text-slate-300">
              <Clock className="w-5 h-5 mr-2 text-amber-400" />
              <span>Entrega garantizada en 72 horas</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">500+</div>
              <div className="text-slate-300 text-sm">Proyectos Exitosos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">72H</div>
              <div className="text-slate-300 text-sm">Entrega Rápida</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">100%</div>
              <div className="text-slate-300 text-sm">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-slate-300 text-sm">Funcionamiento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
