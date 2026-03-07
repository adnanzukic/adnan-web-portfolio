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
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Start Your Project</h1>
            <p className="text-xl text-muted-foreground mb-12">
              If you need a modern website for your business, feel free to contact me.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="glass-card p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Email</h2>
              <p className="text-muted-foreground mb-8">
                Send me an email and I'll get back to you as soon as possible.
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
                Send Email
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
