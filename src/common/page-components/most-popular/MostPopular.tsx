import { HeaderWithEndText } from '@/common/components/header';
import { CarouselScroller } from '@/common/components/carousel-scroller';
import { mostPopularData } from '@/data/most-popular';

const MostPopular = () => {
  return (
    <div className="use-container relative">
      <HeaderWithEndText title="Most Popular" endText="View All" />
      <div className="mt-4">
        <CarouselScroller data={mostPopularData} />
      </div>
    </div>
  );
};

export default MostPopular;
