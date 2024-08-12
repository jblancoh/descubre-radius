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
    { src: "/img/BlackCapital-e1698174789225.png", alt: "Black Capital" },
    { src: "/img/rey-cabrito.png", alt: "Rey Cabrito" },
    { src: "/img/roge.png", alt: "Roge" },
    { src: "/img/tohui.png", alt: "Tohui" },
    { src: "/img/xr.png", alt: "XR" },
    { src: "/img/gasa.png", alt: "Gasa" },
    { src: "/img/gymboree.png", alt: "Gymboree" },
    { src: "/img/haircompany.png", alt: "Hair Company" },
    { src: "/img/hurachines.png", alt: "Hurachines" },
    { src: "/img/inst-medico.png", alt: "Instituto Medico" },
    { src: "/img/inst-monterrey.png", alt: "Instituto Monterrey" },
    { src: "/img/kimball.png", alt: "Kimball" },
    { src: "/img/laguneros.png", alt: "Laguneros" },
    { src: "/img/lenadores.png", alt: "Lenadores" },
    { src: "/img/millyfit.png", alt: "MillyFit" },
    { src: "/img/onspot.png", alt: "OnSpot" },
    { src: "/img/planeacion.png", alt: "Planeacion" },
    { src: "/img/angeles.png", alt: "Angeles" },
    { src: "/img/digestiva.png", alt: "Digestiva" }
];

const BannerBrands = () => {
    return (
        <div className="bg-[#201038] text-white p-4 sm:p-8">
            <div className="max-w-4xl mx-auto bg-[#36264B] rounded-lg p-4 sm:p-6 shadow-lg relative">
                <img src="/img/profile-willie.png" alt="Willie Guevara" className="w-24 h-24 rounded-full absolute left-1/2 sm:left-0 top-14 sm:top-1/2 transform -translate-x-1/2 sm:-translate-x-1/2 -translate-y-1/2 sm:-translate-y-1/2" />
                <div className="flex flex-col items-center mt-16 sm:mt-0 sm:ml-16">
                    <p className="text-base sm:text-lg italic mb-4 text-center pt-8 sm:pt-0">
                        {"La velocidad y agilidad se consiguen, cuando las personas y los equipos de trabajo confían verdaderamente el uno con el otro. Es por eso que nuestra más alta prioridad y responsabilidad como firma consultora es construir CONFIABILIDAD."}
                    </p>
                    <img src="/img/firma-willie.png" alt="Willie Guevara Signature" className="h-18 mb-2" />
                    <p className="">CEO y Fundador</p>
                </div>
            </div>
            <div className="container mx-auto px-4 lg:max-w-5xl">
                <div className="cols-span-3 flex flex-col items-center pt-24">
                    <h2 className="text-center mb-8">Marcas que han confiado en nosotros:</h2>
                    <div className="flex justify-center items-center flex-wrap">
                        {brands.map((brand) => (
                            <img key={brand.alt} src={brand.src} alt={brand.alt} className="h-10 mx-4 my-4" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerBrands;