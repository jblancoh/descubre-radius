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
            <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <img src="/img/radius-logo.svg" alt="Radius Logo" />
                </div>
            </div>
            <div className="relative w-full h-screen">
                <img
                    src="/img/bg/Radiusagencia.jpg"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:top-1/2 lg:left-auto lg:right-1/4 lg:transform lg:-translate-y-1/2 lg:w-1/5 w-4/5 bg-red-500 p-6 rounded-lg shadow-lg text-white text-center">
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