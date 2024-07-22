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
    <div className="w-full md:max-h-[469px] rounded-[20px] mx-auto overflow-hidden">
      <img
        src={nftSrc}
        alt={nftAlt}
        className="w-full md:max-h-[295px] object-cover rounded-t-[20px]"
      />
      <div className="bg-secondry-bg-color pt-5 pb-[25px] px-6 rounded-b-[20px]">
        <h1 className="font-workSans text-lg md:text-xl lg:text-2xl font-semibold p-1">
          {nftName}
        </h1>
        <div className="flex items-center gap-3 p-1">
          <img
            src={collectionSrc}
            alt={collectionAlt}
            className="w-6 h-6 rounded-full"
          />
          <p className="font-spaceMono text-sm md:text-base font-normal">
            {collectionName}
          </p>
        </div>
        <div className="flex justify-between pt-5">
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
