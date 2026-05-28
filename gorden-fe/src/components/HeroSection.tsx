import { ArrowRight } from "lucide-react";
import arrowUpImg from "@/assets/brosur/arrow-up.png";
import heroSectionImg from "@/assets/brosur/hero-section.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[800px]">
      {/* Left Content - overlaps onto the image grid */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-10 pt-8 lg:pt-8">
        <div className="relative z-10 lg:max-w-7xl mx-auto flex flex-col items-center lg:items-start">
          {/* Badge */}
          <div className="inline-flex items-center bg-[#EB216A] px-4 py-1.5  rounded-full mb-6 w-fit">
            <span className="text-white text-sm font-medium hidden md:inline">
              Toko Gorden dan Blinds Termurah dan Terlengkap di Sumbar
            </span>
            <span className="text-white text-sm font-medium inline md:hidden">
              Termurah dan Terlengkap di Sumbar
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-6 max-w-3xl text-center lg:text-left">
            Pesan Gorden / Blind Custom Tanpa Ribet,{" "}
            <span className="text-[#EB216A]">
              Bikin Rumah Lebih Nyaman & Elegan Setiap Hari
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-[#474747] text-sm lg:text-base leading-relaxed mb-8 max-w-xs lg:max-w-lg text-center lg:text-left">
            Pesan gorden tanpa keluar rumah. Konsultasi gratis, ribuan pilihan
            kain, dan pemasangan profesional langsung ke rumah Anda.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#EB216A] hover:bg-[#d11d5e] text-white px-6 py-3 rounded-full text-xs lg:text-sm hover:shadow-xl hover:shadow-[#EB216A]/30 transition-all duration-300 hover:scale-105"
            >
              Konsultasi Gratis
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/products"
              className="hidden lg:inline-flex items-center gap-2 bg-gray-200 border border-gray-200 text-[#2E2E2E] px-6 py-3 rounded-full text-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
            >
              Lihat Koleksi
            </a>
            <a
              href="/products"
              className="inline-flex lg:hidden items-center gap-2 border border-[#EB216A] text-[#2E2E2E] px-6 py-3 rounded-full text-xs hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
            >
              Lihat Koleksi
            </a>
          </div>

          {/* Handwritten CTA */}
          <div className="flex items-start gap-3 mb-10 px-10">
            <img
              src={arrowUpImg}
              className="w-10 h-10 text-[#EB216A] flex-shrink-0 "
            />
            <p
              className="text-[#EB216A] text-lg"
              style={{ fontFamily: "'Reenie Beanie', cursive" }}
            >
              Wujudkan Gorden
              <br />
              Impianmu sekarang!
            </p>
          </div>

          {/* Feature Tags */}
          <div className="hidden lg:flex flex-col gap-2 max-w-xl">
            {[
              ["Gratis Survey", "Gratis Pemasangan", "Gratis Biaya Jahit"],
              [
                "Ribuan Pilihan Bahan Kain",
                "Aksesoris Gorden Lengkap",
                "Tanpa Minimum order",
              ],
            ].map((row, i) => (
              <div key={i} className="flex flex-wrap gap-2">
                {row.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center bg-white border border-[#EB216A3D] px-4 py-2 rounded-full text-xs font-medium hover:border-[#EB216A]/30 hover:text-[#EB216A] transition-colors duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <img src={heroSectionImg} alt="hero" className="bg-white" />
      </div>
      <div className="py-24 px-4 md:px-8 lg:px-0 max-w-xs md:max-w-7xl mx-auto">
        <h2 className="text-xl text-left lg:text-center ">
          Dipercaya oleh <strong>ratusan pelanggan di Sumatera Barat</strong>
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-16 mt-10 w-full max-w-3xl mx-auto">
          <div className="flex gap-4 items-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20C24.6023 20 28.3333 16.2691 28.3333 11.6667C28.3333 7.06433 24.6023 3.33337 20 3.33337C15.3976 3.33337 11.6666 7.06433 11.6666 11.6667C11.6666 16.2691 15.3976 20 20 20Z"
                fill="#EB216A"
              />
              <path
                opacity="0.4"
                d="M20 24.1666C11.65 24.1666 4.84998 29.7666 4.84998 36.6666C4.84998 37.1333 5.21664 37.5 5.68331 37.5H34.3167C34.7834 37.5 35.1501 37.1333 35.1501 36.6666C35.1501 29.7666 28.35 24.1666 20 24.1666Z"
                fill="#EB216A"
              />
              <path
                d="M37.95 34.4666L36.6833 33.1999C37.35 32.1999 37.7334 31 37.7334 29.7167C37.7334 26.2 34.8833 23.35 31.3667 23.35C27.85 23.35 25 26.2 25 29.7167C25 33.2333 27.85 36.0833 31.3667 36.0833C32.65 36.0833 33.85 35.7 34.85 35.0333L36.1166 36.3C36.3666 36.55 36.7 36.6833 37.0333 36.6833C37.3666 36.6833 37.7 36.55 37.95 36.3C38.4667 35.7833 38.4667 34.9666 37.95 34.4666Z"
                fill="#EB216A"
              />
            </svg>
            <div className="flex flex-col text-left gap-0">
              <h1 className="font-semibold text-2xl">1000+</h1>
              <h2 className="text-base text-[#474747]">Pelanggan Puas</h2>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.0999 19.7L34.8333 19.3333C34.3666 18.7667 33.8166 18.3167 33.1833 17.9833C32.3333 17.5 31.3666 17.25 30.3666 17.25H9.61659C8.61659 17.25 7.66659 17.5 6.79992 17.9833C6.14992 18.3333 5.56659 18.8167 5.08326 19.4167C4.13326 20.6333 3.68326 22.1333 3.83326 23.6333L4.44992 31.4167C4.66659 33.7667 4.94992 36.6667 10.2333 36.6667H29.7666C35.0499 36.6667 35.3166 33.7667 35.5499 31.4L36.1666 23.65C36.3166 22.25 35.9499 20.85 35.0999 19.7ZM23.9833 28.9H15.9999C15.3499 28.9 14.8333 28.3667 14.8333 27.7333C14.8333 27.1 15.3499 26.5667 15.9999 26.5667H23.9833C24.6333 26.5667 25.1499 27.1 25.1499 27.7333C25.1499 28.3833 24.6333 28.9 23.9833 28.9Z"
                fill="#EB216A"
              />
              <path
                opacity="0.4"
                d="M5.6333 18.85C5.99997 18.5167 6.36663 18.2167 6.79997 17.9834C7.64997 17.5 8.61663 17.25 9.61663 17.25H30.3833C31.3833 17.25 32.3333 17.5 33.2 17.9834C33.6333 18.2167 34.0166 18.5167 34.3666 18.8667V17.9834V16.3667C34.3666 10.4167 32.55 8.60004 26.6 8.60004H22.6333C21.9 8.60004 21.8833 8.58337 21.45 8.01671L19.45 5.33337C18.5 4.10004 17.75 3.33337 15.3666 3.33337H13.4C7.44997 3.33337 5.6333 5.15004 5.6333 11.1V18V18.85Z"
                fill="#EB216A"
              />
            </svg>

            <div className="flex flex-col text-left gap-0">
              <h1 className="font-semibold text-2xl">10+</h1>
              <h2 className="text-base text-[#474747]">Tahun Pengalaman</h2>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M34.0167 11.6V16.3334L12.3334 32.2334L7.95007 28.95C6.86673 28.1334 5.9834 26.3834 5.9834 25.0334V11.6C5.9834 9.73336 7.41673 7.66669 9.16673 7.01669L18.2834 3.60002C19.2334 3.25002 20.7667 3.25002 21.7167 3.60002L30.8334 7.01669C32.5834 7.66669 34.0167 9.73336 34.0167 11.6Z"
                fill="#EB216A"
              />
              <path
                d="M34.0167 18.6167V25.0334C34.0167 26.3834 33.1334 28.1334 32.05 28.95L22.9334 35.7667C22.1334 36.3667 21.0667 36.6667 20 36.6667C18.9334 36.6667 17.8667 36.3667 17.0667 35.7667L13.8667 33.3834L34.0167 18.6167Z"
                fill="#EB216A"
              />
            </svg>

            <div className="flex flex-col text-left gap-0">
              <h1 className="font-semibold text-2xl">100%</h1>
              <h2 className="text-base text-[#474747]">Garansi Pemasangan</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#EB216A] py-4">
        <div className="flex mx-auto justify-center gap-0">
          <div className="flex items-center gap-1.5 text-white px-5  border-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9204 7.05032 21.765 6.22945 21.48 5.45C21.2269 4.78255 20.831 4.17846 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78198 2.77725 4.17736 3.17008 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17736 20.8299 4.78198 21.2227 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.765 17.7705 21.9204 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1329 16.6348 20.0179 17.2638 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7254 19.3403 18.3331 19.5961 17.9 19.76C17.3038 19.9779 16.6748 20.0929 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38085 20.1129 6.72445 20.0114 6.1 19.8C5.68619 19.6273 5.3119 19.3721 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01505 17.2954 3.8796 16.652 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86365 7.35098 3.98214 6.70772 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30292 4.65519 5.67863 4.38195 6.1 4.2C6.7094 3.97948 7.35194 3.8645 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86709 17.2638 3.98206 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3767 5.30802 19.6326 5.68334 19.8 6.1C20.0224 6.70888 20.1375 7.35176 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z"
                fill="#F9F9F9"
              />
            </svg>

            <a
              href="https://instagram.com/amagriya_gorden"
              className="hidden lg:inline"
            >
              @amagriya_gorden
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-white px-5 border-l border-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.04 2.00005C6.58005 2.00005 2.13005 6.45005 2.13005 11.9101C2.13005 13.6601 2.59005 15.3601 3.45005 16.8601L2.05005 22.0001L7.30005 20.6201C8.75005 21.4101 10.38 21.8301 12.04 21.8301C17.5 21.8301 21.9501 17.3801 21.9501 11.9201C21.9501 9.27005 20.92 6.78005 19.05 4.91005C18.1331 3.98416 17.0411 3.25002 15.8376 2.75042C14.634 2.25081 13.3431 1.99574 12.04 2.00005ZM12.05 3.67005C14.25 3.67005 16.31 4.53005 17.87 6.09005C18.6354 6.85557 19.2423 7.76457 19.6558 8.76497C20.0694 9.76538 20.2815 10.8375 20.2801 11.9201C20.2801 16.4601 16.58 20.1501 12.04 20.1501C10.56 20.1501 9.11005 19.7601 7.85005 19.0001L7.55005 18.8301L4.43005 19.6501L5.26005 16.6101L5.06005 16.2901C4.2346 14.9785 3.79772 13.4598 3.80005 11.9101C3.81005 7.37005 7.50005 3.67005 12.05 3.67005ZM8.53005 7.33005C8.37005 7.33005 8.10005 7.39005 7.87005 7.64005C7.65005 7.89005 7.00005 8.50005 7.00005 9.71005C7.00005 10.9301 7.89005 12.1001 8.00005 12.2701C8.14005 12.4401 9.76005 14.9401 12.25 16.0001C12.84 16.2701 13.3 16.4201 13.66 16.5301C14.25 16.7201 14.79 16.6901 15.22 16.6301C15.7 16.5601 16.68 16.0301 16.89 15.4501C17.1 14.8701 17.1 14.3801 17.04 14.2701C16.97 14.1701 16.81 14.1101 16.56 14.0001C16.31 13.8601 15.09 13.2601 14.87 13.1801C14.64 13.1001 14.5 13.0601 14.31 13.3001C14.15 13.5501 13.67 14.1101 13.53 14.2701C13.38 14.4401 13.24 14.4601 13 14.3401C12.74 14.2101 11.94 13.9501 11 13.1101C10.26 12.4501 9.77005 11.6401 9.62005 11.3901C9.50005 11.1501 9.61005 11.0001 9.73005 10.8901C9.84005 10.7801 10 10.6001 10.1 10.4501C10.23 10.3101 10.27 10.2001 10.35 10.0401C10.43 9.87005 10.39 9.73005 10.33 9.61005C10.27 9.50005 9.77005 8.26005 9.56005 7.77005C9.36005 7.29005 9.16005 7.35005 9.00005 7.34005C8.86005 7.34005 8.70005 7.33005 8.53005 7.33005Z"
                fill="#F9F9F9"
              />
            </svg>

            <a href="https://wa.me/6289508965456" className="hidden lg:inline">
              0895 0896 5456
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-white px-5 border-l border-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 10C20 16.5 12 22 12 22C12 22 4 16.5 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                stroke="#F9F9F9"
                stroke-width="2"
              />
              <path
                d="M15 10C15 10.7956 14.6839 11.5587 14.1213 12.1213C13.5587 12.6839 12.7956 13 12 13C11.2044 13 10.4413 12.6839 9.87868 12.1213C9.31607 11.5587 9 10.7956 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7C12.7956 7 13.5587 7.31607 14.1213 7.87868C14.6839 8.44129 15 9.20435 15 10Z"
                stroke="#F9F9F9"
                stroke-width="2"
              />
            </svg>

            <a href="#" className="hidden lg:inline">
              Kota Payakumbuh
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
