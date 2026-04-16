import { motion } from "framer-motion";
import { SeoHead } from "@/components/SeoHead";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "dinner-parties",
      title: "Private Dinner Parties",
      description: "Bespoke multi-course menus for 2–20 guests, bringing the fine dining restaurant experience directly to your home.",
      details: [
        "Personalised menu design",
        "Pre-dinner canapés",
        "Expert wine pairing recommendations",
        "Full table service",
        "Complete kitchen cleanup"
      ],
      image: "/images/gallery-2.png"
    },
    {
      id: "weekly-chef",
      title: "Weekly Private Chef Service",
      description: "Enjoy restaurant-quality meals every day without the stress of cooking or planning.",
      details: [
        "Regular weekly cooking sessions",
        "Family meal prepping",
        "All dietary requirements and allergies catered for",
        "Fridge and pantry stocking",
        "Nutritionally balanced menus"
      ],
      image: "/images/gallery-6.png"
    },
    {
      id: "house-parties",
      title: "House Party & Holiday Cooking",
      description: "Comprehensive residential cooking for extended stays, allowing you to truly relax and enjoy your time away.",
      details: [
        "Breakfast, lunch, and dinner services",
        "Weekend house parties",
        "Holiday homes across the UK",
        "Picnic hampers and BBQ prep",
        "Flexible scheduling"
      ],
      image: "/images/gallery-7.png"
    },
    {
      id: "corporate",
      title: "Corporate & Events",
      description: "Professional, discreet culinary services for businesses and special events.",
      details: [
        "High-end working lunches",
        "Executive business dinners",
        "Product launch canapé receptions",
        "Boardroom catering",
        "Client entertainment"
      ],
      image: "/images/gallery-1.png"
    }
  ];

  return (
    <>
      <SeoHead 
        title="Private Chef Services & Dinner Parties | Andrew Taylor" 
        description="Bespoke private chef services including intimate dinner parties, weekly cooking, and holiday home catering in Essex, Cambridge, and Herts."
        canonicalUrl="/services"
      />

      <section className="pt-32 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">Offerings</span>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Culinary Services</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Tailored experiences designed around your tastes, schedule, and event.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="font-serif text-3xl md:text-4xl">{service.title}</h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 pt-4 border-t border-border">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 font-light text-muted-foreground">
                        <span className="text-primary mt-1 text-xs">✦</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <Link 
                      href="/contact" 
                      className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
