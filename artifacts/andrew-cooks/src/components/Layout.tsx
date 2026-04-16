import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_LOCATIONS } from "@/lib/locations";

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
    { href: "/blog", label: "Journal" },
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
              <span className={`font-medium transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>Andrew</span>
              <span className={`transition-colors ${isScrolled ? "" : "text-white"}`}> Taylor</span>
            </div>
            <div className={`text-xs tracking-widest uppercase mt-1 opacity-80 group-hover:opacity-100 transition-opacity ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
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
                  location === link.href
                    ? "text-primary"
                    : isScrolled ? "text-foreground/80" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Areas dropdown — header links to /areas, dropdown shows all locations */}
            <div
              className="relative group"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <Link
                href="/areas"
                className={`flex items-center gap-1 text-sm tracking-widest uppercase hover:text-primary transition-colors py-2 ${
                  location.startsWith("/areas") || location.startsWith("/private-chef")
                    ? "text-primary"
                    : isScrolled ? "text-foreground/80" : "text-white/80"
                }`}
              >
                Areas <ChevronDown className="w-3 h-3" />
              </Link>

              <AnimatePresence>
                {areasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-52 bg-card border shadow-lg py-2 mt-2"
                  >
                    <Link
                      href="/areas"
                      className="block px-4 py-2 text-sm font-medium text-primary hover:bg-muted transition-colors border-b border-border mb-1"
                    >
                      All Areas
                    </Link>
                    <div className="max-h-64 overflow-y-auto">
                      {ALL_LOCATIONS.map((loc) => (
                        <Link
                          key={loc.slug}
                          href={`/private-chef-${loc.slug}`}
                          className="block px-4 py-2 text-sm hover:bg-muted hover:text-primary transition-colors"
                        >
                          {loc.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={`px-6 py-2 text-sm tracking-widest uppercase transition-colors ${
                isScrolled
                  ? "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  : "border border-white/60 text-white hover:bg-white hover:text-black"
              }`}
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
              <Link
                href="/areas"
                className="font-serif text-2xl text-primary"
              >
                Areas We Serve
              </Link>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {ALL_LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/private-chef-${loc.slug}`}
                    className="text-sm border px-3 py-1 hover:border-primary hover:text-primary transition-colors"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>

              <div className="w-full h-px bg-border my-4" />
              <Link href="/contact" className="font-serif text-3xl text-primary">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col w-full">{children}</main>

      <footer className="bg-secondary text-secondary-foreground py-16 mt-auto">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <div className="font-serif text-2xl tracking-wide uppercase mb-6">
              <span className="text-primary font-medium">Andrew</span> Taylor
            </div>
            <p className="text-secondary-foreground/70 mb-6 font-light leading-relaxed max-w-sm mx-auto md:mx-0">
              Bespoke culinary experiences in the comfort of your home. Classically trained
              private chef bringing Michelin-quality dining to your table across Essex,
              Cambridge, and Hertfordshire.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-sm tracking-widest uppercase text-primary mb-6">
              Contact
            </h3>
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
                Clavering, Essex
                <br />
                Serving Cambridge, Herts & Essex
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm tracking-widest uppercase text-primary mb-6">
              Explore
            </h3>
            <ul className="space-y-3 font-light text-secondary-foreground/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About Andrew</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Journal</Link></li>
              <li><Link href="/areas" className="hover:text-white transition-colors">Areas We Serve</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Enquire</Link></li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/50 font-light">
          <div>&copy; {new Date().getFullYear()} Andrew Taylor. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {ALL_LOCATIONS.slice(0, 8).map((loc) => (
              <Link
                key={loc.slug}
                href={`/private-chef-${loc.slug}`}
                className="hover:text-white transition-colors"
              >
                Chef in {loc.name}
              </Link>
            ))}
            <Link href="/areas" className="hover:text-white transition-colors text-primary/70">
              + {ALL_LOCATIONS.length - 8} more
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
