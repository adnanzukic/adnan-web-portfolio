import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import gymweb from "@/assets/gymweb.jpg";
import lawfirm from "@/assets/project-lawfirm.png";
import ecommerce from "@/assets/project-ecommerce.png";
import restaurant from "@/assets/project-restaurant.png";

const projects = [
  { img: gymweb, title: "Gym Website Concept", category: "Web Design" },
  { img: lawfirm, title: "Lawfirm Website Concept", category: "Web Design" },
  { img: ecommerce, title: "Ecommerce Website Concept", category: "E-commerce" },
  { img: restaurant, title: "Restaurant Website Concept", category: "Web Design" },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-16">
              A showcase of concept projects demonstrating modern web design.
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
                      <button className="px-6 py-2 border border-white text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition">
                        View Project
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

      <Footer />
    </div>
  );
};

export default Portfolio;
