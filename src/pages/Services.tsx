import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Globe, RefreshCw, FileText, Search, Code2, ShoppingCart,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Izrada web sajtova",
    desc: "Moderni sajtovi izrađeni po mjeri vašeg biznisa. Svaki sajt je brz, prilagođen svim uređajima i optimizovan tako da posjetioce pretvara u klijente.",
    benefits: ["Prilagođen mobilnim uređajima", "Brzo učitavanje", "Moderan UI/UX dizajn"],
  },
  {
    icon: RefreshCw,
    title: "Redizajn sajta",
    desc: "Pretvorite zastarjeli sajt u moderan i brz sajt koji odražava vaš brend i privlači vaše klijente.",
    benefits: ["Bolje korisničko iskustvo", "Osvježen, moderan dizajn", "Bolje performanse i SEO"],
  },
  {
    icon: FileText,
    title: "Landing stranice",
    desc: "Landing stranice visoke konverzije koje prikupljaju upite i podstiču posjetioce na akciju u vašim marketinškim kampanjama.",
    benefits: ["Rasporedi optimizovani za konverziju", "Spremno za A/B testiranje", "Brza isporuka"],
  },
  {
    icon: Search,
    title: "SEO optimizacija",
    desc: "Unaprijedite vidljivost vašeg sajta na pretraživačima i privucite više organskog prometa i potencijalnih klijenata.",
    benefits: ["On-page SEO optimizacija", "Tehnička SEO poboljšanja", "Lokalni SEO za biznise"],
  },
  {
    icon: Code2,
    title: "WordPress sajtovi",
    desc: "Profesionalni WordPress sajtovi sa prilagođenim temama i dodacima te jednostavnim upravljanjem sadržajem.",
    benefits: ["Jednostavno uređivanje sadržaja", "Prilagođene teme i dodaci", "Sigurno i redovno održavano"],
  },
  {
    icon: ShoppingCart,
    title: "Online prodavnice",
    desc: "Potpuno funkcionalne online prodavnice koje vašim kupcima olakšavaju pregled i kupovinu vaših proizvoda ili usluga.",
    benefits: ["Upravljanje katalogom proizvoda", "Siguran proces plaćanja", "Upravljanje zalihama i narudžbama"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Usluge</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-16">
              Sveobuhvatne usluge web razvoja koje pomažu vašem biznisu da raste online.
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
