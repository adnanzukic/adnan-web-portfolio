import { Link } from "react-router-dom";
import { Linkedin, Github } from "lucide-react";
import { CONTACT, telLink, mailLink } from "@/lib/contact";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container-narrow px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              Adnan<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Freelance web developer koji malim biznisima pomaže da dobiju moderan sajt.
            </p>
            <p className="text-muted-foreground text-sm mt-4">
              E-mail:{" "}
              <a href={mailLink} className="text-primary hover:underline">
                {CONTACT.email}
              </a>
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Telefon:{" "}
              <a href={telLink} className="text-primary hover:underline">
                {CONTACT.phoneDisplay}
              </a>
            </p>
          </div>

          {/* Brzi linkovi */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Brzi linkovi
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Početna", path: "/" },
                { label: "O meni", path: "/about" },
                { label: "Usluge", path: "/services" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Kontakt", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Povežimo se
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/adnan-zuki%C4%87-b51607342/"
                 target="_blank"
                 rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/adnanzukic"
                 target="_blank"
                 rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Adnan – Web developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
