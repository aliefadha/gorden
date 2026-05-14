import { MessageSquareText, Home } from "lucide-react";

export function CaraKerjaSection() {
  return (
    <section className="flex flex-col md:flex-row max-w-7xl mx-auto w-full gap-8 py-12 lg:py-24 px-6 md:px-8">
      <div className=" mx-auto flex flex-col gap-y-0 lg:gap-y-8 text-left md:text-center w-full">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-[#EB216A] text-lg lg:text-xl">Problem</h2>
          <p className="font-medium text-2xl lg:text-3xl">
            Pesan Gorden dalam
            <br />
            <span className="font-bold">4 Langkah Mudah</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 lg:mt-12 w-full text-left">
          {/* Step 1 */}
          <div className="flex flex-col">
            <div className="bg-[#FDE8EC] text-[#EB216A] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <MessageSquareText className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-base lg:text-xl text-[#2E2E2E] mb-1 lg:mb-3">
              Konsultasi via <br className="hidden lg:inline" />
              WhatsApp
            </h3>
            <p className="text-[#7A7A7A] font-medium text-sm lg:text-base">
              Sampaikan kebutuhan dan konsep ruangan Anda
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col">
            <div className="bg-[#FDE8EC] text-[#EB216A] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-base lg:text-xl text-[#2E2E2E] mb-1 lg:mb-3">
              Survey & pengukuran <br className="hidden lg:inline" />
              ke rumah
            </h3>
            <p className="text-[#7A7A7A] font-medium text-sm lg:text-base">
              Tim kami datang untuk pengukuran yang akurat
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col">
            <div className="bg-[#FDE8EC] text-[#EB216A] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <g clip-path="url(#clip0_64_46)">
                  <path
                    d="M1.38989 4.01553H5.09648M1.38989 11.4287H5.09648M7.87643 3.24332H10.0386M7.87643 6.02326H10.0386M7.87643 8.80321H10.0386M7.87643 11.5831H10.0386M3.24319 14.3631C2.75166 14.3631 2.28027 14.1678 1.93271 13.8203C1.58515 13.4727 1.38989 13.0013 1.38989 12.5098V4.03406C1.39068 3.74653 1.45836 3.46312 1.58758 3.20626L2.82311 0.735196C2.86169 0.6585 2.92082 0.594033 2.99391 0.548987C3.06699 0.503941 3.15116 0.480087 3.23701 0.480087C3.32286 0.480087 3.40703 0.503941 3.48011 0.548987C3.5532 0.594033 3.61233 0.6585 3.65091 0.735196L4.88644 3.20626C5.01566 3.46312 5.08334 3.74653 5.08413 4.03406V12.5098C5.08414 12.9992 4.89058 13.4687 4.54569 13.8159C4.20079 14.1631 3.73257 14.3598 3.24319 14.3631ZM8.80307 0.463379H12.5097C12.5097 0.463379 13.4363 0.463379 13.4363 1.39003V13.4364C13.4363 13.4364 13.4363 14.3631 12.5097 14.3631H8.80307C8.80307 14.3631 7.87643 14.3631 7.87643 13.4364V1.39003C7.87643 1.39003 7.87643 0.463379 8.80307 0.463379Z"
                    stroke="#EB216A"
                    stroke-width="1.08109"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_64_46">
                    <rect width="14.8264" height="14.8264" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="font-semibold text-base lg:text-xl text-[#2E2E2E] mb-1 lg:mb-3">
              Tentukan Model <br className="hidden lg:inline" />
              dan bahan
            </h3>
            <p className="text-[#7A7A7A] font-medium text-sm lg:text-base">
              Pilih bahan dan model yang sesuai selera
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col">
            <div className="bg-[#FDE8EC] text-[#EB216A] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M4.52026 10.1707H7.91046V11.3007H4.52026V10.1707ZM4.52026 12.4308H10.1706V13.5609H4.52026V12.4308Z"
                  fill="#EB216A"
                />
                <path
                  d="M14.691 2.26025H3.39032C3.09075 2.2607 2.80357 2.37991 2.59174 2.59174C2.37991 2.80357 2.2607 3.09075 2.26025 3.39032V14.691C2.2607 14.9906 2.37991 15.2777 2.59174 15.4896C2.80357 15.7014 3.09075 15.8206 3.39032 15.821H14.691C14.9906 15.8206 15.2777 15.7014 15.4896 15.4896C15.7014 15.2777 15.8206 14.9906 15.821 14.691V3.39032C15.8206 3.09075 15.7014 2.80357 15.4896 2.59174C15.2777 2.37991 14.9906 2.2607 14.691 2.26025ZM10.1707 3.39032V5.65045H7.91058V3.39032H10.1707ZM3.39032 14.691V3.39032H6.78052V6.78052H11.3008V3.39032H14.691L14.6915 14.691H3.39032Z"
                  fill="#EB216A"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-base lg:text-xl text-[#2E2E2E] mb-1 lg:mb-3">
              Produksi &<br className="hidden lg:inline" /> pemasangan
            </h3>
            <p className="text-[#7A7A7A] font-medium text-sm lg:text-base">
              Gorden di produksi homemade dan dipasang dengan rapi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
