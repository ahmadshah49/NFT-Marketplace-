import Button from "../button/Button";
import { eye } from "../../constants/image";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCollections } from "../../redux/slices/collectionsSlice";
import { fetchSingleCollection } from "../../redux/slices/nftDetailSlice";
import Loader from "../loader/Loader";
import NftCard from "../nftCard/NftCard";

const MoreNfts = () => {
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
      collections.slice(24, 27).map((collection) => {
        dispatch(fetchSingleCollection(collection.collection));
      });
    }
  }, [dispatch, collections]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const collection1 = collections[24];
  const collection2 = collections[25];
  const collection3 = collections[26];

  if (!collection1 || !nfts || nfts?.length === 0) {
    return <div>No collections found</div>;
  }

  const nft1 = nfts[24];
  const nft2 = nfts[25];
  const nft3 = nfts[26];

  return (
    <div className="py-[40px] px-[30px] max-w-[1280px] mx-auto  md:py-[80px] md:px-[40px] lg:px-[110px] text-white">
      <div className="py-10 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-[28px] lg:text-[38px] py-1 font-workSans font-semibold">
            Discover More NFTs
          </h1>
          <p className="text-base md:text-lg lg:text-[22px] py-1 font-normal">
            Explore new trending NFTs
          </p>
        </div>
        <div className="hidden md:block">
          <Button
            text="See All"
            img={eye}
            imgAlt="see more"
            bgTransparent
            border
            widthFull
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
        <NftCard
          nftSrc={nft1?.display_image_url}
          nftAlt={nft1?.name}
          nftName={nft1?.name.slice(0, 10)}
          collectionAlt={collection1?.name}
          collectionName={collection1?.name.slice(0, 15)}
          collectionSrc={collection1?.image_url}
        />
        <NftCard
          nftSrc={nft2?.display_image_url}
          nftAlt={nft2?.name}
          nftName={nft2?.name.slice(0, 12)}
          collectionAlt={collection2?.name}
          collectionName={collection2?.name.slice(0, 10)}
          collectionSrc={collection2?.image_url}
        />
        <NftCard
          nftSrc={nft3?.display_image_url}
          nftAlt={nft3?.name}
          nftName={nft3?.name.slice(0, 12)}
          collectionAlt={collection3?.name}
          collectionName={collection3?.name.slice(0, 10)}
          collectionSrc={collection3?.image_url}
        />
      </div>
    </div>
  );
};

export default MoreNfts;
