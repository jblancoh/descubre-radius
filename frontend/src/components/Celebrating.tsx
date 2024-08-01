"use client";
import { useRef } from "react";
import useTransition from "@/hooks/useTransition"


const Celebrating = () => {
    const bannerRef = useRef(null);
    const {applicableYStyle, customTransitionStyles} = useTransition(bannerRef);

    return (
        <div ref={bannerRef} className="w-full flex justify-center items-center p-20 bg-red-500">
            <div className="text-center text-white">
                <h1 
                    className={`text-3xl font-bold mb-4 ${applicableYStyle}`}
                    style={customTransitionStyles}
                >
                    Celebrando 10 años
                </h1>
                <p 
                    className={`max-w-lg mx-auto ${applicableYStyle}`}
                    style={customTransitionStyles}
                >
                    Nuestra pasión sigue intacta, y seguimos ayudando a nuestros clientes con estrategias, herramientas y procesos para crear una inteligencia continua, minimizar el riesgo en la toma de decisiones e impulsar el valor en toda la empresa.
                </p>
                <div className="mt-10">
                    <iframe 
                        width="800" 
                        height="450" 
                        src="https://www.youtube.com/embed/iDj6TcKVrqc" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Celebrating;