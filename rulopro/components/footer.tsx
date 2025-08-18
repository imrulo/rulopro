import { Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-rulo-navy py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl text-white mb-4">Rulo.pro</h3>
            <p className="font-body text-white/70 leading-relaxed">
              Soluciones Digitales y de Marketing para Profesionales de Élite
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-4">Contacto</h4>
            <div className="space-y-2">
              <a
                href="mailto:marketing@rulo.pro"
                className="flex items-center gap-2 text-white/70 hover:text-rulo-gold transition-colors"
              >
                <Mail className="h-4 w-4" />
                marketing@rulo.pro
              </a>
              <a
                href="https://x.com/rulo_pro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-rulo-gold transition-colors"
              >
                <Twitter className="h-4 w-4" />
                @rulo_pro
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="/legal/privacidad" className="block text-white/70 hover:text-rulo-gold transition-colors">
                Política de Privacidad
              </a>
              <a href="/legal/terminos" className="block text-white/70 hover:text-rulo-gold transition-colors">
                Términos de Uso
              </a>
              <a href="/legal/cookies" className="block text-white/70 hover:text-rulo-gold transition-colors">
                Política de Cookies
              </a>
              <a href="/legal/crypto" className="block text-white/70 hover:text-rulo-gold transition-colors">
                Disclaimers Crypto
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="font-body text-white/60">
            © 2025 Rulo.pro - Soluciones Digitales y de Marketing para Profesionales de Élite. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
