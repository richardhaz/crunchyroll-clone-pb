import { sizeConfig } from '@/config';
import { CarouselBgGreenSVG, CarouselBgOrangeSVG } from '../carousel-bg';
import { TbPlayerPlay } from 'react-icons/tb';
import { HiOutlineBookmark } from 'react-icons/hi';

type SingleShowCardProps = {
  title: string;
  serie: string;
  description: string;
  image: string;
  imageSmall: string;
  color?: 'green' | 'orange';
  url: string;
};

const SingleShowCard: React.FC<SingleShowCardProps> = ({
  description,
  serie,
  title,
  color,
  url,
  image,
  imageSmall
}) => {
  return (
    <div
      className={`min-h-[220px] ${color === 'orange' ? 'sm:bg-[#ef4323]' : color === 'green' ? 'sm:bg-[#2abdbb]' : ''}`}
      style={{
        backgroundPosition: color ? 'bottom' : '',
        backgroundImage:
          color === 'orange'
            ? `url("data:image/svg+xml,${CarouselBgOrangeSVG}")`
            : color === 'green'
            ? `url("data:image/svg+xml,${CarouselBgGreenSVG}")`
            : ''
      }}
    >
      <div className="use-container">
        <div className={`${color && 'py-6'}`}>
          <div className={`${color && 'bg-transparent sm:bg-black py-4'}`}>
            <div className="flex flex-col sm:flex-row">
              <div className="flex w-[100%] sm:w-[30%] lg:w-[40%] items-center justify-center mb-2 sm:mb-0">
                <a href={url} className="group relative duration-300 ease-in-out hover:opacity-50">
                  <picture>
                    <source media={`(max-width: ${sizeConfig().breakpoints.sm}px)`} srcSet={image} />
                    <source media={`(max-width: ${sizeConfig().breakpoints.md}px)`} srcSet={imageSmall} />
                    <img
                      src={image}
                      alt={`single-show-card-${title}`}
                      className="max-h-full max-w-full"
                      title="To series"
                    />
                  </picture>
                </a>
              </div>
              <div className="flex w-[100%] sm:w-[70%] lg:w-[60%] flex-col items-center justify-around">
                <div className="sm:px-3 md:px-6">
                  <h4 className="mb-2 text-22 sm:text-24 line-clamp-1 hover:underline lg:text-28">
                    <a href={url}>{title}</a>
                  </h4>
                  <div className="mb-3">
                    <span className="text-[#2abdbb]">Series:&nbsp;</span>
                    <span className="text-10 text-[#a0a0a0]">&#11201;</span>
                    <span className="text-13 text-[#a0a0a0]">&nbsp;{serie}</span>
                  </div>
                  <p
                    className={`mb-4 text-14 sm:text-16 line-clamp-3 ${color ? 'sm:line-clamp-3' : 'sm:line-clamp-2'}`}
                  >
                    {description}
                  </p>
                  <div className="flex flex-col items-center justify-start gap-2 lg:flex-row">
                    <a href={url} className="w-full lg:w-auto">
                      <button className="use-transition flex w-full items-center justify-center border-2 border-primary bg-primary px-3 py-2.5 text-14 font-semibold uppercase text-black hover:border-[#FF944D] hover:bg-[#FF944D]">
                        <span className="mr-2 text-20">
                          <TbPlayerPlay />
                        </span>
                        Start Watching S1 E1
                      </button>
                    </a>
                    <a href={url} className="w-full lg:w-auto">
                      <button className="use-transition flex w-full items-center justify-center border-2 border-primary bg-transparent px-3 py-2.5 text-14 font-semibold uppercase text-primary hover:border-[#FF944D] hover:text-[#FF944D]">
                        <span className="mr-2 text-20">
                          <HiOutlineBookmark />
                        </span>
                        Add to Watchlist
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShowCard;
