const icons = [
  { label: 'Retail', src: '/img/retail.png' },
  { label: 'Banca', src: '/img/banca.png' },
  { label: 'Manufactura', src: '/img/manufactura.png' },
  { label: 'Telco', src: '/img/telco.png' },
  { label: 'Salud', src: '/img/salud.png' },
];

const SectorExperience = () => {
  return (
      <div className="my-24 bg-white">
          <p className="text-center text-3xl font-bold pb-11">Tenemos experiencia en sectores:</p>
          <div className="flex items-center justify-center mt-4">
              <div className="flex">
                  {icons.map((icon, index) => (
                      <div key={index} className="text-center mx-16"> 
                          <div className="w-32 h-32 flex flex-col items-center justify-center bg-white rounded-full border border-black shadow-lg">
                          <img src={icon.src} alt={icon.label} className="w-11 h-11" />
                              <p className="mt-2 text-gray-700">{icon.label}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default SectorExperience;