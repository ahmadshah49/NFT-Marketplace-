import HeroSection from "../../components/heroSection/HeroSection";
import TrendingCollections from "../../components/trendingCollections/TrendingCollections";
import Mashroom from "../../components/mashroom/Mashroom";
import Getstarted from "../../components/works/Works";
import WeeklyDigest from "../../components/weeklyDigest/WeeklyDigest";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { categoryCardData } from "../../constants/categoryCardData";
import MoreNfts from "../../components/moreNfts/MoreNfts";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrendingCollections />

      <div className=" py-[40px] flex flex-col lg:gap-[60px] gap-[40px]  max-w-[1280px] mx-auto px-[30px] lg:py-[80px] md:py-[40px] lg:px-[117px] md:px-[75px]">
        <h1 className="text-white font-workSans font-semibold lg:text-[38px] text-[28px]  ">
          Browse Categories
        </h1>
        <div className="grid gap-[20px] md:gap-[30px] justify-center grid-cols-2 md:grid-cols-4 mx-auto">
          {categoryCardData.map((card, index) => (
            <CategoryCard
              key={index}
              img={card?.img}
              imgAlt={card?.imgAlt}
              title={card?.title}
            />
          ))}
        </div>
      </div>
      <MoreNfts />
      <Mashroom />

      <Getstarted />

      <WeeklyDigest />
    </div>
  );
};

export default Home;
