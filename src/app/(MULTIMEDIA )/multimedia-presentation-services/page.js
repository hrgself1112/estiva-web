import CategorieMenu from "@/components/CategorieComps/categorieMenu/categoriemenuLayout";
import CategoriePages from "@/components/CategorieComps/categoriePages";
import Layout from "@/components/headerMAin/layout";


import { generateMetaTags } from "@/components/metacomp/metamain";


import {
  CategorieData,
  CardsDataMenu,
  Service,

} from "@/data/Multimedia/Multimedia-MenuData";
import { MULTITAB } from "@/data/metaTags/metaData";

const MULTIMEDIA = () => {
  return (
    <>
    <Layout isHomePage>
      {generateMetaTags(MULTITAB)}
      <CategoriePages items={CategorieData}/>


      <CategorieMenu CardsDataMenu={CardsDataMenu} service={Service}/>
      </Layout>
    </>
  );
};

export default MULTIMEDIA;
