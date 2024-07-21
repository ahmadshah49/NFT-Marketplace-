import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../../assets/icons/logo.png";
import userLogo from "../../assets/icons/userLogo.png";
import Button from "../button/Button";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="lg:h-[100px]   h-[54px] z-[100] w-full top-0 bg-primary-bg-color ">
        <div className=" md:px-[50px] px-[30px] py-[15px]   lg:py-[20px] lg:px-[50px] flex items-center justify-between ">
          <div className="">
            <Link to={"/"}>
              <img
                className="w-[183px]   tablet:block tablet:w-[170px] md-tablet:w-[243px] "
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden lg:flex justify-center items-center 1020:gap:[22px] gap-[11px]">
            <span>
              <Link
                className="text-white  flex-shrink h-[46px] px-[10px] font-spaceMono py-[20px] text-base font-semibold"
                to={"/collections"}
              >
                Collections
              </Link>
            </span>
            <span>
              <Link
                to={"#"}
                className="text-white flex-shrink h-[46px] px-[10px] py-[20px] font-spaceMono text-base font-semibold"
              >
                Rankings
              </Link>
            </span>
            <span>
              <Link
                to={"#"}
                className="text-white  h-[46px] px-[10px] py-[20px] font-spaceMono text-base font-semibold"
              >
                Connect a wallet
              </Link>
            </span>

            <Button
              img={userLogo}
              text="Sign up"
              imgAlt="user"
              bgPurple
              border
            />
          </div>
          <div onClick={() => setNav(!nav)} className="lg:hidden block">
            {!nav ? (
              <HiMenuAlt3 color="white" size={30} />
            ) : (
              <AiOutlineClose color="white" size={30} />
            )}
          </div>
        </div>

        <div
          className={
            nav
              ? "fixed md:hidden  top-0 left-0 bg-dark-bg-color w-[50%] h-[200vh] duration-1000 z-20"
              : "fixed md:hidden z-[100] top-0 left-[-100%] h-[200vh] bg-dark-bg-color w-[70%]  duration-1000"
          }
        >
          <div className=" px-4 py-2 h-screen">
            <div>
              <img className="w-[200px]" src={logo} alt="logo" />
            </div>
            <div className="mt-10 flex flex-col justify-center gap-8 ">
              <span className="text-white text-sm font-semibold">
                <Link to={"/collections"}> Collections</Link>
              </span>
              <span className="text-white text-sm font-semibold">Rankings</span>
              <span className="text-white text-sm font-semibold">
                Connect a wallet
              </span>
            </div>
            <div className="mt-8">
              <Button
                img={userLogo}
                text="Sign up"
                imgAlt="user"
                bgPurple
                border
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
