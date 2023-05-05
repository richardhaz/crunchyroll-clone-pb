import { CarouselScroller } from '@/common/components/carousel-scroller';
import { Header } from '@/common/components/header';
import { siblingSquadData } from '@/data/sibling-squad';

const SiblingSquad = () => {
  return (
    <div className="use-container relative">
      <Header title="Sibling Squad" color="green" description="Some of the best anime families on Crunchyroll" />
      <div className="mt-4">
        <CarouselScroller data={siblingSquadData} />
      </div>
    </div>
  );
};

export default SiblingSquad;
