import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCollections } from "../../redux/slices/collectionsSlice";
import Loader from "../../components/loader/Loader";
import LoaderImage from "../../assets/images/image.png";
import { useFetchNfts, useNftsState } from "./useNfts";
import { IoSearch } from "react-icons/io5";
const Nfts = () => {
  const { slug } = useParams<{ slug: string }>();

  const dispatch: AppDispatch = useDispatch();

  const { isError, isLoading, nfts } = useNftsState();

  const { collections } = useSelector((state: RootState) => state?.collections);

  const [visibleCollections, setVisibleCollections] = useState(8);

  useFetchNfts(slug || "");

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  const contractChain = (contractAddress: string): string | undefined => {
    for (const col of collections) {
      for (const contract of col.contracts) {
        if (contract?.address === contractAddress) {
          return contract?.chain;
        }
      }
    }
    return undefined;
  };

  const handleShowMore = () => {
    setVisibleCollections(visibleCollections + 8);
  };

  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return (
      <div className="h-full">
        <Loader />
      </div>
    );
  }

  const displayedNfts = nfts?.slice(0, visibleCollections);

  return (
    <div className="">
      <div className="py-[40px]  max-w-[1280px] mx-auto px-[30px] md:py-[80px] lg:px-[110px] md:px-[40px] text-white lg:py-[80px]">
        <h1 className="font-workSans  my-2 font-semibold lg:leading-[56px]  leading-[45px] lg:text-[51px] md:text-[38px] text-[28px]">
          [NFTs]
        </h1>
        <p className="lg:text-[22px] my-2 text-[16px] font-normal font-workSans ">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>
        <span className="py-[12px] px-[22px] lg:my-10 my-7 w-full border border-solid flex items-center justify-between border-secondry-bg-color rounded-[20px]">
          <p className="text-light">Search your favourite NFTs</p>
          <IoSearch size={25} />
        </span>
      </div>

      <div className="  max-w-[1280px] mx-auto px-[40px]   pt-4  lg:px-[110px] md:px-[40px] text-white ">
        <span className="flex items-center justify-center py-4 gap-4 border-b border-light">
          <h1 className="text-white font-workSans font-semibold lg:text-[22px] text-base">
            NFTs
          </h1>
          <p className="text-white font-spaceMono  text-base w-[50px] text-center  font-normal lg:py-[5px] px-[10px] bg-light rounded-[20px]">
            {displayedNfts.length}
          </p>
        </span>
      </div>

      <div className="bg-secondry-bg-color w-full">
        <div className="py-[40px] max-w-[1280px] mx-auto px-[40px] md:py-[80px] lg:px-[110px] md:px-[40px]  grid lg:grid-cols-3 md:gap-[30px] md:grid-cols-2 grid-cols-1 justify-items-center">
          {displayedNfts?.map((nft, index) => (
            <Link
              to={`/nft/${contractChain(nft?.contract)}/${nft?.contract}/${
                nft?.identifier
              }`}
              key={index}
              className="w-full  md:max-h-[469px] max-h-[402px] rounded-[20px] mx-auto overflow-hidden"
            >
              <img
                src={nft?.display_image_url || LoaderImage}
                alt={nft?.name}
                className=" bg-cover rounded-t-[20px]    md:min-h-[295px]  w-full h-[238px] object-cover object-center"
              />
              <div className="bg-primary-bg-color flex flex-col gap-[25px] pt-5 pb-[25px] px-6 rounded-b-[20px]">
                <div className="flex flex-col gap-[5px]">
                  <h1 className="font-workSans text-white text-lg md:text-xl lg:text-2xl font-semibold">
                    {nft?.name?.slice(0, 22)}
                  </h1>
                </div>
                <div className="flex justify-between ">
                  <div>
                    <p className="text-xs text-lightText font-workSans font-normal">
                      Price
                    </p>
                    <p className="text-base font-normal text-white py-1">
                      1.45 ETH
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-lightText font-workSans font-normal">
                      Highest bid
                    </p>
                    <p className="text-base font-normal text-white py-1">
                      0.36 ETH
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center bg-secondry-bg-color">
        {visibleCollections && nfts && visibleCollections < nfts?.length && (
          <button
            onClick={handleShowMore}
            className="
            px-6 
            py-2 
            rounded-[12px]
            flex
            justify-center
            items-center
            gap-2
            lg:text-base
            max-sm:text-[12px]
          bg-primary-btn-color 
            font-semibold
          text-white 
            my-8"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Nfts;
