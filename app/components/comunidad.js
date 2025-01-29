"use client";
import { useState } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Link from "next/link";
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
export default function comunidad() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");

  const openModalWithUrl = (url) => {
    setIframeSrc(url);
    setModalOpen(true);
  };

  return (
    <>
      <div
        id="Comunidad"
        className="py-10 grid grid-cols-1 md:grid-cols-7 md:grid-rows-13 gap-6 w-full lg:h-[100rem] p-4 mx-auto max-w-7xl"
        data-aos="fade-down"
      >
        <div
          className="col-span-1 md:col-span-7 row-span-1 md:row-span-10 relative group rounded-md
                    bg-cover bg-top min-h-[40rem] bg-[url('/assets/BgCard1.avif')] z-0 "
        >
          <div className="absolute  inset-0 bg-black/30 z-[0]" />
          <div className="w-full p-6 md:h-[20rem] flex items-center max-w-sm md:max-w-3xl mx-auto flex-col justify-center">
            <h2 className="uppercase font-cp-bold font-[800] tracking-[0.4rem] text-2xl md:text-3xl text-center mb-4 z-50">
              BIENVENIDO A LA COMUNIDAD
            </h2>
            <p className="font-futura-medium font-[600] md:tracking-wide text-xs md:text-base text-center mx-auto z-50">
              Acá creamos más que estilos, creamos conexiones. Un lugar donde te
              sentís como en casa y te vas luciendo tu mejor versión.
            </p>
          </div>
          <div className="bg-[#72140A]/85 max-w-[500px] m-6 hidden lg:block absolute bottom-0 left-0 rounded-md">
            <div className="p-10 flex items-center max-w-[500px] mx-auto flex-col justify-left">
              <h3 className="uppercase font-cp-regular font-[800] tracking-wide text-lg text-center mb-2">
                Conocé el horario del estudio
              </h3>
              <p className="uppercase font-cp-regular font-[600] md:tracking-widest text-[0.6rem] text-center mx-auto z-50">
                Lunes a Viernes <br />
                10:00a.m. a 9:00p.m.
                <br />
                Sábado <br />
                10:00a.m. a 5:00p.m.
              </p>
              <Link
                href="#Calendarhit"
                data-aos="fade-up"
                className="inline-block mt-3 bg-[#72140A] text-white uppercase p-3
                                        rounded-md hover:bg-[#5C1007] transition-colors drop-shadow-lg
                                        tracking-widest font-cp-regular opacity-0 imghvr-shutter-in-out-diag-1 z-10"
              >
                <p className="z-30">AGENDA UNA CITA</p>
              </Link>
            </div>
          </div>

          <div className="bg-[#72140A]/85 bottom-0 absolute h-[13rem] w-full lg:hidden z-50 rounded-b-lg">
            <div className="w-full h-full flex items-center max-w-xs py-4 mx-auto flex-col justify-center text-white">
              <h3 className="uppercase font-cp-regular font-[800] tracking-wide text-md text-center mb-3 z-50">
                Conocé el horario 
              </h3>
              <p className="uppercase font-cp-regular font-[600] md:tracking-widest text-[0.6rem] text-center mx-auto z-50">
                Lunes a Viernes <br />
                10:00a.m. a 9:00p.m.
                <br />
                Sábado <br />
                10:00a.m. a 5:00p.m.
              </p>
              <Link
                href="#Calendarhit"
                data-aos="fade-up"
                className="inline-block mt-3 bg-[#72140A] text-white uppercase p-3
                                        rounded-md hover:bg-[#5C1007] transition-colors drop-shadow-lg
                                        tracking-wide font-cp-regular opacity-0 imghvr-shutter-in-out-diag-1 z-10"
              >
                <p className="z-30">AGENDA UNA CITA</p>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="col-span-1 md:col-span-7 lg:col-span-5 row-span-3 md:row-span-2 relative group bg-[#334946] rounded-md min-h-[36rem] md:min-h-[20rem] lg:min-h-[2rem]"
          data-aos="fade-right"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 h-full ">
            <div className="flex h-full justify-center flex-col px-12 py-6 md:py-0">
              <h3 className="font-cp-regular font-[600] tracking-wide mb-4 text-sm md:text-md md:text-lg ">
                EL SPOT
              </h3>
              <p className="font-futura-medium font-[100] mb-4 text-sm md:text-md">
                Más que una barbería, ven a conocer este rincón en la ciudad
                donde podés relajarte, charlar y renovarte. Cada detalle está
                pensado para vos.{" "}
              </p>
              <p className="font-futura-bold font-[600] mb-4 text-lg">
                Visítanos en San Rafael, Escazú.{" "}
              </p>
              <div className="rounded-[10px] h-[100px] w-full border=[#ECDA98] border-2 mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d581.902987919208!2d-84.13350077619765!3d9.930025504573948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fd4cbb0e822f%3A0x97e3cb7331cb2119!2sAbraham%20Studio!5e0!3m2!1ses!2scr!4v1737471937083!5m2!1ses!2scr"
                  className="w-full h-full"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="w-full h-[18rem] md:h-full bg-cover bg-center bg-[url('/assets/BgCard2.avif')]" />
          </div>
        </div>

        <div
          className="col-span-1 md:col-span-7 lg:col-span-2 row-span-3 md:row-span-3 relative group bg-[#72140A]/85 rounded-md min-h-[30rem] lg:min-h-0"
          data-aos="fade-left"
        >
          <div className="grid grid-cols-1 grid-rows-3 h-full ">
            <div className="row-span-1 flex h-full justify-center flex-col px-6 py-6 md:py-0">
              <h3 className="font-cp-regular font-[600] tracking-wide mb-4 text-md md:text-lg ">
                EN LOS MEDIOS
              </h3>
              <p className="font-futura-medium font-[100] mb-4 md:text-md text-xs">
                La pasión por la barbería me llevó a lugares increíbles. Acá
                podés ver algunas de las apariciones más destacadas.
              </p>
            </div>
            <div className="w-full h-full row-span-2">
              <div className="grid grid-col-1 grid-rows-3 h-full w-[90%] mx-auto">
                <div
                  className="grid grid-cols-2 h-full w-full bg-[#010C00] rounded-md max-h-[6rem] cursor-pointer"
                  onClick={() =>
                    openModalWithUrl(
                      "https://geo.dailymotion.com/player.html?video=x907jng"
                    )
                  }
                >
                  <div className="h-full w-full bg-cover bg-center bg-[url('/assets/medios1.avif')] " />
                  <div className="flex h-full justify-center flex-col px-2">
                    <h3 className="font-futura-medium font-[600] tracking-wide mb-2 text-[#707070] text-xs">
                      Buen Dia
                    </h3>
                    <p className="font-cp-regular font-[600] text-xs">
                      Ideas de regalos para papá: cera y gel para el cabello
                    </p>
                  </div>
                </div>

                <div
                  className="grid grid-cols-2 h-full w-full bg-[#010C00] rounded-md max-h-[6rem] cursor-pointer"
                  onClick={() =>
                    openModalWithUrl(
                      "https://geo.dailymotion.com/player.html?video=x80ai4o"
                    )
                  }
                >
                  <div className="h-full w-full bg-cover bg-center bg-[url('/assets/medios2.avif')] " />
                  <div className="flex h-full justify-center flex-col px-2">
                    <h3 className="font-futura-medium font-[600] tracking-wide mb-2 text-[#707070] text-xs">
                      Buen Dia
                    </h3>
                    <p className="font-cp-regular font-[600] text-xs">
                      Le ayudamos a mantener su barba impecable
                    </p>
                  </div>
                </div>

                <div
                  className="grid grid-cols-2 h-full w-full bg-[#010C00] rounded-md max-h-[6rem] cursor-pointer"
                  onClick={() =>
                    openModalWithUrl(
                      "https://www.youtube.com/embed/OFceixDw5nQ?si=6NWL-bFWgwsjoHd4"
                    )
                  }
                >
                  <div className="h-full w-full bg-cover bg-top bg-[url('/assets/medios3.avif')] " />
                  <div className="flex h-full justify-center flex-col px-2">
                    <h3 className="font-futura-medium font-[600] tracking-wide mb-2 text-[#707070] text-xs">
                      Barber Show
                    </h3>
                    <p className="font-cp-regular font-[600] text-xs">
                      Domingo Arguello - Henry precise - Abraham corella. ep 3
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-span-1 md:col-span-7 lg:col-span-5 row-span-2 md:row-span-1 relative group bg-[#334946] rounded-md min-h-[5rem]"
          data-aos="fade-up-right"
        >
          <div className="flex w-full h-full justify-between px-6 items-center">
            <h3 className="uppercase font-cp-regular font-[800] text-[0.6rem] md:text-2xl tracking-widest text-md mb-2 md:max-w-[40%]">
              Conectá conmigo por medio de
            </h3>
            <div className="flex flex-row gap-2 md:gap-10">
              <a
                href="https://www.instagram.com/abraham_corella/#"
                target="_blank"
                className="hover:text-[#D5A153] transition-colors"
              >
                <AiFillInstagram size={60} />
              </a>
              <a
                href="https://www.facebook.com/abraham.corelladuran.5/"
                target="_blank"
                className="hover:text-[#D5A153] transition-colors"
              >
                <FaFacebookSquare size={58} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=50684249981"
                target="_blank"
                className="hover:text-[#D5A153] transition-colors"
              >
                <FaWhatsappSquare size={58} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-[#72140A] rounded-lg w-full max-w-3xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-3 right-0 text-4xl font-bold text-[#D5A153] z-50"
            >
              &times;
            </button>
            <div className="w-full h-0 pb-[56.25%] relative">
              <iframe
                src={iframeSrc}
                title="Contenido del iframe"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
