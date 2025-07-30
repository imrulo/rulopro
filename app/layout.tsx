import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e293b" },
    { media: "(prefers-color-scheme: dark)", color: "#1e293b" },
  ],
}

export const metadata: Metadata = {
  title: "Rulo.pro | Consultor Digital para Profesionales Latinos",
  description:
    "Automatiza tu captación de clientes y pagos en 72h. Soluciones digitales premium para dentistas, abogados y médicos latinos en EE.UU y LATAM.",
  keywords: [
    "consultor digital profesionales latinos",
    "automatizar citas dentistas EE.UU",
    "sistema pagos crypto médicos",
    "web bilingüe para abogados",
    "automatización WhatsApp para psicólogos",
  ],
  authors: [{ name: "Rulo.pro", url: "https://rulo.pro" }],
  creator: "Rulo.pro",
  publisher: "Rulo.pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rulo.pro"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rulo.pro | Consultor Digital para Profesionales Latinos",
    description:
      "Automatiza tu captación de clientes y pagos en 72h. Soluciones digitales premium para dentistas, abogados y médicos latinos en EE.UU y LATAM.",
    url: "https://rulo.pro",
    siteName: "Rulo.pro",
    type: "website",
    locale: "es_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "business",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
