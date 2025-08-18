"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Zap, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-rulo-off-white to-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 fade-in">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 relative">
            <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
              {/* Background circle with gradient */}
              <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#b8860b" />
                </linearGradient>
              </defs>

              {/* Main circle background */}
              <circle cx="60" cy="60" r="58" fill="url(#bgGradient)" stroke="#d4af37" strokeWidth="2" />

              {/* Digital transformation elements */}
              {/* Central gear/automation symbol */}
              <g transform="translate(60,60)">
                <circle r="18" fill="url(#accentGradient)" opacity="0.9" />
                <path
                  d="M-12,-12 L-8,-8 L-12,-4 L-8,0 L-12,4 L-8,8 L-12,12 L-4,12 L0,8 L4,12 L12,12 L8,8 L12,4 L8,0 L12,-4 L8,-8 L12,-12 L4,-12 L0,-8 L-4,-12 Z"
                  fill="#1e3a8a"
                  opacity="0.8"
                />
                <circle r="6" fill="#fef3c7" />
              </g>

              {/* Orbiting elements representing automation/connectivity */}
              <g transform="translate(60,60)">
                {/* Data nodes */}
                <circle cx="0" cy="-35" r="4" fill="#d4af37" />
                <circle cx="25" cy="-25" r="3" fill="#059669" />
                <circle cx="35" cy="0" r="4" fill="#d4af37" />
                <circle cx="25" cy="25" r="3" fill="#059669" />
                <circle cx="0" cy="35" r="4" fill="#d4af37" />
                <circle cx="-25" cy="25" r="3" fill="#059669" />
                <circle cx="-35" cy="0" r="4" fill="#d4af37" />
                <circle cx="-25" cy="-25" r="3" fill="#059669" />

                {/* Connection lines */}
                <path
                  d="M0,-35 Q15,-30 25,-25 Q30,-10 35,0 Q30,15 25,25 Q15,30 0,35 Q-15,30 -25,25 Q-30,15 -35,0 Q-30,-15 -25,-25 Q-15,-30 0,-35"
                  fill="none"
                  stroke="#fef3c7"
                  strokeWidth="1"
                  opacity="0.6"
                />
              </g>

              {/* Success/growth arrows */}
              <g transform="translate(60,60)">
                <path d="M-8,-25 L-2,-31 L4,-25 L0,-27 L0,-20 L-4,-20 L-4,-27 Z" fill="#059669" opacity="0.8" />
                <path d="M20,-15 L26,-21 L32,-15 L28,-17 L28,-10 L24,-10 L24,-17 Z" fill="#059669" opacity="0.8" />
                <path d="M20,8 L26,2 L32,8 L28,6 L28,13 L24,13 L24,6 Z" fill="#059669" opacity="0.8" />
              </g>
            </svg>
          </div>
        </div>

        <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-rulo-navy mb-6 leading-tight">
          Evita perder miles de dólares en oportunidades de clientes.
          <span className="text-rulo-emerald"> Yo te ayudo a capturarlas.</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-rulo-navy/70 mb-8 max-w-4xl mx-auto leading-relaxed">
          Soy Rulo, tu consultor digital premium. Construyo sistemas integrados que conectan tu expertise con clientes
          ideales en EE.UU. y LATAM, generando negocios reales mientras tú te enfocas en lo que mejor haces.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-rulo-emerald hover:bg-rulo-gold text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            onClick={() => window.open("https://wa.link/6difl3", "_blank")}
          >
            Agenda una Auditoría Gratuita (15 min)
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 p-4 bg-white/60 rounded-lg border border-rulo-gold/20">
            <Users className="h-6 w-6 text-rulo-emerald" />
            <span className="font-body font-medium text-rulo-navy">
              Especialista en Profesionales Latinos de Ingresos Altos
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 bg-white/60 rounded-lg border border-rulo-gold/20">
            <Shield className="h-6 w-6 text-rulo-emerald" />
            <span className="font-body font-medium text-rulo-navy">100% Compliance con Regulaciones EE.UU./LATAM</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 bg-white/60 rounded-lg border border-rulo-gold/20">
            <Zap className="h-6 w-6 text-rulo-emerald" />
            <span className="font-body font-medium text-rulo-navy">
              Resultados Garantizados en Generación de Negocios
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
