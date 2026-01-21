import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/5582991301991?text=Ol%C3%A1!%20vim%20atrav%C3%A9s%20do%20seu%20site%2C%20gostaria%20de%20falar%20com%20um%20especialista";
const INSTAGRAM_URL = "https://www.instagram.com/guilhermessiteseprojetos/";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 border-t border-primary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 glow-border">
              <img
                src={logo}
                alt="Logo GS"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-foreground font-sans text-lg font-semibold tracking-wide">
              Guilherme S Sites e Projetos
            </span>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h3 className="text-muted-foreground font-sans text-sm uppercase tracking-wider mb-4">
              Redes Sociais
            </h3>
            <div className="flex items-center justify-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm font-sans text-center">
            © {currentYear} Guilherme S Sites e Projetos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
