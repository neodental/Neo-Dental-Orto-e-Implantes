import { Button } from "@/components/ui/button";
import { Phone, Calendar, MapPin } from "lucide-react";
import neoLogo from "@/assets/neo-dental-logo-clean.png";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="inicio" className="relative min-h-screen flex items-center" style={{
    backgroundImage: 'url(/lovable-uploads/822533f1-9447-4efe-8496-6dd4c3030743.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <div className="absolute inset-0 bg-primary/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-dental-white">
          <div className="mb-8 animate-fade-in">
            
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 animate-fade-in font-bold">
            NEO DENTAL
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-dental-gold animate-fade-in">
            Orto e Implantes
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in">
            Transformamos sorrisos com tecnologia avançada, 
            cuidado humanizado e excelência em tratamentos odontológicos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-semibold px-8 py-4 text-lg shadow-dental-glow transition-all duration-300 hover:scale-105" onClick={() => scrollToSection("contato")}>
              <Phone className="h-5 w-5 mr-2" />
              Agendar Consulta
            </Button>
            
            <Button variant="outline" size="lg" onClick={() => scrollToSection("sobre")} className="border-white text-primary hover:text-primary px-8 py-4 text-lg transition-all duration-300 hover:scale-105 font-semibold bg-white">
              <MapPin className="h-5 w-5 mr-2" />
              Conheça Nossa Clínica
            </Button>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-dental-gold mb-2">15+</div>
              <div className="text-dental-white">Anos de Experiência</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-dental-gold mb-2">2</div>
              <div className="text-dental-white">Unidades</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-dental-gold mb-2">100%</div>
              <div className="text-dental-white">Biossegurança</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-dental-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-1 h-8 bg-dental-gold rounded-full mb-2"></div>
          <span className="text-sm">Role para baixo</span>
        </div>
      </div>
    </section>;
};
export default Hero;