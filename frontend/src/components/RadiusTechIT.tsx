const RadiusTechIT = () => {
  return (
    <div className="bg-white pt-16 pb-6">
      <img />
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative">
          {/* Background text */}
          <div className="absolute top-[-70%] right-[35.5%] transform z-0">
            <h1 className="text-5xl font-bold text-gray-200 opacity-50">Radius Tech</h1>
          </div>
          {/* Main title */}
          <h1 className="relative text-4xl font-bold mb-6 z-10">Radius Tech</h1>
        </div>
        <h2 className="text-xl font-semibold mb-5">Consultoría IT, Casa de Desarrollo y Fábrica de Software</h2>
        <p className="mb-6 text-xl"> {/* Increased margin-bottom for more spacing between sections */}
          Los negocios, empresas y organizaciones tienen necesidades y requerimientos específicos.
          Para crecer y ser más eficientes necesitan contar sistemas y tecnologías que se adapten a sus procesos,
          y de esta forma, puedan sistematizar sus operaciones. Frecuentemente no hay ningún producto en el mercado
          que cubra una necesidad concreta. Sin embargo, con la fabricación y desarrollo web a la medida,
          podremos brindarte soluciones de tecnología específicas que les permitan desempeñar de forma rápida
          y sencilla las tareas diarias de su negocio.
        </p>
        <h3 className="text-xl font-semibold mt-24">A través de esta unidad ofrecemos las siguientes soluciones:</h3> {/* Adjusted spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8"> {/* Increased gap for better column separation */}
          <ul className="list-disc pl-6 space-y-3"> {/* Increased left padding and space between items */}
            <li>Diseñamos, desarrollamos, integramos, administramos y damos mantenimiento y soporte a los diferentes aplicativos web.</li>
            <li>Organizamos y planificamos proyectos a través de metodologías ágiles.</li>
          </ul>
          <ul className="list-disc pl-6 space-y-3">
            <li>Utilizamos, gestionamos y administramos diferentes herramientas y tecnologías de vanguardia.</li>
            <li>Mantenemos un liderazgo y comunicación efectiva para alcanzar objetivos y conseguir resultados.</li>
          </ul>
          <ul className="list-disc pl-6 space-y-3">
            <li>Interpretamos y traducimos de forma eficaz las necesidades de las áreas usuarias de nuestros clientes para el aterrizaje y despliegue de aplicaciones que conformen una solución satisfactoria.</li>
          </ul>
        </div>
        <p className="pt-6 m-16 text-xl">
          Brindamos servicios de consultoría en inteligencia de negocios, gestión de proyectos y fabricación y desarrollo de software a la medida para todo tipo de profesionales, negocios, empresas y organizaciones.
          <br />Contamos con un equipo humano especializado y a la vanguardia, así como soluciones de tecnología en la nube para satisfacer los requisitos de nuestros clientes.
          <br />Hemos colaborado en diversos desarrollos, desde pequeños hasta proyectos de gran escala, ya sea partiendo desde cero, trabajando con aplicaciones existentes que necesitan evolucionar o conectándose con sistemas de terceros.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"> {/* Same as above */}
          <ul className="list-disc pl-6 space-y-3">
            <li>Software para empresas</li>
            <li>Intranets</li>
            <li>Extranets</li>
          </ul>
          <ul className="list-disc pl-6 space-y-3">
            <li>Aplicaciones móviles</li>
            <li>Aplicaciones web</li>
            <li>Aplicaciones de escritorio con conexión a bases de datos externas</li>
          </ul>
          <ul className="list-disc pl-6 space-y-3">
            <li>Plataformas de gestión a medida</li>
            <li>Módulos adicionales para completar tu ERP</li>
          </ul>
        </div>
        <h3 className="text-xl pt-16">En <strong>Radius Tech</strong> te asesoramos sobre la tecnología a utilizar en cada proyecto para ofrecer una solución idónea a los problemas estructurales del negocio y programamos las aplicaciones de forma limpia y bien estructurada.</h3>
      </div>
    </div>
  );
};

export default RadiusTechIT;