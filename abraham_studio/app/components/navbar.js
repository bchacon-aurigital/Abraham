"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "../globals.css"; 

export default function Navbar() {
    useEffect(() => {
        AOS.init({
          duration: 800, 
          easing: "ease-in-out",
          once: true,
        });
      }, []);

    return (
        <nav className="z-30 absolute bg-[#72140A] w-full py-5 md:py-0 md:pt-12 md:pb-2" data-aos="fade-down">
            <div className="flex items-center justify-center space-x-1 md:space-x-12 mx-5">
                <Link
                    href="/abraham"
                    className="text-white text-[0.5rem] md:text-sm uppercase hover:opacity-80 font-futura-medium tracking-widest"
                >
                    ABRAHAM
                </Link>

                <Link
                    href="/servicios"
                    className="text-white text-[0.5rem] md:text-sm uppercase hover:opacity-80 font-futura-medium tracking-widest"
                >
                    SERVICIOS
                </Link>

                <div className="flex flex-col items-center">
                    <Link href="/">
                        <Image
                            src="/assets/logo.png"
                            alt="Bgicon7"
                            width={180}
                            height={120}
                            className="object-contain cursor-pointer"
                        />
                    </Link>
                </div>

                <Link
                    href="/comunidad"
                    className="text-white text-[0.5rem] md:text-sm uppercase hover:opacity-80 font-futura-medium tracking-widest"
                >
                    COMUNIDAD
                </Link>

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
