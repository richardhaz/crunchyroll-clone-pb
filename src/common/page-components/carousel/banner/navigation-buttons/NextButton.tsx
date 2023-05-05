import React, { MutableRefObject } from 'react';
import { IoChevronForwardOutline } from 'react-icons/io5';
import SwiperCore from 'swiper';

type NextButtonProps = {
  swiperRef: MutableRefObject<SwiperCore | undefined>;
};

const NextButton: React.FC<NextButtonProps> = ({ swiperRef }) => {
  return (
    <button
      className="absolute right-0 top-[45%] z-general-content flex h-10 w-10 items-center justify-center text-black transition-colors ease-in-out md:hover:bg-black md:hover:text-white"
      onClick={() => swiperRef.current?.slideNext()}
    >
      <IoChevronForwardOutline className="text-25" />
    </button>
  );
};

export default NextButton;
