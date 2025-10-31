import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "USA Import - Importador Directo de Productos Americanos",
    template: "%s | USA Import",
  },
  description:
    "Importador directo de productos americanos de alta calidad. Encuentra tecnología, belleza, accesorios y más al mejor precio. Envíos a toda la región.",
  keywords: [
    "importador",
    "productos americanos",
    "USA",
    "tecnología",
    "belleza",
    "accesorios",
    "importación directa",
    "productos de calidad",
  ],
  authors: [{ name: "USA Import" }],
  creator: "USA Import",
  publisher: "USA Import",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://usaimport.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "USA Import - Importador Directo de Productos Americanos",
    description:
      "Importador directo de productos americanos de alta calidad. Encuentra tecnología, belleza, accesorios y más al mejor precio.",
    url: "https://usaimport.com",
    siteName: "USA Import",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "USA Import - Importador Directo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "USA Import - Importador Directo de Productos Americanos",
    description:
      "Importador directo de productos americanos de alta calidad. Encuentra tecnología, belleza, accesorios y más al mejor precio.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: [
      { url: "/favicon.webp", type: "image/webp" },
      { url: "/favicon-16x16.jpg", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`font-sans antialiased`}>
        <CartProvider>{children}</CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
