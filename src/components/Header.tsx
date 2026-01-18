import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <a href="#inicio" className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/50 shadow-lg">
              <img
                src={logo}
                alt="Logo GS"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-primary-foreground font-serif text-lg md:text-xl font-medium tracking-wide">
              Guilherme Cruz da Silva
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gold/20 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
