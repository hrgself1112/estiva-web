import Mlminfo from "@/components/Infographics/mlminfographics";
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
  UpperDataa,
  UpperData,
} from "@/data/mlm-software-development";
import { TestimonialsMlmData } from "@/data/TestimonialsDataa";
import { MMLMeta } from "@/data/metaTags/metaData";
import { SatisFiedData } from "@/data/satisfiedData";

const UIUX = () => {
  return (
    <>
      <Layout>
        {generateMetaTags(MMLMeta)}
        <HeroSectionPages items={HeroData} />

        <SatisfiedNewuser items={SatisFiedData} />
        <MainBannerPAges items={MainBannerData} />

        <Mlminfo items={UpperDataa} />

        <Cards cardTwoData={ProcessData} UpperData={UpperData} />
        <Testimonial items={TestimonialsMlmData} />
        <SimpleAccordian Faq={Faq} />
      </Layout>
    </>
  );
};

export default UIUX;
