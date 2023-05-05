import { CarouselBgGreenSVG } from '@/common/components/carousel-bg';

type BgWrapperProps = {
  children: React.ReactNode;
};

const BgWrapper: React.FC<BgWrapperProps> = ({ children }) => {
  return (
    <div
      className="select-none bg-carousel-green py-4 sm:py-6 lg:py-0"
      style={{
        backgroundPosition: 'bottom',
        backgroundImage: `url("data:image/svg+xml,${CarouselBgGreenSVG}")`
      }}
    >
      {children}
    </div>
  );
};

export default BgWrapper;
