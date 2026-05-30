import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { galleryApi } from "../utils/api";
import { getImageUrl } from "../utils/imageHelper";

interface GalleryItem {
  id: string;
  title: string;
  image_url: string;
  description: string;
  category: string;
  type: string;
  location: string;
}

export function GaleriSection() {
  const [galleries, setGalleries] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await galleryApi.getAll();
        setGalleries((response.data || []).slice(0, 12));
      } catch (error) {
        console.error("Error fetching galleries:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGalleries();
  }, []);

  return (
    <section className="w-full py-12  max-w-7xl mx-auto gap-8 lg:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4 lg:mb-10">
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-4xl text-[#2E2E2E] mb-3">
              <span className="font-medium lg:font-bold">Galeri</span>{" "}
              Pemasangan
            </h2>
            <p className="text-[#616161] text-base md:text-lg">
              Setiap pemasangan dikerjakan dengan rapi dan presisi untuk hasil
              yang maksimal
            </p>
          </div>
          <a
            href="/gallery"
            className="hidden lg:inline-flex items-center gap-2 bg-[#EB216A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d11d5e] transition-colors"
          >
            Lihat koleksi
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {loading
            ? Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden aspect-square bg-gray-200 animate-pulse"
                />
              ))
            : galleries.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl overflow-hidden aspect-square bg-gray-200"
                >
                  <img
                    src={getImageUrl(item.image_url)}
                    alt={item.title || `Galeri ${item.id}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
