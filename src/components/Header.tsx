import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/5582991301991?text=Ol%C3%A1!%20vim%20atrav%C3%A9s%20do%20seu%20site%2C%20gostaria%20de%20falar%20com%20um%20especialista";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <a href="#inicio" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg glow-border transition-all duration-300 group-hover:border-primary group-hover:scale-105">
              <img
                src={logo}
                alt="Logo GS"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-foreground font-sans text-lg md:text-xl font-semibold tracking-wide">
              Guilherme S Sites e Projetos
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-muted-foreground hover:text-primary transition-all duration-300 text-sm uppercase tracking-wider font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="cyber" size="default" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Solicite um Orçamento
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary/20 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wider font-medium py-2 hover:translate-x-2 transform"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-primary/20">
                <Button variant="cyber" size="sm" asChild className="w-full">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Solicite um Orçamento
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
