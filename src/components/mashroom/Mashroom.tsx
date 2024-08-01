/* eslint-disable react-hooks/exhaustive-deps */
import Button from "../button/Button";
import { eye, mashroom, shormie } from "../../constants/image";

import { useState, useEffect } from "react";
import { MdOutlineRocketLaunch } from "react-icons/md";

function Mashroom() {
  const initialTime = { hours: 2, minutes: 45, seconds: 29 };
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          return initialTime;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time, initialTime]);

  return (
    <div
      className="relative  lg:h-[640px] md:h-[630px] h-[590px] mx-auto bg-cover bg-center"
      style={{
        backgroundImage: `url(${mashroom})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-primary-btn-color to-transparent" />
      <div className="absolute w-full  bottom-2 md:bottom-[60px] py-[30px] left-1/2 transform -translate-x-1/2   lg:px-[110px]  md:px-[75px] px-[40px]">
        <div className="flex justify-between md:items-end  items-start md:flex-row flex-col">
          <div className="flex flex-col justify-between lg:h-[220px]">
            <span className="flex items-center gap-2 py-[10px] px-5 bg-secondry-bg-color rounded-[20px]  w-fit">
              <img src={shormie} alt="logo" className="w-6 h-6 rounded-full " />
              <p className="font-workSans text-base text-white font-normal">
                Shormie
              </p>
            </span>
            <h1 className="lg:text-[51px]  font-workSans md:my-0 my-8 lg:leading-[51px] leading-[40px] text-[38px] text-5xl lg:py-0 md:py-6   font-semibold text-white">
              Magic Mashrooms
            </h1>
            <span className="py-8 md:py-4 md:block hidden">
              <button className="  flex gap-[12px] items-center rounded-[20px] h-[60px] bg-primary-btn-color px-[50px]">
                <MdOutlineRocketLaunch color="white" className="size-[20px]" />
                <p className="text-white font-workSans font-semibold text-base">
                  Get Started
                </p>
              </button>
            </span>
          </div>
          <div className="rounded-[20px] w-full md:h-[144px] flex flex-col   md:max-w-[295px] bg-secondry-bg-color/60   text-white p-[30px]">
            <div>
              <h1 className="text-sm md:text-xs font-normal font-spaceMono md:mb-1 text-left">
                Auction ends in:
              </h1>
              <div className="text-[38px] w-full flex justify-between   font-spaceMono leading-[45px] md:text-4xl text-3xl font-bold ">
                <p className="flex flex-col">
                  {String(time.hours).padStart(2, "0")}
                  <span className="text-xs font-normal py-1">Hours</span>
                </p>
                <span>:</span>
                <p className="flex flex-col">
                  {String(time.minutes).padStart(2, "0")}
                  <span className="text-xs font-normal py-1">Minutes</span>
                </p>
                <span>:</span>
                <p className="flex flex-col">
                  {String(time.seconds).padStart(2, "0")}
                  <span className="text-xs font-normal py-1">Seconds</span>
                </p>
              </div>
            </div>
          </div>
          <span className="py-8 md:py-4 md:hidden w-full block">
            <Button
              img={eye}
              imgAlt="Eye"
              bgWhite
              textBlack
              width100
              text="See Nfts"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Mashroom;
