import { ButtonProps } from "../../types/types";

const Button: React.FC<ButtonProps> = ({
  img: src,
  imgAlt,
  text,
  bgPurple,
  bgWhite,
  border,
  textBlack,
  bgTransparent,
  widthFull,
  widthFit,
  width100,
  icon: Icon,
  onClick,
}) => {
  const buttonClasses = `
           px-[12px]
           py-[30px]
           w-[152px]
           h-[60px]
           text-center  
           rounded-[20px]
           flex
           justify-center
           items-center
           gap-2
           lg:text-base
           max-sm:text-[12px]
           cursor-not-allowed
          ${bgPurple ? "bg-primary-btn-color" : ""}
          ${widthFull ? "w-[244px]" : ""}
          ${width100 ? "w-full text-[16px]" : ""}
          ${widthFit ? "w-fit" : ""}
          ${bgTransparent ? "bg-transparent" : ""}
          ${bgWhite ? "bg-white" : ""}
          ${border ? "border-2 border-primary-btn-color" : ""}
`;
  const textClasses = `
    ${textBlack ? "text-black" : "text-white"}
    font-semibold
    outline-none
    border-none
  `;
  return (
    <button onClick={onClick} className={buttonClasses} disabled>
      <img src={src} alt={imgAlt} className="w-[20px] " />
      {Icon && <Icon size={20} color="purlpe" />}
      <p className={textClasses}>{text}</p>
    </button>
  );
};

export default Button;
