import { Geist, Geist_Mono } from "next/font/google";
import "imagehover.css/css/imagehover.min.css";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://abrahamstudio.calendarhit.com"),
  title: "Abraham Studio | Barbería y estética masculina",
  description: "En Abraham Studio, encontrarás la comunidad necesaria para ayudarte a lucir y sentirte en tu mejor momento.",
  keywords: "barbería, estética, abraham studio, cortes, cuidado, barbero, afeitado, estilo, masculina, masculino",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Abraham Studio | Barbería y estética masculina",
    description: "En Abraham Studio, encontrarás la comunidad necesaria para ayudarte a lucir y sentirte en tu mejor momento.",
    url: "https://abrahamstudio.calendarhit.com/",
    siteName: "Abraham Studio | Barbería y estética masculina",
    images: [
      {
        url: "/og-cover.jpg", 
        width: 1200,
        height: 700,
        alt: "Abraham Barber Shop"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  alternates: {
    canonical: "https://abrahamstudio.calendarhit.com/"
  }
};

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": "Abraham Studio | Barbería y estética masculina",
    "image": "https://abrahamstudio.calendarhit.com/og-cover.jpg", 
    "url": "https://abrahamstudio.calendarhit.com/",
    "telephone": "+50684249981",       
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "San Rafael",
      "addressLocality": "Escazú",
      "addressRegion": "San Jose",
      "addressCountry": "Costa Rica"
    },
    "openingHours": "Mo-Fr 08:00-21:00",    
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/abraham.corelladuran.5/",
      "https://www.instagram.com/abraham_corella/#"
    ]
  };


export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning> 
    <GoogleTagManager gtmId="GTM-MBW74K45" />
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
      <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </body>
  </html>
);
}
