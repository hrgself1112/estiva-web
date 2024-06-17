


import Testimonial from "@/components/TestimonialsNew/testomain"
import { SimpleAccordian } from "@/components/accordian/smipleAccordian"
import EstivaBenefits from "@/components/estivabenefits/benefits"
import Layout from "@/components/headerMAin/layout"
import { generateMetaTags } from "@/components/metacomp/metamain"
import HeroSectionPages from "@/components/pagesComp/HeroSection/heroSection"
import MainBannerPAges from "@/components/pagesComp/mainbanner"
import SatisfiedNewuser from "@/components/satisfiedusernew/satisfiedNewuser"
import { HeroData,MainBannerData,Faq,DownThreeCardRightDAta,ThreeCardLeftData,UpperThreeCardRightDatas } from "@/data/custom-software-development-company"
import { TestimonialsCSdData } from "@/data/TestimonialsDataa"
import { CSDMeta } from "@/data/metaTags/metaData"
import { SatisFiedData } from "@/data/satisfiedData"

const UIUX = () => {
  return (
    <>
     <Layout>
 {generateMetaTags(CSDMeta)}
<HeroSectionPages items={HeroData}/>

<SatisfiedNewuser items={SatisFiedData}/>
        <MainBannerPAges items={MainBannerData}/>
        <EstivaBenefits items={ThreeCardLeftData} heads={UpperThreeCardRightDatas} down={DownThreeCardRightDAta} />

        <Testimonial items={TestimonialsCSdData} />

      <SimpleAccordian Faq={Faq}/>
      </Layout>

    </>
  )
}

export default UIUX