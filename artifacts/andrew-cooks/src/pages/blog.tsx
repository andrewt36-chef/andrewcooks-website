import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { blogPosts } from "@/lib/blog-posts";

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <SeoHead
        title="Private Chef Blog | Andrew Taylor — Recipes, Menus & Dining Advice"
        description="Tips, menus, seasonal recipes and behind-the-scenes insights from Andrew Taylor, private chef based in Clavering, Essex, serving Cambridge, Hertfordshire and beyond."
        canonicalUrl="/blog"
      />

      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
              Journal
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">From the Kitchen</h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Seasonal menus, culinary insights, and the pleasures of private dining — written
              from a working kitchen in Clavering, Essex.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border overflow-hidden">
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center bg-card">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs tracking-widest uppercase text-primary">
                      {featured.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{featured.readTime}</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-6 group-hover:text-primary transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-8">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{featured.date}</span>
                    <span className="text-sm tracking-widest uppercase text-primary flex items-center gap-2">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="border border-border overflow-hidden h-full flex flex-col hover:border-primary/40 transition-colors duration-300">
                    <div className="aspect-[3/2] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs tracking-widest uppercase text-primary">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h2 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors leading-snug flex-1">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <span className="text-xs tracking-widest uppercase text-primary flex items-center gap-1">
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
