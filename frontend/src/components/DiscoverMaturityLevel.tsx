const DiscoverMaturityLevel: React.FC = () => {
    return (
        <div className="bg-red-500 w-full flex items-center justify-center" style={{ height: '30rem' }}>
            <div className="flex w-full max-w-screen-lg h-full">
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                    <div className="w-full" style={{ maxWidth: '28rem' }}>
                        <h2 className="text-white text-[1.8rem] font-bold mb-10">
                            Descubre el nivel de madurez analítica de tu empresa
                        </h2>
                    </div>
                    <a href="https://forms.gle/gWLTpfu49Myo1v19A" target="_blank" rel="noopener noreferrer">
                        <button className="bg-white text-red-500 px-5 py-2 rounded-full font-bold">
                            Realiza la evaluación
                        </button>
                    </a>
                </div>
                <div className="flex-1 h-full">
                    <img
                        src="/img/bg-evalucion.jpg"
                        alt="Business Meeting"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default DiscoverMaturityLevel;