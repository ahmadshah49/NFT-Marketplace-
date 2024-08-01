import { NftCardProps } from "../../types/types";

const NftCard: React.FC<NftCardProps> = ({
  collectionSrc,
  collectionAlt,
  collectionName,
  nftSrc,
  nftAlt,
  nftName,
}) => {
  return (
    <div className="w-full md:max-h-[469px] max-h-[402px] rounded-[20px] mx-auto overflow-hidden">
      <img
        src={nftSrc}
        alt={nftAlt}
        className="w-full max-h-[238px] md:max-h-[295px] object-cover rounded-t-[20px]"
      />
      <div className="bg-secondry-bg-color flex flex-col gap-[25px] pt-5 pb-[25px] px-6 rounded-b-[20px]">
        <div className="flex flex-col gap-[5px]">
          <h1 className="font-workSans text-lg md:text-xl lg:text-2xl font-semibold">
            {nftName}
          </h1>
          <div className="flex items-center gap-3 ">
            <img
              src={collectionSrc}
              alt={collectionAlt}
              className="w-6 h-6 rounded-full"
            />
            <p className="font-spaceMono text-sm md:text-base font-normal">
              {collectionName}
            </p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div>
            <p className="text-xs text-lightText font-workSans font-normal">
              Price
            </p>
            <p className="text-base font-normal text-white py-1">1.45 ETH</p>
          </div>
          <div>
            <p className="text-xs text-lightText font-workSans font-normal">
              Highest bid
            </p>
            <p className="text-base font-normal text-white py-1">0.36 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
