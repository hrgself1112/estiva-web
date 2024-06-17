
import Cards from "@/components/SixcardComp/sixcard"
import Testimonial from "@/components/TestimonialsNew/testomain"
import { SimpleAccordian } from "@/components/accordian/smipleAccordian"
import EstivaBenefits from "@/components/estivabenefits/benefits"
import Layout from "@/components/headerMAin/layout"
import { generateMetaTags } from "@/components/metacomp/metamain"
import HeroSectionPages from "@/components/pagesComp/HeroSection/heroSection"
import MainBannerPAges from "@/components/pagesComp/mainbanner"
import SatisfiedNewuser from "@/components/satisfiedusernew/satisfiedNewuser"
import { HeroData,Faq,ProcessData,UpperData, MainBannerData,ThreeCardLeftData,UpperThreeCardRightDatas,DownThreeCardRightDAta } from "@/data/DigitalMarketing/seo-servicesData"
import { TestimonialsSEOData } from "@/data/TestimonialsDataa"
import { SEOMetaData } from "@/data/metaTags/metaData"
import { SatisFiedData } from "@/data/satisfiedData"



const SEO = () => {
  return (
    <>
    <Layout>
         {generateMetaTags(SEOMetaData)}
        <HeroSectionPages items={HeroData}/>
         <SatisfiedNewuser items={SatisFiedData}/>
        <MainBannerPAges items={MainBannerData}/>
        <EstivaBenefits items={ThreeCardLeftData} heads={UpperThreeCardRightDatas} down={DownThreeCardRightDAta} />
        <Cards cardTwoData={ProcessData} UpperData={UpperData}/>
        <Testimonial items={TestimonialsSEOData} />
        <SimpleAccordian Faq={Faq}/>
    </Layout>
    </>
  )
}

export default SEO