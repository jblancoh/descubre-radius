"use client"
import React, { useState } from 'react';

const Ourselves: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('Analytics');

  const sections: { [key: string]: string[] } = {
    Analytics: [
      'Inteligencia de Negocios',
      'Analítica Avanzada de Datos',
      'Visualización de Datos',
      'Business Analytics',
      'Marketing Analytics',
      'Google Analytics',
      'Inteligencia de localización',
      'Inteligencia Artificial aplicada'
    ],
    Tech: [
      'Consultoría de Transformación Digital para Negocios.',
      'Digitalización y Automatización de Procesos.',
      'Fabricación y Desarrollo de Software a la medida.',
      'Gestión de proyectos en metodologías ágiles.',
      'Staffing.',
      'Servicio de Monitoreo y Soporte 24/7 para Infraestructura, Aplicaciones y Servicios.'
    ],
    Marketing: [
      'Estrategia y Consultoría en Marketing Digital 360°',
      'Desarrollo de Sitios, Páginas Web y E-commerce',
      'Social Media',
      'Campañas de Marketing Digital (Social Ads / Google Ads)',
      'SEO & Analítica',
      'Email Marketing',
      'Branding, Diseño Gráfico y Editorial',
      'Generación y Creación de Contenido'
    ]
  };

  const colorClasses: { [key: string]: string } = {
    Analytics: 'text-green-700',
    Tech: 'text-blue-400',
    Marketing: 'text-violet-400'
  };

  const getButtonClass = (section: string) =>
    `font-bold text-2xl ${section === activeSection ? colorClasses[section] : 'text-gray-500'}`;

  return (
    <div className="w-full bg-white flex flex-col lg:flex-row h-auto lg:h-screen relative">
      <img
        src="/img/radius-red-circle.svg"
        alt="Radius red circle"
        className="absolute z-50 w-18 hidden lg:block"
        style={{ left: '55%', top: '73%', transform: 'translate(-50%, -50%)' }}
      />
      <div className="w-full lg:w-[55%] flex items-center justify-center pl-4 lg:pl-28 lg:pr-10 relative">
        <div>
          <h1 className="text-4xl font-bold text-red-500 mb-4 flex pb-8">¿Qué es Radius?</h1>
          <p className="mb-6 text-gray-700">
            <strong> Somos una consultora tecnológica,</strong> orgullosamente mexicana, que ha desarrollado distintas verticales de negocio para apoyar la transformación digital de nuestros clientes, ofreciéndoles soluciones innovadoras de manera ágil en diferentes áreas, tales como:
          </p>

          <div className="flex flex-col lg:flex-row pt-8 lg:pt-8">
            <div className="flex flex-row lg:flex-col justify-between space-y-0 space-x-2 lg:space-x-0 lg:space-y-2 lg:mr-[6rem]">
              {Object.keys(sections).map((section) => (
                <button
                  key={section}
                  className={`px-2 py-1 ${getButtonClass(section)}`}
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="mt-4 lg:mt-0">
              <h2 className={`text-3xl font-bold mb-4 ${colorClasses[activeSection]}`}>{activeSection}</h2>
              <ul className="list-disc list-inside">
                {sections[activeSection].map((item, index) => (
                  <li key={index} className="text-gray-700 mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0">
        <img
          src="/img/bg/Nosotros-header.jpg"
          alt="People in a meeting"
          className="w-full h-64 lg:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Ourselves;
