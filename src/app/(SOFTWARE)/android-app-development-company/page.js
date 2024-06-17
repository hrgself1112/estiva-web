
import Cards from "@/components/SixcardComp/sixcard";
import Testimonial from "@/components/TestimonialsNew/testomain";
import { SimpleAccordian } from "@/components/accordian/smipleAccordian";
import Layout from "@/components/headerMAin/layout";
import { generateMetaTags } from "@/components/metacomp/metamain";
import HeroSectionPages from "@/components/pagesComp/HeroSection/heroSection";
import MainBannerPAges from "@/components/pagesComp/mainbanner";
import ProcessComp from "@/components/processComp/processComp";
import SatisfiedNewuser from "@/components/satisfiedusernew/satisfiedNewuser";
import {
  HeroData,

  MainBannerData,
  Faq,
  ProcessData,

  UpperData,
  ProcessHeadsData,
  ProcessUpperData,
  ProcessLowerData,
  ProcessDecData,
} from "@/data/Software/android-app-development-companyData";
import { TestimonialsAADData } from "@/data/TestimonialsDataa";
import { AADMeta } from "@/data/metaTags/metaData";
import { SatisFiedData } from "@/data/satisfiedData";

const UIUX = () => {
  return (
    <>
    <Layout>
      {generateMetaTags(AADMeta)}
      <HeroSectionPages items={HeroData} />
      <SatisfiedNewuser items={SatisFiedData}/>
      <MainBannerPAges items={MainBannerData} />

      <Cards cardTwoData={ProcessData} UpperData={UpperData} />

      <ProcessComp
        items={ProcessHeadsData}
        data={ProcessUpperData}
        lower={ProcessLowerData}
        info={ProcessDecData}
      />
      <Testimonial items={TestimonialsAADData} />

      <SimpleAccordian Faq={Faq} />
      </Layout>
    </>
  );
};

export default UIUX;
