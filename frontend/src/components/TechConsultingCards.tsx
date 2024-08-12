import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
    return (
      <div className="max-w-sm overflow-hidden bg-transparent text-center">
        <img className="h-20 mx-auto" src={imageSrc} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    );
};


const TechConsultingCards: React.FC = () => {
    const cardData = [
        {
            imageSrc: '/img/TechConsultingCardIcons/aplicativos-web.png',
            title: 'APLICATIVOS WEB',
            description: 'Somos el aliado perfecto para ayudarte a maximizar el potencial digital de tu compañía. En conjunto con tu equipo definimos estrategias e implementamos soluciones punta a punta integradas por los mejores expertos y las mejores tecnologías para ayudarte en tu proceso de transformación digital y ser cada vez más competitivo en un mundo en constante cambio.',
        },
        {
            imageSrc: '/img/TechConsultingCardIcons/arquitectura.png',
            title: 'DESARROLLO DE SOFTWARE',
            description: `Conceptualizamos, analizamos, diseñamos, construimos y garantizamos la calidad de las aplicaciones de software de tu compañía con el objetivo de contribuir a la eficiencia de los procesos estratégicos, operativos y de soporte.<br /><strong>DESARROLLO DE SOFTWARE<br />SOFTWARE QUALITY ASSURANCE</strong>`,
        },
        {
            imageSrc: '/img/TechConsultingCardIcons/desarrollo-software.png',
            title: 'SERVICIOS ADMINISTRADOS DE APLICACIONES',
            description: 'Implementamos modelos de servicios de largo plazo que permiten a los clientes entregar el control de portafolios de aplicaciones en formatos de Gestión de portfolios AMS (Application Managed Services) o Factorías de Software.',
        },
        {
            imageSrc: '/img/TechConsultingCardIcons/gestion-api.png',
            title: 'INTEGRACIONES',
            description: 'Modelamos servicios de integración que permiten a los clientes disponer de una capacidad altamente entrenada en los distintas plataformas de Integración.',
        },
        {
            imageSrc: '/img/TechConsultingCardIcons/integraciones.png',
            title: 'ARQUITECTURA',
            description: 'Evaluamos, analizamos modelos de arquitectura que permiten a las organizaciones definir su roadmap de sistemas asistiéndolos, definiéndolos y acompañándolas en formato proyecto y servicios.',
        },
        {
            imageSrc: '/img/TechConsultingCardIcons/servicios-admin-aplicaciones.png',
            title: 'GESTIÓN DE API´S',
            description: 'Implementamos, evaluamos arquitecturas que evolucionan hacia productos de API Management, transformando hacia un modelo que escala en nuevos negocios.',
        },
    ];
  
        return (
          <div className="flex justify-center relative bg-white py-32 overflow-hidden">
            <div className="absolute top-0 left-0 ">
            <img
        className="w-full h-auto object-cover object-center"
        style={{
          width: 'calc(50vw + (60 - 50) * ((100vw - 320px) / (1600 - 320)))',
          maxWidth: '775px',
        }}
        src="/img/bg/bkg-nosotros.png"
        alt="Background Image"
      />
            </div>
            <div className="container px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {cardData.map((card, index) => (
                  <Card
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      };
export default TechConsultingCards;
