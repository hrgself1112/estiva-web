
import NotFound from "@/app/not-found";
import CategorieMenu from "@/components/CategorieComps/categorieMenu/categoriemenuLayout";
import CategoriePages from "@/components/CategorieComps/categoriePages";
import Mlminfo from "@/components/Infographics/mlminfographics";
import Cards from "@/components/SixcardComp/sixcard";
import Testimonial from "@/components/TestimonialsNew/testomain";
import { SimpleAccordian } from "@/components/accordian/smipleAccordian";
import EstivaBenefits from "@/components/estivabenefits/benefits";
import Feature from "@/components/featureComp/feature";
import Layout from "@/components/headerMAin/layout";
import { generateMetaTags } from "@/components/metacomp/metamain";
import HeroSectionPages from "@/components/pagesComp/HeroSection/heroSection";
import MainBannerPAges from "@/components/pagesComp/mainbanner";
import ProcessComp from "@/components/processComp/processComp";
import SatisfiedNewuser from "@/components/satisfiedusernew/satisfiedNewuser";
import { SatisFiedData } from "@/data/satisfiedData";


export async function fetchData(url) {
  try {
    const res = await import(`@/data/${url}`); 
    return res;
  } catch (error) { 
    return null;
  }
}


export default async function Page({ params }) {

  const isHomePagesArray = ["digital-marketing-services", "multimedia-presentation-services", "software-development-services", 'web-design-services', 'web-development-services']
  const page_url = params.url
  const data = await fetchData(params.url)
  console.log(data)

  if (data == null) {
    return (
      <NotFound />
    )
  } 
  return (
    <>
      {
        isHomePagesArray.includes(page_url) ? <Main_Home_Page data={data} /> : <NormalPage data={data} />
      }
    </>
  )
}

const NormalPage = ({ data }) => {

  return (
    <>

      <Layout>
        {data.metadata ? generateMetaTags(data.metadata) : null}


        {data.HeroData ? <HeroSectionPages items={data.HeroData} /> : null}

        <SatisfiedNewuser items={SatisFiedData} />

        {data.MainBannerData ? <MainBannerPAges items={data.MainBannerData} /> : null}

        {data.ThreeCardLeftData ? <EstivaBenefits items={data.ThreeCardLeftData} heads={data.UpperThreeCardRightDatas} down={data.DownThreeCardRightDAta} /> : null}

        {data.UpperDataa ? <Mlminfo items={data.UpperDataa} /> : null}
        {data.ProcessData ? <Cards cardTwoData={data.ProcessData} UpperData={data.UpperData} /> : null}
        {data.ProcessHeadsData ? <ProcessComp items={data.ProcessHeadsData} data={data.ProcessUpperData} lower={data.ProcessLowerData} info={data.ProcessDecData} /> : null}
        {data.UpperDAtaCard ? <Feature items={data.UpperDAtaCard} Data={data.MidleData} lowerCards={data.CardsData} /> : null}

        <Testimonial items={data.TestimonialsData} />

        <SimpleAccordian Faq={data.Faq} />

      </Layout>
    </>
  )
}
const Main_Home_Page = ({ data }) => {
  return (
    <>

      <Layout isHomePage>

        {generateMetaTags(data.metadata)}

        <CategoriePages items={data.CategorieData} />

        <CategorieMenu CardsDataMenu={data.CardsDataMenu} service={data.Service} />

      </Layout>

    </>
  )
}