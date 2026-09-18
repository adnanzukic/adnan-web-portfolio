import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MessageCircle, MessageSquare } from "lucide-react";
import { CONTACT, whatsappLink, viberLink, telLink, mailLink } from "@/lib/contact";

const options = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: CONTACT.phoneDisplay,
    href: whatsappLink("Pozdrav Adnane, javljam se povodom izrade sajta za moj biznis."),
    external: true,
  },
  {
    icon: MessageSquare,
    title: "Viber",
    text: CONTACT.phoneDisplay,
    href: viberLink,
    external: false,
  },
  {
    icon: Phone,
    title: "Poziv",
    text: CONTACT.phoneDisplay,
    href: telLink,
    external: false,
  },
  {
    icon: Mail,
    title: "E-mail",
    text: CONTACT.email,
    href: mailLink,
    external: false,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 section-padding">
        <div className="container-narrow max-w-3xl">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Započnite projekat</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Ako vam je potreban moderan sajt za vaš biznis, slobodno me kontaktirajte na način koji vam najviše odgovara.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {options.map((o, i) => (
              <AnimatedSection key={o.title} delay={200 + i * 100}>
                <a
                  href={o.href}
                  {...(o.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="glass-card p-8 text-center block hover:border-primary/50 hover:-translate-y-1 transition-all group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <o.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-foreground mb-1">{o.title}</h2>
                  <p className="text-muted-foreground text-sm break-all">{o.text}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600}>
            <p className="text-muted-foreground text-sm text-center mt-10">
              Javit ću vam se u najkraćem mogućem roku.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
