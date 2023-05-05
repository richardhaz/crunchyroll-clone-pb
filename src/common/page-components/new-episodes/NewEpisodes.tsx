import { HeaderWithEndText } from '@/common/components/header';
import { MdOutlineSmartDisplay } from 'react-icons/md';
import { FaCrown } from 'react-icons/fa';
import { newEpisodesData } from '@/data/new-spisodes';

const NewEpisodes = () => {
  return (
    <div className="use-container">
      <HeaderWithEndText title="New Episodes" endText="View release calendar" icon={<MdOutlineSmartDisplay />} />
      <div className="mt-2.5">
        <h3 className="text-20 font-medium md:text-22">Today</h3>
        <div className="mt-2 h-0.5 w-full bg-[#4A4E58]"></div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-12 gap-3">
          {newEpisodesData.map((item, idx) => (
            <a href={item.url} key={idx} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="flex">
                <div className="w-[40%]  md:w-1/2">
                  <img src={item.image} />
                </div>
                <div className="w-[60%] space-y-1 pl-3 pt-1 md:w-1/2">
                  <h4 className="text-14 leading-5">{item.animeName}</h4>
                  <div className="flex">
                    {item.isPremium && (
                      <span className="mr-1 text-[#FAB818]">
                        <FaCrown />
                      </span>
                    )}
                    <span className="text-13 font-semibold text-[#a0a0a0]">Episode {item.episode}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-13 font-semibold text-[#a0a0a0]">{item.serie}</span>
                    <span className="text-13 font-semibold text-[#2abdbb]">{item.time}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <a
        href="#"
        className="use-transition mt-4 flex cursor-pointer items-center justify-center bg-[#213944] py-2.5 hover:bg-[#2F5161]"
      >
        <span className="text-14 font-bold uppercase">Show more</span>
      </a>
    </div>
  );
};

export default NewEpisodes;
