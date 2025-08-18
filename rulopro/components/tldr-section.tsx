import { Card } from "@/components/ui/card"

export function TldrSection() {
  return (
    <section className="py-8 px-4 bg-rulo-off-white border-b border-rulo-gold/20">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 border-rulo-gold/30 bg-white/80 backdrop-blur-sm">
          <h2 className="font-heading font-bold text-lg text-rulo-navy mb-4">Resumen Rápido (TL;DR)</h2>
          <p className="font-body text-rulo-navy/80 leading-relaxed">
            <strong>Rulo.pro</strong> ofrece soluciones digitales premium para profesionales latinos en EE.UU. y LATAM.
            Automatizo captación de clientes, pagos (incluyendo crypto) y marketing en 72 horas. Paquetes desde $2,500
            USD. Agenda una auditoría gratuita para generar más negocios sin complicaciones técnicas.
          </p>
        </Card>
      </div>
    </section>
  )
}
