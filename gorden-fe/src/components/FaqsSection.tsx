import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

export function FaqsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Berapa Lama Produksi Gorden ?",
      answer:
        "Produksi gorden biasanya memakan waktu 3-7 hari kerja tergantung pada kerumitan dan ketersediaan bahan.",
    },
    {
      question: "Apakah memiliki toko fisik yang bisa di kunjungi ?",
      answer:
        "Ya, kami memiliki toko fisik. Silakan hubungi kami untuk informasi lokasi dan jam operasional.",
    },
    {
      question: "Apakah Bisa Langsung Belanja ke Toko?",
      answer:
        "Tentu saja, Anda bisa datang langsung ke toko kami untuk memilih bahan dan berkonsultasi langsung dengan tim kami.",
    },
    {
      question: "Apakah Bisa Survey dan Pemasangan ke Luar Kota ?",
      answer:
        "Kami melayani survey dan pemasangan untuk area dalam kota dan beberapa area luar kota yang terjangkau. Hubungi admin untuk detail jangkauan area.",
    },
    {
      question: "Apakah Produk yang di Tawarkan Bergaransi?",
      answer:
        "Ya, semua produk gorden dan blinds kami memiliki garansi pemasangan untuk memastikan kepuasan Anda.",
    },
  ];
  return (
    <section className="w-full py-12  max-w-7xl mx-auto gap-8 lg:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-0 lg:gap-24">
        {/* Left Column */}
        <div className="flex-1 flex flex-col">
          <p className="text-[#EB216A] text-base lg:text-lg mb-2">FAQ</p>
          <h2 className="text-2xl lg:text-5xl text-[#2E2E2E] mb-4 lg:mb-6 leading-tight">
            <span className="font-bold">Pertanyaan</span> yang Sering
            <br />
            Diajukan
          </h2>
          <p className="text-[#6B6B6B] text-base lg:text-xl mb-4 lg:mb-16 max-w-md leading-relaxed">
            Setiap pemasangan dikerjakan dengan rapi dan presisi untuk hasil
            yang maksimal
          </p>

          <div className="mt-auto hidden lg:block">
            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6">
              Masih Bingung?
            </h3>
            <a
              href="https://wa.me/6289508965456"
              className="inline-flex items-center gap-2 bg-[#EB216A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#d11d5e] transition-all duration-300 hover:shadow-lg hover:shadow-[#EB216A]/30"
            >
              Konsultasi Gratis Sekarang
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-[1.2]">
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                >
                  <span className="text-[#2E2E2E] font-semibold text-lg md:text-xl pr-8 group-hover:text-[#EB216A] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "bg-gray-300" : "bg-[#EB216A]"}`}
                  >
                    {openFaq === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index
                      ? "max-h-40 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="block lg:hidden mt-10">
          <h3 className="text-xl font-bold text-[#2E2E2E] mb-6">
            Masih Bingung?
          </h3>
          <a
            href="https://wa.me/6289508965456"
            className="text-sm inline-flex items-center gap-2 bg-[#EB216A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d11d5e] transition-all duration-300 hover:shadow-lg hover:shadow-[#EB216A]/30"
          >
            Konsultasi Gratis Sekarang
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
