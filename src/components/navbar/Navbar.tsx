import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import logo from "../../assets/icons/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { eye } from "../../constants/image";
import { LuUser2 } from "react-icons/lu";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="lg:h-[100px]   h-[54px] z-[100] w-full top-0 bg-primary-bg-color ">
        <div className=" md:px-[50px] px-[30px] py-[15px]   lg:py-[20px] lg:px-[50px] flex items-center justify-between ">
          <div className="">
            <Link to={"/"}>
              <img
                className="lg:min-w-[243px]  max-w-[182px]  "
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden lg:flex justify-center items-center lg:gap-[30px] gap-[11px]">
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

            <button className="  flex gap-[12px] items-center rounded-[20px] h-[60px] bg-primary-btn-color px-[30px]">
              <LuUser2 color="white" className="size-[20px]" />
              <p className="text-white font-workSans font-semibold text-base">
              
                Sign Up
              </p>
            </button>
          </div>
          <div onClick={() => setNav(!nav)} className="lg:hidden block">
            {!nav ? (
              <HiMenuAlt3 color="white" size={24} />
            ) : (
              <AiOutlineClose color="white" size={24} />
            )}
          </div>
        </div>

        <div
          className={
            nav
              ? "fixed md:hidden  top-0 left-0 bg-dark-bg-color w-[70%] h-[200vh] duration-1000 z-20"
              : "fixed md:hidden z-[100] top-0 left-[-100%] h-[200vh] bg-dark-bg-color w-[70%]  duration-1000"
          }
        >
          <div className=" px-4 py-4 h-screen">
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
              <button className=" border-2 flex gap-2 items-center rounded-[20px] h-[50px] bg-white px-[50px]">
                <img src={eye} color="white" alt="See All" />
                <p> See All</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
