import { message, pilot } from "../../constants/image";
const WeeklyDigest = () => {
  return (
    <div className="  max-w-[1280px] mx-auto px-[30px]  lg:px-[110px] md:px-[75px] ">
      <div className="md:bg-secondry-bg-color text-white flex md:items-center md:flex-row flex-col items-center  lg:gap-[80px] gap-[30px] rounded-[20px] md:px-[30px] md:py-[40px] lg:p-[60px]">
        <div className=" ">
          <img
            src={pilot}
            alt="image"
            className="lg:w-[425px] lg:h-[310px] md:min-w-[300px] md:h-[280px] object-cover rounded-[20px]"
          />
        </div>
        <div className="md:flex   md:flex-col lg:block lg:max-h-[272px] lg:w-[400px] md:justify-between md:h-[280px]">
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[10px]">
              <h1 className="font-workSans  leading-[40px]  font-semibold lg:leading-[45px] md:pr-[0px] pr-[1px]  text-[28px] lg:text-[38px]">
                Join our Weekly Digest
              </h1>
              <p className="font-workSans my-2 md:my-0  text-base font-normal  lg:text-[22px] ">
                Get exclusive promotions & updates straight to your inbox.
              </p>
            </div>
            <div className="hidden items-center lg:w-full lg:my-1 w-fit lg:flex text-black bg-white rounded-[20px]">
              <input
                type="email"
                placeholder="Enter Your Email Here"
                className="w-full px-5 py-[16px] placeholder:text-black border-0 text-black rounded-l-2xl text-base font-workSans"
              />
              <button className="px-[50px] py-[16px] bg-primary-btn-color rounded-[20px] text-white rounded-r-2xl font-semibold text-base font-workSans">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex mt-[40px] md:mt-0 flex-col gap-[16px]">
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="w-full block   lg:hidden md:px-[20px] py-[10px] px-5  border-0 rounded-[20px] text-base font-workSans"
            />
            <button className="px-8 py-[10px] flex items-center justify-center md:px-[20px]  gap-2  lg:hidden bg-primary-btn-color rounded-[20px] text-white w-full rounded-r-2xl font-normal text-base font-workSans">
              <img src={message} alt="message" /> Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyDigest;
