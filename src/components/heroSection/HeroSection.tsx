import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchCollections } from "../../redux/slices/collectionsSlice";
// import Button from "../../components/button/Button";
import Loader from "../loader/Loader";
// import { Link } from "react-router-dom";
import LoaderImage from "../../assets/images/image.png";
import { fetchSingleCollection } from "../../redux/slices/nftDetailSlice";
import Button from "../button/Button";
import { rocket } from "../../constants/image";
import { Link } from "react-router-dom";

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
    <div className=" py-[40px] max-w-[1280px] mx-auto px-[30px] md:py-[80px] lg:px-[117px] md:px-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-[30px]  ">
        <div className="">
          <h1 className="text-[28px] max-w-[1050px] font-semibold font-workSans leading-[39px] md:leading-[45px] lg:leading-[73px] md:text-[38px] lg:text-[67px] text-white">
            Discover Digital Art & Collect NFTs
          </h1>
          <p className="text-[16px] py-2 lg:text-[22px] md:py-3  font-normal font-workSans leading-[22px] lg:leading-[35px] text-white">
            NFT Marketplace UI Created With Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <div className="hidden py-3 md:block">
            <Button
              text="Get Started"
              bgPurple
              img={rocket}
              imgAlt="get started"
              widthFull
            />
          </div>
          <div className="lg:my-[30px]  justify-start lg:gap-[50px] md:gap-[30px] md:my-4 md:flex hidden">
            <span className="h-[77px]">
              <h4 className="font-spaceMono lg:text-[28px] md:text-[22px]: text-white font-bold">
                240k+
              </h4>
              <p className="lg:text-[23px] md:text-[16px] font-normal text-white ">
                Total Sale
              </p>
            </span>
            <span className="h-[77px]">
              <h4 className="font-spaceMono lg:text-[28px] md:text-[22px]: text-white font-bold">
                110k+
              </h4>
              <p className="lg:text-[23px] md:text-[16px]  text-white ">
                Auctions
              </p>
            </span>
            <span className="h-[77px]">
              <h4 className="font-spaceMono lg:text-[28px] md:text-[22px]: text-white font-bold">
                654k+
              </h4>
              <p className="lg:text-[23px] md:text-[16px]  text-white ">
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
              {nft?.name.slice(0, 20)}
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
          <Button
            text="Get Started"
            bgPurple
            img={rocket}
            imgAlt="get started"
            width100
          />
        </div>
        <div className=" md:hidden  gap-[10px] flex justify-between ">
          <span className="h-[77px]">
            <h4 className="font-spaceMono  text-[22px] text-white font-bold">
              240k+
            </h4>
            <p className="text-[16px] font-normal text-white ">Total Sale</p>
          </span>
          <span className="h-[77px]">
            <h4 className="font-spaceMono  text-[22px] text-white font-bold">
              110k+
            </h4>
            <p className="text-[16px] font-normal text-white ">Auctions</p>
          </span>
          <span className="h-[77px]">
            <h4 className="font-spaceMono  text-[22px] text-white font-bold">
              654k+
            </h4>
            <p className="text-[16px] font-normal text-white ">Artists</p>
          </span>
        </div>
        <div className="md:flex max-w-[510px] max-h-[510px] justify-center hidden">
          <Link
            to={`/collection/${collection?.collection || "/"}`}
            className="max-h-[315px] max-w-[315px] w-full h-full rounded-[20px] bg-secondry-bg-color md:max-w-[330px] md:max-h-[330px] lg:max-w-[510px] lg:max-h-[510px]"
          >
            <img
              src={nft?.display_image_url || LoaderImage}
              alt={nft?.name}
              className="md:w-[330px] lg:w-[510px] lg:h-[401px] h-[206px]  object-cover rounded-t-[20px]"
            />
            <div className="pt-[20px] px-[20px] ">
              <h1 className="text-[22px] font-semibold  font-workSans text-white leading-[30px]">
                {nft?.name.slice(0, 20)}
              </h1>
              <div className="flex items-center gap-4 py-4">
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
