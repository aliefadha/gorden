import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import problem2Img from "@/assets/brosur/problem2.webp";
import problem1Img from "@/assets/brosur/problem1.webp";
import earthImg from "@/assets/brosur/earth.png";
import rulerImg from "@/assets/brosur/ruler.png";
import eyeImg from "@/assets/brosur/eye.png";
import homeImg from "@/assets/brosur/home.png";

export function ProblemSection() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="flex flex-col md:flex-row max-w-7xl mx-auto w-full gap-8 py-12 lg:py-24 px-6 md:px-8 items-center">
      <div className="flex-1 w-full min-h-[300px] lg:min-h-[450px] relative rounded-2xl overflow-hidden h-[300px] lg:h-[450px] shadow-2xl group">
        {/* Before Image (bottom/right) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={problem2Img}
            className="w-full h-full object-cover"
            alt="Gorden Lama"
          />
        </div>

        {/* After Image (top/left, clipped) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={problem1Img}
            className="w-full h-full object-cover"
            alt="Gorden Baru"
          />
        </div>

        {/* Slider line & handle */}
        <div
          className="absolute top-0 bottom-0 w-px bg-[#EB216A] cursor-ew-resize shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none transition-transform"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-200">
            <MoveHorizontal className="text-[#EB216A] w-5 h-5" />
          </div>
        </div>

        {/* Invisible range input for interaction */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />
      </div>

      <div className="flex-1 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-[#EB216A] text-lg lg:text-xl font-semibold">
            Problem
          </h2>
          <p className="font-medium text-2xl lg:text-4xl leading-snug">
            Masih <span className="font-bold">Bingung Pilih Gorden</span>
            <br /> Yang Cocok Untuk Rumah Anda?
          </p>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-4 items-center">
            <img
              src={earthImg}
              className="w-8 h-8 object-contain"
              alt="Earth"
            />
            <p className="text-base lg:text-lg text-[#2E2E2E] font-medium">
              Takut salah pilih bahan & warna
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <img
              src={rulerImg}
              className="w-8 h-8 object-contain"
              alt="Ruler"
            />
            <p className="text-base lg:text-lg text-[#2E2E2E] font-medium">
              Ribet ukur sendiri
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <img
              src={eyeImg}
              className="w-8 h-8 object-contain"
              alt="Eye"
            />
            <p className="text-base lg:text-lg text-[#2E2E2E] font-medium">
              Hasil tidak sesuai ekspektasi
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <img
              src={homeImg}
              className="w-8 h-8 object-contain"
              alt="Home"
            />
            <p className="text-base lg:text-lg text-[#2E2E2E] font-medium">
              Harus keluar rumah cari-cari
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
