

import Cards from "@/components/SixcardComp/sixcard";
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
  UpperThreeCardRightDatas,
  Faq,
  ProcessData,DownThreeCardRightDAta,
  ThreeCardLeftData,UpperData,
} from "@/data/pay-per-click-services";
import { TestimonialsPPcData } from "@/data/TestimonialsDataa";
import { PPCMetaData } from "@/data/metaTags/metaData";
import { SatisFiedData } from "@/data/satisfiedData";

const PPC = () => {
  return (
    <>
    <Layout>
      {generateMetaTags(PPCMetaData)}
      <HeroSectionPages items={HeroData} />
      <SatisfiedNewuser items={SatisFiedData}/>
      <MainBannerPAges items={MainBannerData} />

      <EstivaBenefits items={ThreeCardLeftData} heads={UpperThreeCardRightDatas} down={DownThreeCardRightDAta} />
      <Cards cardTwoData={ProcessData} UpperData={UpperData}/>
      <Testimonial items={TestimonialsPPcData} />
      <SimpleAccordian Faq={Faq} />

      </Layout>

    </>
  );
};

export default PPC;
