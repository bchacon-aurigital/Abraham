"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "../globals.css"; 
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Navbar() {
    useEffect(() => {
        AOS.init({
          // Configuración opcional
          duration: 800, // duración de la animación en ms
          easing: "ease-in-out",
          once: true, // si true, la animación se ejecuta solo la primera vez
        });
      }, []);

    return (
        <nav className="z-30 absolute bg-[#72140A] w-full py-5 md:py-0 md:pt-12 md:pb-2" data-aos="fade-down">
            {/* Contenedor que centra y agrupa el menú */}
            <div className="flex items-center justify-center space-x-1 md:space-x-12 mx-5">
                {/* Opción 1 */}
                <Link
                    href="/abraham"
                    className="text-white text-[0.5rem] md:text-sm uppercase hover:opacity-80 font-futura-medium tracking-widest"
                >
                    ABRAHAM
                </Link>

                {/* Opción 2 */}
                <Link
                    href="/servicios"
                    className="text-white text-[0.5rem] md:text-sm uppercase hover:opacity-80 font-futura-medium tracking-widest"
                >
                    SERVICIOS
                </Link>

                {/* Logo o texto principal (al centro) */}
                <div className="flex flex-col items-center">
                    <Link href="/">
                        <Image
                            src="/assets/logo.svg"
                            alt="Bgicon7"
                            width={180}
                            height={120}
                            className="object-contain cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Opción 4 */}
                <Link
                    href="/comunidad"
                    className="text-white text-[0.5rem] md:text-sm uppercase hover:opacity-80 font-futura-medium tracking-widest"
                >
                    COMUNIDAD
                </Link>

                {/* Opción 5 */}
                <Link
                    href="/agenda"
                    className="text-white text-[0.5rem] md:text-sm uppercase hover:opacity-80 font-futura-medium tracking-widest"
                >
                    AGENDA
                </Link>
            </div>
        </nav>
    );
}
