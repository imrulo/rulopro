import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-slate-800 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold">RULO.PRO</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Consultoría Digital Premium para Profesionales de Élite. Transformamos tu práctica con tecnología de
              vanguardia.
            </p>
            <div className="text-sm text-slate-500">
              © 2025 Rulo.pro - Consultoría Digital para Profesionales de Élite
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors">
                  Automatización
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors">
                  Pagos Crypto
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-white transition-colors">
                  Consultoría
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/legal/privacy" className="hover:text-white transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-white transition-colors">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/legal/crypto" className="hover:text-white transition-colors">
                  Crypto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
