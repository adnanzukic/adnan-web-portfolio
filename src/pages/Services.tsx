import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Globe, RefreshCw, FileText, Search, Code2, ShoppingCart,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom-built, modern websites tailored to your business needs. Every website is designed to be fast, responsive, and optimized for conversions.",
    benefits: ["Mobile-friendly responsive design", "Fast loading speeds", "Modern UI/UX principles"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Transform your outdated website into a modern, high-performing platform that reflects your brand and engages your customers.",
    benefits: ["Improved user experience", "Updated modern design", "Better performance and SEO"],
  },
  {
    icon: FileText,
    title: "Landing Pages",
    desc: "High-converting landing pages designed to capture leads and drive action for your marketing campaigns.",
    benefits: ["Conversion-optimized layouts", "A/B testing ready", "Fast turnaround time"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Improve your website's visibility on search engines to attract more organic traffic and potential customers.",
    benefits: ["On-page SEO optimization", "Technical SEO improvements", "Local SEO for businesses"],
  },
  {
    icon: Code2,
    title: "WordPress Websites",
    desc: "Professional WordPress websites with custom themes, plugins, and easy content management for your business.",
    benefits: ["Easy to manage content", "Custom themes and plugins", "Secure and maintained"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    desc: "Full-featured online stores that make it easy for your customers to browse and purchase your products or services.",
    benefits: ["Product catalog management", "Secure checkout process", "Inventory and order management"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-16">
              Comprehensive web development services to help your business grow online.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 100}>
                <div className="glass-card p-8 md:p-10 hover:border-primary/50 transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <s.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-heading text-xl font-bold text-foreground mb-3">{s.title}</h2>
                      <p className="text-muted-foreground mb-4">{s.desc}</p>
                      <ul className="space-y-2">
                        {s.benefits.map((b) => (
                          <li key={b} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
