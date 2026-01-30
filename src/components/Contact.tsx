import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Instagram, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const units = [
    {
      name: "Unidade Goiana",
      whatsappLabel: "+55 81 99522-4348",
      whatsappLink:
        "https://tintim.link/whatsapp/be7ec391-d269-4da0-b547-693360bbc40c/090c8c34-3a50-4b92-80a3-5874649310ad",
      phone: "081 3626-1167",
      maps:
        "https://www.google.com.br/maps/place/R.+Augusta,+29,+Goiana+-+PE,+55900-000/",
      instagram: "https://www.instagram.com/neodentalgoianape/",
      address: "R. Augusta, 29, Goiana - PE"
    },
    {
      name: "Unidade Sapé",
      whatsappLabel: "+55 81 99132-0775",
      whatsappLink:
        "https://tintim.link/whatsapp/ec8ce6e9-8aec-48af-9c49-d6b37a4ce6ae/c146318f-2287-4c59-8f92-4ce493569246",
      phone: "081 3283-1380",
      maps:
        "https://www.google.com.br/maps/place/Av.+Comendador+Renato+Ribeiro+Coutinho,+1539+-+Sap%C3%A9,+PB",
      instagram: "https://www.instagram.com/neo_dentalsape/",
      address: "Av. Comendador Renato Ribeiro Coutinho, 1539 - Sapé, PB"
    }
  ];

  const openExternal = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-gradient-dental text-dental-white">
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
          {units.map((unit, index) => (
            <Card
              key={index}
              className="bg-dental-white/10 backdrop-blur-sm border-dental-white/20 text-dental-white hover:bg-dental-white/15 transition-all duration-300"
            >
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
                  <Button
                    onClick={() => openExternal(unit.whatsappLink)}
                    className="bg-green-600 hover:bg-green-700 py-3 transition-all duration-300 hover:scale-105 text-slate-50 font-semibold"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp: {unit.whatsappLabel}
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(`tel:${unit.phone.replace(/\D/g, "")}`)
                    }
                    className="border-dental-white font-semibold py-3 transition-all duration-300 bg-blue-700 hover:bg-blue-600 text-slate-50"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Telefone: {unit.phone}
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => openExternal(unit.maps)}
                    className="border-dental-gold font-semibold py-3 transition-all duration-300 text-slate-50 bg-slate-950 hover:bg-slate-800"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                    Ver no Google Maps
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => openExternal(unit.instagram)}
                    className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-primary font-semibold py-3 transition-all duration-300"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    Siga no Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Horário */}
        <div className="bg-dental-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-dental-gold mr-3" />
            <h3 className="text-2xl font-bold">Horário de Funcionamento</h3>
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
    </section>
  );
};

export default Contact;