import HomeCardsMenu from "@/components/HOmeMenuPlusCard/HomeCardStructure";
import HomeIndustry from "@/components/HomeIndustryComp/page";
import HomeApplicationCard from "@/components/HomeServiceCenter/home";
import HOmeVideo from "@/components/HomeVideoComp/homevideo";
import HomeFourGridCard from "@/components/HomefourGridCard/homeFourGrid";
import Layout from "@/components/headerMAin/layout";
import { generateMetaTags } from "@/components/metacomp/metamain";
import SatisfiedNewuser from "@/components/satisfiedusernew/satisfiedNewuser";
import { HeroPageData } from "@/data/DigitalMarketing/digital-menuData";
import { HomeMetaData } from "@/data/metaTags/metaData";
import { SatisFiedData } from "@/data/satisfiedData";

export default function Home() {
  return (
 <>
<Layout isHomePage>
{generateMetaTags(HomeMetaData)}
<HOmeVideo items={HeroPageData} />
<SatisfiedNewuser items={SatisFiedData}/>
<HomeApplicationCard/>
<HomeCardsMenu />
<HomeFourGridCard/>
<HomeIndustry/>
</Layout>
 </>
  );
}
