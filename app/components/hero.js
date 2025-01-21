"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    AOS.init({
      disableMutationObserver: true,
      once: true,
    });

    const aosElements = document.querySelectorAll("[data-aos]");
    aosElements.forEach((element) => {
      element.classList.remove("aos-animate");
    });

    setTimeout(() => {
      aosElements.forEach((element) => {
        element.classList.add("aos-animate");
      });
    }, 5000);

    animate(
      "span",
      { opacity: 1, y: 0 },
      {
        duration: 2,
        delay: stagger(0.8),
      }
    );
  }, [animate]);

  return (
    <ParallaxProvider>
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-[0]"
          src="/assets/hero-video.webm"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/40 z-[0]" />

        <div className="relative flex flex-col items-center justify-center w-full h-full text-center px-4 md:px-8">
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
            className="mb-4 opacity-0"
          >
            <Image
              src="/assets/HeroIcon.svg"
              alt="Icono Principal"
              width={140}
              height={140}
              priority
            />
          </div>

          <motion.h1
            ref={scope}
            className="max-w-4xl text-white text-4xl md:text-5xl font-bold leading-tight uppercase drop-shadow-2xl font-cp-bold tracking-widest"
          >
            {"SENTIRTE BIEN EMPIEZA CON VERTE BIEN".split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block opacity-0 translate-y-4"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h1>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1500"
            className="text-white text-base md:text-md max-w-xl mt-5 text-shadow-custom font-futura-medium leading-snug opacity-0"
          >
            En Abraham Studio encontrarás un espacio donde la excelencia en cortes y
            cuidado de barba se combina con una experiencia única. Forma parte de una
            comunidad que entiende que verse bien es solo el comienzo.
          </p>

          <Link
            href="#Calendarhit"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1500"
            className="inline-block mt-8 bg-[#72140A] text-white uppercase p-3
                     rounded-md hover:bg-[#5C1007] transition-colors drop-shadow-lg
                     tracking-widest font-cp-regular opacity-0 imghvr-shutter-in-out-diag-1 z-10"
          >
            <p className="z-30">AGENDA UNA CITA</p>
          </Link>
        </div>

        <Parallax speed={-3} className="z-50">
          <div
            data-aos="fade-left"
            data-aos-delay="1500"
            data-aos-duration="1500"
            className="z-50 absolute bottom-5 right-0 md:bottom-10 md:right-16 flex flex-row bg-[#3C5954] gap-3 p-3 rounded-xl opacity-0"
          >
            <Link href="https://www.facebook.com/abraham.corelladuran.5/" target="_blank">
              <FaFacebookSquare
                className="w-8 h-8 text-white hover:text-gray-300 transition-colors"
                strokeWidth={2}
              />
            </Link>
            <Link href="https://www.instagram.com/abraham_corella/#" target="_blank">
              <AiFillInstagram
                className="w-9 h-9 text-white hover:text-gray-300 transition-colors"
                strokeWidth={2}
              />
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=50684249981" target="_blank">
              <FaWhatsappSquare
                className="w-8 h-8 text-white hover:text-gray-300 transition-colors"
                strokeWidth={2}
              />
            </Link>
          </div>
        </Parallax>
      </section>
    </ParallaxProvider>
  );
}
