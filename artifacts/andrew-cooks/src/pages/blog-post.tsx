import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="pt-40 pb-32 text-center">
        <h1 className="font-serif text-4xl mb-6">Post not found</h1>
        <Link href="/blog" className="text-primary underline">
          Back to Journal
        </Link>
      </div>
    );
  }

  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return (
    <>
      <SeoHead
        title={`${post.title} | Andrew Taylor Private Chef`}
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
      />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.imageAlt}
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
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs tracking-widest uppercase text-primary bg-black/30 backdrop-blur-sm px-3 py-1">
                {post.category}
              </span>
              <span className="text-xs text-white/70">{post.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl text-white max-w-3xl leading-snug">
              {post.title}
            </h1>
            <p className="text-white/60 text-sm mt-4">{post.date}</p>
          </motion.div>
        </div>
      </section>

      {/* Back Link */}
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide"
          data-testid="link-back-to-blog"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Journal
        </Link>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 pb-24 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg prose-stone max-w-none
            prose-headings:font-serif prose-headings:font-normal prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-light prose-p:mb-6
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* CTA */}
      <section className="bg-card border-y border-border py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <span className="text-primary text-sm tracking-widest uppercase mb-4 block">
            Ready to Book?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Let's plan your next special meal.
          </h2>
          <p className="text-muted-foreground font-light mb-8">
            Based in Clavering, Essex — serving Cambridge, Hertfordshire, and the surrounding
            region.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
            data-testid="link-enquire-from-blog"
          >
            Enquire Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      {(prevPost || nextPost) && (
        <section className="py-12 px-4 border-t border-border">
          <div className="container mx-auto max-w-3xl flex justify-between gap-8">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex items-start gap-3 max-w-xs"
              >
                <ArrowLeft className="w-4 h-4 mt-1 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <div className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    Previous
                  </div>
                  <div className="font-serif text-lg group-hover:text-primary transition-colors leading-snug">
                    {prevPost.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-start gap-3 max-w-xs text-right ml-auto"
              >
                <div>
                  <div className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    Next
                  </div>
                  <div className="font-serif text-lg group-hover:text-primary transition-colors leading-snug">
                    {nextPost.title}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      )}
    </>
  );
}
