import EstivaBenefits from "@/components/estivabenefits/benefits";
import Feature from "@/components/featureComp/feature";
import Layout from "@/components/headerMAin/layout";

import { generateMetaTags } from "@/components/metacomp/metamain";
import OurVision from "@/components/ourVision/ourVisionComp";
import HeroSectionPages from "@/components/pagesComp/HeroSection/heroSection";
import MainBannerPAges from "@/components/pagesComp/mainbanner";

import SatisfiedNewuser from "@/components/satisfiedusernew/satisfiedNewuser";

import {
  MainBannerData,
  UpperDAtaCard,
  MidleData,
  CardsData,
  ThreeCardLeftData,
  UpperThreeCardRightDatas,
  DownThreeCardRightDAta,
  HeroData,
} from "@/data/aboutData";
import { ABoutMetaData } from "@/data/metaData";
import { SatisFiedData } from "@/data/satisfiedData";

const ABout = () => {
  return (
    <>
      <Layout>
        {generateMetaTags(ABoutMetaData)}
        <HeroSectionPages items={HeroData} />
        <SatisfiedNewuser items={SatisFiedData} />
        <MainBannerPAges items={MainBannerData} />
        <Feature
          items={UpperDAtaCard}
          Data={MidleData}
          lowerCards={CardsData}
        />
        <OurVision />
        <EstivaBenefits
          items={ThreeCardLeftData}
          heads={UpperThreeCardRightDatas}
          down={DownThreeCardRightDAta}
        />
      </Layout>
    </>
  );
};

export default ABout;
