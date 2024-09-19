import RedesignCard from "./ui/RedesignCard";


type CardData = {
  title: string;
  imageUrl: string;
  sentences: string[];
  moreLink?: string;
};

const TypesSolutions: React.FC = () => {

  const cards: CardData[] = [
    {
      title: "Data Solutions",
      imageUrl: "/img/TypesSolutions/data-solutions.png",
      sentences: [
        "Arquitectura de plataforma de datos",
        "Ingeniería de Datos Analítica (Big Data)"
      ],
      moreLink: "examplelink.example"
    },
    {
      title: "Analytic Solutions",
      imageUrl: "/img/TypesSolutions/analytic-solutions.png",
      sentences: [
        "D&A Products",
        "DS & Machine Learning"
      ],
      moreLink: "examplelink.example"
    },
    {
      title: "Business Solutions",
      imageUrl: "/img/TypesSolutions/business-solutions.png",
      sentences: [
        "Dara & Analytics Enablement",
        "Insights Frameworks (Accelerarion, Performance...)"
      ],
      moreLink: "examplelink.example"
    },
    {
      title: "Data Strategy Services",
      imageUrl: "/img/TypesSolutions/data-strategy-services.png",
      sentences: [
        "Assessment de Madurez Analítica",
        "Diseño de Estrategia de Talento D&A"
      ],
      moreLink: "examplelink.example"
    },
    {
      title: "Fábrica de software",
      imageUrl: "/img/TypesSolutions/factory-software.png",
      sentences: [
        "Reingeniería de Sistemas Legados",
        "Digitalización y Automatización de Procesos"
      ],
      moreLink: "examplelink.example"
    },
    {
      title: "Integración de software",
      imageUrl: "/img/TypesSolutions/integration-software.png",
      sentences: [
        "Infraestructura",
        "Arquitectura de Soluciones y Aplicaciones"
      ],
      moreLink: "examplelink.example"
    },
    {
      title: "Servicios Administrados",
      imageUrl: "/img/TypesSolutions/service-admin.png",
      sentences: [
        "Soporte Especializado de Productos",
        "Mantenimiento y Soporte de Aplicaciones, Productos, Sistemas, Procesos e Interfaces"
      ],
      moreLink: "examplelink.example"
    },
    {
      title: "Strategic Design",
      imageUrl: "/img/TypesSolutions/strategic-design.png",
      sentences: [
        "Problem Framing",
        "Opportunity Assessment"
      ],
      moreLink: "examplelink.example"
    },
    {
      title: "Innovation",
      imageUrl: "/img/TypesSolutions/innovation.png",
      sentences: [
        "Framework Design",
        "Business Process Transformation (Personas, Procesos, D&A, Tech)"
      ],
      moreLink: "examplelink.example"
    },
    {
      title: "UX / UI",
      imageUrl: "/img/TypesSolutions/ux-ui.png",
      sentences: [
        "UX Research",
        "UX / UI Design (Productos / Servicios digitales / Datos)"
      ],
      moreLink: "examplelink.example"
    }
  ];

  return (
<div className="w-full bg-[url('/img/bg/types-digital-solutions.png')] bg-cover bg-center p-8">
  <h2 className="font-bold text-3xl flex justify-center mt-16">¿Qué tipo de soluciones digitales buscas?</h2>
  <h3 className="text-2xl flex justify-center m-8 pb-10">Ofrecemos servicios holísticos y de generación ágil de valor tangible y accionable.</h3>
  <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mx-auto justify-items-center"> {/* Added mx-auto and justify-items-center */}
      {cards.map(card => (
        <RedesignCard
          key={card.title}
          title={card.title}
          imageUrl={card.imageUrl}
          sentences={card.sentences}
          moreLink={card.moreLink}
        />
      ))}
    </div>
  </div>
  <div className="flex justify-center m-20">
    <button className="rounded-full bg-red-500 text-white p-3 px-8 text-xl">Conoce más de nuestros capabilities</button>
  </div>
</div>


);
};

export default TypesSolutions;