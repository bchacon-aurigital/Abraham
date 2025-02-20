"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from 'next/image';

// Importaciones dinámicas (con ssr deshabilitado para asegurar que corren en cliente)
const Navbar = dynamic(() => import("./components/navbar"), { ssr: false });
const Hero = dynamic(() => import("./components/hero"), { ssr: false });
const AbrahamSection = dynamic(() => import("./components/AbrahamSection"), { ssr: false });
const TreatmentsAndCare = dynamic(() => import("./components/TreatmentsAndCare"), { ssr: false });
const Comunidad = dynamic(() => import("./components/comunidad"), { ssr: false });
const InstagramSection = dynamic(() => import("./components/instagram"), { ssr: false });
const Calendarhit = dynamic(() => import("./components/calendarhit"), { ssr: false });
const Footer = dynamic(() => import("./components/footer"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#3C5954] z-50">
      <div className="relative w-[50vh] aspect-square">
        <Image
          src="/assets/LogoLoading.svg"
          alt="Loading..."
          fill
          priority
          className="object-contain"
          sizes="50vh"
        />
      </div>
    </div>
    );
  }

  return (
    <div className="overflow-hidden bg-[#131313]">
      <Navbar />
      <Hero />
      <AbrahamSection />
      <TreatmentsAndCare />
      <Comunidad />
      <InstagramSection />
      <Calendarhit />
      <Footer />
    </div>
  );
}
