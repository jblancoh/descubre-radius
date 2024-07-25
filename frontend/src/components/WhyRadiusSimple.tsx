


interface WhyRadiusSimpleProps {
    type: 'tech' | 'analytics'
  }
  
  const WhyRadiusSimple: React.FC<WhyRadiusSimpleProps> = ({ type }) => {
    const colorClasses = {
      "tech": "bg-tech-600",
      "analytics": "bg-analytics-600",
    };
  
    return (
      <div className={`w-full flex justify-center items-center p-20 ${colorClasses[type]}`}>
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-4">¿Porqué Radius?</h1>
          <h2 className="text-xl">Somos una consultora de <strong>tecnología boutique</strong></h2>
          <p className="mt-2">Ofrecemos atención y seguimiento personalizado y transparencia en procesos</p>
          <button className="mt-4 px-4 py-2 border-2 border-white rounded-full hover:bg-white hover:text-tech-600">
            Conoce más de Radius
          </button>
        </div>
      </div>
    );
  };
  
  export default WhyRadiusSimple;