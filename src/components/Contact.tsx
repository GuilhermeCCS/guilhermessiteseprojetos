import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5582991301991?text=Ol%C3%A1!%20vim%20atrav%C3%A9s%20do%20seu%20site%2C%20gostaria%20de%20falar%20com%20um%20especialista";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Entre em Contato</h2>
            <div className="gold-divider" />
            <p className="text-muted-foreground max-w-2xl mx-auto font-sans mt-6">
              Pronto para transformar sua presença digital? Vamos conversar sobre 
              como posso ajudar seu negócio a se destacar na internet.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-secondary/50 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-sm text-muted-foreground font-sans">
                (82) 99130-1991
              </p>
            </div>

            <div className="text-center p-6 bg-secondary/50 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">
                E-mail
              </h3>
              <p className="text-sm text-muted-foreground font-sans">
                Contato via WhatsApp
              </p>
            </div>

            <div className="text-center p-6 bg-secondary/50 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">
                Localização
              </h3>
              <p className="text-sm text-muted-foreground font-sans">
                Alagoas, Brasil
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              variant="gold"
              size="lg"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale Comigo Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
