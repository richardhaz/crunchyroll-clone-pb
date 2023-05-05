import { CarouselScroller } from '@/common/components/carousel-scroller';
import { Header } from '@/common/components/header';
import { artistsData } from '@/data/artist';

const Artists = () => {
  return (
    <div className="use-container relative">
      <Header title="Artists We Love" description="Some of Crunchyroll’s favorite musical artists" />
      <div className="mt-4">
        <CarouselScroller data={artistsData} />
      </div>
    </div>
  );
};

export default Artists;
