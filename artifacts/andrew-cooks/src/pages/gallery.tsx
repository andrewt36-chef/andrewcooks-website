import { motion } from "framer-motion";
import { SeoHead } from "@/components/SeoHead";
import {
  heroImg,
  macaron,
  sweetShop,
  steamingSoup,
  canapes,
  microgreens,
  breadDough,
  truffles,
  truffleEggs,
  beefWellington,
  braisedBeef,
  souffle,
  heirloomTomatoes,
} from "@/lib/images";

const images = [
  {
    src: heroImg,
    alt: "Pan-fried red mullet with langoustine in a saffron bisque — a signature Andrew Taylor dish",
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: beefWellington,
    alt: "Golden Beef Wellington fresh from the oven — latticed pastry crust",
    className: "col-span-1 row-span-1",
  },
  {
    src: truffleEggs,
    alt: "Devilled eggs with shaved black truffle served in an egg box — creative canape",
    className: "col-span-1 row-span-2",
  },
  {
    src: souffle,
    alt: "Chocolate soufflé in a copper pan — perfectly risen dessert",
    className: "col-span-1 row-span-1",
  },
  {
    src: canapes,
    alt: "Elegant canapes served on skeleton leaves — artistic presentation",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    src: braisedBeef,
    alt: "Braised beef cheek with pearl onions and pomme purée in copper pots",
    className: "col-span-1 row-span-1",
  },
  {
    src: steamingSoup,
    alt: "Steaming soup served in a Kilner jar with artisan sourdough",
    className: "col-span-1 row-span-1",
  },
  {
    src: heirloomTomatoes,
    alt: "A crate of seasonal heirloom tomatoes — Andrew's commitment to local produce",
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: macaron,
    alt: "Handcrafted macaron presented in a Tiffany box — bespoke petit four",
    className: "col-span-1 row-span-1",
  },
  {
    src: truffles,
    alt: "Fresh black truffles — premium ingredients at the heart of Andrew's menus",
    className: "col-span-1 row-span-1",
  },
  {
    src: microgreens,
    alt: "Fresh microgreens in the kitchen — behind the scenes with Andrew",
    className: "col-span-1 row-span-1",
  },
  {
    src: breadDough,
    alt: "Hand-shaped bread dough balls — freshly baked bread at every dinner",
    className: "col-span-1 row-span-1",
  },
  {
    src: sweetShop,
    alt: "Confectionery and macaron display — dessert and petit four selection",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
];

export default function Gallery() {
  return (
    <>
      <SeoHead
        title="Culinary Gallery | Andrew Taylor Private Chef"
        description="Browse food photography of Andrew Taylor's private chef dishes — fine dining plates, canapés, Beef Wellington, and bespoke event catering across Essex and Cambridge."
        canonicalUrl="/gallery"
      />

      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              Visuals
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">The Gallery</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              A glimpse into the dishes, ingredients, and settings that make up the Andrew
              Taylor experience.
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
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative group overflow-hidden bg-muted ${img.className}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
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
