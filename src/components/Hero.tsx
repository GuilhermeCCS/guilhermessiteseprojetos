import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5582991301991?text=Ol%C3%A1!%20vim%20atrav%C3%A9s%20do%20seu%20site%2C%20gostaria%20de%20falar%20com%20um%20especialista";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          {/* Gold accent line */}
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground mb-6 leading-tight">
            Desenvolvimento Web
            <br />
            <span className="text-gold">de Alto Padrão</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
            Soluções digitais profissionais que transformam sua presença online 
            em resultados concretos para seu negócio.
          </p>

          <Button
            variant="gold"
            size="lg"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Fale Comigo
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
