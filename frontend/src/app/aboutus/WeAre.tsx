"use client"
import { FC, useRef } from "react";
import useTransition from "@/hooks/useTransition";


const WeAre : FC = () => {
  const bannerRef = useRef(null);
  
  const {applicableYStyle, customTransitionStyles} = useTransition(bannerRef);

  return (
    <div className="w-full flex bg-primary text-white justify-center text-center" >
      <div ref={bannerRef} className="container lg:grid-cols-3 grid gap-4 pt-5">
        <div
          className={`flex flex-col justify-center items-center mx-5 ${applicableYStyle}`}
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
          className={`flex flex-col justify-center items-center mx-5 ${applicableYStyle}`}
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