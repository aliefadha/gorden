import kaselImg from "@/assets/brosur/kasel.webp";
import tosoImg from "@/assets/brosur/toso.webp";
import noveImg from "@/assets/brosur/nove.webp";
import sharpPointImg from "@/assets/brosur/sharp-point.webp";
import shinichiImg from "@/assets/brosur/shinichi.webp";

const brandImages: Record<string, string> = {
  kasel: kaselImg,
  toso: tosoImg,
  nove: noveImg,
  "sharp-point": sharpPointImg,
  shinichi: shinichiImg,
};

export function BrandGordenSection() {
  return (
    <section className="flex flex-col max-w-7xl mx-auto w-full gap-8 py-12 lg:py-24 px-6 md:px-8">
      <div className="flex flex-col gap-y-2 text-center">
        <h2 className="text-[#EB216A] text-lg lg:text-xl">Brand Gorden</h2>
        <p className="font-medium text-xl lg:text-2xl">
          Kami distributor resmi merk brand ternama{" "}
          <span className="font-bold">produk Blinds</span>
          <br className="hidden md:block" />
          <span className="font-bold">harga langsung dari pabrik</span> dan
          diskon mulai dari 20%
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full flex overflow-hidden group">
        <style>{`
            @keyframes infinite-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-infinite-scroll {
              animation: infinite-scroll 25s linear infinite;
            }
            .group:hover .animate-infinite-scroll {
              animation-play-state: paused;
            }
          `}</style>

        <div className="flex w-max animate-infinite-scroll">
          {["", ""].map((_, setIdx) => (
            <div
              key={setIdx}
              className="flex shrink-0 items-center gap-4 px-4 justify-around"
            >
              {["kasel", "toso", "nove", "sharp-point", "shinichi"].map(
                (brand) => (
                  <img
                    key={`brand${setIdx}-${brand}`}
                    src={brandImages[brand]}
                    alt={brand}
                    className="w-32 h-20 md:w-40 md:h-24 object-contain rounded-xl shrink-0"
                  />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
