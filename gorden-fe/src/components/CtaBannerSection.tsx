import { ArrowRight } from "lucide-react";
import ctaBrosurImg from "@/assets/brosur/cta-brosur.webp";

export function CtaBannerSection() {
  return (
    <section className="relative w-full py-24 md:py-32 flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={ctaBrosurImg}
          alt="Living room with curtains"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Siap Bikin Rumah Anda Lebih Elegan?
        </h2>
        <p className="text-gray-200 text-lg md:text-xl mb-10">
          Konsultasi sekarang GRATIS, tanpa komitmen.
        </p>
        <a
          href="https://wa.me/6289508965456"
          className="inline-flex items-center gap-2 bg-white text-[#2E2E2E] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl"
        >
          Chat WhatsApp Sekarang
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
