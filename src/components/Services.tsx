import { Globe, Calendar, Scale, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description:
      "Presença online profissional para empresas e profissionais liberais, com design elegante e navegação intuitiva.",
  },
  {
    icon: Scale,
    title: "Sites Jurídicos",
    description:
      "Websites que respeitam a sobriedade e ética da advocacia, transmitindo credibilidade e profissionalismo.",
  },
  {
    icon: Calendar,
    title: "Sistemas de Agendamento",
    description:
      "Ferramentas práticas para gestão de compromissos, integradas ao seu fluxo de trabalho diário.",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description:
      "Projetos adaptáveis a qualquer dispositivo, garantindo experiência perfeita em desktop, tablet e mobile.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground tracking-tight mb-4">
            Serviços
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-primary-foreground/70 max-w-2xl mx-auto font-sans">
            Soluções digitais personalizadas para atender às necessidades específicas do seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-navy-light border-gold/20 hover:border-gold/40 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-gold" />
                </div>
                <CardTitle className="text-primary-foreground font-serif text-lg">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/70 text-sm font-sans leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
