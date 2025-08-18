import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Rulo.pro | Soluciones Digitales para Profesionales Latinos Premium",
  description:
    "Descubre cómo automatizo la captación de clientes y pagos para dentistas, abogados y médicos latinos en EE.UU. y LATAM. Genera más negocios con sistemas digitales personalizados, sin complicaciones técnicas.",
  keywords:
    "consultor digital para profesionales latinos en EE.UU., automatización de citas para dentistas latinos, sitios web bilingües para abogados en LATAM, sistemas de pagos crypto para médicos premium, automatización de marketing WhatsApp para psicólogos, lead generation digital para cirujanos de ingresos altos",
  authors: [{ name: "Rulo.pro" }],
  creator: "Rulo.pro",
  publisher: "Rulo.pro",
  openGraph: {
    title: "Rulo.pro | Soluciones Digitales para Profesionales Latinos Premium",
    description:
      "Automatizo captación de clientes, pagos (incluyendo crypto) y marketing en 72 horas. Paquetes desde $2,500 USD para profesionales latinos de élite.",
    url: "https://rulo.pro",
    siteName: "Rulo.pro",
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rulo.pro | Soluciones Digitales para Profesionales Latinos Premium",
    description: "Automatizo captación de clientes, pagos (incluyendo crypto) y marketing en 72 horas.",
    creator: "@rulo_pro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Rulo.pro",
              description:
                "Consultor Digital Premium especializado en soluciones de marketing y automatización para profesionales latinos",
              url: "https://rulo.pro",
              telephone: "+1-XXX-XXX-XXXX",
              email: "marketing@rulo.pro",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              serviceArea: ["United States", "Latin America"],
              priceRange: "$2500-$7400",
              sameAs: ["https://x.com/rulo_pro"],
            }),
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
