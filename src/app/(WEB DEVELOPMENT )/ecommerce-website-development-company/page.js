

import Testimonial from "@/components/TestimonialsNew/testomain";
import { SimpleAccordian } from "@/components/accordian/smipleAccordian";
import EstivaBenefits from "@/components/estivabenefits/benefits";
import Layout from "@/components/headerMAin/layout";


import { generateMetaTags } from "@/components/metacomp/metamain";
import HeroSectionPages from "@/components/pagesComp/HeroSection/heroSection";
import MainBannerPAges from "@/components/pagesComp/mainbanner";
import SatisfiedNewuser from "@/components/satisfiedusernew/satisfiedNewuser";

import { TestimonialsEWDData } from "@/data/TestimonialsDataa";

import {
  HeroData,

  MainBannerData,
  Faq,
  ThreeCardLeftData,UpperThreeCardRightDatas,DownThreeCardRightDAta
} from "@/data/WebDevelopment/ecommerce-website-development-companyData";
import { EWDMeta } from "@/data/metaTags/metaData";
import { SatisFiedData } from "@/data/satisfiedData";

const EWD = () => {
  return (
    <>
    <Layout>
      {generateMetaTags(EWDMeta)}
      <HeroSectionPages items={HeroData} />

      <SatisfiedNewuser items={SatisFiedData}/>
      <MainBannerPAges items={MainBannerData} />
      <EstivaBenefits items={ThreeCardLeftData} heads={UpperThreeCardRightDatas} down={DownThreeCardRightDAta} />

      <Testimonial items={TestimonialsEWDData} />

      <SimpleAccordian Faq={Faq} />
    </Layout>
    </>
  );
};

export default EWD;
