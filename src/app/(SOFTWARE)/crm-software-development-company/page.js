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
} from "@/data/Software/crm-software-development-company";
import { TestimonialsCRMData } from "@/data/TestimonialsDataa";
import { CRMMeta } from "@/data/metaTags/metaData";
import { SatisFiedData } from "@/data/satisfiedData";

const UIUX = () => {
  return (
    <>
      <Layout>
        {generateMetaTags(CRMMeta)}
        <HeroSectionPages items={HeroData} />
        <SatisfiedNewuser items={SatisFiedData} />
        <MainBannerPAges items={MainBannerData} />

        <Cards cardTwoData={ProcessData} UpperData={UpperData} />
        <Testimonial items={TestimonialsCRMData} />

        <SimpleAccordian Faq={Faq} />
      </Layout>
    </>
  );
};

export default UIUX;
