"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";
import TreatmentsAndCare from "./components/TreatmentsAndCare.js";
import InstagramSection from "./components/instagram.js";
import Calendarhit from "./components/calendarhit.js";
import Footer from "./components/footer.js";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Garantizar al menos 1 segundo de pantalla de carga
      setTimeout(() => {
        setLoading(false);
      }, 1000); // 1000 ms = 1 segundo
    };

    if (document.readyState === "complete") {
      handleLoad(); // Si la página ya está cargada
    } else {
      window.addEventListener("load", handleLoad); // Escuchar el evento 'load'
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#3C5954] z-50">
        <img
          src="/assets/LogoLoading.svg" // Reemplaza con la ruta de tu logo
          alt="Loading..."
          className="w-[50vh]" // Clase opcional para animación
        />
      </div>
    );
  }

  return (
    <>
    <div className="overglow-hidden">
      <Navbar />
      <Hero />
      <TreatmentsAndCare />
      <InstagramSection />
      <Calendarhit />
      <Footer />
      </div>
    </>
  );
}
