import { CategoryCardProps } from "../../types/types";
const CategoryCard: React.FC<CategoryCardProps> = ({ img, title, imgAlt }) => {
  return (
    <div className="rounded-3xl  flex flex-col lg:max-w-[240px] lg:max-h-[316px] lg:w-full md:max-w-[212px]  justify-center bg-secondry-bg-color">
      <img src={img} alt={imgAlt} className="w-full  rounded-t-3xl" />
      <div className="md:h-[77px] h-[67px] lg:pb-[40px]">
        <p className=" lg:pt-5  lg:px-[30px] md:pt-5 md:pb-[25px] md:px-[20px] px-5 py-5  text-sm lg:text-[22px] font-semibold font-workSans text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
