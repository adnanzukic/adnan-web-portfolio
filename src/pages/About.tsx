import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Code2, Palette, Globe, Search, FileText } from "lucide-react";

const skills = [
  { icon: Code2, label: "Web razvoj" },
  { icon: Palette, label: "Dizajn sajtova" },
  { icon: Globe, label: "WordPress razvoj" },
  { icon: Search, label: "Osnove SEO-a" },
  { icon: FileText, label: "Optimizacija landing stranica" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">O meni</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-12">
              Ja sam freelance web developer specijalizovan za izradu modernih i efikasnih sajtova za male biznise.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="glass-card p-8 md:p-12 mb-16">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Moja priča</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Moj put u web razvoj počeo je iz znatiželje o tome kako sajtovi zapravo funkcionišu. Vremenom se ta znatiželja pretvorila u istinsku strast prema izradi čistih, funkcionalnih i lijepih sajtova.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Iz Bosne i Hercegovine sam i pomažem malim biznisima da uspostave svoje prisustvo na internetu. Vjerujem da svaki biznis, ma koliko mali bio, zaslužuje profesionalan sajt koji istinski predstavlja njegov brend i pomaže mu da raste. Moj cilj je da kvalitetan web razvoj učinim dostupnim i korisnim za lokalne biznise.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Vještine</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, i) => (
                <div
                  key={skill.label}
                  className="glass-card p-6 flex items-center gap-4 hover:border-primary/50 transition-all"
                >
                  <skill.icon className="w-8 h-8 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
