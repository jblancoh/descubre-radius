"use client"
import Image from 'next/image';
import React from 'react';

type RedesignCardProps = {
  title: string;
  imageUrl: string;
  sentences: string[];
  moreLink?: string;
}

const RedesignCard: React.FC<RedesignCardProps> = ({ title, imageUrl, sentences, moreLink }) => {
  return (
    <div className="max-w-sm rounded-3xl overflow-hidden p-4 relative bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-red-500 ml-3 mt-2">{title}</h2>
        <div className="h-12 w-12 relative ml-12">
          <Image src={imageUrl} alt="Data icon" layout="fill" objectFit="contain"/>
        </div>
      </div>
      <div className="mt-4 mx-2">
        {sentences.map((sentence, index) => (
          <p key={index} className="text-gray-700 text-base mb-2 p-1 px-2 border border-gray-200 rounded-full">{sentence}</p>
        ))}
      </div>
      {moreLink && (
        <button 
          onClick={() => window.location.href = moreLink} 
          className="mt-4 ml-3 text-gray-700 font-semibold hover:text-gray-900"
        >
          VER MÁS SERVICIOS
        </button>
      )}
    </div>
  );
};

export default RedesignCard;