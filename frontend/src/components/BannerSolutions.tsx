import CardSolutions from "./CardSolutions"

const BannerSolutions: React.FC = () => {
  return <div className="relative w-full bg-gray-400 bg-[url('https://descubreradius.com/wp-content/uploads/2023/10/bg-soluciones.png')] bg-cover bg-top pb-[130px] pt-[30px]">
      <div className="absolute inset-0 bg-green-800 bg-opacity-80"></div>
      <p className="relative text-white flex justify-center font-bold text-3xl pt-11 my-12 ">Soluciones</p>
      <div className="relative flex justify-center">
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
          <CardSolutions
            title="Analytics Solutions"
            imgSrc="/img/analytic-solutions-green.png"
            description={[
              {
                "title": "Business Intelligence",
                "content": "Es la práctica enfocada en el agrupamiento de datos y su aprovechamiento para la identificación de problemas, riesgos y oportunidades de una empresa que sirvan como base para la toma de decisiones."
              },
              {
                "title": "Data Products",
                "content": "Productos enfocados a la explotación eficiente de datos para facilitar su análisis, extracción de información y generación de Insights de los activos de datos de una organización."
              },
              {
                "title": "Insight Frameworks",
                "content": "Estructuras o modelos para la generación y aplicación de Insights, lo que permite identificar patrones, tendencias y relaciones en los datos que pueden no ser evidentes a simple vista."
              },
              {
                "title": "Advanced Analytics Solutions",
                "content": "Herramientas, técnicas y productos que utilizan algoritmos sofisticados, métodos estadísticos y robustos modelos matemáticos para extraer conocimiento e información valiosa de los datos de una organización."
              }
            ]}
          />
          <CardSolutions
            title="Consulting Services"
            imgSrc="/img/consulting-services-green.png"
            description={[
              {
                "title": "Analytics Maturity Model",
                "content": "Es una herramienta que permite a las organizaciones evaluar su competencia analítica, entender su uso de datos y planificar su futuro uso de datos."
              },
              {
                "title": "Data & Analytics Strategy",
                "content": "Plan integral que una organización utiliza para definir cómo recopilará, almacenará, gestionará, compartirá y utilizará los datos."
              },
              {
                "title": "Data Driven Culture",
                "content": "Metodología que utiliza los datos como la base principal para la toma de decisiones empresariales, escapando así de decisiones basadas únicamente en la intuición, instinto, ejemplos pasados y creencias."
              }
            ]}
          />          
        </div>
      </div>
    </div>
}

export default BannerSolutions