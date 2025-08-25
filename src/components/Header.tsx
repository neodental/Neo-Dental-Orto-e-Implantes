import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import dentalIcon from "@/assets/dental-icon.png";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className="bg-gradient-dental text-dental-white shadow-dental-glow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-dental-white p-2 rounded-lg shadow-dental">
              <img src="/lovable-uploads/6ca34978-3268-4084-84ca-9d9631831cee.png" alt="Neo Dental Logo" className="h-12 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("inicio")} className="transition-colors duration-300 text-slate-50 text-base font-semibold">
              Início
            </button>
            <button onClick={() => scrollToSection("sobre")} className="hover:text-dental-gold transition-colors duration-300 font-semibold">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection("servicos")} className="hover:text-dental-gold transition-colors duration-300 font-semibold">
              Serviços
            </button>
            <button onClick={() => scrollToSection("galeria")} className="hover:text-dental-gold transition-colors duration-300 font-semibold">
              Galeria
            </button>
            <button onClick={() => scrollToSection("contato")} className="hover:text-dental-gold transition-colors duration-300 font-semibold">
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => scrollToSection("contato")} className="border-dental-white transition-all duration-300 text-slate-900 bg-gray-100">
              <Phone className="h-4 w-4 mr-2" />
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-dental-blue-light pt-4">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection("inicio")} className="text-left hover:text-dental-gold transition-colors duration-300">
                Início
              </button>
              <button onClick={() => scrollToSection("sobre")} className="text-left hover:text-dental-gold transition-colors duration-300">
                Sobre Nós
              </button>
              <button onClick={() => scrollToSection("servicos")} className="text-left hover:text-dental-gold transition-colors duration-300">
                Serviços
              </button>
              <button onClick={() => scrollToSection("galeria")} className="text-left hover:text-dental-gold transition-colors duration-300">
                Galeria
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-left hover:text-dental-gold transition-colors duration-300">
                Contato
              </button>
              <Button variant="outline" size="sm" className="mt-3 border-dental-white text-dental-white hover:bg-dental-white hover:text-primary transition-all duration-300 w-fit" onClick={() => scrollToSection("contato")}>
                <Phone className="h-4 w-4 mr-2" />
                Agendar Consulta
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;