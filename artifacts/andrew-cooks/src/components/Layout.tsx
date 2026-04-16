import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SEO_LOCATIONS = [
  "Cambridge", "Chelmsford", "Harlow", "Stevenage", "Braintree",
  "Bishop's Stortford", "Saffron Walden", "Royston", "Ware",
  "Great Dunmow", "Stansted Mountfitchet", "Sawbridgeworth",
  "Takeley", "Newport", "Great Chesterford"
];

function formatSlug(name: string) {
  return name.toLowerCase().replace(/['\s]+/g, "-");
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <div className="flex min-h-[100dvh] flex-col relative">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-sm py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="group">
            <div className="font-serif text-2xl md:text-3xl tracking-wide uppercase">
              <span className="text-primary font-medium">Andrew</span> Taylor
            </div>
            <div className="text-xs tracking-widest text-muted-foreground uppercase mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
              Private Chef
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm tracking-widest uppercase hover:text-primary transition-colors ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div 
              className="relative group"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors py-2">
                Areas <ChevronDown className="w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {areasOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-card border shadow-lg py-2 mt-2"
                  >
                    <div className="max-h-64 overflow-y-auto scrollbar-thin">
                      {SEO_LOCATIONS.map((loc) => (
                        <Link 
                          key={loc} 
                          href={`/private-chef-${formatSlug(loc)}`}
                          className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                        >
                          {loc}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/contact"
              className="border border-primary text-primary px-6 py-2 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Enquire
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-6 items-center text-center mt-12">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="font-serif text-3xl hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="w-full h-px bg-border my-4" />
              <div className="font-sans text-sm tracking-widest uppercase text-muted-foreground mb-2">Areas We Serve</div>
              <div className="flex flex-wrap justify-center gap-3">
                {SEO_LOCATIONS.map((loc) => (
                  <Link 
                    key={loc} 
                    href={`/private-chef-${formatSlug(loc)}`}
                    className="text-sm border px-3 py-1 hover:border-primary hover:text-primary transition-colors"
                  >
                    {loc}
                  </Link>
                ))}
              </div>
              
              <div className="w-full h-px bg-border my-4" />
              <Link 
                href="/contact"
                className="font-serif text-3xl text-primary"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>

      <footer className="bg-secondary text-secondary-foreground py-16 mt-auto">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <div className="font-serif text-2xl tracking-wide uppercase mb-6">
              <span className="text-primary font-medium">Andrew</span> Taylor
            </div>
            <p className="text-secondary-foreground/70 mb-6 font-light leading-relaxed max-w-sm mx-auto md:mx-0">
              Bespoke culinary experiences in the comfort of your home. Classically trained private chef bringing Michelin-quality dining to your table.
            </p>
          </div>
          
          <div>
            <h3 className="font-sans text-sm tracking-widest uppercase text-primary mb-6">Contact</h3>
            <ul className="space-y-4 font-light text-secondary-foreground/80">
              <li>
                <a href="mailto:hello@hot-rocket.com" className="hover:text-white transition-colors">
                  hello@hot-rocket.com
                </a>
              </li>
              <li>
                <a href="tel:+447547393371" className="hover:text-white transition-colors">
                  +44 (0) 7547 393371
                </a>
              </li>
              <li className="pt-2">
                Clavering, Essex<br />
                Serving Cambridge, Herts & Essex
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-sans text-sm tracking-widest uppercase text-primary mb-6">Explore</h3>
            <ul className="space-y-3 font-light text-secondary-foreground/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About Andrew</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Enquire</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/50 font-light">
          <div>&copy; {new Date().getFullYear()} Andrew Taylor. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-2">
            {SEO_LOCATIONS.slice(0, 5).map((loc) => (
              <Link key={loc} href={`/private-chef-${formatSlug(loc)}`} className="hover:text-white">
                Chef in {loc}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
