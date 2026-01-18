import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5582991301991?text=Ol%C3%A1!%20vim%20atrav%C3%A9s%20do%20seu%20site%2C%20gostaria%20de%20falar%20com%20um%20especialista";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
};

export default WhatsAppButton;
