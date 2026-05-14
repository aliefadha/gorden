import { MapPin } from "lucide-react";

export function StoreLocationSection() {
  return (
    <section className="w-full py-12  max-w-7xl mx-auto gap-8 lg:py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-xl lg:text-4xl text-[#2E2E2E] mb-4">
          <span className="font-bold">Kunjungi Store</span> Kami
        </h2>
        <p className="text-[#6B6B6B] text-base md:text-xl mb-4 lg:mb-12 max-w-2xl">
          Datang langsung ke toko kami untuk melihat sampel kain dan konsultasi
          tatap muka dengan tim ahli kami.
        </p>

        <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4098.88317816242!2d100.62772027960528!3d-0.22546833477698885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2ab52d9fb415d5%3A0xaff7d36ac12ab87c!2sToko%20Gorden%20Payakumbuh%20%7C%20Amagriya%20Gorden%20%26%20Blind!5e1!3m2!1sen!2sus!4v1778741366357!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="w-full px-4 flex justify-center mt-12">
          <a
            href="https://www.google.com/maps/place/Toko+Gorden+Payakumbuh+%7C+Amagriya+Gorden+%26+Blind/@-0.2254683,100.6277203,17z"
            className="inline-flex items-center gap-2 bg-[#EB216A] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium hover:bg-[#d11d5e] transition-all duration-300 shadow-xl hover:shadow-[#EB216A]/40 hover:-translate-y-1 whitespace-nowrap"
          >
            <MapPin className="w-5 h-5" />
            Buka di Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
