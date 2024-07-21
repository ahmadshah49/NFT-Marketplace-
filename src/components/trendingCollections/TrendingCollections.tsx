import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import LoaderImage from "../../assets/images/image.png";
import { nft, one, two } from "../../constants/image";
import { IoEyeSharp } from "react-icons/io5";
import {
  useCollectionsState,
  useFetchCollections,
} from "../../pages/collections/useCollections";

const Collections = () => {
  const { collections, isError, isLoading } = useCollectionsState();
  const [visibleCollections, setVisibleCollections] = useState(3);

  useFetchCollections();

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  const handleShowMore = () => {
    setVisibleCollections(visibleCollections + 3);
  };

  const displayedCollections = collections.slice(0, visibleCollections);

  return (
    <div className=" py-[40px] max-w-[1280px] mx-auto px-[30px] md:py-[80px] lg:px-[117px] md:px-[40px]">
      <div className="py-6">
        <h1 className="font-workSans font-semibold text-[28px] lg:text-[48px] py-2 leading-[40px] lg:leading-[45px] text-white">
          Trending Collections
        </h1>
        <p className="font-workSans text-base font-normal leading-[22px] text-white">
          Checkout our weekly updated trending collection.
        </p>
      </div>

      <div className="grid gap-[30px] lg:grid-cols-3 md:grid-cols-2 justify-center items-center ">
        {displayedCollections.map((collection, index) => (
          <Link
            to={`/collection/${collection?.collection}`}
            key={index}
            className="md:max-w-[330px] md:max-h-[525px] w-full rounded-[40px]"
          >
            <img
              src={collection?.image_url || LoaderImage}
              alt={collection?.name}
              className="rounded-[20px] bg-cover  my-4 md:w-[330px] md:h-[330px] h-[315px] w-full"
            />
            <div className="flex   gap-[15px]">
              <div>
                <img
                  className=" md:w-[100px] md:h-[100px] w-[95px] h-[95px] rounded-[20px]"
                  src={one || LoaderImage}
                  alt="img"
                />
              </div>

              <div>
                <img
                  className=" md:w-[100px] md:h-[100px] w-[95px] h-[95px]"
                  src={two || LoaderImage}
                  alt="img"
                />
              </div>

              <div>
                <img
                  src={nft}
                  alt="More nfts"
                  className="md:w-[100px] md:h-[100px] w-[95px] h-[95px]"
                />
              </div>
            </div>
            <div className="py-2">
              <h1 className=" text-[22px] text-white py-3 leading-[31px] font-semibold">
                {collection?.name}
              </h1>
              <span className=" flex items-center gap-[12px] ">
                <img
                  src={collection?.image_url || LoaderImage}
                  alt={collection?.name}
                  className="w-[24px] h-[24px] rounded-full"
                />
                <p className="font-workSans font-normal leading-[22px] text-base text-white">
                  {collection?.name}
                </p>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        {visibleCollections < collections?.length && (
          <button
            onClick={handleShowMore}
            className=" px-6
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
           my-8
           "
          >
            <IoEyeSharp size={20} color="white" /> Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Collections;
