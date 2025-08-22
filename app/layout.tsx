import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rulo.pro - Consultoría Digital Premium para Profesionales Latinos",
  description:
    "Transformamos tu negocio con automatización, integración crypto y estrategias digitales avanzadas. Consultoría especializada para profesionales latinos en US y LATAM.",
  keywords: "consultoría digital, automatización, crypto, latinos, profesionales, transformación digital, LATAM",
  authors: [{ name: "Rulo.pro" }],
  creator: "Rulo.pro",
  publisher: "Rulo.pro",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: "https://rulo.pro",
    siteName: "Rulo.pro",
    title: "Rulo.pro - Consultoría Digital Premium",
    description: "Transformamos tu negocio con automatización, integración crypto y estrategias digitales avanzadas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rulo.pro - Consultoría Digital Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@guinoki_eth",
    creator: "@guinoki_eth",
    title: "Rulo.pro - Consultoría Digital Premium",
    description: "Transformamos tu negocio con automatización, integración crypto y estrategias digitales avanzadas.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Rulo.pro",
              description:
                "Consultoría digital premium especializada en automatización, integración crypto y transformación digital para profesionales latinos.",
              url: "https://rulo.pro",
              telephone: "+1-XXX-XXX-XXXX",
              email: "marketing@rulo.pro",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              sameAs: ["https://x.com/guinoki_eth"],
              serviceType: "Digital Consulting",
              areaServed: ["US", "LATAM"],
              priceRange: "$$$",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
