import React from "react";
import Link from "next/link";

const AbrahamSection = () => {
  return (
    <div
      id="Abraham"
      className="w-full min-h-screen bg-[#131313] relative flex items-center"
    >
      <div className="max-w-7xl container mx-auto px-12 py-16 flex flex-col md:flex-row items-center gap-10">
        <div
          className="w-full md:w-2/3 text-white space-y-6 z-10 text-center md:text-start"
          data-aos="fade-right"
        >
          <h2 className="text-2xl md:text-3xl tracking-widest leading-tight font-cp-bold">
            EL CUIDADO PERSONAL ES IMPORTANTE PARA VOS
          </h2>

          <h3 className="text-md md:text-lg font-cp-regular font-[600] tracking-widest text-white ">
            TU CABELLO EN MANOS DE UN BARBERO CON <br className="hidden md:flex"/> 10 AÑOS DE EXPERIENCIA
          </h3>

          <p className="text-white text-sm md:text-md max-w-xl font-futura-medium leading-snug">
            Lorem ipsum dolor sit amet consectetur. Malesuada massa tempor
            iaculis urna. Faucibus nulla lectus augue turpis morbi auctor.
            Sagittis sagittis interdum sit dictum. Malesuada eu ut fusce
            fermentum est felis cursus enim porttitor. Dolor penatibus bibendum
            dolor laborits. Aliquet donec elementum fringilla sit. Mauris nisi
            ac orci rutrum.
          </p>

          <div className="space-y-4">
            <p className="text-[#3B7E73] font-futura-medium text-sm">
              -Abraham Corella
            </p>

            <Link
              href="#Calendarhit"
              className="inline-block mt-8 bg-[#72140A] text-white uppercase p-3
                     rounded-md hover:bg-[#5C1007] transition-colors drop-shadow-lg
                     tracking-widest font-cp-regular imghvr-shutter-in-out-diag-1 z-10"
            >
              <p className="z-30">AGENDA UNA CITA</p>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-[40%] mt-8 md:mt-0" data-aos="fade-left">
          <div className="relative w-full h-[600px]">
            <img
              src="/assets/abraham.avif"
              alt="Professional barber"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-[#1E3F3F]/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbrahamSection;
