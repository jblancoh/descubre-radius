import React from 'react';
import UseCasesCard from './UseCasesCard';


type UseCasesCardProps = {
    title: string;
    bullets: string[];
    link: string;
};

const UseCasesBanner: React.FC = () => {
    const useCases: UseCasesCardProps[] = [
        {
            title: "Retail: Planificación a futuro con IA + Analytica de datos",
            bullets: [
                "Visualización a 3 meses a futuro",
                "Disminución de merma",
                "Incremento de venta al 30%"
            ],
            link: "example-link-1"
        },
        {
            title: "Modelo Priorización de Oportunidades",
            bullets: [
                "Detección y priorización de Oportunidades",
                "1 solo taller"
            ],
            link: "example-link-2"
        },
        {
            title: "Uso de Machine Learning en Industria de Manufactura",
            bullets: [
                "Modelos de Diagnóstico Automatizado",
                "Reducción de errores",
                "Optimización de tiempos laborales"
            ],
            link: "example-link-3"
        }
    ];

    return (
        <div className='w-full bg-gray-100 px-16'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="py-12">
                <div className="text-center ">
                    <h2 className=" text-3xl leading-9 font-extrabold text-gray-900">
                        Casos de estudio
                    </h2>
                    <p className="mt-3 text-xl text-gray-500 sm:max-w-2xl flex justify-center w-full items-center mx-auto">
                         Conoce Radius a través de sus soluciones efectivas, centradas en el usuario y alineadas con los objetivos del negocio
                    </p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {useCases.map((useCase, index) => (
                            <UseCasesCard
                                key={index}
                                title={useCase.title}
                                bullets={useCase.bullets}
                                link={useCase.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UseCasesBanner;