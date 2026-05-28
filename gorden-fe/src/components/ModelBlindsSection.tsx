import { ArrowRight, Search } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { productsApi } from "../utils/api";
import { getProductImageUrl } from "../utils/imageHelper";

interface Product {
  id: number;
  name: string;
  image: string;
  images: any;
  description: string;
  category: any;
  price: number;
  minPrice: number;
  price_unit: string;
  sku: string;
}

export function ModelBlindsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("random");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [priceFilter, setPriceFilter] = useState<{
    min: number | null;
    max: number | null;
  }>({ min: null, max: null });

  const filteredProducts = products.filter((p) => {
    const price = Number(p.minPrice) || Number(p.price) || 0;
    if (priceFilter.min !== null && price < priceFilter.min) return false;
    if (priceFilter.max !== null && price > priceFilter.max) return false;
    return true;
  });

  const applyFilter = () => {
    const min = minPrice ? Number(minPrice.replace(/\D/g, "")) : null;
    const max = maxPrice ? Number(maxPrice.replace(/\D/g, "")) : null;
    setPriceFilter({ min, max });
  };

  const resetFilter = () => {
    setMinPrice("");
    setMaxPrice("");
    setPriceFilter({ min: null, max: null });
  };

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseLeave = () => {
      isDown = false;
    };
    const onMouseUp = () => {
      isDown = false;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);
    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const fetchProducts = useCallback(async (sortValue: string) => {
    setLoading(true);
    try {
      const params: any = {
        category_id: 3,
        limit: 20,
        page: 1,
      };
      if (sortValue === "random") {
        params.sort = "random";
        params.seed = 49139;
      } else {
        params.sort = sortValue;
      }
      const response = await productsApi.getAll(params);
      setProducts(response.data || []);
    } catch (error) {
      console.error("Error fetching blinds products:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts(sort);
  }, [sort, fetchProducts]);

  return (
    <section className="w-full py-12  max-w-7xl mx-auto gap-8 lg:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-3xl font-semibold text-[#2E2E2E] mb-3">
              Model Blinds
            </h2>
            <p className="text-[#6B6B6B] text-base md:text-lg">
              Beragam model blinds untuk mempercantik tampilan ruangan Anda.
            </p>
          </div>
          <a
            href="/products"
            className="hidden lg:inline-flex items-center gap-2 bg-[#EB216A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d11d5e] transition-colors"
          >
            Lihat koleksi
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row w-full  gap-3 md:gap-4 mb-10">
          <div className="flex items-center gap-2 mr-2 w-full md:w-auto">
            <div className="w-8 h-8 rounded-full bg-[#EB216A] flex items-center justify-center text-white flex-shrink-0">
              <Search className="w-4 h-4" />
            </div>
            <span className="font-semibold text-[#2E2E2E] text-sm">
              Filter Produk:
            </span>
          </div>

          <select
            value={
              sort === "price-low"
                ? "price-low"
                : sort === "price-high"
                  ? "price-high"
                  : "random"
            }
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-200 rounded-full px-4 py-2 text-sm text-[#2E2E2E] bg-white outline-none focus:border-[#EB216A] w-full md:w-auto"
          >
            <option value="random">Acak</option>
            <option value="price-low">Harga Terendah</option>
            <option value="price-high">Harga Tertinggi</option>
          </select>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 ml-0 lg:ml-4 w-full lg:w-auto">
            <span className="font-semibold text-[#2E2E2E] text-sm">Harga:</span>
            <div className="flex gap-2 lg:gap-4 items-center w-full">
              <input
                type="text"
                placeholder="Min (Rp)"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border border-gray-200 rounded-full px-4 py-2 text-sm w-full lg:w-32 bg-white outline-none focus:border-[#EB216A]"
              />
              <span className="text-gray-400">-</span>
              <input
                type="text"
                placeholder="Max (Rp)"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border border-gray-200 rounded-full px-4 py-2 text-sm w-full lg:w-32 bg-white outline-none focus:border-[#EB216A]"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-2 sm:mt-0 w-full md:w-auto">
            <button
              onClick={applyFilter}
              className="bg-[#EB216A] text-white w-full lg:whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium hover:bg-[#d11d5e] transition-colors"
            >
              Terapkan Filter
            </button>

            <button
              onClick={resetFilter}
              className="bg-white border border-gray-200 text-[#2E2E2E] w-full px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Cards Slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar cursor-grab active:cursor-grabbing"
        >
          {loading
            ? [1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-white p-3 md:p-4 rounded-3xl flex flex-col gap-4 min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] flex-shrink-0 shadow-sm border border-gray-50 animate-pulse"
                >
                  <div className="bg-gray-200 h-8 rounded-xl" />
                  <div className="rounded-xl aspect-square bg-gray-200" />
                  <div className="space-y-2 px-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                  </div>
                </div>
              ))
            : filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#F5F5F5] p-3 md:p-4 rounded-3xl flex flex-col gap-4 min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] flex-shrink-0 border border-gray-50"
                >
                  <div className="bg-[#EB216A] text-white text-center py-2.5 rounded-xl font-medium text-sm md:text-base">
                    {product.name}
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-square bg-gray-100">
                    <img
                      src={getProductImageUrl(product.images || product.image)}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed px-1">
                    {product.description ||
                      product.category?.name ||
                      "Blinds berkualitas tinggi untuk mempercantik rumah Anda."}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
