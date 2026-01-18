import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 border-t border-primary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6">
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
