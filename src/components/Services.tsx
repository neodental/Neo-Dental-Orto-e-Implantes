import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import orthodonticsIcon from "@/assets/orthodontics-icon.png";
import implantIcon from "@/assets/implant-icon.png";
import prostheticsIcon from "@/assets/prosthetics-icon.png";
import surgeryIcon from "@/assets/surgery-icon.png";
import cosmeticIcon from "@/assets/cosmetic-icon.png";
import { Camera, Scan, Sparkles, Award } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      title: "Ortodontia",
      description: "Correção do posicionamento dos dentes e estruturas maxilares com tecnologia avançada e aparelhos modernos.",
      icon: orthodonticsIcon
    },
    {
      title: "Implantodontia",
      description: "Reposição de dentes perdidos com implantes de titânio, devolvendo função mastigatória e estética.",
      icon: implantIcon
    },
    {
      title: "Prótese",
      description: "Restauração e reabilitação oral com próteses fixas e removíveis de alta qualidade.",
      icon: prostheticsIcon
    },
    {
      title: "Cirurgias",
      description: "Procedimentos cirúrgicos orais realizados com precisão e cuidado em ambiente seguro.",
      icon: surgeryIcon
    }
  ];

  const additionalServices = [
    {
      title: "Odontologia Estética",
      description: "Transformação do seu sorriso com procedimentos estéticos avançados e materiais de primeira linha.",
      icon: cosmeticIcon
    },
    {
      title: "Lentes de Contato Dental",
      description: "Laminados ultrafinos para correção de imperfeições e criação de sorrisos perfeitos.",
      icon: <Sparkles className="h-8 w-8 text-primary" />
    },
    {
      title: "Coroas de Porcelana",
      description: "Restaurações completas em porcelana com estética natural e durabilidade excepcional.",
      icon: <Award className="h-8 w-8 text-primary" />
    },
    {
      title: "Raio-x Panorâmico",
      description: "Diagnóstico preciso com equipamentos de radiologia digital de última geração.",
      icon: <Scan className="h-8 w-8 text-primary" />
    },
    {
      title: "Consultas com Câmera Intraoral",
      description: "Exames detalhados com tecnologia de imagem intraoral para diagnósticos precisos.",
      icon: <Camera className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-dental-gold mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos odontológicos com tecnologia de ponta 
            e profissionais especializados.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-dental-card transition-all duration-300 hover:scale-105 border-none bg-gradient-card"
            >
              <CardHeader className="pb-4">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src={service.icon} alt={service.title} className="h-12 w-12" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-dental-blue-lighter/10 rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Serviços Especializados
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-dental-card transition-all duration-300 hover:scale-105 border-none bg-dental-white"
              >
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {typeof service.icon === 'string' ? (
                      <img src={service.icon} alt={service.title} className="h-8 w-8" />
                    ) : (
                      service.icon
                    )}
                  </div>
                  <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;