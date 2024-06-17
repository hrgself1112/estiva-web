import Testimonial from "@/components/TestimonialsNew/testomain";
import { SimpleAccordian } from "@/components/accordian/smipleAccordian";
import EstivaBenefits from "@/components/estivabenefits/benefits";
import Layout from "@/components/headerMAin/layout";
import { generateMetaTags } from "@/components/metacomp/metamain";
import HeroSectionPages from "@/components/pagesComp/HeroSection/heroSection";
import MainBannerPAges from "@/components/pagesComp/mainbanner";
import SatisfiedNewuser from "@/components/satisfiedusernew/satisfiedNewuser";
import {
  HeroData,
  MainBannerData,
  Faq,
  ThreeCardLeftData,
  UpperThreeCardRightDatas,
  DownThreeCardRightDAta,
} from "@/data/DigitalMarketing/content-marketing-company";
import { TestimonialsCmData } from "@/data/TestimonialsDataa";
import { CMMetaData } from "@/data/metaTags/metaData";
import { SatisFiedData } from "@/data/satisfiedData";

const CMC = () => {
  return (
    <>
      <Layout>
        {generateMetaTags(CMMetaData)}
        <HeroSectionPages items={HeroData} />

        <SatisfiedNewuser items={SatisFiedData} />
        <MainBannerPAges items={MainBannerData} />

        <EstivaBenefits
          items={ThreeCardLeftData}
          heads={UpperThreeCardRightDatas}
          down={DownThreeCardRightDAta}
        />
        <Testimonial items={TestimonialsCmData} />
        <SimpleAccordian Faq={Faq} />
      </Layout>
    </>
  );
};

export default CMC;
