import { WorkCardProps } from "../../types/types";

const WorkCard: React.FC<WorkCardProps> = ({
  src,
  alt,
  title,
  description,
}) => {
  return (
    <div
      className="
    md:gap-[30px]
    lg:max-w-[330px]
    lg:max-h-[438px]
  bg-secondry-bg-color
    text-center
    w-full
    rounded-2xl
    flex
    md:items-center
    items-center
    gap-[20px]
    justify-between
    md:justify-start
    md:flex-col
    md:pt-[10px]
    lg:px-[30px]
    md:pb-[30px]
    md:px-[20px]
    p-[20px]
    "
    >
      <img
        src={src}
        alt={alt}
        className="w-24 h-24 lg:w-[208px] lg:h-[208px] md:w-[160px] md:h-[160px]   "
      />
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-base md:text-base lg:text-[22px] font-workSans md:text-center text-left font-semibold text-white ">
          {title}
        </h1>
        <p className="text-xs   md:text-center text-left lg:text-base  font-workSans font-normal text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
