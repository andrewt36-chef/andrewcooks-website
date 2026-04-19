import { motion } from "framer-motion";
import { SeoHead } from "@/components/SeoHead";

export default function About() {
  return (
    <>
      <SeoHead 
        title="About Andrew Taylor | Private Chef in Essex" 
        description="Learn about Andrew Taylor's background, Michelin-level training, and culinary philosophy. Serving Clavering, Cambridge, and Hertfordshire."
        canonicalUrl="/about"
      />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">The Chef</span>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Andrew Taylor</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              "Food is one of life's great pleasures — I want every meal I cook to feel like a special occasion."
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/images/about.png" 
                alt="Chef Andrew Taylor cooking" 
                className="w-full h-auto aspect-[3/4] object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                A Passion for Fine Ingredients & Flawless Technique
              </h2>
              
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  Based in Clavering, Essex, I offer a highly personalised private chef service across Cambridge, Hertfordshire, and surrounding counties. My approach is rooted in classic technique, celebrating local, seasonal British produce and modern influences with thirty years of experience working in Michelin-starred restaurants and deluxe hotels, in eight different European countries, working at the Ritz London, the Palace Gstaad Switzerland, Operakallaren Stockholm Sweden to name a few.
                </p>
                <p>
                  Whether it's an intimate dinner party, a weekend house party, or regular weekly meals for your family, I believe dining at home should be a luxurious, stress-free experience. I handle everything from bespoke menu design and ingredient sourcing to the cooking, service, and leaving your kitchen immaculate.
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-sans text-sm tracking-widest uppercase text-foreground mb-4">The Credentials</h3>
                <ul className="space-y-3 font-light text-muted-foreground text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✦</span>
                    Michelin star trained, having worked in 8 countries in Michelin starred restaurants and deluxe hotels
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✦</span>
                    30+ years professional experience
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✦</span>
                    Specialist in French technique & British seasonal produce
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
