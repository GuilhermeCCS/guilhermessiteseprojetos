import { Code, Users, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Quem Sou</h2>
            <div className="cyber-divider" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Text Content - Spans 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-foreground leading-relaxed font-sans">
                Olá! Sou <strong className="text-primary font-semibold">Guilherme Cruz da Silva</strong>, 
                desenvolvedor web em formação (T.I.) e apaixonado por tecnologia. 
                Aos 22 anos, dedico meu conhecimento técnico para ajudar profissionais 
                a se destacarem na internet.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                Meu foco vai além do código: crio ferramentas que resolvem problemas. 
                Tenho experiência no desenvolvimento de sistemas de agendamento práticos 
                e sites jurídicos que respeitam a sobriedade da profissão.
              </p>

              <p className="text-lg text-primary font-semibold">
                Vamos construir sua presença digital juntos?
              </p>
            </div>

            {/* Stats/Highlights */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 glass-card">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground">
                    Desenvolvedor Web
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    Formação em T.I.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 glass-card">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground">
                    Sites Jurídicos
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    Especialização no setor
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 glass-card">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground">
                    Sistemas de Agendamento
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    Soluções práticas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
