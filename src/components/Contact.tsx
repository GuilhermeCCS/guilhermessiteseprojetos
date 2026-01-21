import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin, Instagram, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WHATSAPP_URL = "https://wa.me/5582991301991?text=Ol%C3%A1!%20vim%20atrav%C3%A9s%20do%20seu%20site%2C%20gostaria%20de%20falar%20com%20um%20especialista";
const EMAIL_URL = "mailto:guilhermecru463@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/guilhermessiteseprojetos/";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className={`max-w-4xl mx-auto scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Entre em Contato</h2>
            <div className="cyber-divider" />
            <p className="text-muted-foreground max-w-2xl mx-auto font-sans mt-6">
              Pronto para transformar sua presença digital? Vamos conversar sobre 
              como posso ajudar seu negócio a se destacar na internet.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-6 glass-card hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-sans font-semibold text-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-sm text-muted-foreground font-sans">
                (82) 99130-1991
              </p>
            </a>

            <a 
              href={EMAIL_URL}
              className="text-center p-6 glass-card hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-sans font-semibold text-foreground mb-2">
                E-mail
              </h3>
              <p className="text-xs text-muted-foreground font-sans break-all">
                guilhermecru463@gmail.com
              </p>
            </a>

            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center p-6 glass-card hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-sans font-semibold text-foreground mb-2">
                Instagram
              </h3>
              <p className="text-sm text-muted-foreground font-sans">
                @guilhermessiteseprojetos
              </p>
            </a>

            <div className="text-center p-6 glass-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-sans font-semibold text-foreground mb-2">
                Localização
              </h3>
              <p className="text-sm text-muted-foreground font-sans">
                Alagoas, Brasil
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="cyber"
              size="lg"
              asChild
              className="group"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicite um Orçamento
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
            >
              <a href={EMAIL_URL}>
                <Mail className="w-5 h-5 mr-2" />
                Envie um E-mail
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
