import Cards from "@/components/SixcardComp/sixcard";
import Testimonial from "@/components/TestimonialsNew/testomain";
import { SimpleAccordian } from "@/components/accordian/smipleAccordian";
import Layout from "@/components/headerMAin/layout";
import { generateMetaTags } from "@/components/metacomp/metamain";
import HeroSectionPages from "@/components/pagesComp/HeroSection/heroSection";
import MainBannerPAges from "@/components/pagesComp/mainbanner";
import SatisfiedNewuser from "@/components/satisfiedusernew/satisfiedNewuser";
import {
  HeroData,
  MainBannerData,
  Faq,
  ProcessData,
  UpperData,
} from "@/data/Software/hybrid-mobile-app-development-companyData";
import { TestimonialsHMADData } from "@/data/TestimonialsDataa";
import { HADMeta } from "@/data/metaTags/metaData";
import { SatisFiedData } from "@/data/satisfiedData";

const UIUX = () => {
  return (
    <>
      <Layout>
        {generateMetaTags(HADMeta)}
        <HeroSectionPages items={HeroData} />

        <SatisfiedNewuser items={SatisFiedData} />
        <MainBannerPAges items={MainBannerData} />

        <Cards cardTwoData={ProcessData} UpperData={UpperData} />
        <Testimonial items={TestimonialsHMADData} />

        <SimpleAccordian Faq={Faq} />
      </Layout>
    </>
  );
};

export default UIUX;
