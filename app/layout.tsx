import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: "Rulo.pro | Consultoría Digital para Profesionales Hispanos en EEUU",
  description:
    "¿Cansado de perder clientes por procesos manuales? Automatizo tu captación y cobros en 72h. Para dentistas, abogados y médicos hispanos.",
  keywords: [
    "consultor digital profesionales hispanos",
    "automatizar citas dentistas EEUU",
    "web premium para abogados bilingües",
    "sistema pagos crypto médicos",
  ],
  openGraph: {
    title: "Rulo.pro | Consultoría Digital Premium para Profesionales Hispanos",
    description:
      "Automatizo tu captación y cobros en 72h. Especializado en dentistas, abogados y médicos hispanos en EEUU.",
    url: "https://rulo.pro",
    siteName: "Rulo.pro",
    images: [
      {
        url: "https://sjc.microlink.io/Br6vP1QxGgnDe0OlAqkh4RDeJToP25LXjw0ctrKaGSlgu4WN0pGlw-jNDDcOlnuwMwZ_GRl13cbbKXt3C1oFEQ.jpeg",
        width: 1200,
        height: 630,
        alt: "Rulo.pro - Consultoría Digital Premium",
      },
    ],
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rulo.pro | Consultoría Digital para Profesionales Hispanos",
    description: "Automatizo tu captación y cobros en 72h. Para dentistas, abogados y médicos hispanos en EEUU.",
    images: [
      "https://sjc.microlink.io/Br6vP1QxGgnDe0OlAqkh4RDeJToP25LXjw0ctrKaGSlgu4WN0pGlw-jNDDcOlnuwMwZ_GRl13cbbKXt3C1oFEQ.jpeg",
    ],
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
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Rulo.pro",
              description: "Consultoría Digital Premium para Profesionales Hispanos en EEUU",
              url: "https://rulo.pro",
              telephone: "+1-555-RULO-PRO",
              email: "marketing@rulo.pro",
              areaServed: "United States",
              serviceType: "Digital Consulting",
              priceRange: "$2500-$7400",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
