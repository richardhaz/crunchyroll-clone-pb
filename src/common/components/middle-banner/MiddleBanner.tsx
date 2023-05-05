import { sizeConfig } from '@/config';
import React from 'react';

type MidBannerProps = {
  largeImage: string;
  mediumImage: string;
  path: string;
};

const MiddleBanner: React.FC<MidBannerProps> = ({ largeImage, mediumImage, path }) => {
  return (
    <div className="use-container">
      <a href={path}>
        <picture>
          <source media={`(max-width: ${sizeConfig().middleBannerBreakpoint.md}px)`} srcSet={mediumImage} />
          <img src={largeImage} alt="middle-banner" className="w-full" />
        </picture>
      </a>
    </div>
  );
};

export default MiddleBanner;
