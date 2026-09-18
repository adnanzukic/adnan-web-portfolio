import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { whatsappLink, viberLink } from "@/lib/contact";
import gymweb from "@/assets/project-gym.png";
import lawfirm from "@/assets/project-lawfirm.png";
import ecommerce from "@/assets/project-ecommerce.png";
import restaurant from "@/assets/project-restaurant.png";

const projects = [
  { img: gymweb, title: "Koncept sajta za teretanu", category: "Web dizajn" },
  { img: lawfirm, title: "Koncept sajta za advokatsku kancelariju", category: "Web dizajn" },
  { img: ecommerce, title: "Koncept online prodavnice", category: "Online prodavnica" },
  { img: restaurant, title: "Koncept sajta za restoran", category: "Web dizajn" },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

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
              Pregled konceptualnih projekata koji prikazuju savremeni web dizajn.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 100}>
                <div className="glass-card overflow-hidden group cursor-pointer hover:border-primary/50 transition-all">

                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <button
                        onClick={() => setSelectedProject(p)}
                        className="px-6 py-2 border border-white text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition"
                      >
                        Pogledajte projekat
                      </button>
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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6">
          <div className="bg-background max-w-2xl w-full rounded-xl overflow-hidden shadow-2xl relative">

            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Ovaj konceptualni projekat izrađen je kako bi prikazao principe
                modernog web dizajna za mala i srednja preduzeća. Raspored se
                fokusira na čistu tipografiju, jasnu vizuelnu hijerarhiju i
                sekcije usmjerene na konverziju, koje pomažu biznisima da svoje
                usluge profesionalno predstave online.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 border border-border rounded-md hover:bg-muted transition"
                >
                  Zatvori
                </button>

                <a
                  href={whatsappLink(`Pozdrav Adnane, zanima me sajt sličan konceptu "${selectedProject.title}". Molim Vas za više detalja.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition"
                >
                  Pišite mi na WhatsApp
                </a>

                <a
                  href={viberLink}
                  className="px-6 py-2 border border-border rounded-md hover:bg-muted transition"
                >
                  Viber
                </a>
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
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
