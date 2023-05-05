import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';
import { breakpoints } from './utils';

export type CarouselData = {
  title: string;
  image: string;
  series?: string;
};

type CarouselScrollerProps = {
  data: CarouselData[];
};

const CarouselScroller: React.FC<CarouselScrollerProps> = ({ data = [] }) => {
  return (
    <>
      <Swiper
        slidesPerView="auto"
        navigation={true}
        modules={[FreeMode, Navigation]}
        breakpoints={breakpoints}
        speed={1000}
        allowTouchMove={false}
      >
        {data.map((item) => (
          <SwiperSlide key={item.title}>
            <a href="#">
              <div className="select-none">
                <img src={item.image} />
              </div>
              <div className="mt-2.5">
                <h4 className="text-14 leading-[1.1rem] line-clamp-4">{item.title}</h4>
              </div>
              {item.series && (
                <div className="mt-2.5">
                  <span className="text-[#2abdbb]">Series:&nbsp;</span>
                  <span className="text-10 text-[#a0a0a0]">&#11201;</span>
                  <span className="text-13 text-[#a0a0a0]">&nbsp;{item.series}</span>
                </div>
              )}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselScroller;
