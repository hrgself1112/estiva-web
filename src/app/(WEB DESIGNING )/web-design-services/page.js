import CategorieMenu from "@/components/CategorieComps/categorieMenu/categoriemenuLayout";
import CategoriePages from "@/components/CategorieComps/categoriePages";
import Layout from "@/components/headerMAin/layout";

import { generateMetaTags } from "@/components/metacomp/metamain";

import {
  CategorieData,
  CardsDataMenu,
  Service,
} from "@/data/Designing/web-design-services";
import { WebTab } from "@/data/metaTags/metaData";

const DesigningMenu = () => {
  return (
    <>
      <Layout isHomePage>
        {generateMetaTags(WebTab)}
        <CategoriePages items={CategorieData} />
        <CategorieMenu CardsDataMenu={CardsDataMenu} service={Service} />
      </Layout>
    </>
  );
};

export default DesigningMenu;
