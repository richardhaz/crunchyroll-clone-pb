import { FiChevronRight } from 'react-icons/fi';

type HeaderProps = {
  title: string;
  description?: string;
  color?: 'orange' | 'green';
};

interface HeaderWithEndTextProps extends Omit<HeaderProps, 'description'> {
  endText: string;
  url?: string;
  icon?: JSX.Element;
}

export const Header: React.FC<HeaderProps> = ({ color = 'orange', title, description }) => {
  return (
    <>
      <h2 className="text-22 tracking-wider md:text-24 lg:text-26">{title}</h2>
      <p className="text-14 text-[#DADADA] md:text-16">{description}</p>
      {color === 'orange' ? (
        <div className="mt-2 h-1 w-full bg-gradient-to-r from-[#ef4323] to-[#fab818]"></div>
      ) : (
        <div className="mt-2 h-1 w-full bg-gradient-to-r from-[#2abdbb] to-[#213944]"></div>
      )}
    </>
  );
};

export const HeaderWithEndText: React.FC<HeaderWithEndTextProps> = ({
  title,
  color = 'orange',
  endText,
  url,
  icon
}) => {
  return (
    <>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center justify-center">
          {icon && <span className="mr-1 text-30">{icon}</span>}
          <h2 className="text-22 tracking-wider md:text-24 lg:text-26">{title}</h2>
        </div>
        <a
          href={url ?? '#'}
          className="text-transition hidden items-center justify-center px-2 text-12 font-semibold uppercase text-[#A0A0A0] hover:text-white md:flex md:text-14"
        >
          <span>{endText}</span>
          <span className="pl-1">{<FiChevronRight />}</span>
        </a>
      </div>
      {color === 'orange' ? (
        <div className="mt-2 h-1 w-full bg-gradient-to-r from-[#ef4323] to-[#fab818]"></div>
      ) : (
        <div className="mt-2 h-1 w-full bg-gradient-to-r from-[#2abdbb] to-[#213944]"></div>
      )}
    </>
  );
};
