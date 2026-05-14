import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Pelayanannya cepat, hasilnya rapi banget. Rumah jadi lebih elegan!",
    name: "Ibu Rina, Padang",
    role: "Ibu Rumah Tangga",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "Suka banget sama hasilnya, sesuai ekspektasi. Timnya juga profesional dan datang tepat waktu saat pemasangan.",
    name: "Dewi Lestari",
    role: "Pemilik Usaha",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "Pilihan bahannya banyak dan kualitasnya bagus. Gorden yang dipasang benar-benar bikin ruangan jadi lebih elegan.",
    name: "Andi Saputra",
    role: "Karyawan Swasta",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
];

export function TestimoniSection() {
  return (
    <section className="w-full py-12  max-w-7xl mx-auto gap-8 lg:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-4 lg:mb-12">
          <p className="text-[#EB216A] text-lg mb-2">keunggulan</p>
          <h2 className="text-xl md:text-4xl text-[#2E2E2E]">
            Testimoni dari <span className="font-bold">Pelanggan Kami?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#F9F9F9] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex gap-1.5 mb-6 text-[#FFC107]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-6 h-6 fill-current text-[#FFC107] border-none"
                    />
                  ))}
                </div>
                <p className="text-[#2E2E2E] text-base lg:text-lg leading-relaxed mb-10">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 lg:w-14 h-8 lg:h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#2E2E2E] text-base lg:text-lg">
                    {t.name}
                  </h4>
                  <p className="text-xs lg:text-sm text-[#6B6B6B]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
