import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import projectRestaurant from "@/assets/project-restaurant.png";
import projectGym from "@/assets/project-gym.png";
import projectLawfirm from "@/assets/project-lawfirm.png";
import projectEcommerce from "@/assets/project-ecommerce.png";
import {
  Globe, RefreshCw, FileText, Search, Code2, ShoppingCart,
  MessageSquare, ClipboardList, Paintbrush, Rocket,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Izrada web sajtova", desc: "Moderni sajtovi po mjeri za vaš biznis." },
  { icon: RefreshCw, title: "Redizajn sajta", desc: "Unaprijedite izgled i brzinu vašeg postojećeg sajta." },
  { icon: FileText, title: "Landing stranice", desc: "Landing stranice koje posjetioce pretvaraju u kupce, idealne za marketinške kampanje." },
  { icon: Search, title: "SEO optimizacija", desc: "Budite vidljiviji na Google-u i drugim pretraživačima." },
  { icon: Code2, title: "WordPress razvoj", desc: "Profesionalni WordPress sajtovi i prilagođavanje prema vašim potrebama." },
  { icon: ShoppingCart, title: "Online prodavnice", desc: "Online prodavnice za prodaju vaših proizvoda i usluga." },
];

const steps = [
  { icon: MessageSquare, num: "01", title: "Konsultacije", desc: "Upoznajem vaš biznis i vaše ciljeve." },
  { icon: ClipboardList, num: "02", title: "Planiranje", desc: "Definišem strukturu i strategiju sajta." },
  { icon: Paintbrush, num: "03", title: "Dizajn i razvoj", desc: "Izrađujem sajt koristeći moderne tehnologije." },
  { icon: Rocket, num: "04", title: "Objava", desc: "Objavljujem sajt i optimizujem njegove performanse." },
];

const projects = [
  { img: projectRestaurant, title: "Koncept sajta za restoran", category: "Web dizajn" },
  { img: projectGym, title: "Koncept sajta za teretanu", category: "Web dizajn" },
  { img: projectLawfirm, title: "Koncept sajta za advokatsku kancelariju", category: "Web dizajn" },
  { img: projectEcommerce, title: "Koncept online prodavnice", category: "Online prodavnica" },
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
              Moderni sajtovi za{" "}
              <span className="gradient-text">male biznise</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Izrađujem brze, moderne i profesionalne sajtove koji pomažu vašem biznisu da privuče više kupaca putem interneta.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:adnan16zukic@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Započnimo projekat
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border text-foreground font-medium text-lg hover:bg-muted transition-all hover:scale-105"
              >
                Pogledajte usluge
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Usluge</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Sve što vam je potrebno za snažno prisustvo na internetu.
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Kako radim</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Jednostavan proces kroz koji vaš sajt postaje stvarnost.
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Projekti</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Konceptualni projekti koji prikazuju savremeni web dizajn.
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
              Spremni za izradu vašeg sajta?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Ako vam je potreban moderan sajt za vaš biznis, slobodno me kontaktirajte.
            </p>
            <a
              href="mailto:adnan16zukic@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Započnimo projekat
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
