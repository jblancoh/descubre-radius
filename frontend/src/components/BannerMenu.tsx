const services = [
    "Consultoría Estratégica",
    "Data y Analítica Avanzada",
    "Inteligencia de Negocios",
    "Automatización de Procesos"
];

const linkUrl = "# Nosotros link";  // Replace with your actual target URL

const BannerMenu = () => {
    return (
        <>
            <div 
              className="w-full h-[520px] max-h-[520px] bg-center bg-cover z-0 grid grid-cols-4 lg:grid-cols-3 px-4 md:pr-20 lg:pr-48 content-center"
              style={{ backgroundImage: "url('/img/bg/Radiusagencia.jpg')" }}
            >
                <div 
                  className="bg-red-500 p-6 rounded-lg shadow-lg text-white text-center col-span-4 md:col-span-2 md:col-start-3 lg:col-start-3 lg:col-span-1 "
                  >
                    <h2 className="mb-4 text-xl">Somos una firma consultora de tecnología que se ha especializado en proveer servicios de:</h2>
                    <ul className="space-y-2 flex flex-col items-stretch">
                        {services.map(service => (
                            <li key={service}>
                                <a href={linkUrl}>
                                    <button className="bg-white text-red-500 px-4 py-2 rounded-full shadow hover:bg-gray-100 w-full">
                                        {service}
                                    </button>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BannerMenu;