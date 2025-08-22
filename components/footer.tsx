"use client"

import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Rulo.pro</h3>
            <p className="text-primary-foreground/80">
              Consultoría digital premium para profesionales latinos que buscan transformar sus negocios.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navegación</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="/portfolio" className="hover:text-secondary transition-colors">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <div className="space-y-3">
              <Button
                variant="ghost"
                size="sm"
                className="justify-start p-0 h-auto text-primary-foreground/80 hover:text-secondary"
                onClick={() => window.open("https://wa.link/6difl3", "_blank")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start p-0 h-auto text-primary-foreground/80 hover:text-secondary"
                onClick={() => window.open("mailto:marketing@rulo.pro", "_blank")}
              >
                <Mail className="w-4 h-4 mr-2" />
                marketing@rulo.pro
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="justify-start p-0 h-auto text-primary-foreground/80 hover:text-secondary"
                onClick={() => window.open("https://x.com/guinoki_eth", "_blank")}
              >
                <Twitter className="w-4 h-4 mr-2" />
                @guinoki_eth
              </Button>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="/legal/privacidad" className="hover:text-secondary transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="/legal/terminos" className="hover:text-secondary transition-colors">
                  Términos
                </a>
              </li>
              <li>
                <a href="/legal/cookies" className="hover:text-secondary transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="/legal/crypto" className="hover:text-secondary transition-colors">
                  Crypto Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Rulo.pro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
