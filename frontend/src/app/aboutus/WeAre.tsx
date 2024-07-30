"use client"
import { FC, useState, useEffect, useRef } from "react";

const baseTransitionClasses = "transition-all duration-[12000ms]";

const customTransitionStyles = {
  transition: 'opacity 2.5s, transform 2.5s'
};

const WeAre : FC = () => {
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

  return (
    <div className="w-full flex bg-primary text-white justify-center text-center" >
      <div ref={bannerRef} className="container flex flex-row justify-evenly">
        <div
          className={`flex flex-col justify-center items-center mx-5 ${baseTransitionClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={customTransitionStyles} >
          <h2 className="text-xl text-red-500">
            SOMOS
          </h2>
          <h2 className="text-xl font-bold text-red-500">
            SOCIOS
          </h2>
          <p className="font-medium py-5">
            Nos esforzamos y trabajamos para no ser únicamente proveedores, sino convertirnos en sus socios de negocio y asesores estratégicos confiables.
          </p>
        </div>
        <div
          className={`flex flex-col justify-center items-center mx-5 ${baseTransitionClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={customTransitionStyles} >
          <h2 className="text-xl text-red-500">
            SOMOS
          </h2>
          <h2 className="text-xl font-bold text-red-500">
            MULTI-INDUSTRIAS
          </h2>
          <p className="font-medium py-5">
            Nuestra experiencia en diferentes tipos de industria, nos permite adaptar nuestros servicios para satisfacer las necesidades específicas del sector de nuestros clientes.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mx-3">
          <img src="/img/Nosotros-valores.jpg" alt="Nosotros valores" className="w-11/12" />
        </div>
        
      </div>
    </div>
  );
}

export default WeAre;