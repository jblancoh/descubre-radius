'use client'
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import  CardSolutions from "@/components/CardSolutions";

export default function Home() {
  
  const handleClick = () => {
    toast.success("Hello, world!")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <h1>Descubre RADIUS</h1>
      <Button onClick={handleClick} variant="outline">
        Comenzar
      </Button>
      <div className="w-full bg-gray-400 bg-[url('https://descubreradius.com/wp-content/uploads/2023/09/back.jpg')] bg-cover bg-center pb-[130px]">
        <p className="text-white flex justify-center font-bold text-3xl pt-5 my-12">Ofrecemos soluciones de:</p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-10 place-items-center">
          <CardSolutions
            label="Analytics"
            title="Data Solutions"
            imgSrc="/img/data-solutions.png"
            description={[
              "Data Management",
              "Data Governance",
              "Data Architecture",
              "Data Warehousing"
            ]}
          />
          <CardSolutions
            label="Analytics"
            title="Analytics Solutions"
            imgSrc="/img/analytics-solutions.png"
            description={[
              "Business Intelligence",
              "Data Products (Software+Analytics)",
              "Insights Frameworks",
              "Advanced Analytics Solutions"
            ]}
          />
          <CardSolutions
            label="Analytics"
            title="Consulting Services"
            imgSrc="/img/consulting-services.png"
            description={[
              "Analytics Maturity Model",
              "Data & Analytics Strategy",
              "Data Driven Culture",
            ]}
          />
          <CardSolutions
            label="Tech"
            title="Digital Solutions"
            imgSrc="/img/digital-solutions.png"
            description={[
              "Diagnóstico, Análisis y Diseño de Soluciones",
              "Aplicaciones corporativas a la Medida",
              "Arquitectura de Soluciones y Aplicaciones",
              "Desarrollo de Apps, Sitios Web y E-commerce",
            ]}
          />
          <CardSolutions
            label="Tech"
            title="Automation Solutions"
            imgSrc="/img/automatic-solutions.png"
            description={[
              "Automatización de Procesos",
              "Digitalización, Sistematización y Manejo de Datos",
              "Automatización de Pruebas",
              "Plataformas de Gestión a la Medida (ERP,CRM, etc)",
            ]}
          />
          <CardSolutions
            label="Tech"
            title="Consulting Services"
            imgSrc="/img/consulting-services.png"
            description={[
              "Consultoría Tecnológica Integral",
              "Consultoría en Transformación Digital",
              "Gestión de Proyectos y/o Células Ágiles",
              "Nearshoring de equipo especializado",
            ]}
          />
          </div>
        </div>
      </div>
    </main>
  );
}