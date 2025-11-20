"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CompGallery() {



  const scrollRef = useRef(null);


  const scroll = (direction) => {

    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;




      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const clients = [
    "/cp1.webp",
    "/cp2.webp",


    "/cp5.webp",
    "/cp6.webp",
    "/cp7.webp",
    "/cp8.webp",

  ];

  return (
    <section className="py-10 text-center relative">


      <div className="relative w-[90vw] md:w-[70%] mx-auto">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 cursor-pointer text-white p-3 rounded-full z-10 shadow-md"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Logos */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-hidden overflow-y-hidden no-scrollbar scroll-smooth px-10"
        >
          {clients.map((logo, i) => (
            <div
              key={i}
              className="shrink-0 w-[70vw] md:w-[20vw] h-[50vh] rounded-xl flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer relative shadow-lg"
            >
              <Image
                src={logo}
                alt={`Client ${i}`}
                fill
                className="rounded-xl "

              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full z-10 shadow-md cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}