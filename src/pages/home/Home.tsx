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

      <div className=" py-[40px] max-w-[1280px] mx-auto px-[30px] md:py-[80px] lg:px-[117px] md:px-[40px]">
        <h1 className="text-white font-semibold lg:text-[38px] text-[28px]  mb-[70px]">
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
