import { HeroSection } from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import { CaraKerjaSection } from "../components/CaraKerjaSection";
import { KeunggulanSection } from "../components/KeunggulanSection";
import { BrandGordenSection } from "../components/BrandGordenSection";
import { PilihanLengkapSection } from "../components/PilihanLengkapSection";
import { ModelGordenSection } from "../components/ModelGordenSection";
import { ModelBlindsSection } from "../components/ModelBlindsSection";
import { GaleriSection } from "../components/GaleriSection";
import { TestimoniSection } from "../components/TestimoniSection";
import { FaqsSection } from "../components/FaqsSection";
import { CtaBannerSection } from "../components/CtaBannerSection";
import { StoreLocationSection } from "../components/StoreLocationSection";
import { Footer } from "../components/Footer";
import { KontakSection } from "../components/KontakSection";

export default function BrosurPage() {
  const params = new URLSearchParams(window.location.search);
  const kategori = params.get("kategori");

  const showGorden = kategori !== "blinds";
  const showBlinds = kategori !== "gorden";

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <HeroSection />

      <ProblemSection />

      <CaraKerjaSection />

      <KeunggulanSection />

      <BrandGordenSection />

      {showGorden && <ModelGordenSection />}

      {showBlinds && <ModelBlindsSection />}

      <PilihanLengkapSection />

      <KontakSection />

      <GaleriSection />

      <TestimoniSection />
      <FaqsSection />
      <CtaBannerSection />

      <StoreLocationSection />
      <Footer />
    </div>
  );
}
