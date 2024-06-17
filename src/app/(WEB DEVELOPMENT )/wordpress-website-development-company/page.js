import Testimonial from "@/components/TestimonialsNew/testomain";
import { SimpleAccordian } from "@/components/accordian/smipleAccordian";
import EstivaBenefits from "@/components/estivabenefits/benefits";
import Layout from "@/components/headerMAin/layout";
import { generateMetaTags } from "@/components/metacomp/metamain";
import HeroSectionPages from "@/components/pagesComp/HeroSection/heroSection";
import MainBannerPAges from "@/components/pagesComp/mainbanner";
import SatisfiedNewuser from "@/components/satisfiedusernew/satisfiedNewuser";
import { TestimonialsWWDData } from "@/data/TestimonialsDataa";
import {
  HeroData,
  MainBannerData,
  Faq,
  UpperThreeCardRightDatas,
  ThreeCardLeftData,
  DownThreeCardRightDAta,
} from "@/data/WebDevelopment/wordpress-website-development-company";
import { WordPressMeta } from "@/data/metaTags/metaData";
import { SatisFiedData } from "@/data/satisfiedData";

const WWc = () => {
  return (
    <>
      <Layout>
        {generateMetaTags(WordPressMeta)}
        <HeroSectionPages items={HeroData} />

        <SatisfiedNewuser items={SatisFiedData} />
        <MainBannerPAges items={MainBannerData} />
        <EstivaBenefits
          items={ThreeCardLeftData}
          heads={UpperThreeCardRightDatas}
          down={DownThreeCardRightDAta}
        />

        <Testimonial items={TestimonialsWWDData} />

        <SimpleAccordian Faq={Faq} />
      </Layout>
    </>
  );
};

export default WWc;
