import { message } from "../../constants/image";
const WeeklyDigest = () => {
  return (
    <div className=" py-[40px] max-w-[1280px] mx-auto px-[30px] md:py-[80px] lg:px-[110px] md:px-[40px] ">
      {""}
      <div className="md:bg-secondry-bg-color text-white flex md:items-center md:flex-row flex-col items-center  justify-between md:gap-[60px] rounded-[20px] md:px-[40px] md:py-[30px] lg:p-[60px]">
        <div className=" ">
          <img
            src="https://s3-alpha-sig.figma.com/img/9f1a/3ec9/5772f9d568933f15578613e18c5adb73?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CdLfVNuCYF7haNpYGGEqKl9LJuscmx9EyB8USdn2y9JzpmvFZR2V0AEBM99NM-NBR-QUG94~mL4U3pmbv4wbICd9hkywTImxRvNZsJBmdCgem4iWxMre4ApH5hwz9VmPH7anVC02eONTUhtoWEl18AO-5CMd20AwiRZncPgsASC6ddrewMFLclzSWXXSKFaJi7qXY4oZHXa7imNByI-VrPAKgiwXOr07rBARtkIz4Nuc9h0-wSiQLxUAhNUfixh-F0ZFs8~5CON~-s764E5K~1vruJmwej9JGBOeAON5Doh-jxh2L4Gs4hsw7dEKdQ3I7tVrOzHOwgUpqvDMDqWk7A__"
            alt="image"
            className="lg:w-[425px] lg:h-[310px] md:w-[300px] md:h-[280px] object-cover rounded-[20px]"
          />
        </div>
        <div>
          <h1 className="font-workSans my-2 md:my-0 lg:py-1 font-bold lg:leading-[45px] text-[28px] lg:text-[38px]">
            Join our weekly digest
          </h1>
          <p className="font-workSans my-2 md:my-0  text-base font-normal lg:py-6 text-[22px] text-">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="hidden items-center lg:w-full lg:my-1 w-fit lg:flex bg-white rounded-[20px]">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-5 py-3 border-0 rounded-l-2xl text-base font-workSans"
            />
            <button className="px-8 py-3 bg-primary-btn-color rounded-[20px] text-white rounded-r-2xl font-normal text-base font-workSans">
              Subscribe
            </button>
          </div>

          <input
            type="email"
            placeholder="Enter Your Email"
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
