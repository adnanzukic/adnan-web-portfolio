import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectLawfirm from "@/assets/project-lawfirm.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";

const projects = [
  { img: projectRestaurant, title: "Restaurant Website Concept", category: "Web Design" },
  { img: "/slike/gymweb.jpg", title: "Gym Website Concept", category: "Web Design" },
  { img: projectLawfirm, title: "Law Firm Website Concept", category: "Corporate" },
  { img: projectEcommerce, title: "Online Store Concept", category: "E-commerce" },
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
                  <div className="overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-xs font-medium uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-heading text-xl font-semibold text-foreground mt-2">{p.title}</h3>
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
