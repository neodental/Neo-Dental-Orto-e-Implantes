import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/lovable-uploads/519c3f8d-b73d-4853-9a55-88f0b08e37da.png",
      alt: "Recepção da Neo Dental",
      title: "Recepção Moderna"
    },
    {
      src: "/lovable-uploads/57d3cbf6-ee0c-4fb3-b8fd-57387c45832d.png",
      alt: "Sala de espera da clínica",
      title: "Sala de Espera"
    },
    {
      src: "/lovable-uploads/57cda24e-e0c3-4932-901b-bee54f5f416d.png",
      alt: "Corredor da clínica",
      title: "Corredor"
    },
    {
      src: "/lovable-uploads/c7b11550-9fa5-40e8-a555-54ebdef9683e.png",
      alt: "Consultório",
      title: "Consultório"
    },
    {
      src: "/lovable-uploads/fa6a9606-f466-4bc8-b5dd-6a87705b2266.png",
      alt: "Cadeira odontológica",
      title: "Cadeira Odontológica"
    },
    {
      src: "/lovable-uploads/f2e3712b-50a4-4883-b9df-974989cfb650.png",
      alt: "Área de descanso pós procedimentos",
      title: "Área de descanso pós procedimentos"
    },
    {
      src: "/lovable-uploads/514b480c-bd33-4e3d-a6d4-dec4796eaaca.png",
      alt: "Escritório",
      title: "Escritório"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-dental-blue-lighter/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossa Clínica
          </h2>
          <div className="w-24 h-1 bg-dental-gold mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossas instalações modernas e confortáveis, 
            projetadas para oferecer o melhor atendimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-dental-card hover:shadow-dental-glow transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 border-none">
          <div className="relative">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-primary/80 text-dental-white rounded-full p-2 hover:bg-primary transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Imagem ampliada"
                className="w-full h-auto rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;