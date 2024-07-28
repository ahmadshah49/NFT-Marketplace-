import { FaLinkedin, FaTwitter, FaDiscord, FaYoutube } from "react-icons/fa";

import { logo, message } from "../../constants/image";

const Footer: React.FC = () => {
  return (
    <div className="py-10 max-w-screen-xl  lg:px-[110px] md:px-[75px] mx-auto px-[40px] md:py-[40px]  bg-secondry-bg-color mt-10">
      <div className="flex lg:flex-row  justify-between flex-col gap-[30px] ">
        <div className="flex flex-col lg:w-[327px]  items-start gap-5">
          <img src={logo} alt="logo" className="lg:mb-2" />
          <p className="text-light text-base font-normal font-workSans">
            NFT marketplace UI created <br /> with Anima for Figma
          </p>
          <p className="text-light text-base font-normal font-workSans">
            Join our Community
          </p>
          <div className="flex gap-3 text-light">
            <FaYoutube size={25} />
            <FaDiscord size={25} />
            <FaLinkedin size={25} />
            <FaTwitter size={25} />
          </div>
        </div>

        <div className="flex flex-col lg:w-[240px] items-start gap-5">
          <h2 className="font-spaceMono font-bold text-2xl lg:mb-2 text-white">
            Explore
          </h2>
          <p className="text-light text-base font-normal font-workSans">
            Marketplace
          </p>
          <p className="text-light text-base font-normal font-workSans">
            Rankings
          </p>
          <p className="text-light text-base font-normal font-workSans">
            Connect a wallet
          </p>
        </div>

        <div className="flex flex-col items-start gap-5">
          <h2 className="font-spaceMono font-bold lg:mb-2 text-2xl text-white">
            Join our weekly digest
          </h2>
          <p className="text-light text-base font-normal font-workSans">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="hidden items-center lg:w-full w-fit md:flex bg-white rounded-[20px]">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-5 py-4 border-0 rounded-l-2xl text-base font-workSans"
            />
            <span className="px-[50px] py-4 bg-primary-btn-color rounded-[20px] text-white rounded-r-2xl font-normal text-base font-workSans">
              Subscribe
            </span>
          </div>

          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full block  md:hidden px-5 py-4 border-0 rounded-[20px] text-base font-workSans"
          />
          <button className="px-8 py-4 flex items-center justify-center gap-2  md:hidden bg-primary-btn-color rounded-[20px] text-white w-full rounded-r-2xl font-normal text-base font-workSans">
            <img src={message} alt="message" /> Subscribe
          </button>
        </div>
      </div>
      <div>
        <div className="w-full border-t-2 border-white rounded-full mt-6" />
        <div className="mt-4 text-light text-left">
          &copy; Techloset Coding Bootcamp 6.O Created by Ahmad Raza
        </div>
      </div>
    </div>
  );
};

export default Footer;
