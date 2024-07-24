import { message, pilot } from "../../constants/image";
const WeeklyDigest = () => {
  return (
    <div className="  max-w-[1280px] mx-auto px-[30px]  lg:px-[110px] md:px-[40px] ">
      {""}
      <div className="md:bg-secondry-bg-color text-white flex md:items-center md:flex-row flex-col items-center  justify-between md:gap-[60px] rounded-[20px] md:px-[40px] md:py-[30px] lg:p-[60px]">
        <div className=" ">
          <img
            src={pilot}
            alt="image"
            className="lg:w-[425px] lg:h-[310px] md:min-w-[300px] md:h-[280px] object-cover rounded-[20px]"
          />
        </div>
        <div className="md:flex  md:flex-col lg:justify-center md:justify-between md:h-[280px]">
          <h1 className="font-workSans my-2 md:my-0 lg:py-1 font-bold lg:leading-[45px] text-[28px] lg:text-[38px]">
            Join our weekly <br /> digest
          </h1>
          <p className="font-workSans my-2 md:my-0  text-base font-normal lg:py-6 text-[22px] text-">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="hidden items-center lg:w-full lg:my-1 w-fit lg:flex text-black bg-white rounded-[20px]">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-5 py-3 border-0 text-black rounded-l-2xl text-base font-workSans"
            />
            <button className="px-8 py-3 bg-primary-btn-color rounded-[20px] text-white rounded-r-2xl font-semibold text-base font-workSans">
              Subscribe
            </button>
          </div>

          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full block my-2  lg:hidden md:px-[20px] py-[10px] px-5 mt-5 border-0 rounded-[20px] text-base font-workSans"
          />
          <button className="px-8 py-[10px] flex items-center justify-center md:px-[20px]  gap-2  lg:hidden bg-primary-btn-color rounded-[20px] text-white w-full rounded-r-2xl font-normal text-base font-workSans">
            <img src={message} alt="message" /> Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyDigest;
