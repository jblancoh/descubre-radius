import CardSolutions from "./CardSolutions"

const BannerSolutions = () => {
  return <div className="w-full bg-gray-400 bg-[url('https://descubreradius.com/wp-content/uploads/2023/09/back.jpg')] bg-cover bg-center pb-[130px]">
      <p className="text-white flex justify-center font-bold text-3xl pt-5 my-12">Soluciones:</p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-10 place-items-center">
          <CardSolutions
            title="Data Solutions"
            imgSrc="/img/data-solutions-green.png"
            description={[
              {
                "title": "Data Architecture",
                "content": "Es la práctica de recopilar, organizar y acceder a los datos garantizando su accesibilidad, seguridad y privacidad para dar soporte a la productividad, eficiencia y toma de decisiones."
              },
              {
                "title": "Data Management",
                "content": "Serie de principios y prácticas orientadas a garantizar la calidad de los datos durante su vida útil así como identificar las necesidades en materia de información dentro de una empresa."
              },
              {
                "title": "Data Governance",
                "content": "Describe la forma en la que se gestionan los datos: recopilación, almacenamiento, transformación, distribución y consumo; y establece la forma en la que fluyen a través de los diferentes sistemas."
              },
              {
                "title": "Data Quality",
                "content": "Es el proceso que reúne las tareas y ordena las tareas inherentes relacionadas a la extracción, transformación, consolidación, integración y centralización de los datos internos y externos de una organización permitiendo su exploración y análisis con el objetivo de dar soporte a la toma de decisiones."
              }
            ]}
          />
        </div>
      </div>
    </div>
}

export default BannerSolutions