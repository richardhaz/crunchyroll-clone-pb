import { Link } from 'react-router-dom';
import Logo from '../../assets/logos/crunchyroll-logo.svg';
import Yuzu from '../../assets/pets/yuzu-bucket.png';
import { CopyrightSection } from '@/common/components/copyright-section';

const NotFoundPage = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="sticky top-0 z-navbar h-navbar bg-navbar">
        <div className="flex h-full items-center justify-center">
          <div className="cursor-pointer">
            <img src={Logo} className=" h-6 lg:h-7" />
          </div>
        </div>
      </div>
      <div
        className="use-container flex flex-col items-center justify-between pt-16"
        style={{ minHeight: 'calc(100vh - 60px)' }}
      >
        <div className="flex w-full flex-col items-center justify-start lg:flex-row">
          <div>
            <img src={Yuzu} className="max-w-[206px] md:max-w-[334px] lg:max-w-[425px]" />
          </div>
          <div className="flex w-full flex-col items-center justify-center lg:pl-10">
            <h3 className="text-24 md:text-28 lg:text-34">404 - Page Not Found</h3>
            <p className="mb-10 text-14 md:text-18">Yuzu says there&apos;s nothing to see here!</p>
            <Link to="/" className="w-full md:w-auto">
              <button className="use-transition w-full bg-primary px-4 py-2.5 text-14 font-semibold uppercase text-black hover:bg-[#FF944D] md:w-auto">
                Take me home
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div>
            <ul className="flex flex-wrap items-center justify-center border-b-1 border-[#4a4e58] pb-4 md:pb-6">
              <li className="border-r-1 border-[#4a4e58] px-4">
                <a href="#">
                  <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                    Terms of Use
                  </span>
                </a>
              </li>
              <li className="border-r-1 border-[#4a4e58] px-4">
                <a href="#">
                  <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                    Privacy Policy
                  </span>
                </a>
              </li>
              <li className="border-r-1 border-[#4a4e58] px-4">
                <a href="#">
                  <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                    Cookie Consent Tool
                  </span>
                </a>
              </li>
              <li className="border-r-1 border-[#4a4e58] px-4">
                <a href="#">
                  <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                    AdChoices
                  </span>
                </a>
              </li>
              <li className="px-4">
                <a href="#">
                  <span className="text-14 text-[#A0A0A0]">Your Privacy Choices</span>
                </a>
              </li>
            </ul>
          </div>
          <CopyrightSection />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
