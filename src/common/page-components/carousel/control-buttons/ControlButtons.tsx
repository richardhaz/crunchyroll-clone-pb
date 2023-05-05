import { carouselControlData } from '@/data/main-carousel';

const ControlButtons = () => {
  return (
    <div className="use-container mt-6 lg:mt-4">
      <div className="hidden grid-cols-1 items-start gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-6">
        {carouselControlData.map((item) => (
          <button
            key={item.index}
            className="h-[50px] border-l-[3px] border-primary bg-[#23252b] px-2 text-left text-12 font-semibold leading-4 transition-colors duration-300 ease-in-out hover:border-primary hover:bg-[#393B41]  sm:border-l-0 sm:border-t-[3px] sm:border-transparent"
          >
            <p className="line-clamp-2">{item.title}</p>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 lg:hidden">
        {new Array(6).fill(0).map((_, idx) => (
          <button key={idx} className="h-0.5 w-11 bg-gray-100 hover:bg-white"></button>
        ))}
      </div>
    </div>
  );
};

export default ControlButtons;
