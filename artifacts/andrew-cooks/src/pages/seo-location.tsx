import { motion } from "framer-motion";
import { Link } from "wouter";
import { SeoHead } from "@/components/SeoHead";
import { ArrowRight, MapPin } from "lucide-react";
import { ALL_LOCATIONS } from "@/lib/locations";
import {
  beefWellington,
  canapes,
  truffleEggs,
  braisedBeef,
  souffle,
  heirloomTomatoes,
} from "@/lib/images";

interface SeoLocationProps {
  locationSlug: string;
}

const galleryStrip = [canapes, truffleEggs, braisedBeef, souffle];

function heroImageForSlug(slug: string): string {
  const index = ALL_LOCATIONS.findIndex((l) => l.slug === slug);
  const images = [beefWellington, canapes, braisedBeef, souffle, heirloomTomatoes];
  return images[index % images.length];
}

export default function SeoLocation({ locationSlug }: SeoLocationProps) {
  const locationName = locationSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const heroImg = heroImageForSlug(locationSlug);

  const nearbyLocations = ALL_LOCATIONS.filter((l) => l.slug !== locationSlug).slice(0, 8);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Private Chef in ${locationName}`,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.andrewcooks.co.uk/#business",
      "name": "Andrew Taylor Private Chef",
      "url": "https://www.andrewcooks.co.uk",
      "telephone": "+447547393371",
      "image": "https://www.andrewcooks.co.uk/opengraph.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Clavering",
        "addressRegion": "Essex",
        "addressCountry": "GB",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": locationName,
    },
    "description": `Bespoke private chef services in ${locationName}. Andrew Taylor offers fine dining dinner parties, canapé receptions, holiday home cooking, and weekly chef services.`,
    "url": `https://www.andrewcooks.co.uk/private-chef-${locationSlug}`,
  };

  return (
    <>
      <SeoHead
        title={`Private Chef ${locationName} | Andrew Taylor`}
        description={`Looking for a private chef in ${locationName}? Andrew Taylor offers bespoke fine dining, private dinner parties, and home catering in ${locationName} and the surrounding area. Based in Clavering, Essex.`}
        canonicalUrl={`/private-chef-${locationSlug}`}
        schema={schema}
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={`Private chef in ${locationName} — bespoke dining by Andrew Taylor`}
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
            <div className="flex items-center gap-2 text-white/70 mb-3">
              <MapPin className="w-3 h-3" />
              <span className="text-xs tracking-widest uppercase">Local Service</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-white leading-snug">
              Private Chef {locationName}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl">Bespoke Dining in {locationName}</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Based in Clavering, Essex — just a short drive from {locationName} — Andrew
                Taylor regularly cooks for private clients in homes and properties across this
                area. Whether you are planning an intimate dinner party for two or a grand
                multi-course celebration for twenty, Andrew brings the full private chef
                experience directly to your kitchen.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Every menu is designed around your preferences, the season, and the best
                local produce available. There are no set menus, no shortcuts, and no
                compromise on quality.
              </p>

              <ul className="space-y-4 pt-2">
                {[
                  "Bespoke multi-course dinner parties",
                  "Canapé and reception service",
                  "Weekend and holiday home cooking",
                  "Weekly chef and meal prep service",
                  "Locally sourced, seasonal ingredients",
                  "Full table service and kitchen cleanup",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-light text-muted-foreground">
                    <span className="text-primary mt-1 text-xs shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
                  data-testid={`link-enquire-${locationSlug}`}
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex justify-center items-center gap-2 border border-foreground text-foreground px-6 py-3 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
                >
                  View Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={beefWellington}
                  alt={`Private chef dinner party in ${locationName} — Beef Wellington by Andrew Taylor`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground font-light text-center tracking-wide">
                Beef Wellington — a signature Andrew Taylor dinner party centrepiece
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="flex overflow-hidden gap-4 py-4 bg-card border-y border-border">
        {galleryStrip.map((img, i) => (
          <div key={i} className="w-56 h-56 md:w-72 md:h-72 shrink-0">
            <img
              src={img}
              alt="Private dining dish by Andrew Taylor"
              loading="lazy"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </section>

      {/* Nearby locations */}
      <section className="py-16 px-4 bg-background border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl mb-8 text-center">Also serving nearby areas</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {nearbyLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/private-chef-${loc.slug}`}
                className="border border-border px-4 py-2 text-sm font-light hover:border-primary hover:text-primary transition-colors"
              >
                {loc.name}
              </Link>
            ))}
            <Link
              href="/areas"
              className="border border-primary text-primary px-4 py-2 text-sm font-light hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1"
            >
              All areas <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
