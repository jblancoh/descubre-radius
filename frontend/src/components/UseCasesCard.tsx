import React from 'react';

type UseCasesCardProps = {
    title: string;
    bullets: string[];
    link: string;
};

const UseCasesCard: React.FC<UseCasesCardProps> = ({ title, bullets, link }) => {
    return (
        <div className="bg-white shadow rounded overflow-hidden px-8 py-6 flex flex-col h-full">
            <div>
                <h1 className="text-xl font-semibold text-black">{title}</h1>
                <ul className="list-disc ml-5 my-2">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="text-gray-700 text-base">{bullet}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-auto pt-6">
                <a
                    href={link}
                    className=" text-lg inline-block bg-white text-red-500 px-2 rounded-full border-2 border-red-500 hover:bg-red-500 hover:text-white"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Leer caso
                </a>
            </div>
        </div>
    );
};

export default UseCasesCard;