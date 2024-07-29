/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderImage from "../../assets/images/image.png";
import ImageLoader from "../../components/imageLoader/ImageLoader";
import Loader from "../../components/loader/Loader";
import { useFetchNFTDetails, useNFTDetailsState } from "./useNftDetalis";
import { shormie } from "../../constants/image";
const tags = ["Animation", "Photoshop", "Art", "HandMade Art"];

const NftDetails = () => {
  const { address, chain, id } = useParams<{
    address?: string;
    chain?: string;
    id?: string;
  }>();
  const { isLoading, isError, nft } = useNFTDetailsState();
  const [isImageLoading, setIsImageLoading] = useState(true);
  const initialTime = { hours: 2, minutes: 45, seconds: 29 };
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          return initialTime;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time, initialTime]);

  useFetchNFTDetails(address || "", chain || "", id || "");

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleImageError = () => {
    setIsImageLoading(false);
  };

  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-full flex justify-center items-center text-red-500">
        Error loading NFT details
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="lg:max-h-[580px] md:max-h-[420px] max-h-[320px] overflow-hidden">
        {isImageLoading && <ImageLoader />}
        <img
          src={nft?.image_url || LoaderImage}
          className={` object-cover mx-auto  ${isImageLoading ? "hidden" : ""}`}
          alt="Nft"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
      <div className="py-[40px] max-w-[1280px] mx-auto px-[30px] md:py-[80px] lg:px-[110px] md:px-[40px] text-white lg:py-[80px]">
        <div className="flex justify-between items-start">
          <div className="w-full">
            <div className="mb-8">
              <h1 className="font-workSans py-2 font-semibold lg:text-[51px] md:text-[38px] text-[28px]">
                {nft?.collection}
              </h1>
              <p className="font-workSans py-1 font-normal lg:text-[22px] text-light text-base">
                Minted on July 29, 2024
              </p>
            </div>

            <div className="rounded-[20px] flex items-center md:hidden w-full flex-col md:max-w-[295px] bg-secondry-bg-color/60 text-white p-[30px]">
              <div className="w-full">
                <h1 className="text-sm md:text-xs font-normal font-spaceMono text-left">
                  Auction ends in:
                </h1>
                <div className="text-[38px] w-full flex justify-between font-spaceMono leading-[45px] md:text-4xl text-3xl font-bold py-3">
                  <p className="flex flex-col">
                    {String(time.hours).padStart(2, "0")}
                    <span className="text-xs font-normal py-2">Hours</span>
                  </p>
                  <span>:</span>
                  <p className="flex flex-col">
                    {String(time.minutes).padStart(2, "0")}
                    <span className="text-xs font-normal py-2">Minutes</span>
                  </p>
                  <span>:</span>
                  <p className="flex flex-col">
                    {String(time.seconds).padStart(2, "0")}
                    <span className="text-xs font-normal py-2">Seconds</span>
                  </p>
                </div>
                <button className="px-[12px] py-[30px] my-4 h-[60px] text-center rounded-[20px] flex justify-center items-center gap-2 font-bold text-base max-sm:text-[12px] cursor-not-allowed bg-primary-btn-color w-full">
                  Place Bid
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h1 className="font-spaceMono py-4 lg:text-[22px] text-base text-light font-normal">
                Created By
              </h1>
              <div className="flex items-center gap-[12px]">
                <img src={shormie} className="size-[24px]" alt="Shormie" />
                <p className="text-[22px] font-semibold font-workSans">
                  {nft?.name}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h1 className="font-spaceMono py-2 lg:text-[22px] text-base text-light font-normal">
                Description
              </h1>
              <p>
                {nft?.description ? nft?.description : "No Description Found!"}
              </p>
            </div>
            <div className="mb-8">
              <h1 className="font-spaceMono py-2 lg:text-[22px] text-base text-light font-normal">
                Details
              </h1>
              <a
                href={nft?.opensea_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on OpenSea
              </a>
            </div>
            <div>
              <h1 className="font-spaceMono py-2 lg:text-[22px] text-base text-light font-normal">
                Tags
              </h1>
              <div className="flex md:flex-row flex-col   flex-wrap gap-5 my-2">
                {tags.map((tag) => (
                  <p
                    key={tag}
                    className="px-[30px] py-2 w-fit bg-secondry-bg-color rounded-[20px] text-base font-semibold uppercase font-workSans"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[20px] hidden md:flex w-full flex-col md:max-w-[295px] bg-secondry-bg-color/60 text-white p-[30px]">
            <div>
              <h1 className="text-sm md:text-xs font-normal font-spaceMono text-left">
                Auction ends in:
              </h1>
              <div className="text-[38px] w-full flex justify-between font-spaceMono leading-[45px] md:text-4xl text-3xl font-bold py-3">
                <p className="flex flex-col">
                  {String(time.hours).padStart(2, "0")}
                  <span className="text-xs font-normal py-2">Hours</span>
                </p>
                <span>:</span>
                <p className="flex flex-col">
                  {String(time.minutes).padStart(2, "0")}
                  <span className="text-xs font-normal py-2">Minutes</span>
                </p>
                <span>:</span>
                <p className="flex flex-col">
                  {String(time.seconds).padStart(2, "0")}
                  <span className="text-xs font-normal py-2">Seconds</span>
                </p>
              </div>
              <button className="px-[12px] py-[30px]  h-[60px] text-center rounded-[20px] flex justify-center items-center gap-2 lg:text-base max-sm:text-[12px] cursor-not-allowed bg-primary-btn-color w-full">
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
