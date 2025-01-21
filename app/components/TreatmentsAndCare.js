"use client";
import { useRef } from "react";
import Link from "next/link";

export default function TreatmentsAndCare() {
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);
    const videoRef4 = useRef(null);
    const videoRef5 = useRef(null);
    const videoRef6 = useRef(null);

    const handleMouseEnter = (videoRef) => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current
                    .play()
                    .catch((err) => {
                        if (err.name !== "AbortError") {
                            console.error("Error al reproducir el video:", err);
                        }
                    });
            }
        }
    };

    const handleMouseLeave = (videoRef) => {
        if (videoRef.current) {
            if (!videoRef.current.paused) {
                videoRef.current.pause();
            }
        }
    };

    return (
        <>
            <h1 id="Servicios" className=" mb-5 text-3xl md:text-4xl font-cp-regular font-[800] tracking-[0.4rem] uppercase text-center mx-auto">
                tratamientosy cuidados
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-40 md:grid-rows-9 gap-6 w-full h-[90rem] md:h-[57em] p-4 mx-auto max-w-7xl">
                <div
                    className="col-span-2 row-span-6 md:row-span-4 relative group text-white font-bold"
                    onMouseEnter={() => handleMouseEnter(videoRef1)}
                    onMouseLeave={() => handleMouseLeave(videoRef1)}
                    data-aos="fade-down"
                >
                    <div className="absolute inset-0 bg-black/30 z-10 w-full h-full" />
                    <video
                        ref={videoRef1}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                        style={{ objectPosition: "50% 20%" }}
                        loop
                        muted
                        playsInline
                        preload="auto"
                        src="/assets/service1.webm"
                    />
                    <div className="absolute bottom-0 z-10 p-4">
                        <h1 className="mb-2 font-cp-regular text-xl">CORTE DE CABELLO</h1>
                        <p
                            className="
              max-h-0
              group-hover:max-h-[1000px]
              overflow-hidden
              opacity-0
              translate-y-4
              group-hover:opacity-100
              group-hover:translate-y-0
              text-xs md:text-sm font-futura-medium leading-snug font-[100]
              max-w-sm
            "
                            style={{
                                transition: `
                max-height 2s ease-in-out,
                opacity 3s ease-in-out,
                transform 2s ease-in-out
              `,
                            }}
                        >
                            Más allá de un simple corte, creamos un estilo que se adapta a tu personalidad y estilo de vida. Desde looks clásicos hasta tendencias contemporáneas, cada corte está diseñado para realzar tus mejores características y facilitar tu rutina diaria.
                        </p>
                    </div>
                </div>

                <div
                    className="col-span-1 row-span-7 md:row-span-5 relative group text-white"
                    onMouseEnter={() => handleMouseEnter(videoRef2)}
                    onMouseLeave={() => handleMouseLeave(videoRef2)}
                    data-aos="fade-down-right"
                >
                    <div className="absolute inset-0 bg-black/30 z-10 w-full h-full" />
                    <video
                        ref={videoRef2}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                        loop
                        muted
                        playsInline
                        preload="auto"
                        src="/assets/service2.webm"
                    />
                    <div className="absolute bottom-0 z-10 p-4">
                        <h1 className="mb-2 font-cp-regular text-xl">AFEITADO ESTILIZADO</h1>
                        <p
                            className="
              max-h-0
              group-hover:max-h-[1000px]
              overflow-hidden
              opacity-0
              translate-y-4
              group-hover:opacity-100
              group-hover:translate-y-0
              text-xs md:text-sm font-futura-medium leading-snug font-[100]
              max-w-sm
            "
                            style={{
                                transition: `
                max-height 2s ease-in-out,
                opacity 3s ease-in-out,
                transform 2s ease-in-out
              `,
                            }}
                        >
                            Un ritual de precisión que combina técnicas tradicionales con productos premium. Utilizamos toallas calientes, aceites esenciales y after-shave personalizado para garantizar no solo un afeitado perfecto, sino también el cuidado óptimo de tu piel.                        </p>
                    </div>
                </div>

                <div
                    className="col-span-1 row-span-7 md:row-span-5 relative group text-white font-bold"
                    onMouseEnter={() => handleMouseEnter(videoRef3)}
                    onMouseLeave={() => handleMouseLeave(videoRef3)}
                    data-aos="fade-down-left"
                >
                    <div className="absolute inset-0 bg-black/30 z-10 w-full h-full" />
                    <video
                        ref={videoRef3}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                        loop
                        muted
                        playsInline
                        preload="auto"
                        src="/assets/service3.webm"
                    />
                    <div className="absolute bottom-0 z-10 p-4">
                        <h1 className="mb-2 font-cp-regular text-xl">CORTE Y BARBA</h1>
                        <p
                            className="
              max-h-0
              group-hover:max-h-[1000px]
              overflow-hidden
              opacity-0
              translate-y-4
              group-hover:opacity-100
              group-hover:translate-y-0
              text-xs md:text-sm font-futura-medium leading-snug font-[100]
              max-w-sm
            "
                            style={{
                                transition: `
                max-height 2s ease-in-out,
                opacity 3s ease-in-out,
                transform 2s ease-in-out
              `,
                            }}
                        >
                            La transformación completa. Armonizamos el estilo de tu cabello con el diseño de tu barba para crear un look integral que define tus facciones. Este servicio premium incluye perfilado detallado y técnicas especializadas para realzar tu estructura facial.                        </p>
                    </div>
                </div>

                <div
                    className="col-span-1 row-span-7 md:row-span-5 relative group text-white font-bold"
                    onMouseEnter={() => handleMouseEnter(videoRef4)}
                    onMouseLeave={() => handleMouseLeave(videoRef4)}
                    data-aos="fade-up-right"
                >
                    <div className="absolute inset-0 bg-black/30 z-10 w-full h-full" />
                    <video
                        ref={videoRef4}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                        loop
                        muted
                        playsInline
                        preload="auto"
                        src="/assets/service6.webm"
                    />
                    <div className="absolute bottom-0 z-10 p-4">
                        <h1 className="mb-2 font-cp-regular text-xl sm:text-lg lg:text-xl">MASCARILLAS Y CUIDADO PERSONAL</h1>
                        <p
                            className="
              max-h-0
              group-hover:max-h-[1000px]
              overflow-hidden
              opacity-0
              translate-y-4
              group-hover:opacity-100
              group-hover:translate-y-0
              text-xs md:text-sm font-futura-medium leading-snug font-[100]
              max-w-sm
            "
                            style={{
                                transition: `
                max-height 2s ease-in-out,
                opacity 3s ease-in-out,
                transform 2s ease-in-out
              `,
                            }}
                        >
                            Eleva tu experiencia al siguiente nivel. Ofrecemos tratamientos premium para cabello y rostro que complementan tu servicio principal. Desde mascarillas hidratantes hasta tratamientos detox, personalizado según las necesidades específicas de tu cabello y piel.                        </p>
                    </div>
                </div>

                <div
                    className="col-span-1 row-span-7 md:row-span-5 relative group text-white font-bold"
                    onMouseEnter={() => handleMouseEnter(videoRef5)}
                    onMouseLeave={() => handleMouseLeave(videoRef5)}
                    data-aos="fade-up-left"
                >
                    <div className="absolute inset-0 bg-black/30 z-10 w-full h-full" />
                    <video
                        ref={videoRef5}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                        loop
                        muted
                        playsInline
                        preload="auto"
                        src="/assets/service4.webm"
                    />
                    <div className="absolute bottom-0 z-10 p-4">
                        <h1 className="mb-2 font-cp-regular text-xl">TINTE & FREE STYLE</h1>
                        <p
                            className="
              max-h-0
              group-hover:max-h-[1000px]
              overflow-hidden
              opacity-0
              translate-y-4
              group-hover:opacity-100
              group-hover:translate-y-0
              text-xs md:text-sm font-futura-medium leading-snug font-[100]
              max-w-sm
            "
                            style={{
                                transition: `
                max-height 2s ease-in-out,
                opacity 3s ease-in-out,
                transform 2s ease-in-out
              `,
                            }}
                        >
                            Dale vida a tu creatividad. Desde toques sutiles hasta cambios dramáticos, nuestro equipo experto maneja las últimas técnicas en coloración y diseño libre. Creamos looks únicos que expresan tu personalidad, manteniendo la salud de tu cabello.                        </p>
                    </div>
                </div>

                <div
                    className="col-span-2 row-span-6 md:row-span-4 relative group text-white font-bold"
                    onMouseEnter={() => handleMouseEnter(videoRef6)}
                    onMouseLeave={() => handleMouseLeave(videoRef6)}
                    data-aos="fade-up"
                >
                    <div className="absolute inset-0 bg-black/30 z-10 w-full h-full" />
                    <video
                        ref={videoRef6}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                        loop
                        muted
                        playsInline
                        preload="auto"
                        src="/assets/service5.webm"
                    />
                    <div className="absolute bottom-0 z-10 p-4">
                        <h1 className="mb-2 font-cp-regular text-xl">ASESORÍA Y EDUCACIÓN</h1>
                        <p
                            className="
              max-h-0
              group-hover:max-h-[1000px]
              overflow-hidden
              opacity-0
              translate-y-4
              group-hover:opacity-100
              group-hover:translate-y-0
              text-xs md:text-sm font-futura-medium leading-snug font-[100]
              max-w-sm
            "
                            style={{
                                transition: `
                max-height 2s ease-in-out,
                opacity 3s ease-in-out,
                transform 2s ease-in-out
              `,
                            }}
                        >
                            Cada visita a Abraham Studio comienza con una consulta personalizada. Te enseñamos las técnicas y productos adecuados para mantener tu estilo entre visitas, desde el cuidado diario hasta trucos profesionales para lograr el look que deseas.                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-5">
                <Link
                    href="#Calendarhit"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    data-aos-duration="1500"
                    className="inline-block mt-8 bg-[#72140A] text-white uppercase p-3
                     rounded-md hover:bg-[#5C1007] transition-colors drop-shadow-lg
                     tracking-widest font-cp-regular opacity-0 imghvr-shutter-in-out-diag-1 z-10 mx-auto"
                >
                    <p className="z-30">AGENDA UNA CITA</p>
                </Link>
            </div>
        </>
    );
}
