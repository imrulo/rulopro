"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-muted/30 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/15 text-accent border border-accent/20 px-4 py-2 rounded-full text-sm font-semibold">
                <Zap className="w-4 h-4" />
                Consultoría Digital Premium
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforma tu Negocio con{" "}
                <span className="text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text">
                  Automatización
                </span>{" "}
                e{" "}
                <span className="text-transparent bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text">
                  Innovación
                </span>
              </h1>

              <p className="text-xl leading-relaxed text-muted-foreground max-w-2xl">
                Especialista en automatización, integración crypto y transformación digital para profesionales latinos
                que buscan resultados extraordinarios.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                onClick={() => window.open("https://wa.link/6difl3", "_blank")}
              >
                <span className="block sm:hidden">Auditoría Gratuita</span>
                <span className="hidden sm:block">Agenda una Auditoría Gratuita (15 min)</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground font-medium">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground font-medium">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">3x</div>
                <div className="text-sm text-muted-foreground font-medium">ROI Promedio</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative px-4 sm:px-0">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-border/50 p-8 flex items-center justify-center backdrop-blur-sm bg-teal-700">
              {/* Professional Vector Illustration */}
              <svg viewBox="0 0 400 400" className="w-full h-full max-w-md">
                {/* Background Circle */}
                <circle className="" cx="200" cy="200" r="180" fill="url(#gradient1)" opacity="0.08" />

                {/* Central Gear (Automation) */}
                <g transform="translate(200,200)">
                  <circle r="45" fill="url(#gradient2)" opacity="0.9" />
                  <path
                    d="M-35,-35 L-35,-45 L-25,-45 L-25,-35 M35,-35 L35,-45 L25,-45 L25,-35 M35,35 L35,45 L25,45 L25,35 M-35,35 L-35,45 L-25,45 L-25,35"
                    stroke="hsl(var(--primary))"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle r="18" fill="hsl(var(--accent))" />
                </g>

                {/* Orbiting Elements (Data/Connections) */}
                <g className="animate-spin" style={{ transformOrigin: "200px 200px", animationDuration: "25s" }}>
                  <circle cx="120" cy="200" r="10" fill="hsl(var(--secondary))" opacity="0.8" />
                  <circle cx="280" cy="200" r="10" fill="hsl(var(--accent))" opacity="0.8" />
                  <circle cx="200" cy="120" r="10" fill="hsl(var(--primary))" opacity="0.8" />
                  <circle cx="200" cy="280" r="10" fill="hsl(var(--secondary))" opacity="0.8" />
                </g>

                {/* Growth Arrows */}
                <g>
                  <path
                    d="M100,320 L120,300 L140,320"
                    stroke="hsl(var(--accent))"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M260,80 L280,60 L300,80"
                    stroke="hsl(var(--accent))"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </g>

                {/* Gradients */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute top-2 right-2 sm:-top-4 sm:-right-4 bg-card border-2 border-accent/20 rounded-xl p-2 sm:p-4 shadow-xl backdrop-blur-sm max-w-[140px] sm:max-w-none">
              <div className="flex items-center gap-1 sm:gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-foreground">+300% Crecimiento</span>
              </div>
            </div>

            <div className="absolute bottom-2 left-2 sm:-bottom-4 sm:-left-4 bg-card border-2 border-primary/20 rounded-xl p-2 sm:p-4 shadow-xl backdrop-blur-sm max-w-[120px] sm:max-w-none">
              <div className="flex items-center gap-1 sm:gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-foreground">100% Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
