'use client';
import { FC, useRef } from 'react';
import useTransition from '@/hooks/useTransition';
import { cn } from '@/lib/utils';

interface BannerServiceProps {
  type: 'tech' | 'analytics'
}

const BannerService: FC<BannerServiceProps> = ({ type }) => {
  const bannerRef = useRef(null);
  const { applicableXNegativeStyle, applicableJumpInAnimation, customTransitionStyles } = useTransition(bannerRef);

  const colorClasses = {
    "tech": "bg-tech-400",
    "analytics": "bg-analytics-400",
  };
  
  const fontColorClasses = {
    "tech": "text-tech-500 border-l-tech-500",
    "analytics": "text-analytics-500 border-l-analytics-500",
  };

  return (
    <div ref={bannerRef} className={cn("flex text-white", colorClasses[type])}>
      <div className={cn("flex flex-1 flex-col py-10 px-5 md:p-20 justify-center", fontColorClasses[type])}>
        <img
          className={cn('w-6/12  md:w-3/12', applicableXNegativeStyle)}
          src="/img/radius_name.svg"
          alt="Logo Radius"
          style={customTransitionStyles}
        />
        <p className={cn("text-2xl font-semibold pb-5", applicableXNegativeStyle)} style={{'transition': 'opacity 3s, transform 3s'}}>
          <span className={cn("inline-block border-l-[6px] border-b-[6px] border-t-[6px] w-3 h-3 border-transparent bg-transparent", fontColorClasses[type])} />
          {type[0].toUpperCase() + type.slice(1)}
        </p>
        {type === 'tech' ? (
            <>
              <p className='text-xl'>
                <strong>Nos convertimos en tu área externa de TI</strong> con el fin de resolver problemáticas o amenzas que pueden impactar en la productividad o desempeño de su negocio.
              </p>
              <br />
              <p className='text-xl'>
                Buscamos <strong>ser el área interna de referencia</strong> para la creación, validación e innovación de soluciones tecnológicas digitales de alta calidad, alineados con la A.E., normativas, estándares, políticas y buenas prácticas internacionales.
              </p>
            </>
        ) : (
          <>
            <p className="text-xl">
              En el contexto de la actualidad, las empresas digitales se encuentran en la vanguardia, luchando por la atención de los consumidores y dominar en el mercado. No obstante, enormes volúmenes de información fluyen a través de nuestras redes, sistemas y dispositivos. La cuestión técnica es: <strong>¿Cómo extraer valor de esta riqueza de datos de manera eficiente?</strong>
            </p>
            <br />
            <p className="text-xl">
              En <strong>RADIUS convertimos la complejidad</strong> de recolección y procesamiento de la data, en <strong>potentes soluciones</strong> que facilitan la generación de información, toma de decisiones, optimización de procesos y <strong>generación de valor al negocio.</strong>
            </p>
          </>
        )}
      </div>
      <div className="hidden lg:flex w-2/5 ">
        <img 
          src={type === 'tech' ? "/img/icon-radius-tech.svg" : "/img/radius-analytics.svg" } 
          alt="Radius Icon"
          className={`-mx-10 mt-44 z-10 ${applicableJumpInAnimation}`}
          style={{'transition': 'opacity 0.5s, transform 0.5s'}}
        />
        <img
          src={type === 'tech' ? "/img/Tech-header.jpg" : "/img/bg-analytics.jpg" }
          alt={type === 'tech' ? "Tech Header" : "Analytics Header" }
        />
      </div>
    </div>
  );
};

export default BannerService;
