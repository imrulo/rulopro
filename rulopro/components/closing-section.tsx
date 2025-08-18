"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

export function ClosingSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-rulo-emerald to-rulo-navy bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
          ¿Estás Listo para Transformar Tu Negocio y Atraer Clientes Ideales?
        </h2>

        <p className="font-body text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Trabajo exclusivamente con 3 clientes al mes para garantizar resultados personalizados y atención dedicada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-rulo-gold hover:bg-white hover:text-rulo-navy text-rulo-navy font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            onClick={() => window.open("https://wa.link/6difl3", "_blank")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Inicia una Conversación por WhatsApp Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <p className="font-body text-sm text-white/70 mt-6">
          Mensaje prellenado: "Hola, quiero saber cómo puedes ayudar a mi práctica"
        </p>
      </div>
    </section>
  )
}
