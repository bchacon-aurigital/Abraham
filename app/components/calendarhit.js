"use client";

export default function Calendarhit() {
  return (
    <>
      <div id="Calendarhit" className="bg-[#131313]">
        <div
          className="text-center text-white py-16 md:py-16 px-6"
          data-aos="fade-right"
        >
          <h2 className="text-2xl md:text-3xl font-cp-bold font-[800] tracking-[0.4rem] uppercase">
            Agendá tu visita
          </h2>
          <p className="mt-4 text-sm md:text-md font-futura-medium font-[500] tracking-widest max-w-xl mx-auto">
            Elegí el servicio que querés, el día que te queda mejor y listo. En
            minutos tenés tu lugar reservado en Abraham Studio.
          </p>
        </div>
        <section
          className="relative flex items-center justify-center w-full h-[50rem] bg-black mb-8"
          data-aos="fade-right"
        >
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1/4">
            <img
              src="/assets/BGcalendarhit1.png"
              alt="Left background"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="relative z-10 w-[90%] sm:w-[50%] mx-auto bg-white shadow-lg rounded-2xl"
            data-aos="fade-up"
          >
            <iframe
              src="https://app.simplymeet.me/abrahamstudio/60min?is_widget=1&view=compact&specific-meeting-type=1"
              style={{
                width: "100%",
                height: "auto",
                minHeight: "800px", 
                maxHeight: "90vh",
              }}
              className="w-full rounded-lg"
              frameBorder="1"
              scrolling="yes"
            ></iframe>
          </div>

          <div
            className="hidden md:block absolute right-0 top-0 bottom-0 w-1/4"
            data-aos="fade-left"
          >
            <img
              src="/assets/BGcalendarhit2.png"
              alt="Right background"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>
    </>
  );
}
