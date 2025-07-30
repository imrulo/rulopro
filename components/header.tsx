import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-slate-800 to-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-slate-800">RULO.PRO</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#servicios" className="text-slate-600 hover:text-slate-800 transition-colors">
              Servicios
            </Link>
            <Link href="#casos" className="text-slate-600 hover:text-slate-800 transition-colors">
              Casos de Éxito
            </Link>
            <Link href="#contacto" className="text-slate-600 hover:text-slate-800 transition-colors">
              Contacto
            </Link>
          </nav>

          <Button
            asChild
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link href="https://wa.link/6difl3" target="_blank">
              Consulta Gratuita
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
