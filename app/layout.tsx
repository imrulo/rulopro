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
  title: {
    default: "Rulo.pro | Consultor Digital para Profesionales Latinos",
    template: "%s | Rulo.pro"
  },
  description:
    "Automatiza tu captación de clientes y pagos en 72h. Soluciones digitales premium para dentistas, abogados y médicos latinos en EE.UU y LATAM.",
  keywords: [
    "consultor digital profesionales latinos",
    "automatizar citas dentistas EE.UU",
    "sistema pagos crypto médicos",
    "web bilingüe para abogados",
    "automatización WhatsApp para psicólogos",
    "desarrollo web profesionales hispanos",
    "consultoría digital Estados Unidos",
    "pagos criptomonedas profesionales"
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
      'es-US': '/es-US',
      'es': '/',
    },
  },
  openGraph: {
    title: "Rulo.pro | Consultor Digital para Profesionales Latinos",
    description:
      "Automatiza tu captación de clientes y pagos en 72h. Soluciones digitales premium para dentistas, abogados y médicos latinos en EE.UU y LATAM.",
    url: "https://rulo.pro",
    siteName: "Rulo.pro",
    type: "website",
    locale: "es_US",
    images: [
      {
        url: "https://rulo.pro/placeholder-logo.png",
        width: 1200,
        height: 630,
        alt: "Rulo.pro - Consultoría Digital Premium"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rulo.pro | Consultor Digital para Profesionales Latinos",
    description: "Automatiza tu captación de clientes y pagos en 72h. Soluciones digitales premium para profesionales latinos.",
    images: ["https://rulo.pro/placeholder-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: "business",
  verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE ? {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_CODE,
  } : undefined,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rulo.pro",
    "description": "Consultoría Digital Premium para Profesionales Latinos en Estados Unidos y LATAM",
    "url": "https://rulo.pro",
    "logo": "https://rulo.pro/icon-512.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://wa.link/6difl3"
    ],
    "areaServed": ["United States", "Latin America"],
    "serviceType": [
      "Web Development",
      "Business Automation",
      "Digital Consulting",
      "Cryptocurrency Payment Solutions"
    ]
  }

  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Google Analytics 4 - Only load if GA_MEASUREMENT_ID is configured */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
