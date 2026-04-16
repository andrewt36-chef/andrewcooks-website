import { motion } from "framer-motion";
import { Link } from "wouter";
import { SeoHead } from "@/components/SeoHead";
import { ArrowRight } from "lucide-react";

interface SeoLocationProps {
  locationSlug: string;
}

export default function SeoLocation({ locationSlug }: SeoLocationProps) {
  // Format slug to Title Case (e.g. "saffron-walden" -> "Saffron Walden")
  const locationName = locationSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const title = `Private Chef ${locationName} | Andrew Taylor`;
  const description = `Looking for a private chef in ${locationName}? Andrew Taylor offers bespoke fine dining and dinner party catering in your home. Based in Clavering, serving ${locationName}.`;
  
  return (
    <>
      <SeoHead 
        title={title}
        description={description}
        canonicalUrl={`/private-chef-${locationSlug}`}
      />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">Local Service</span>
            <h1 className="font-serif text-4xl md:text-6xl mb-6">Private Chef {locationName}</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
              Extraordinary dining, brought to your home in {locationName}.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/gallery-2.png" 
                alt={`Dinner party catering in ${locationName}`}
                className="w-full aspect-[4/5] object-cover shadow-md"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="font-serif text-3xl">Bespoke Catering in {locationName}</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                As a classically trained private chef based just down the road in Clavering, Essex, I frequently serve clients in and around {locationName}. 
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Whether you are hosting an intimate dinner party, planning a weekend celebration, or looking for regular weekly cooking, I bring Michelin-quality dining and professional service directly to your kitchen.
              </p>
              <ul className="space-y-3 font-light text-muted-foreground my-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xs">✦</span>
                  Bespoke multi-course dinner parties
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xs">✦</span>
                  Locally sourced, seasonal ingredients
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xs">✦</span>
                  Full table service and kitchen cleanup
                </li>
              </ul>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/services"
                  className="inline-flex justify-center items-center gap-2 border border-foreground text-foreground px-6 py-3 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
                >
                  View Services
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Gallery Strip */}
      <section className="py-4 flex overflow-hidden gap-4 bg-background">
        {[4, 5, 6, 8].map((num) => (
          <div key={num} className="w-64 h-64 shrink-0">
            <img 
              src={`/images/gallery-${num}.png`} 
              alt="Culinary highlight" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        ))}
      </section>
    </>
  );
}
