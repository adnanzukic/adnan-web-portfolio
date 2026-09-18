import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 section-padding">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Započnite projekat</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Ako vam je potreban moderan sajt za vaš biznis, slobodno me kontaktirajte.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="glass-card p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">E-mail</h2>
              <p className="text-muted-foreground mb-8">
                Pošaljite mi e-mail i javit ću vam se u najkraćem mogućem roku.
              </p>
              <a
                href="mailto:adnan16zukic@gmail.com"
                className="text-primary text-lg font-medium hover:underline block mb-8"
              >
                adnan16zukic@gmail.com
              </a>
              <a
                href="mailto:adnan16zukic@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Pošaljite e-mail
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
