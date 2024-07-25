"use client"
import { useEffect, useState, useRef } from 'react';

const RadiusToday = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (observer && bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  const baseTransitionClasses = "transition-all duration-[12000ms]";

  const customTransitionStyles = {
    transition: 'opacity 2.5s, transform 2.5s'
  };

  return (
    <div className="w-full bg-gray-100 flex justify-center lg:py-28">
      <div ref={bannerRef} className="w-full max-w-screen-2xl flex flex-col lg:flex-row h-auto relative">
        <div className="w-full lg:w-[45%] flex items-center justify-center p-4 lg:pl-28 lg:pr-10 relative">
          <div>
            <h1
              className={`text-4xl font-bold text-red-500 mb-4 flex pb-8 ${baseTransitionClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={customTransitionStyles}
            >
              Radius Hoy
            </h1>
            <p
              className={`mb-6 text-gray-700 ${baseTransitionClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={customTransitionStyles}
            >
              Actualmente somos una firma consultora de tecnología integral, sólida, orgullosamente mexicana, que <strong>a lo largo de 10 años</strong> hemos podido servir a diversos sectores económicos e industriales, especializándonos en proveer servicios de consultoría estratégica y soluciones innovadoras de data y analítica avanzada; inteligencia de negocios; digitalización y automatización de procesos.
            </p>
            <p
              className={`text-gray-700 ${baseTransitionClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={customTransitionStyles}
            >
              <strong>Nuestro equipo de consultores</strong> tiene el compromiso de guiar a nuestros clientes a poner en marcha e implementar herramientas de automatización y estrategias empresariales para renovar sus sistemas y procesos, impulsando el cumplimiento de los objetivos estratégicos, financieros y comerciales de la organización, ayudándolo a explorar y conquistar nuevas oportunidades.
            </p>
          </div>
        </div>
        <div
          className={`w-full lg:w-[45%] flex items-center justify-center relative mt-8 lg:mt-0 ${baseTransitionClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          style={customTransitionStyles}
        >
          <img
            src="/img/equipo.png"
            alt="People in a meeting"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RadiusToday;
