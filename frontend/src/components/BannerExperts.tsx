import React from 'react';
import Link from 'next/link';



const BannerExperts = () => {
    return (
      <div className="container flex justify-center space-x-12 gap-[4rem] py-[400px]">
        {/* First Column */}
        <div className="w-1/3 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-red-500">Somos expertos</h2>
            <p className="mt-4 text-gray-700">
              Empresas y organizaciones, sin importar su tamaño, se asocian con RADIUS para:
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Mejorar la toma de decisiones estratégicas</li>
              <li>Aumentar su eficacia y eficiencia operativa</li>
              <li>Implementar nuevas tecnologías</li>
              <li>Incentivar el crecimiento</li>
              <li>Generar valor a su negocio</li>
            </ul>
          </div>
          <div className="p-10 bg-red-500 text-white text-xl">
            <p className="font-bold">
              Integramos soluciones tecnológicas y empresariales que se adaptan a los modelos de
              negocio, objetivos y visión del futuro de nuestros clientes.
            </p>
          </div>
        </div>
        
        {/* Second Column */}
        <div className="w-1/3 space-y-8 ml-2">
          <div>
            <img src="/img/Radius-analytics.png" alt="RADIUS Analytics" />
            <p className="mt-4 text-gray-700 pb-5">
            <span className="font-bold">Convertimos la complejidad</span> de recolección y procesamiento de la data, <span className="font-bold">en potentes soluciones</span> que facilitan la generación de información, toma de decisiones, optimización de procesos y <span className="font-bold">generación de valor al negocio</span>.
            </p>
            <Link href="/analytics" className="text-lg mt-4 px-4 py-2 border border-green-500 text-green-500 rounded-full">
            Ver más
          </Link>
        </div>
        <div className='pt-3'>
          <img src="/img/Radius-Tech-white.png" alt="RADIUS Tech" />
          <p className="mt-4 text-gray-700 pb-5">
            Construimos soluciones web <span className="font-bold">a la medida y escalables</span>, desde cero o modernizando los aplicativos existentes.
          </p>
          <Link href="/tech" className="text-lg mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-full">
            Ver más
          </Link>
        </div>
      </div>
    </div>
    );
  };
  
  export default BannerExperts;