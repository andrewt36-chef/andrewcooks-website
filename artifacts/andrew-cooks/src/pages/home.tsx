import { motion } from "framer-motion";
import { Link } from "wouter";
import { SeoHead } from "@/components/SeoHead";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Andrew Taylor Private Chef",
    "image": "https://www.andrewcooks.co.uk/images/hero.png",
    "description": "Classically trained private chef based in Clavering, Essex, offering bespoke culinary experiences in clients' homes.",
    "telephone": "+447547393371",
    "email": "hello@hot-rocket.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Clavering",
      "addressRegion": "Essex",
      "addressCountry": "UK"
    },
    "areaServed": [
      "Cambridge",
      "Hertfordshire",
      "Essex"
    ]
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <>
      <SeoHead 
        title="Bespoke Private Chef in Essex, Cambridge & Herts" 
        description="Andrew Taylor is a classically trained private chef offering bespoke culinary experiences, private dinner parties, and fine dining in your home across Essex, Cambridge, and Hertfordshire."
        canonicalUrl="/"
        schema={jsonLd}
      />

      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/hero.png" 
            alt="Fine dining plated dish" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block font-sans text-sm tracking-[0.3em] uppercase mb-6 text-white/80">
              Private Chef &middot; Clavering, Essex
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
              Extraordinary Dining, <br className="hidden md:block" />
              <span className="italic font-light">in Your Home.</span>
            </h1>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Enquire Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-3xl md:text-5xl mb-8 text-foreground">
              Michelin-Quality Experiences,<br />Intimate Settings.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-10">
              Food is one of life's great pleasures. As a classically trained private chef with over 15 years of experience, my goal is simple: to make every meal feel like a special occasion. From bespoke multi-course dinner parties to regular weekly cooking, I bring the refinement of fine dining directly to your dining room.
            </p>
            <Link 
              href="/about"
              className="text-primary font-sans uppercase tracking-widest text-sm border-b border-primary/30 pb-1 hover:border-primary transition-colors"
            >
              Meet Andrew
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Offerings</span>
              <h2 className="font-serif text-4xl text-foreground">Culinary Services</h2>
            </div>
            <Link href="/services" className="text-sm tracking-widest uppercase hover:text-primary transition-colors border-b border-foreground pb-1">
              View All Services
            </Link>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                title: "Private Dinner Parties",
                desc: "Bespoke multi-course menus for 2-20 guests, complete with pre-dinner canapés and full kitchen cleanup.",
                img: "/images/gallery-2.png"
              },
              {
                title: "Weekly Chef Service",
                desc: "Regular cooking sessions and meal prepping tailored to your family's exact dietary requirements.",
                img: "/images/gallery-6.png"
              },
              {
                title: "House Parties",
                desc: "Residential cooking for extended stays, weekend house parties, and holiday homes across the UK.",
                img: "/images/gallery-7.png"
              }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <Link href="/services" className="text-xs tracking-widest uppercase text-primary flex items-center gap-2">
                  Discover More <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <h2 className="font-serif text-3xl md:text-5xl max-w-4xl mx-auto leading-snug mb-8">
            "Andrew created an absolutely unforgettable evening for my husband's 50th birthday. The food was spectacular, the presentation flawless, and he left our kitchen spotless. Having a Michelin-quality meal in our own dining room was magical."
          </h2>
          <p className="text-sm tracking-widest uppercase opacity-80">
            — Sarah M., Cambridge
          </p>
        </div>
      </section>

      {/* Mini Gallery */}
      <section className="py-4 flex overflow-hidden gap-4">
        {[1, 3, 4, 5, 8].map((num) => (
          <div key={num} className="w-64 h-64 md:w-80 md:h-80 shrink-0">
            <img 
              src={`/images/gallery-${num}.png`} 
              alt="Gallery highlight" 
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
        ))}
      </section>
    </>
  );
}
