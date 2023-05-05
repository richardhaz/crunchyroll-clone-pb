import { BiCommentDetail } from 'react-icons/bi';
import { IoMdPlay } from 'react-icons/io';
import { HeaderWithEndText } from '@/common/components/header';
import { continueWatchingData } from '@/data/continue-watching';

const ContinueWatching = () => {
  return (
    <div className="use-container relative">
      <HeaderWithEndText title="Continue Watching" endText="View History" />
      {/* Card */}
      <div className="mt-4">
        <div className="grid grid-cols-12 gap-5">
          {continueWatchingData.map((item) => (
            <div key={item.animeName} className="col-span-6 cursor-pointer md:col-span-4 lg:col-span-3">
              <a href="#" className="hover:opacity-90">
                <div className="relative flex items-center justify-center">
                  <img src={item.image} className="" />
                  <div className="absolute">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0006]">
                      <span className="text-[40px] text-white">
                        <IoMdPlay />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="text-transition mt-2 text-10 font-bold uppercase text-[#A0A0A0] line-clamp-1 hover:text-white"
              >
                {item.animeName}
              </a>
              <a href="#" className="mt-0.5 font-semibold line-clamp-2">
                {item.episodeName}
              </a>
              <div className="mt-2.5 flex items-center justify-between">
                <span className="text-13 text-[#a0a0a0]">{item.serie}</span>
                <div className="flex items-center justify-center">
                  <span className="pr-1.5 text-13 text-[#a0a0a0]">{item.commentsCount}</span>
                  <span className="text-[#a0a0a0]">
                    <BiCommentDetail />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
