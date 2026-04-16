import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { ALL_LOCATIONS, REGIONS, getLocationsByRegion } from "@/lib/locations";
import { heroImg } from "@/lib/images";

export default function Areas() {
  return (
    <>
      <SeoHead
        title="Private Chef in Essex, Cambridge & Hertfordshire | Areas Served"
        description="Andrew Taylor is a private chef serving homes and dinner parties across North Essex, Cambridgeshire, and Hertfordshire — from Cambridge to Clavering, Bishop's Stortford to Saffron Walden and every village in between."
        canonicalUrl="/areas"
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Private chef Andrew Taylor — serving homes across Essex, Cambridge and Hertfordshire"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-xs tracking-widest uppercase mb-3 block">
              Service Area
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white leading-snug">
              Areas We Serve
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-2 text-primary mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm tracking-widest uppercase">Based in Clavering, Essex</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Michelin-quality dining, delivered to your door.
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              Andrew regularly travels to cook in private homes, country houses, and holiday
              properties across North Essex, South Cambridgeshire, and East Hertfordshire.
              Whether you are in a market town or a small village, he brings the full private
              chef experience directly to your kitchen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regions */}
      {REGIONS.map((region, ri) => {
        const locations = getLocationsByRegion(region);
        return (
          <section
            key={region}
            className={`py-16 px-4 border-t border-border ${ri % 2 === 1 ? "bg-card" : "bg-background"}`}
          >
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-10">
                  <span className="text-primary text-xs tracking-widest uppercase mb-2 block">
                    Region
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl">{region}</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {locations.map((loc, i) => (
                    <motion.div
                      key={loc.slug}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                    >
                      <Link
                        href={`/private-chef-${loc.slug}`}
                        className="group block border border-border px-4 py-3 text-sm font-light hover:border-primary hover:text-primary transition-colors duration-200"
                      >
                        <span className="flex items-center justify-between gap-2">
                          {loc.name}
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Coverage note */}
      <section className="py-16 px-4 bg-background border-t border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-5">
            Don't see your town or village?
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-8">
            Andrew travels across a wide area and is happy to discuss bookings further afield —
            especially for larger events, weekend house parties, and holiday home cooking. Just
            get in touch to check availability.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
            data-testid="link-enquire-from-areas"
          >
            Enquire Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* All locations list (small, good for internal links / SEO) */}
      <section className="py-12 px-4 border-t border-border bg-card">
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-6 text-center">
            All service areas
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
            {ALL_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/private-chef-${loc.slug}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-light"
              >
                Private Chef {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
