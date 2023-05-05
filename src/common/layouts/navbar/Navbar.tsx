import Logo from '@/assets/logos/crunchyroll-logo.svg';
import LogoSmall from '@/assets/logos/crunchyroll-circle-logo.png';
import { AiOutlineCaretDown, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineBookmark } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    {
      name: 'Browse',
      subMenu: true
    },
    {
      name: 'Manga',
      subMenu: false
    },
    {
      name: 'Games',
      subMenu: false
    },
    {
      name: 'News',
      subMenu: true
    }
  ];

  return (
    <div className="sticky top-0 z-navbar h-navbar bg-navbar">
      <div className="mx-auto flex h-full max-w-[1380px] items-center justify-center">
        <div className="flex h-full lg:hidden">
          <button className="h-inherit flex w-14 items-center justify-center">
            <span className="text-24">
              <AiOutlineMenu />
            </span>
          </button>
        </div>
        <div className="hidden cursor-pointer px-4 lg:block">
          <img src={Logo} className="h-7" />
        </div>
        <div className="flex h-full cursor-pointer items-center justify-center px-2 lg:hidden">
          <img src={LogoSmall} className="h-auto w-14" />
        </div>
        <div className="flex h-full w-full items-center justify-end lg:justify-between">
          <div className="hidden h-full lg:flex">
            {navLinks.map((item, idx) => (
              <div key={idx} className="h-inherit flex cursor-pointer hover:bg-black">
                <div className="flex items-center justify-center px-4 text-typography-light">
                  <p>{item.name}</p>
                  <i className="pl-2">{item.subMenu && <AiOutlineCaretDown />}</i>
                </div>
              </div>
            ))}
          </div>
          <ul className="flex h-full">
            <li className="flex h-full cursor-pointer items-center justify-center px-3 hover:bg-black">
              <a href="#">
                <FiSearch className="text-21" />
              </a>
            </li>
            <li className="flex h-full cursor-pointer items-center justify-center px-3 hover:bg-black">
              <a href="#">
                <HiOutlineBookmark className="text-21" />
              </a>
            </li>
            <li className="flex h-full cursor-pointer items-center justify-center px-3 hover:bg-black">
              <a href="#">
                <AiOutlineUser className="text-21" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
