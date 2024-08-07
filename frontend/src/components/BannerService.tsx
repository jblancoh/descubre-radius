'use client';
import { FC, useRef } from 'react';
import useTransition from '@/hooks/useTransition';

interface BannerServiceProps {
  type: 'tech' | 'analytics'
}

const BannerService: FC<BannerServiceProps> = ({ type }) => {
  const bannerRef = useRef(null);
  const { appearingStyle, customTransitionStyles } = useTransition(bannerRef);

  const colorClasses = {
    "tech": "bg-tech-600",
    "analytics": "bg-analytics-600",
  };

  return (
    <div ref={bannerRef} className={`flex text-white ${colorClasses[type]}`}>
      <div className="flex flex-1 flex-col items-start">
        <img src="/img/radius_name.svg" alt="" />
        <p className="text-2xl font-semibold p-4">
          <span/>
          Tech
        </p>
      </div>
    </div>
  );
};

export default BannerService;
