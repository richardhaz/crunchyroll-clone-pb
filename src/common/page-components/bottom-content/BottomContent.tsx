import { CarouselScroller } from '@/common/components/carousel-scroller';
import { Header } from '@/common/components/header';
import { bottomContentData } from '@/data/bottom-content';

const BottomContent = () => {
  return (
    <div className="use-container relative">
      <Header title="Wow, you scrolled to the bottom!" description="Congrats!" />
      <div className="mt-4">
        <CarouselScroller data={bottomContentData} />
      </div>
    </div>
  );
};

export default BottomContent;
