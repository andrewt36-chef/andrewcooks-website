import { useState } from "react";
import { motion } from "framer-motion";
import { SeoHead } from "@/components/SeoHead";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  eventType: z.string().min(1, "Please select an event type"),
  date: z.string().optional(),
  guests: z.string().min(1, "Number of guests is required"),
  message: z.string().min(10, "Please provide some details about your event"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      date: "",
      guests: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Enquiry Sent",
        description: "Thank you for reaching out. Andrew will be in touch shortly.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <>
      <SeoHead 
        title="Contact & Enquiries | Andrew Taylor Private Chef" 
        description="Get in touch to book Andrew Taylor for your next private dinner party or event in Essex, Cambridge, or Hertfordshire."
        canonicalUrl="/contact"
      />

      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <span className="text-primary text-sm tracking-widest uppercase mb-4 block">Enquire</span>
                <h1 className="font-serif text-5xl mb-6">Let's plan your menu.</h1>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Every event is unique. Please provide some initial details about your requirements, and Andrew will get back to you to discuss menus, pricing, and availability.
                </p>
              </div>

              <div className="space-y-6 border-t border-border pt-8">
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-1">Email</h3>
                  <a href="mailto:hello@hot-rocket.com" className="text-xl font-serif hover:text-primary transition-colors">
                    hello@hot-rocket.com
                  </a>
                </div>
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-1">Phone</h3>
                  <a href="tel:+447547393371" className="text-xl font-serif hover:text-primary transition-colors">
                    +44 (0) 7547 393371
                  </a>
                </div>
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-1">Location</h3>
                  <p className="text-lg font-serif">
                    Clavering, Essex<br />
                    <span className="text-sm font-sans font-light text-muted-foreground">Serving Cambridge, Hertfordshire, Essex and beyond.</span>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card p-8 md:p-10 border border-border shadow-sm"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs tracking-widest uppercase">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" className="rounded-none bg-transparent border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs tracking-widest uppercase">Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jane@example.com" className="rounded-none bg-transparent border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs tracking-widest uppercase">Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+44..." className="rounded-none bg-transparent border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs tracking-widest uppercase">No. of Guests</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="e.g. 8" className="rounded-none bg-transparent border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs tracking-widest uppercase">Event Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-none bg-transparent border-border focus:ring-primary">
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="dinner-party">Private Dinner Party</SelectItem>
                              <SelectItem value="weekly-chef">Weekly Chef Service</SelectItem>
                              <SelectItem value="house-party">House Party / Holiday</SelectItem>
                              <SelectItem value="corporate">Corporate Event</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs tracking-widest uppercase">Date (Optional)</FormLabel>
                          <FormControl>
                            <Input type="date" className="rounded-none bg-transparent border-border focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs tracking-widest uppercase">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your event, location, dietary requirements..." 
                            className="min-h-[120px] rounded-none bg-transparent border-border focus-visible:ring-primary resize-y" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full rounded-none bg-primary hover:bg-primary/90 text-primary-foreground tracking-widest uppercase py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
