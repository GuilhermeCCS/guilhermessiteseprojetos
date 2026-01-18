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
    <section id="servicos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Serviços
          </h2>
          <div className="cyber-divider" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">
            Soluções digitais personalizadas para atender às necessidades específicas do seu negócio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-lg border-primary/20 hover:border-primary/50 transition-all duration-300 group hover:glow-border"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-foreground font-sans text-lg">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">
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
