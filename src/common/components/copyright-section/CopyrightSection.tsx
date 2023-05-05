import { AiFillCaretDown } from 'react-icons/ai';

const CopyrightSection = () => {
  return (
    <div className="flex h-16 items-center justify-between md:h-24">
      <p className="w-full text-14 text-[#A0A0A0]">© Crunchyroll, LLC</p>
      <div className="text-transition flex items-center justify-center p-3 text-[#A0A0A0] hover:cursor-pointer hover:bg-[#23252B] hover:text-white">
        <span className="">
          <AiFillCaretDown />
        </span>
        <span className="ml-3 whitespace-nowrap text-14">ENGLISH (US)</span>
      </div>
    </div>
  );
};

export default CopyrightSection;
