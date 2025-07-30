import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F4C81" },
    { media: "(prefers-color-scheme: dark)", color: "#0F4C81" },
  ],
}

export const metadata: Metadata = {
  title: "Rulo.pro | Consultoría Digital Premium para Profesionales Latinos",
  description:
    "Transformo tu práctica profesional con sistemas digitales que generan resultados reales. Especializado en dentistas, abogados y médicos latinos. Automatización en 72h.",
  keywords: [
    "consultor digital profesionales latinos",
    "automatizar citas dentistas",
    "web premium para abogados bilingües",
    "sistema pagos crypto médicos",
    "marketing digital profesionales salud",
    "automatización clínicas dentales",
    "software médico bilingüe",
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
    languages: {
      "es-US": "/es-us",
      "en-US": "/en-us",
    },
  },
  openGraph: {
    title: "Rulo.pro | Consultoría Digital Premium para Profesionales Latinos",
    description:
      "Transformo tu práctica profesional con sistemas digitales que generan resultados reales. Automatización en 72h.",
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
    title: "Rulo.pro | Consultoría Digital Premium",
    description: "Transformo tu práctica profesional con sistemas digitales que generan resultados reales.",
    images: [
      "https://sjc.microlink.io/Br6vP1QxGgnDe0OlAqkh4RDeJToP25LXjw0ctrKaGSlgu4WN0pGlw-jNDDcOlnuwMwZ_GRl13cbbKXt3C1oFEQ.jpeg",
    ],
    creator: "@rulopro",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0F4C81" }],
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
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
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Rulo.pro",
              description: "Consultoría Digital Premium para Profesionales Latinos",
              url: "https://rulo.pro",
              telephone: "+1-555-RULO-PRO",
              email: "marketing@rulo.pro",
              areaServed: {
                "@type": "Place",
                name: "América Latina y Estados Unidos",
              },
              serviceType: "Digital Marketing Consulting",
              priceRange: "$2500-$7400",
              founder: {
                "@type": "Person",
                name: "Rulo",
                jobTitle: "Digital Marketing Consultant",
              },
              sameAs: ["https://linkedin.com/company/rulopro", "https://twitter.com/rulopro"],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
