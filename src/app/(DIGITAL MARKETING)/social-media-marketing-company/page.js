


import Testimonial from "@/components/TestimonialsNew/testomain";
import { SimpleAccordian } from "@/components/accordian/smipleAccordian";
import EstivaBenefits from "@/components/estivabenefits/benefits";
import Feature from "@/components/featureComp/feature";
import Layout from "@/components/headerMAin/layout";
import { generateMetaTags } from "@/components/metacomp/metamain";
import HeroSectionPages from "@/components/pagesComp/HeroSection/heroSection";
import MainBannerPAges from "@/components/pagesComp/mainbanner";
import SatisfiedNewuser from "@/components/satisfiedusernew/satisfiedNewuser";


import {
  HeroData,
  SepratorOneData,
  MainBannerData,
  Faq,
  UpperThreeCardRightDatas,
  UpperDAtaCard,
  MidleData,
  ThreeCardLeftData,
  DownThreeCardRightDAta,
  CardsData,
} from "@/data/DigitalMarketing/social-media-marketing-companyData";
import { TestimonialsSMMData } from "@/data/TestimonialsDataa";
import { SMMMetaData } from "@/data/metaTags/metaData";
import { SatisFiedData } from "@/data/satisfiedData";

const SMM = () => {
  return (
    <>

<Layout>
      {generateMetaTags(SMMMetaData)}
      <HeroSectionPages items={HeroData} />

      <SatisfiedNewuser items={SatisFiedData}/>
      <MainBannerPAges items={MainBannerData} />

      <EstivaBenefits
        items={ThreeCardLeftData}
        heads={UpperThreeCardRightDatas}
        down={DownThreeCardRightDAta}
      />
      <Feature items={UpperDAtaCard} Data={MidleData} lowerCards={CardsData} />
      <Testimonial items={TestimonialsSMMData} />
      <SimpleAccordian Faq={Faq} />
    </Layout>

    </>
  );
};

export default SMM;
