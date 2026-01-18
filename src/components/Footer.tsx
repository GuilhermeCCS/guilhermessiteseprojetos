import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-12 border-t border-gold/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gold/50">
              <img
                src={logo}
                alt="Logo GS"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-primary-foreground font-serif text-lg tracking-wide">
              Guilherme Cruz da Silva
            </span>
          </div>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-gold/30" />

          {/* Copyright */}
          <p className="text-primary-foreground/60 text-sm font-sans text-center">
            © {currentYear} Guilherme Cruz da Silva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
