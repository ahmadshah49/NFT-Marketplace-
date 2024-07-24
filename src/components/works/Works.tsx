import WorkCard from "../workcard/WorkCard";
import Wallet from "../../assets/images/wallet.png";
import Collection from "../../assets/images/collection.png";
import Earning from "../../assets/images/earning.png";

const Getstarted = () => {
  return (
    <div className="py-10 max-w-[1280px] mx-auto px-[30px] lg:py-20 md:py-10 lg:px-28 md:px-10">
      <div className="lg:mb-10">
        <h1 className="font-workSans text-[28px] lg:text-[38px] font-semibold text-white">
          How it works
        </h1>
        <p className="lg:text-[22px] text-base text-white font-normal font-workSans md:py-2 ">
          Find out how to get started
        </p>
      </div>
      <div className="flex justify-between gap-[20px] md:gap-[30px] flex-col md:flex-row  my-4">
        <WorkCard
          src={Wallet}
          alt="Wallet"
          title="Setup Your wallet"
          description="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
        />
        <WorkCard
          src={Collection}
          alt="Collection"
          title="Create Collection"
          description="Upload your work and setup your collection. Add a description, social links and floor price."
        />
        <WorkCard
          src={Earning}
          alt="Earning"
          title="Start Earning"
          description="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
        />
      </div>
    </div>
  );
};

export default Getstarted;
