
const ConsulticyAndAdvisory = () => {
  return (
    <div className="w-full flex justify-center items-center p-4 text-balance md:p-20 bg-analytics-600">
      <div className="container grid grid-cols-2 text-white place-items-center place-content-center self-center">
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Consultoría y Asesoría
            </h1>
            <p className="mt-2 font-light">
              Trabajamos contigo para comprender el <span className="font-bold">estado actual de tus principales data assets</span>
              (data, estructura organizacional, way of work- modelo operativo, tecnología) para identificar <span className="font-bold">necesidades específicas</span> y <span className="font-bold">oportunidades de mejora</span>,
              principales áreas de oportunidad, pain points y <span className="font-bold">alinearlos con tus objetivos.</span>
            </p>
            <br />
            <p className="mt-2 font-light">
              A partir de esta información, proporcionamos <span className="font-bold">recomendaciones concretas y estrategias personalizadas.</span>
            </p>
          </div>
          <div className="bg-analytics-500 grid grid-cols-3 rounded-b-full md:rounded-b-none md:rounded-br-full md:rounded-tr-full p-2 ps-4 mt-8">
            <div className="col-span-3 md:col-span-2 flex justify-center flex-col">
              <p className="font-semibold">
                Nuestro equipo de consultores está altamente capacitado y cuenta con amplia experiencia en el campo de la analítica digital.
              </p>
              <p className="font-light">
                Estamos comprometidos en brindarte soluciones efectivas que te permitan tomar decisiones basadas en datos y alcanzar tus objetivos comerciales en el mundo digital.
              </p>

            </div>
            <div className="flex justify-center pt-4 md:pt-0 md:justify-end col-span-3 md:col-span-1">
              <img
                src="/img/analytics-consultoria-team.png"
                alt="Consultoría y Asesoría Team"
                className="w-40 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-2 lg:col-span-1">
          <img 
            src="/img/diagrama-consultoria-analytics.png"
            alt="Consultoría y Asesoría"
            className="object-contain"
          />
        </div>

      </div>
    </div>
  );
}

export default ConsulticyAndAdvisory;