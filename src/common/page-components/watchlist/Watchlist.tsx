import { HeaderWithEndText } from '@/common/components/header';
import { watchListData } from '@/data/watchlist';

const Watchlist = () => {
  return (
    <div className="use-container">
      <HeaderWithEndText title="Your Watchlist" endText="View Watchlist" />
      {/* Card */}
      <div className="mt-4">
        <div className="grid grid-cols-12 gap-5">
          {watchListData.map((item) => (
            <div key={item.animeName} className="col-span-6 cursor-pointer md:col-span-4 lg:col-span-3">
              <div className="flex items-start justify-between flex-col h-full">
                <div>
                  <a href="#" className="hover:opacity-90">
                    <div className="relative flex items-center justify-center">
                      <img src={item.image} className="" />
                    </div>
                  </a>

                  <a href="#" className="mt-2 font-semibold line-clamp-2 leading-5">
                    {item.animeName}
                  </a>
                  <a
                    href="#"
                    className="text-transition mt-2 text-12 font-bold uppercase text-[#A0A0A0] line-clamp-1 hover:text-white"
                  >
                    {item.episodeName}
                  </a>
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <div>
                    <span className="text-[#2abdbb]">Series:&nbsp;</span>
                    <span className="text-10 text-[#a0a0a0]">&#11201;</span>
                    <span className="text-13 text-[#a0a0a0]">&nbsp;{item.serie}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
