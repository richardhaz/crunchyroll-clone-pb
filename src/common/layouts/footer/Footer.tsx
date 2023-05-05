import { CopyrightSection } from '@/common/components/copyright-section';
import { AiFillYoutube, AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { IoLogoTiktok } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="footer-container pt-10">
      <div className="use-container">
        <div className="border-b-1 border-[#4a4e58] pb-4 md:pb-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6 md:col-span-4 lg:col-span-3">
              <div>
                <h4 className="mb-2 font-semibold">Navigation</h4>
                <ul>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Browse Popular
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Browse Simulcasts
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Browse Manga
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Release Calendar
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        News
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Games
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-3">
              <div>
                <h4 className="mb-2 font-semibold">Connect With Us</h4>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-transition flex items-center gap-1 text-14 text-[#A0A0A0] hover:text-white hover:underline"
                    >
                      <span className="text-20">
                        <AiFillYoutube />
                      </span>
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-transition flex items-center gap-1 text-14 text-[#A0A0A0] hover:text-white hover:underline"
                    >
                      <span className="text-20">
                        <AiFillFacebook />
                      </span>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-transition flex items-center gap-1 text-14 text-[#A0A0A0] hover:text-white hover:underline"
                    >
                      <span className="text-20">
                        <AiOutlineTwitter />
                      </span>
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-transition flex items-center gap-1 text-14 text-[#A0A0A0] hover:text-white hover:underline"
                    >
                      <span className="text-20">
                        <AiOutlineInstagram />
                      </span>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-transition flex items-center gap-1 text-14 text-[#A0A0A0] hover:text-white hover:underline"
                    >
                      <span className="text-20">
                        <IoLogoTiktok />
                      </span>
                      Tik Tok
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-3">
              <div>
                <h4 className="mb-2 font-semibold">Crunchyroll</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Help/FAQ
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Terms of Use
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Privacy Policy
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        AdChoices
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Your Privacy Choices
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Cookie Consent Tool
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Press Inquiries
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Get the Apps
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Redeem Gift Card
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Jobs
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-3">
              <div>
                <h4 className="mb-2 font-semibold">Account</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Create Account
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text-transition text-14 text-[#A0A0A0] hover:text-white hover:underline">
                        Log In
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <CopyrightSection />
      </div>
    </div>
  );
};

export default Footer;
