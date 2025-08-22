import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, TrendingUp, Shield } from "lucide-react"

export function TldrSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">TL;DR - Lo Esencial</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Consultoría digital especializada que transforma negocios latinos con automatización, crypto y estrategias
            avanzadas para resultados medibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-border hover:border-accent/50 transition-colors duration-300 bg-transparent">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Automatización</h3>
              <p className="text-sm text-muted-foreground">Sistemas que trabajan 24/7 para tu negocio</p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-primary/50 transition-colors duration-300 bg-transparent">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Estrategia</h3>
              <p className="text-sm text-muted-foreground">Planes personalizados para tu mercado</p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-secondary/50 transition-colors duration-300 bg-transparent">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Crecimiento</h3>
              <p className="text-sm text-muted-foreground">Resultados medibles y escalables</p>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-accent/50 transition-colors duration-300 bg-transparent">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Seguridad</h3>
              <p className="text-sm text-muted-foreground">Protección total de tus activos digitales</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
