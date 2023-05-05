import { CarouselScroller } from '@/common/components/carousel-scroller';
import { Header } from '@/common/components/header';
import { topPicksData } from '@/data/top-picks';

const TopPicks = () => {
  return (
    <div className="use-container relative">
      <Header title="Top Picks For You" color="green" />
      <div className="mt-4">
        <CarouselScroller data={topPicksData} />
      </div>
    </div>
  );
};

export default TopPicks;
