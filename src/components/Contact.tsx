import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Instagram, MessageCircle, Clock } from "lucide-react";
const Contact = () => {
  const units = [{
    name: "Unidade Goiana",
    whatsapp: "+55 81 99522-4348",
    phone: "081 3626-1167",
    maps: "https://www.google.com.br/maps/place/R.+Augusta,+29,+Goiana+-+PE,+55900-000/@-7.5597519,-34.999059,17z/data=!3m1!4b1!4m5!3m4!1s0x7ab62885d52325f:0xb8bb92fd2a89ccd6!8m2!3d-7.5597572!4d-34.9968703?shorturl=1",
    instagram: "https://www.instagram.com/neodentalgoianape/",
    address: "R. Augusta, 29, Goiana - PE"
  }, {
    name: "Unidade Sapé",
    whatsapp: "+55 81 99132-0775",
    phone: "081 3283-1380",
    maps: "https://www.google.com.br/maps/place/Av.+Comendador+Renato+Ribeiro+Coutinho,+1539+-+Sap%C3%A9,+PB,+58340-000/@-7.0992526,-35.2285039,17z/data=!3m1!4b1!4m6!3m5!1s0x7ac581af8153ed7:0x1f920d6b526a5351!8m2!3d-7.0992526!4d-35.2285039!16s%2Fg%2F11vjp_9zv7?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D",
    instagram: "https://www.instagram.com/neo_dentalsape/",
    address: "Av. Comendador Renato Ribeiro Coutinho, 1539 - Sapé, PB"
  }];
  const openWhatsApp = (number: string, unit: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar uma consulta na ${unit}.`);
    window.open(`https://wa.me/${number.replace(/\D/g, '')}?text=${message}`, '_blank');
  };
  const openMaps = (url: string) => {
    window.open(url, '_blank');
  };
  const openInstagram = (url: string) => {
    window.open(url, '_blank');
  };
  return <section id="contato" className="py-20 bg-gradient-dental text-dental-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossas Unidades
          </h2>
          <div className="w-24 h-1 bg-dental-gold mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Estamos prontos para atendê-lo em nossas duas unidades. 
            Entre em contato e agende sua consulta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {units.map((unit, index) => <Card key={index} className="bg-dental-white/10 backdrop-blur-sm border-dental-white/20 text-dental-white hover:bg-dental-white/15 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold mb-4 text-slate-50">
                  {unit.name}
                </CardTitle>
                <div className="flex items-center justify-center text-dental-white/80 mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{unit.address}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <Button onClick={() => openWhatsApp(unit.whatsapp, unit.name)} className="bg-green-600 hover:bg-green-700 py-3 transition-all duration-300 hover:scale-105 text-slate-50 font-semibold">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp: {unit.whatsapp}
                  </Button>
                  
                  <Button variant="outline" onClick={() => window.open(`tel:${unit.phone.replace(/\D/g, '')}`)} className="border-dental-white font-semibold py-3 transition-all duration-300 bg-blue-700 hover:bg-blue-600 text-slate-50">
                    <Phone className="h-5 w-5 mr-2" />
                    Telefone: {unit.phone}
                  </Button>
                  
                  <Button variant="outline" onClick={() => openMaps(unit.maps)} className="border-dental-gold font-semibold py-3 transition-all duration-300 text-slate-50 bg-slate-950 hover:bg-slate-800">
                    <MapPin className="h-5 w-5 mr-2" />
                    Ver no Google Maps
                  </Button>
                  
                  <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-primary font-semibold py-3 transition-all duration-300" onClick={() => openInstagram(unit.instagram)}>
                    <Instagram className="h-5 w-5 mr-2" />
                    Siga no Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Hours Info */}
        <div className="bg-dental-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-dental-gold mr-3" />
            <h3 className="text-2xl font-bold text-center">Horário de Funcionamento</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-lg">
            <div>
              <p className="font-semibold text-slate-50">Segunda à Sexta</p>
              <p className="opacity-90">8:00 às 18:00</p>
            </div>
            <div>
              <p className="font-semibold text-slate-50">Sábado</p>
              <p className="opacity-90">8:00 às 12:00</p>
            </div>
          </div>
          <p className="mt-4 text-dental-white/80">
            Atendimento de urgência via WhatsApp 24h
          </p>
        </div>
      </div>
    </section>;
};
export default Contact;