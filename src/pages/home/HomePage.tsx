import { MiddleBanner } from '@/common/components/middle-banner';
import { Feeds } from '@/common/page-components/feeds';
import { Carousel } from '@/common/page-components/carousel';
import { ContinueWatching } from '@/common/page-components/continue-watching';
import { NewEpisodes } from '@/common/page-components/new-episodes';
import { SiblingSquad } from '@/common/page-components/sibling-squad';
import { TopPicks } from '@/common/page-components/top-picks';
import { Watchlist } from '@/common/page-components/watchlist';

import { MainLayout } from '@/common/layouts';
import { MostPopular } from '@/common/page-components/most-popular';
import { SingleShowCard } from '@/common/components/single-show-card';
import { singleShowCardData } from '@/data/single-show-card';
import { Artists } from '@/common/page-components/artists';
import { BottomContent } from '@/common/page-components/bottom-content';
import { middleBannerData } from '@/data/middle-banner';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="mb-16 space-y-10">
        <Carousel />
        <TopPicks />
        <ContinueWatching />
        <MiddleBanner
          largeImage={middleBannerData().banner1.imageLg}
          mediumImage={middleBannerData().banner1.imageMd}
          path={middleBannerData().banner1.path}
        />
        <Watchlist />
        <SiblingSquad />
        <NewEpisodes />
        <MiddleBanner
          largeImage={middleBannerData().banner2.imageLg}
          mediumImage={middleBannerData().banner2.imageMd}
          path={middleBannerData().banner2.path}
        />
        <MostPopular />
        <SingleShowCard
          title={singleShowCardData().card1.title}
          description={singleShowCardData().card1.description}
          serie={singleShowCardData().card1.series}
          url={singleShowCardData().card1.url}
          image={singleShowCardData().card1.image}
          imageSmall={singleShowCardData().card1.imageSmall}
        />
        <Artists />
        <SingleShowCard
          color="green"
          title={singleShowCardData().card4.title}
          description={singleShowCardData().card4.description}
          serie={singleShowCardData().card4.series}
          url={singleShowCardData().card4.url}
          image={singleShowCardData().card4.image}
          imageSmall={singleShowCardData().card4.imageSmall}
        />
        <BottomContent />
        <Feeds />
      </div>
    </MainLayout>
  );
};

export default HomePage;
