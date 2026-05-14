import {
  ReceiptText,
  Store,
  Wrench,
  Smartphone,
  Award,
  Wind,
  Headset,
} from "lucide-react";

export function KeunggulanSection() {
  return (
    <section className="flex max-w-7xl mx-auto w-full gap-10 py-12 lg:py-24 px-6 md:px-8">
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-[#EB216A] text-lg lg:text-xl">Keunggulan</h2>
          <p className="font-medium text-3xl hidden lg:inline">
            Yuk Kustomisasi{" "}
            <span className="font-bold">
              kebutuhan Gorden
              <br /> dan Blind anda
            </span>{" "}
            dengan Amagriya
          </p>
          <p className="font-medium text-2xl inline lg:hidden">
            Kenapa Pilih <span className="font-bold">Amagriya</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-1 flex-col gap-6 mt-4">
            <div className="flex items-center gap-4">
              <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full border border-[#EB216A] bg-white flex items-center justify-center text-[#EB216A]">
                <ReceiptText className="w-5 h-5" />
              </div>
              <p className="text-sm md:text-base text-[#474747]">
                Harga Transparan Published di website
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full border border-[#EB216A] bg-white flex items-center justify-center text-[#EB216A]">
                <Store className="w-5 h-5" />
              </div>
              <p className="text-sm md:text-base text-[#474747]">
                Toko Online dan Offline ada
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full border border-[#EB216A] bg-white flex items-center justify-center text-[#EB216A]">
                <Wrench className="w-5 h-5" />
              </div>
              <p className="text-sm md:text-base text-[#474747]">
                Pemasangan Profesional dan rapi
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full border border-[#EB216A] bg-white flex items-center justify-center text-[#EB216A]">
                <Smartphone className="w-5 h-5" />
              </div>
              <p className="text-sm md:text-base text-[#474747]">
                Anda hanya pesan dari hp tanpa perlu keluar rumah
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full border border-[#EB216A] bg-white flex items-center justify-center text-[#EB216A]">
                <Award className="w-5 h-5" />
              </div>
              <p className="text-sm md:text-base text-[#474747]">
                Produk original dan bergaransi
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full border border-[#EB216A] bg-white flex items-center justify-center text-[#EB216A]">
                <Wind className="w-5 h-5" />
              </div>
              <p className="text-sm md:text-base text-[#474747]">
                Setiap step gorden melalui proses steam uap
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full border border-[#EB216A] bg-white flex items-center justify-center text-[#EB216A]">
                <Headset className="w-5 h-5" />
              </div>
              <p className="text-sm md:text-base text-[#474747]">
                After sales support
              </p>
            </div>
          </div>
          <div className="flex-1 relative w-full min-h-[240px]">
            {/* Light grey rounded rectangle */}
            <div className="absolute inset-0 bg-[#F9F9F9] rounded-3xl z-0">
              {/* Decorative dots grid */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 grid grid-cols-2 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`dot1-${i}`}
                    className={`w-1.5 h-1.5 rounded-full ${i === 3 ? "bg-[#EB216A]" : "bg-[#FDE8EC]"}`}
                  ></div>
                ))}
              </div>
              <div className="absolute top-16 right-6 grid grid-cols-4 gap-3">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`dot2-${i}`}
                    className={`w-1.5 h-1.5 rounded-full ${i === 6 ? "bg-[#EB216A]" : "bg-[#FDE8EC]"}`}
                  ></div>
                ))}
              </div>
              <div className="absolute top-16 right-4 grid grid-cols-4 gap-3">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`dot2-${i}`}
                    className={`w-1.5 h-1.5 rounded-full ${i === 6 ? "bg-[#EB216A]" : "bg-[#FDE8EC]"}`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="absolute top-0 translate-x-1/2 md:translate-x-1/6 lg:translate-x-1/4 left-0 w-40 h-32 md:w-52 md:h-40 lg:w-72 lg:h-58 rounded-md overflow-hidden shadow-lg transform -rotate-3 z-10">
              <img
                src="/brosur/keunggulan1.webp"
                alt="Gorden Amagriya 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 lg:bottom-4 -translate-x-1/2 md:-translate-x-1/6  lg:-translate-x-1/4 right-4 w-40 h-32 md:w-52 md:h-40 lg:w-72 lg:h-58 rounded-md overflow-hidden shadow-lg transform rotate-2 z-20">
              <img
                src="/brosur/keunggulan2.webp"
                alt="Gorden Amagriya 2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Labels */}
            <div className="absolute bottom-16 left-0 bg-black text-white text-xs lg:text-sm font-medium px-4 lg:px-6 py-2 lg:py-3 rounded-full z-30 shadow-xl transform -translate-x-4">
              Tanpa Minimum Order
            </div>

            <div className="absolute top-24 right-0 bg-black text-white text-xs lg:text-sm font-medium px-4 lg:px-6 py-2 lg:py-3 rounded-full z-30 shadow-xl transform translate-x-4">
              Gratis Survey
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
