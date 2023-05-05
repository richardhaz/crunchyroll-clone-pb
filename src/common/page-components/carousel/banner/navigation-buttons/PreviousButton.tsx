import React, { MutableRefObject } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import SwiperCore from 'swiper';

type PreviousButtonProps = {
  swiperRef: MutableRefObject<SwiperCore | undefined>;
};

const PreviousButton: React.FC<PreviousButtonProps> = ({ swiperRef }) => {
  return (
    <button
      className="text-transition absolute left-0 top-[45%] z-general-content flex h-10 w-10 items-center justify-center text-black md:hover:bg-black md:hover:text-white"
      onClick={() => swiperRef.current?.slidePrev()}
    >
      <IoChevronBackOutline className="text-25" />
    </button>
  );
};

export default PreviousButton;
