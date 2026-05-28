import { Facebook, Instagram } from "lucide-react";

export function KontakSection() {
  return (
    <section className=" flex flex-col items-start md:items-center max-w-7xl mx-auto w-full gap-4 py-12 lg:py-24 px-6 md:px-8">
      <h2 className="text-[#EB216A] text-lg mb-2">Kontak</h2>
      <p className="text-2xl lg:text-4xl text-[#2E2E2E] leading-tight max-w-3xl mb-12 text-left lg:text-center">
        Hubungi kami segera dan{" "}
        <span className="font-bold">
          dapatkan
          <br className="hidden md:block" /> gorden atau blind impian anda
        </span>
      </p>

      <div className="bg-[#F5F5F5] rounded-[2rem] p-8 md:px-16 md:py-10 border border-gray-50 flex flex-col items-start md:items-center w-full max-w-xl">
        <p className="text-[#2E2E2E] font-medium mb-6">
          Ikuti sosial media kami
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/amagriyacom"
            aria-label="Instagram"
            className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#EB216A] text-white flex items-center justify-center hover:bg-[#d11d5e] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="#"
            aria-label="TikTok"
            className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#EB216A] text-white flex items-center justify-center hover:bg-[#d11d5e] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <g clip-path="url(#clip0_285_122)">
                <path
                  d="M11 9.3C9.59002 8.87963 8.08343 8.91422 6.69423 9.39886C5.30504 9.8835 4.10387 10.7936 3.26134 11.9997C2.41881 13.2059 1.97777 14.6469 2.00086 16.1181C2.02395 17.5892 2.51 19.0156 3.38997 20.1948C4.26994 21.374 5.49908 22.2459 6.9028 22.6867C8.30652 23.1275 9.81345 23.1148 11.2095 22.6503C12.6056 22.1859 13.8199 21.2934 14.6798 20.0996C15.5398 18.9058 16.0017 17.4713 16 16V9C17.3333 10.3333 19.3333 11 22 11V6C19.3333 6 17.3333 4.33333 16 1H11V16M11 16C11 15.6044 10.8827 15.2178 10.6629 14.8889C10.4432 14.56 10.1308 14.3036 9.76536 14.1522C9.39991 14.0009 8.99778 13.9613 8.60982 14.0384C8.22185 14.1156 7.86549 14.3061 7.58578 14.5858C7.30608 14.8655 7.1156 15.2219 7.03842 15.6098C6.96125 15.9978 7.00086 16.3999 7.15224 16.7654C7.30361 17.1308 7.55996 17.4432 7.88886 17.6629C8.21775 17.8827 8.60443 18 9 18C9.53043 18 10.0391 17.7893 10.4142 17.4142C10.7893 17.0391 11 16.5304 11 16Z"
                  stroke="#F9F9F9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_285_122">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
