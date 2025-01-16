import React from 'react';
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="relative text-white w-full">
                {/* Background image overlay */}
                <div
                    className="absolute inset-0 w-full
                 bg-cover bg-center bg-[url('/assets/FooterBG.avif')]"
                />

                {/* Content container */}
                <div className="relative container mx-auto px-4 md:px-8 py-8">
                    {/* Top section with contact info and navigation */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {/* Left: Contact Information */}
                        <div className="space-y-2 text-sm lg:pl-14 mx-auto">
                            <p className="items-center gap-2 text-center lg:text-start font-futura-medium">
                                Costa Rica, San José, Escazú, San Rafael (Waze)
                            </p>
                            <p className="items-center gap-2 text-center lg:text-start font-futura-medium">
                                (506) 8424-9981
                            </p>
                            <p className="items-center gap-2 text-center lg:text-start font-futura-medium">
                                Lunes - Viernes, 08am - 09pm
                            </p>
                            <p className="items-center gap-2 text-center lg:text-start font-futura-medium">
                                Sábado, 10am - 04pm
                            </p>
                        </div>

                        {/* Center: Logo */}
                        <div className="flex flex-col items-center justify-center overflow-hidden md:overflow-visible">
                            <img
                                src="/assets/LogoLoading.svg"
                                alt="Abraham Studio"
                                className="h-36"
                            />
                            <div className="border-b-[0.5px] border-white/60 pb-6 px-[30%]">
                                <nav className="flex gap-3 md:gap-8 text-xs">
                                    <a
                                        href="/inicio"
                                        className="hover:text-[#D5A153] transition-colors font-futura-medium"
                                    >
                                        Inicio
                                    </a>
                                    <a
                                        href="/abraham"
                                        className="hover:text-[#D5A153] transition-colors font-futura-medium"
                                    >
                                        Abraham
                                    </a>
                                    <a
                                        href="/servicios"
                                        className="hover:text-[#D5A153] transition-colors font-futura-medium"
                                    >
                                        Servicios
                                    </a>
                                    <a
                                        href="/comunidad"
                                        className="hover:text-[#D5A153] transition-colors font-futura-medium"
                                    >
                                        Comunidad
                                    </a>
                                    <a
                                        href="/agenda"
                                        className="hover:text-[#D5A153] transition-colors font-futura-medium"
                                    >
                                        Agenda
                                    </a>
                                </nav>
                            </div>
                            <div className="flex justify-center gap-10 mt-8">
                                <a
                                    href="#"
                                    className="hover:text-[#D5A153] transition-colors"
                                >
                                    <AiFillInstagram size={22} />
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-[#D5A153] transition-colors"
                                >
                                    <FaFacebookSquare size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-[#D5A153] transition-colors"
                                >
                                    <FaWhatsappSquare size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Right: Navigation */}
                        <div className="flex flex-col md:flex-row items-center justify-center lg:pr-24">
                            <button className="bg-[#1E3F3F] hover:bg-[#2A5757] px-4 py-2 rounded flex items-center gap-2 transition-colors">
                                <FaWhatsapp size={18} />
                                Habla conmigo
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Div debajo del footer */}
            <div className="w-full h-5 bg-[#2A5757]">
                <a
                    href="https://aurigital.com"
                    target="_blank"
                    className="flex justify-center mx-auto w-full"
                >
                    <p className="text-white uppercase text-[8px] text-center p-1 hover:text-[#28C0F5] ">
                        Design and Development by :
                    </p>
                    <img
                        src="/assets/isotipo.avif"
                        alt="Design and Development by aurigital"
                        className="h-[20px] w-[20px]"
                    />
                </a>
            </div>
        </>
    );
};

export default Footer;
