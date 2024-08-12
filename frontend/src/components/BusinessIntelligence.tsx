const BusinessIntelligence = () => {
    return (
        <div className="bg-[#AF0729] text-white pt-24 md:pt-40 lg:pt-40 pb-20 ">
          <div className="max-w-7xl mx-auto text-center">
            <div className="relative">
              {/* Background text */}
              <div className="absolute lg:top-[-110%] md:top-[-120%] top-[-50%] lg:left-[-3%] transform z-0">
                <h1 className="lg:text-[5.5rem] text-[3rem] md:text-[4rem] font-bold text-[#ba2845] opacity-50 pl-8 md:pl-16 md:whitespace-nowrap text-left">Business Intelligence</h1>
              </div>
              {/* Main title */}
              <h1 className="relative text-black lg:text-6xl text-5xl font-bold mb-6 z-10 text-left lg:pl-40 pl-12 md:pl-24  ">Business Intelligence</h1>
            </div>
            <p className="text-xl text-left py-14 px-12">
              A través de aplicaciones WebApp se puede administrar de manera estratégica el negocio: automatización de procesos, control y seguimiento, administración de stock, geolocalización, generación automática de documentación (PDF), almacenamiento único en Base de Datos.
              <br/>
              Hemos participado en diferentes y distintos proyectos aportando a nuestro equipo humano especializado y a la vanguardia, ofreciendo expertise y aportando soluciones de tecnología en la nube para satisfacer los requisitos de nuestros clientes.
              <br/>
              Somos una firma consultora con capacidad para:
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-left px-12">
              <div>
                <ul className="list-disc pl-4">
                  <li>Diseñar, desarrollar, integrar, administrar y dar mantenimiento y soporte a los diferentes aplicativos web, soluciones back end, desarrollos y bases de datos de nuestros clientes.</li>
                  <li>Utilizar, gestionar y administrar diferentes herramientas y tecnologías de vanguardia.</li>
                  <li>Interpretación y traducción eficaz de las necesidades y requerimientos de las áreas usuarias de nuestros clientes para el aterrizaje y despliegue de aplicaciones que conformen una solución satisfactoria.</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-4">
                  <li>Servicio de gestión de proyectos o células ágiles.</li>
                  <li>Servicio de arquitectura de aplicaciones.</li>
                  <li>Servicio de pruebas y seguridad de software previamente desarrollado.</li>
                  <li>Servicios de desarrollo y mantenimiento de aplicaciones e interfaces.</li>
                  <li>Servicio de instalación/configuración de plataformas o ambientes.</li>
                  <li>Liderazgo y comunicación efectiva para alcanzar objetivos y conseguir resultados.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default BusinessIntelligence;