// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import SwiperCore, { Autoplay } from 'swiper';

import { useRef } from 'react';
import { NextButton, PreviousButton } from '../navigation-buttons';
import { BgWrapper } from '../bg-wrapper';
import { sizeConfig } from '@/config';
import { carouselImagesData } from '@/data/main-carousel';

const SwiperContent = () => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <BgWrapper>
      <div className="use-container relative">
        <div className="">
          <PreviousButton swiperRef={swiperRef} />
          <NextButton swiperRef={swiperRef} />
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            speed={1000}
            loop={true}
            autoplay={{ delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: false }}
            allowTouchMove={true}
            slidesPerView={1}
            spaceBetween={30}
            modules={[Autoplay]}
            className="h-450 sm:h-500 md:h-600"
          >
            {carouselImagesData.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="flex h-full items-center justify-center">
                  <picture>
                    <source media={`(min-width: ${sizeConfig().breakpoints.lg}px)`} srcSet={image.large} />
                    <img src={image.medium} alt="banner-img" className="h-450 sm:h-500 md:h-full" />
                  </picture>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </BgWrapper>
  );
};

export default SwiperContent;
