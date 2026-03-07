import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Code2, Palette, Globe, Search, FileText } from "lucide-react";

const skills = [
  { icon: Code2, label: "Web Development" },
  { icon: Palette, label: "Website Design" },
  { icon: Globe, label: "WordPress Development" },
  { icon: Search, label: "SEO Basics" },
  { icon: FileText, label: "Landing Page Optimization" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-12">
              I am a freelance web developer focused on building modern and effective websites for small businesses.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="glass-card p-8 md:p-12 mb-16">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">My Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey into web development started with a curiosity about how websites work. Over time, that curiosity grew into a deep passion for building clean, functional, and beautiful websites.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in Bosnia and Herzegovina, I specialize in helping small businesses establish their online presence. I believe that every business, no matter how small, deserves a professional website that truly represents their brand and helps them grow. My goal is to make high-quality web development accessible and impactful for local businesses.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Skills</h2>
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
