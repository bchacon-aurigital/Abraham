import { Geist, Geist_Mono } from "next/font/google";
import "imagehover.css/css/imagehover.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abraham Studio | Barbería y estética masculina",
  description: "En Abraham Studio, encontrarás la comunidad necesaria para ayudarte a lucir y sentirte en tu mejor momento.",
  keywords: "barbería, estética, abraham studio, cortes, cuidado, barbero, afeitado, estilo, masculina, masculino",
  openGraph: {
    title: "Abraham Studio | Barbería y estética masculina",
    description: "En Abraham Studio, encontrarás la comunidad necesaria para ayudarte a lucir y sentirte en tu mejor momento.",
    url: "https://abrahamstudio.calendarhit.com/",
    siteName: "Abraham Studio | Barbería y estética masculina",
    images: [
      {
        url: "/HeroBG.png", 
        width: 1200,
        height: 630,
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
    "image": "https://abrahamstudio.calendarhit.com/HeroBG.png", 
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
    <html lang="es"> 
    <script src="https://static.elfsight.com/platform/platform.js" async></script>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </body>
  </html>
);
}
