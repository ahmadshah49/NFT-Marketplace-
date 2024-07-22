import { WorkCardProps } from "../../types/types";

const WorkCard: React.FC<WorkCardProps> = ({
  src,
  alt,
  title,
  description,
}) => {
  return (
    <div className="gap-[30px]  bg-secondry-bg-color text-center  w-full rounded-2xl flex md:items-center items-start justify-start md:flex-col my-4 p-[20px]">
      <img
        src={src}
        alt={alt}
        className="w-24 h-24 lg:w-[250px] lg:h-[250px] md:w-[160px] md:h-[160px] mb-4"
      />
      <div>
        <h1 className="text-base md:text-base lg:text-[22px] font-workSans md:text-center text-left font-semibold text-white mb-2">
          {title}
        </h1>
        <p className="text-xs md:text-center text-left lg:text-base  font-workSans font-normal text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
