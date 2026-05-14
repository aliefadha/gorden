import re
import os

page_path = "/Users/aliefadha/Dev/gawe/gorden/gorden-fe/src/pages/BrosurPage.tsx"
components_dir = "/Users/aliefadha/Dev/gawe/gorden/gorden-fe/src/components"

with open(page_path, "r") as f:
    code = f.read()

# Define the sections and their comment markers
# The regex will find the comment, and match up to the end of the section tag
sections_config = [
    ("HeroSection", r"\{\/\* Hero Section \*\/\}\s*(<section.*?<\/section>)"),
    ("ProblemSection", r"\{\/\* Problem Section \*\/\}\s*(<section.*?<\/section>)"),
    ("CaraKerjaSection", r"\{\/\* Cara Kerja section \*\/\}\s*(<section.*?<\/section>)"),
    ("KeunggulanSection", r"\{\/\* Keunggulan section \*\/\}\s*(<section.*?<\/section>)"),
    ("BrandGordenSection", r"\{\/\* Brand Gorden section \*\/\}\s*(<section.*?<\/section>)"),
    ("PilihanLengkapSection", r"\{\/\* Pilihan Lengkap section \*\/\}\s*(<section.*?<\/section>)"),
    ("ModelGordenSection", r"\{\/\* Model Gorden section\*\/\}\s*(<section.*?<\/section>)"),
    ("ModelBlindsSection", r"\{\/\* Model Blinds section \*\/\}\s*(<section.*?<\/section>)"),
    ("GaleriSection", r"\{\/\* Galeri section \*\/\}\s*(<section.*?<\/section>)"),
    ("TestimoniSection", r"\{\/\* Testimoni section \*\/\}\s*(<section.*?<\/section>)"),
    ("FaqsSection", r"\{\/\* Faqs section \*\/\}\s*(<section.*?<\/section>)"),
    ("CtaBannerSection", r"\{\/\* CTA Banner Section \*\/\}\s*(<section.*?<\/section>)"),
    ("StoreLocationSection", r"\{\/\* Store Location Section \*\/\}\s*(<section.*?<\/section>)"),
]

# States to extract
pilihan_state = """  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      // We assume all cards are the same width and the gap is 24px (gap-6)
      const cardWidth = sliderRef.current.children[0].clientWidth + 24;
      const index = Math.round(scrollLeft / cardWidth);
      if (index !== activeSlide) {
        setActiveSlide(index);
      }
    }
  };

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].clientWidth + 24;
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
      setActiveSlide(index);
    }
  };"""

faqs_state = """  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { question: "Berapa Lama Produksi Gorden ?", answer: "Produksi gorden biasanya memakan waktu 3-7 hari kerja tergantung pada kerumitan dan ketersediaan bahan." },
    { question: "Apakah memiliki toko fisik yang bisa di kunjungi ?", answer: "Ya, kami memiliki toko fisik. Silakan hubungi kami untuk informasi lokasi dan jam operasional." },
    { question: "Apakah Bisa Langsung Belanja ke Toko?", answer: "Tentu saja, Anda bisa datang langsung ke toko kami untuk memilih bahan dan berkonsultasi langsung dengan tim kami." },
    { question: "Apakah Bisa Survey dan Pemasangan ke Luar Kota ?", answer: "Kami melayani survey dan pemasangan untuk area dalam kota dan beberapa area luar kota yang terjangkau. Hubungi admin untuk detail jangkauan area." },
    { question: "Apakah Produk yang di Tawarkan Bergaransi?", answer: "Ya, semua produk gorden dan blinds kami memiliki garansi pemasangan untuk memastikan kepuasan Anda." },
  ];"""

lucide_icons = ["ArrowRight", "MessageSquareText", "Home", "PencilRuler", "Package", "ReceiptText", "Store", "Wrench", "Smartphone", "Award", "Wind", "Headset", "Search", "Star", "Plus", "Minus", "MapPin"]

imports_str = []
for comp, regex in sections_config:
    match = re.search(regex, code, re.DOTALL)
    if not match:
        print(f"Failed to find {comp}")
        continue
    content = match.group(1)
    
    # Extract icons used in this component
    used_icons = [icon for icon in lucide_icons if f"<{icon}" in content]
    icon_import = f'import {{ {", ".join(used_icons)} }} from "lucide-react";\n' if used_icons else ""
    
    # Imports
    comp_code = icon_import
    if comp in ["PilihanLengkapSection", "FaqsSection"]:
        comp_code += 'import { useState, useRef } from "react";\n'
        
    comp_code += f"\nexport function {comp}() {{\n"
    if comp == "PilihanLengkapSection":
        comp_code += pilihan_state + "\n"
    elif comp == "FaqsSection":
        comp_code += faqs_state + "\n"
        
    comp_code += f"  return (\n    {content}\n  );\n}}\n"
    
    with open(os.path.join(components_dir, f"{comp}.tsx"), "w") as out:
        out.write(comp_code)
    print(f"Wrote {comp}.tsx")
    imports_str.append(f'import {{ {comp} }} from "../components/{comp}";')
    
    # Replace in main code
    # We replace the whole comment + section with just <Comp />
    code = re.sub(regex, f"<div className=\"w-full\"><{comp} /></div>", code, flags=re.DOTALL)

# Now clean up BrosurPage.tsx
# Remove old states
code = code.replace(pilihan_state, "")
code = code.replace(faqs_state, "")
code = re.sub(r'import \{ useState, useRef \} from "react";\n?', '', code)

# Fix double empty lines
code = re.sub(r'\n\s*\n\s*\n', '\n\n', code)

# Replace the giant lucide import with nothing, we will just use the ones left
code = re.sub(r'import \{ ArrowRight.*?\} from "lucide-react";\n', '', code)

# Combine imports
new_imports = "\n".join(imports_str)
code = new_imports + "\n" + code

with open(page_path, "w") as out:
    out.write(code)

print("Done Refactoring.")
