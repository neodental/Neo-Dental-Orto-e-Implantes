import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Users, Award } from "lucide-react";
const About = () => {
  return <section id="sobre" className="py-20 bg-dental-blue-lighter/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Sobre Nós
          </h2>
          <div className="w-24 h-1 bg-dental-gold mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-primary mb-6">
              Seja bem-vindo!
            </h3>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                A Clínica Neo Dental Orto e Implantes tem como prioridade a <strong className="text-primary">biossegurança, qualidade, agilidade e acessibilidade</strong> à todos os tratamentos odontológicos.
              </p>
              <p>
                Contamos com profissionais especializados em suas respectivas áreas, possibilitando a resolução dos tratamentos de alta complexidade em um único lugar e no menor tempo possível.
              </p>
              <p>
                Através de procedimentos exclusivos e atendimento premium para sua necessidade, a Neo Dental trabalha diariamente pelo seu bem-estar, com garantia de um resultado <strong className="text-primary">impecável e duradouro</strong> para o seu sorriso.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <img src="/lovable-uploads/519c3f8d-b73d-4853-9a55-88f0b08e37da.png" alt="Recepção da Neo Dental" className="rounded-2xl shadow-dental-card w-full h-auto object-cover" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-dental-card transition-all duration-300 hover:scale-105 bg-gradient-card border-none">
            <CardContent className="p-0">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Biossegurança</h4>
              <p className="text-muted-foreground">Protocolos rigorosos de segurança e higienização.</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-dental-card transition-all duration-300 hover:scale-105 bg-gradient-card border-none">
            <CardContent className="p-0">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Agilidade</h4>
              <p className="text-muted-foreground">Tratamentos eficientes no menor tempo possível.</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-dental-card transition-all duration-300 hover:scale-105 bg-gradient-card border-none">
            <CardContent className="p-0">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Especialistas</h4>
              <p className="text-muted-foreground">Profissionais especializados em suas áreas.</p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 hover:shadow-dental-card transition-all duration-300 hover:scale-105 bg-gradient-card border-none">
            <CardContent className="p-0">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">Qualidade</h4>
              <p className="text-muted-foreground">Resultados impecáveis e duradouros.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;