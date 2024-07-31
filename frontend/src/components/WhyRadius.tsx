import Link from "next/link";

interface Brand {
    src: string;
    alt: string;
  }
  
  const brands: Brand[] = [
    { src: "/img/Walmart-white.svg", alt: "Walmart" },
    { src: "/img/BBVa-white.svg", alt: "BBVA" },
    { src: "/img/Clarios-e1698174640627.png", alt: "Clarios" },
    { src: "/img/HopstialAngeles-grupoHospitalario-blanco2.png", alt: "Hospital Angeles" },
    { src: "/img/TelefonicaMovistar.png", alt: "Telefonica Movistar" },
    { src: "/img/Terra-white.svg", alt: "Terra" },
    { src: "/img/CentroColumna-white.png", alt: "Centro Columna" },
    { src: "/img/telefonica.png", alt: "Telefonica Tech" },
    { src: "/img/BlackCapital-e1698174789225.png", alt: "Black Capital" }
];



const WhyRadius = () => {
    return ( 
            <div className="bg-[#201038] text-white w-full py-12">
              <div className="container mx-auto p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-8">
                  <div className="flex flex-col justify-center max-w-xs mx-auto">
                    <button className="py-3 px-6 rounded-full font-bold bg-white text-[#2D9CDB] text-lg mb-10">
                      Tech
                    </button>
                    <button className="py-3 px-6 rounded-full font-bold bg-white text-[#BB6BD9] text-lg mb-10">
                      Marketing
                    </button>
                    <button className="py-3 px-6 rounded-full font-bold bg-white text-[#27AE60] text-lg">
                      Analytics
                    </button>
                  </div>
                  <div className="flex flex-col justify-center max-w-lg mx-auto">
                    <h2 className="text-2xl font-bold mb-4">¿Porqué Radius?</h2>
                    <p className="mb-4">
                        Trabajamos en conjunto con nuestros clientes para <strong>entender</strong> sus objetivos y, a partir de eso,
                        <strong> diseñar y desarrollar estrategias</strong> que les provean soluciones creativas e innovadoras que 
                        <strong> resuelvan</strong> sus necesidades específicas, ayudándolos a adaptar su modelo de negocio al nuevo 
                        entorno digital.
                    </p>
                    <button className="mt-12 py-2 px-4 rounded-full border border-white w-full">
                      <Link href="/aboutus">
                        Conoce más de Radius
                      </Link>
                    </button>
                  </div>
                  <div className="flex flex-col justify-center max-w-lg mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Somos una consultora de tecnología que ofrecemos:</h2>
                    <ul className="list-disc pl-5 space-y-4">
                      <li>Agilidad y rapidez en el servicio</li>
                      <li>Atención y seguimiento personalizado y cercano</li>
                      <li>Transparencia en procesos, flujos y entregables</li>
                      <li>Construimos confiabilidad con nuestros clientes / marcas.</li>
                    </ul>
                  </div>
                </div>
                <div className="cols-span-3 flex justify-center items-center flex-wrap space-x-8 pt-24">
                   <h2>Marcas que han confiado en nosotros:</h2>
                   {brands.map((brand, index) => (
                     <img key={index} src={brand.src} alt={brand.alt} className="h-10 mx-4 my-4" />
                   ))}
                </div>
              </div>
            </div>

    );
  };

export default WhyRadius;
