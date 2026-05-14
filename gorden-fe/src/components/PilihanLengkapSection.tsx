import { useState, useRef } from "react";

export function PilihanLengkapSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      // We assume all cards are the same width and the gap is 24px (gap-6)
      const cardWidth = sliderRef.current.children[0].clientWidth + 24;
      const index = Math.round(scrollLeft / cardWidth);
      if (index !== activeSlide) {
        setActiveSlide(index);
      }
    }
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].clientWidth + 24;
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveSlide(index);
    }
  };
  const pilihanItems = [
    {
      label: "Gorden Box",
      image: "/brosur/gorden-box.webp",
    },
    {
      label: "Gorden Smokring",
      image: "/brosur/gorden-smokring.webp",
    },
    {
      label: "Gorden Kupu-kupu",
      image: "/brosur/gorden-kupu.webp",
    },
    {
      label: "Gorden Poni Layar",
      image: "/brosur/gorden-poni.webp",
    },
  ];

  return (
    <section className="flex flex-col max-w-7xl mx-auto w-full gap-4 py-12 lg:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-4 mb-0 lg:mb-14">
        <p className="text-[#EB216A] text-lg mb-2">Pilihan Lengkap</p>
        <h2 className="text-2xl lg:text-4xl text-[#2E2E2E] font-regular leading-tight max-w-2xl">
          <span className="font-semibold">Tersedia Beragam Pilihan </span>
          <br className="hidden lg:inline" /> Bahan Gorden dan Blind
        </h2>
      </div>

      {/* Slider Container */}
      <div className="max-w-7xl mx-auto w-full relative">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 px-4 md:px-8 hide-scrollbar"
        >
          {pilihanItems.map((item) => (
            <div
              key={item.label}
              className="bg-white p-2  rounded-[2rem] flex flex-col gap-3 md:gap-4 min-w-[240px] w-[240px] lg:min-w-[320px] lg:w-[320px] snap-center flex-shrink-0 mx-auto md:mx-0"
            >
              <div className="bg-[#EB216A] text-white text-center py-2 rounded-xl  font-medium text-xs md:text-base">
                {item.label}
              </div>
              <div className="rounded-xl overflow-hidden bg-gray-100 h-[240px] lg:h-[380px]">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-6">
          {pilihanItems.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "w-8 h-3.5 bg-[#EB216A]"
                  : "w-3.5 h-3.5 bg-[#E5E5E5] hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
      </div>
    </section>
  );
}
