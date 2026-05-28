import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "@/assets/brosur/pilihan1.jpg";
import img2 from "@/assets/brosur/pilihan2.jpg";
import img3 from "@/assets/brosur/pilihan3.jpg";
import img4 from "@/assets/brosur/pilihan4.jpg";
import img5 from "@/assets/brosur/pilihan5.jpg";

// Product data based on Figma design
const products = [
  {
    id: "sp100b",
    code: "SP.100 B",
    name: "Blackout Fabric",
    category: "Gorden",
    image: img1,
    swatchColors: [
      "#6A9BBB",
      "#BED1CB",
      "#BAAB96",
      "#664728",
      "#C3C7C6",
      "#050505",
    ],
  },
  {
    id: "sp111",
    code: "SP.111",
    name: "Dim Out",
    category: "Gorden",
    image: img2,
    swatchColors: ["#3E231A", "#879185", "#EBE8D5"],
  },
  {
    id: "spvw8",
    code: "SP.VW8",
    name: "Solar Screen",
    category: "Gorden",
    image: img3,
    swatchColors: ["#705937", "#211009", "#927D52", "#4A391B"],
  },
  {
    id: "lavender",
    code: "LAV.01",
    name: "Art Creation",
    category: "Gorden",
    image: img4,
    swatchColors: ["#A18E70", "#B2AD90", "#8F9591", "#5D635F"],
  },
  {
    id: "bmw",
    code: "BMW.320",
    name: "Extra Wide:320CM",
    category: "Gorden",
    image: img5,
    swatchColors: ["#656567"],
  },
];

const jenisTabs = ["Semua", "Gorden", "Blind"];
const kategoriOptions = ["Semua Kategori", "Polyester"];
const fungsiOptions = ["Semua Fungsi"];

// Product Card
function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <div
      className="bg-white rounded-2xl transition-shadow duration-200 p-3
      flex flex-row gap-4
      lg:flex-col lg:gap-3
    "
    >
      {/* Image with pink border */}
      <div
        className="rounded-xl overflow-hidden flex-shrink-0 w-[150px] lg:h-[200px] lg:w-full lg:h-auto"
        style={{ border: "1px solid #EB216A" }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[150px] lg:h-[200px] object-cover"
        />
      </div>

      {/* Right side: swatches + info */}
      <div className="flex flex-col justify-center gap-2 lg:gap-3 min-w-0">
        {/* Color swatches */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {product.swatchColors.map((color, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full flex-shrink-0"
              style={{ backgroundColor: color, boxShadow: "0 0 0 1px #e0e0e0" }}
            />
          ))}
        </div>

        {/* Card info */}
        <div className="flex flex-col gap-0.5">
          <p className="text-sm lg:text-lg font-bold text-[#2E2E2E]">
            {product.code}
          </p>
          <h3 className="text-sm lg:text-lg font-bold text-[#2E2E2E] leading-tight">
            {product.name}
          </h3>
          <p className="text-sm text-gray-400">{product.category}</p>
        </div>
      </div>
    </div>
  );
}

export function PilihanLengkapSection() {
  const [activeJenis, setActiveJenis] = useState("Semua");
  const [activeKategori, setActiveKategori] = useState("Semua Kategori");
  const [activeFungsi, setActiveFungsi] = useState("Semua Fungsi");

  return (
    <section className="flex flex-col max-w-7xl mx-auto w-full gap-6 py-12 lg:py-24 px-6 md:px-8">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-2 mb-2">
        <p className="text-[#EB216A] text-base font-medium">Pilihan Lengkap</p>
        <h2 className="text-2xl lg:text-4xl text-[#2E2E2E] leading-tight max-w-2xl">
          <span className="font-semibold">Tersedia Beragam Pilihan </span>
          Bahan Gorden dan Blind
        </h2>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between w-full">
        {/* Mobile: full-width Pilih Bahan dropdown — hidden on desktop */}
        <div className="relative lg:hidden">
          <select
            value={activeKategori}
            onChange={(e) => setActiveKategori(e.target.value)}
            className="appearance-none w-full bg-white border border-[#E0E0E0] rounded-full px-5 py-3 pr-10 text-[#2E2E2E] cursor-pointer focus:outline-none focus:border-[#EB216A] transition-colors"
          >
            {kategoriOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            ⌄
          </span>
        </div>

        {/* Mobile: Jenis label + pills stacked — hidden on desktop */}
        <div className="flex flex-col gap-2 lg:hidden">
          <span className="font-semibold text-[#2E2E2E]">Jenis:</span>
          <div className="flex items-center gap-2">
            {jenisTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveJenis(tab)}
                className={`text-sm px-4 py-1.5 rounded-full font-medium border transition-all duration-200 ${
                  activeJenis === tab
                    ? "bg-[#EB216A] text-white border-[#EB216A]"
                    : "bg-white text-gray-500 border-[#E0E0E0]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Pilih Bahan dropdown */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="text-gray-500 whitespace-nowrap">Pilih Bahan:</span>
          <div className="relative">
            <select
              value={activeKategori}
              onChange={(e) => setActiveKategori(e.target.value)}
              className="appearance-none bg-white border border-[#E0E0E0] rounded-full px-4 py-1.5 pr-8 text-[#2E2E2E] cursor-pointer focus:outline-none focus:border-[#EB216A] transition-colors"
            >
              {kategoriOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
              ▾
            </span>
          </div>
        </div>

        {/* Desktop: Jenis pills inline */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="text-gray-500 whitespace-nowrap">Jenis:</span>
          <div className="flex items-center gap-2">
            {jenisTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveJenis(tab)}
                className={`px-4 py-1.5 rounded-full font-medium border transition-all duration-200 ${
                  activeJenis === tab
                    ? "bg-[#EB216A] text-white border-[#EB216A]"
                    : "bg-white text-gray-500 border-[#E0E0E0] hover:border-[#EB216A] hover:text-[#EB216A]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Fungsi dropdown */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="text-gray-500 whitespace-nowrap">Fungsi:</span>
          <div className="relative">
            <select
              value={activeFungsi}
              onChange={(e) => setActiveFungsi(e.target.value)}
              className="appearance-none bg-white border border-[#E0E0E0] rounded-full px-4 py-1.5 pr-8 text-[#2E2E2E] cursor-pointer focus:outline-none focus:border-[#EB216A] transition-colors"
            >
              {fungsiOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
              ▾
            </span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-2">
        <Link
          to="/products"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "#EB216A";
            (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "#EB216A";
          }}
          style={{
            color: "#EB216A",
            backgroundColor: "transparent",
            transition: "all 0.2s",
          }}
          className="flex items-center gap-2 border border-[#EB216A] rounded-full px-8 py-2.5 text-sm font-medium"
        >
          Lihat semua bahan
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
