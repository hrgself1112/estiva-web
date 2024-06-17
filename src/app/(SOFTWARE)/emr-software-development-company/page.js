import Testimonial from "@/components/TestimonialsNew/testomain";
import { SimpleAccordian } from "@/components/accordian/smipleAccordian";
import EstivaBenefits from "@/components/estivabenefits/benefits";
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
  ThreeCardLeftData,
  UpperThreeCardRightDatas,
  DownThreeCardRightDAta,
  ProcessHeadsData,
  ProcessUpperData,
  ProcessLowerData,
  ProcessDecData,
} from "@/data/Software/emr-software-development-company";
import { TestimonialsEMRData } from "@/data/TestimonialsDataa";
import { ERMMeta } from "@/data/metaTags/metaData";
import { SatisFiedData } from "@/data/satisfiedData";

const UIUX = () => {
  return (
    <>
      <Layout>
        {generateMetaTags(ERMMeta)}
        <HeroSectionPages items={HeroData} />

        <SatisfiedNewuser items={SatisFiedData} />
        <MainBannerPAges items={MainBannerData} />
        <EstivaBenefits
          items={ThreeCardLeftData}
          heads={UpperThreeCardRightDatas}
          down={DownThreeCardRightDAta}
        />
        <ProcessComp
          items={ProcessHeadsData}
          data={ProcessUpperData}
          lower={ProcessLowerData}
          info={ProcessDecData}
        />
        <Testimonial items={TestimonialsEMRData} />
        <SimpleAccordian Faq={Faq} />
      </Layout>
    </>
  );
};

export default UIUX;
