import { HelmetProvider } from "react-helmet-async";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Gallery from "@/pages/gallery";
import Contact from "@/pages/contact";
import SeoLocation from "@/pages/seo-location";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import { Layout } from "@/components/Layout";

const queryClient = new QueryClient();

const SEO_LOCATIONS = [
  "cambridge",
  "chelmsford",
  "harlow",
  "stevenage",
  "braintree",
  "bishops-stortford",
  "saffron-walden",
  "royston",
  "ware",
  "great-dunmow",
  "stansted-mountfitchet",
  "sawbridgeworth",
  "takeley",
  "newport",
  "great-chesterford"
];

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug">
          {(params) => <BlogPost slug={params.slug ?? ""} />}
        </Route>

        {SEO_LOCATIONS.map((loc) => (
          <Route key={loc} path={`/private-chef-${loc}`}>
            {() => <SeoLocation locationSlug={loc} />}
          </Route>
        ))}

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
