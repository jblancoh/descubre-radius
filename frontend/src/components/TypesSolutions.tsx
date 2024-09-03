import RedesignCard from "./ui/RedesignCard";

const TypesSolutions = () => {
  return (
    <div className="p-8">
      <RedesignCard
        title="Data Solutions"
        imageUrl="/path-to-your-image.png"
        sentences={[
          "Arquitectura de plataforma de datos",
          "Ingeniería de Datos Analítica (Big Data)"
        ]}
        moreLink="https://example.com/more-services"
      />
    </div>
  );
};

export default TypesSolutions;