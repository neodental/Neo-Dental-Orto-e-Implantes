import { Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-dental-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-dental-white p-2 rounded-lg shadow-dental">
                <img src="/lovable-uploads/6ca34978-3268-4084-84ca-9d9631831cee.png" alt="Neo Dental Logo" className="h-12 w-auto" />
              </div>
            </div>
            <p className="text-dental-white/80 leading-relaxed">
              Neo Dental Orto e Implantes - Transformando sorrisos com tecnologia avançada e cuidado humanizado.
            </p>
          </div>

          {/* Unidade Goiana */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-slate-50">Unidade Goiana</h4>
            <div className="space-y-3 text-dental-white/80">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>R. Augusta, 29, Goiana - PE</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>081 3626-1167</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+55 81 99522-4348</span>
              </div>
              <div className="flex items-center">
                <Instagram className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="https://www.instagram.com/neodentalgoianape/" target="_blank" rel="noopener noreferrer" className="hover:text-dental-gold transition-colors">
                  @neodentalgoianape
                </a>
              </div>
            </div>
          </div>

          {/* Unidade Sapé */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-slate-50">Unidade Sapé</h4>
            <div className="space-y-3 text-dental-white/80">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Av. Comendador Renato Ribeiro Coutinho, 1539 - Sapé, PB</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>081 3283-1380</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+55 81 99132-0775</span>
              </div>
              <div className="flex items-center">
                <Instagram className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="https://www.instagram.com/neo_dentalsape/" target="_blank" rel="noopener noreferrer" className="hover:text-dental-gold transition-colors">
                  @neo_dentalsape
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-slate-50">Nossos Serviços</h4>
            <ul className="space-y-2 text-dental-white/80">
              <li>Ortodontia</li>
              <li>Implantodontia</li>
              <li>Prótese</li>
              <li>Cirurgias</li>
              <li>Odontologia Estética</li>
              <li>Lentes de Contato Dental</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dental-white/20 mt-8 pt-8 text-center text-dental-white/60">
          <p>&copy; {currentYear} Neo Dental Orto e Implantes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;