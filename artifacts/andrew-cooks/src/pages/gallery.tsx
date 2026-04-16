import { motion } from "framer-motion";
import { SeoHead } from "@/components/SeoHead";

export default function Gallery() {
  const images = [
    { src: "/images/hero.png", alt: "Fine dining plated dish", className: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/images/gallery-1.png", alt: "Elegant canapes on tray", className: "col-span-1 row-span-1" },
    { src: "/images/gallery-2.png", alt: "Tablescape with candles", className: "col-span-1 row-span-2" },
    { src: "/images/gallery-3.png", alt: "Gourmet dessert dish", className: "col-span-1 row-span-1" },
    { src: "/images/gallery-4.png", alt: "Seared scallops dish", className: "col-span-1 md:col-span-2 row-span-1" },
    { src: "/images/gallery-5.png", alt: "Beef wellington plated", className: "col-span-1 row-span-1" },
    { src: "/images/gallery-6.png", alt: "Fresh seasonal vegetables", className: "col-span-1 row-span-1" },
    { src: "/images/gallery-7.png", alt: "Pouring wine at dinner", className: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/images/gallery-8.png", alt: "Artistic starter dish", className: "col-span-1 row-span-1" }
  ];

  return (
    <>
      <SeoHead 
        title="Culinary Gallery | Andrew Taylor Private Chef" 
        description="Browse beautiful food photography of Andrew Taylor's private chef dishes, fine dining plates, canapes, and bespoke event catering."
        canonicalUrl="/gallery"
      />

      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">Visuals</span>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">The Gallery</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              A glimpse into the dishes, ingredients, and settings that make up the Andrew Taylor experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative group overflow-hidden bg-muted ${img.className}`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
