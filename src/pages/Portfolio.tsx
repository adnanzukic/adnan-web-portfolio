import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { whatsappLink, viberLink } from "@/lib/contact";
import salon from "@/assets/project-salon.webp";
import barber from "@/assets/project-barber.webp";

const projects = [
  {
    img: salon,
    title: "Studio Pramen",
    category: "Frizerski i kozmetički salon",
    href: "/demo/salon-pramen/",
    desc: "Demo sajt za frizerski i kozmetički salon. Posjetilac bira nijansu kose na interaktivnom uzorku, pregleda cjenik, vidi da li je salon trenutno otvoren i šalje zahtjev za termin.",
  },
  {
    img: barber,
    title: "Oštra Britva",
    category: "Brijačnica",
    href: "/demo/brijacnica-ostra-britva/",
    desc: "Demo sajt za brijačnicu s online rezervacijom. Klijent bira uslugu, dan, vrijeme i majstora, a cijena i termin se odmah prikazuju na listiću. Zauzeti termini su prekriženi.",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-16">
              Demo sajtovi za lokalne biznise. Otvorite ih i isprobajte: dugmad, rezervacija i cjenik rade kao na pravom sajtu.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 100}>
                <div
                  className="glass-card overflow-hidden group cursor-pointer hover:border-primary/50 transition-all"
                  onClick={() => setSelectedProject(p)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={`Demo sajt: ${p.title}`}
                      loading="lazy"
                      className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="px-6 py-2 border border-white text-white text-sm uppercase tracking-wider">
                        Pogledajte projekat
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-primary text-xs font-medium uppercase tracking-wider">
                      {p.category}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-foreground mt-2">
                      {p.title}
                    </h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-background max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.img}
              alt={`Demo sajt: ${selectedProject.title}`}
              className="w-full h-72 object-cover object-top"
            />

            <div className="p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedProject.desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition"
                >
                  Otvorite demo sajt
                </a>

                <a
                  href={whatsappLink(
                    `Pozdrav Adnane, vidio/la sam demo sajt "${selectedProject.title}" i zanima me sličan sajt za moj biznis.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-border rounded-md hover:bg-muted transition"
                >
                  Pišite mi na WhatsApp
                </a>

                <a
                  href={viberLink}
                  className="px-6 py-2 border border-border rounded-md hover:bg-muted transition"
                >
                  Viber
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 text-muted-foreground hover:text-foreground transition"
                >
                  Zatvori
                </button>
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Zatvori"
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Portfolio;
