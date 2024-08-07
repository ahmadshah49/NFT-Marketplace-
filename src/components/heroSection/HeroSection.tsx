import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchCollections } from "../../redux/slices/collectionsSlice";
import Loader from "../loader/Loader";
import LoaderImage from "../../assets/images/image.png";
import { fetchSingleCollection } from "../../redux/slices/nftDetailSlice";
import { Link } from "react-router-dom";
import { MdOutlineRocketLaunch } from "react-icons/md";

const HeroSection = () => {
  const dispatch: AppDispatch = useDispatch();
  const { collections, isLoading, isError } = useSelector(
    (state: RootState) => state.collections
  );
  const { nfts } = useSelector((state: RootState) => state?.singleCollection);

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  useEffect(() => {
    if (collections.length > 0) {
      const specificCollection = collections[23]?.collection;
      if (specificCollection) {
        dispatch(fetchSingleCollection(specificCollection));
      }
    }
  }, [dispatch, collections]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const collection = collections[23];

  const nft = nfts[23];

  return (
    <div className=" py-[40px] max-w-[1280px] mx-auto px-[30px] md:py-[80px] lg:px-[117px] md:px-[75px]">
      <div className="grid grid-cols-1 lg:max-w-[1050px] md:max-w-[690px] md:grid-cols-2 mx-auto gap-[30px]  ">
        <div className="  flex flex-col lg:gap-[30px] md:gap-[20px] lg:max-w-[510px]">
          <h1 className="text-[28px] max-w-[1050px] font-semibold font-workSans leading-[39px] md:leading-[45px] lg:leading-[73px] md:text-[38px] lg:text-[67px] text-white">
            Discover Digital Art & Collect NFTs
          </h1>
          <p className="text-[16px] lg:text-[22px] my-4 md:my-0  font-normal font-workSans leading-[22px] lg:leading-[35px] text-white">
            NFT Marketplace UI Created With Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <div className="hidden md:block">
            <button className="  flex gap-[12px] items-center rounded-[20px] h-[60px] bg-primary-btn-color px-[50px]">
              <MdOutlineRocketLaunch color="white" className="size-[20px]" />
              <p className="text-white font-workSans font-semibold text-base">
                Get Started
              </p>
            </button>
          </div>
          <div className="   gap-[30px]    md:flex hidden">
            <span className="lg:h-[77px] md:h-[57px] lg:w-[150px] md:w-[90px]">
              <h4 className="font-spaceMono lg:text-[28px] md:text-[22px] text-white font-bold">
                240k+
              </h4>
              <p className="lg:text-[23px] md:text-[16px] font-workSans font-normal text-white ">
                Total Sale
              </p>
            </span>
            <span className="h-[77px] lg:w-[150px] md:w-[90px]">
              <h4 className="font-spaceMono lg:text-[28px] md:text-[22px] text-white font-bold">
                110k+
              </h4>
              <p className="lg:text-[23px] md:text-[16px] font-workSans font-normal text-white ">
                Auctions
              </p>
            </span>
            <span className="h-[77px] lg:w-[150px] md:w-[90px]">
              <h4 className="font-spaceMono lg:text-[28px] md:text-[22px] text-white font-bold">
                654k+
              </h4>
              <p className="lg:text-[23px] md:text-[16px] font-workSans font-normal text-white ">
                Artists
              </p>
            </span>
          </div>
        </div>

        <div className="block max-w-[315px] mx-auto rounded-[20px] h-[315px] bg-secondry-bg-color md:hidden">
          <img
            src={nft?.display_image_url || LoaderImage}
            alt={nft?.name}
            className=" w-[315px] h-[206px]  object-cover rounded-t-[20px]"
          />
          <div className="pt-[20px] px-[20px] ">
            <h1 className="text-[22px] font-semibold  font-workSans text-white leading-[30px]">
              {nft?.name?.slice(0, 10)}
            </h1>
            <div className="flex items-center gap-4 py-4">
              <img
                src={collection?.image_url}
                alt={collection?.name}
                className="w-5 h-5 rounded-full"
              />
              <p className="text-white text-base font-workSans font-normal">
                {collection?.name}
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden block py-3 mx-auto w-full">
          <button className=" w-full  flex gap-[12px] items-center justify-center rounded-[20px] h-[60px] bg-primary-btn-color px-[50px]">
            <MdOutlineRocketLaunch color="white" className="size-[20px]" />
            <p className="text-white font-workSans font-semibold text-base">
              Get Started
            </p>
          </button>
        </div>
        <div className=" md:hidden  gap-[10px] flex justify-between ">
          <span className="h-[77px]">
            <h4 className="font-spaceMono  text-[22px] text-white font-bold">
              240k+
            </h4>
            <p className="text-[16px] font-normal text-white font-workSans">
              Total Sale
            </p>
          </span>
          <span className="h-[77px]">
            <h4 className="font-spaceMono  text-[22px] text-white font-bold">
              110k+
            </h4>
            <p className="text-[16px] font-normal text-white font-workSans">
              Auctions
            </p>
          </span>
          <span className="h-[77px]">
            <h4 className="font-spaceMono  text-[22px] text-white font-bold">
              654k+
            </h4>
            <p className="text-[16px] font-normal text-white font-workSans">
              Artists
            </p>
          </span>
        </div>
        <div className="md:flex lg:max-w-[510px] md:max-w-[330px] md:max-h-[330px] lg:max-h-[510px] justify-center hidden">
          <Link
            to={`/collection/${collection?.collection || "/"}`}
            className="max-h-[315px] max-w-[315px] w-full h-full rounded-[20px] bg-secondry-bg-color md:max-w-[330px] md:max-h-[330px] lg:max-w-[510px] lg:max-h-[510px]"
          >
            <img
              src={nft?.display_image_url || LoaderImage}
              alt={nft?.name}
              className="md:w-[330px] md:h-[221px] lg:w-[510px]  lg:h-[401px] h-[206px]  object-cover rounded-t-[20px]"
            />
            <div className="py-[20px] pl-[20px] ">
              <h1 className="text-[22px] font-semibold  font-workSans text-white leading-[30px]">
                {nft?.name?.slice(0, 10)}
              </h1>
              <div className="flex items-center gap-[12px] py-2">
                <img
                  src={collection?.image_url}
                  alt={collection?.name}
                  className="w-[24px] h-[24px] rounded-full"
                />
                <p className="text-white text-base font-workSans font-normal">
                  {collection?.name}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
