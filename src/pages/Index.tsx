import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import projectRestaurant from "@/assets/project-restaurant.png";
import projectGym from "@/assets/project-gym.png";
import projectLawfirm from "@/assets/project-lawfirm.jpg";
import projectEcommerce from "@/assets/project-ecommerce.png";
import {
  Globe, RefreshCw, FileText, Search, Code2, ShoppingCart,
  MessageSquare, ClipboardList, Paintbrush, Rocket,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom modern websites for businesses." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Improve the design and performance of existing websites." },
  { icon: FileText, title: "Landing Pages", desc: "High-converting landing pages for marketing campaigns." },
  { icon: Search, title: "SEO Optimization", desc: "Improve visibility on search engines." },
  { icon: Code2, title: "WordPress Development", desc: "Professional WordPress websites and customization." },
  { icon: ShoppingCart, title: "E-commerce Websites", desc: "Online stores for selling products and services." },
];

const steps = [
  { icon: MessageSquare, num: "01", title: "Consultation", desc: "Understanding your business and goals." },
  { icon: ClipboardList, num: "02", title: "Planning", desc: "Creating website structure and strategy." },
  { icon: Paintbrush, num: "03", title: "Design & Development", desc: "Building the website with modern technologies." },
  { icon: Rocket, num: "04", title: "Launch", desc: "Publishing the website and optimizing performance." },
];

const projects = [
  { img: projectRestaurant, title: "Restaurant Website Concept", category: "Web Design" },
  { img: projectGym, title: "Gym Website Concept", category: "Web Design" },
  { img: projectLawfirm, title: "Law Firm Website Concept", category: "Web Design" },
  { img: projectEcommerce, title: "Online Store Concept", category: "E-commerce" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header heroMode />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Modern Websites for{" "}
              <span className="gradient-text">Small Businesses</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              I build fast, modern and professional websites that help businesses attract more customers online.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:adnan16zukic@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Start a Project
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border text-foreground font-medium text-lg hover:bg-muted transition-all hover:scale-105"
              >
                View Services
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Services</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Everything you need to establish a strong online presence.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 100}>
                <div className="glass-card p-8 hover:border-primary/50 transition-all group hover:-translate-y-1">
                  <s.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card/30">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">How I Work</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A simple process to bring your website to life.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 150}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-primary font-heading font-bold text-sm">{step.num}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Concept projects showcasing modern web design.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 100}>
                <div className="glass-card overflow-hidden group cursor-pointer">
                  <div className="overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-xs font-medium uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{p.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/5">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to build your website?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              If you need a modern website for your business, feel free to contact me.
            </p>
            <a
              href="mailto:adnan16zukic@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Start a Project
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
