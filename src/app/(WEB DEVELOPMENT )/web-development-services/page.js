import CategorieMenu from "@/components/CategorieComps/categorieMenu/categoriemenuLayout";
import CategoriePages from "@/components/CategorieComps/categoriePages";
import Layout from "@/components/headerMAin/layout";

import { generateMetaTags } from "@/components/metacomp/metamain";

import {
  CategorieData,
  CardsDataMenu,
  Service,
} from "@/data/WebDevelopment/WebDevelopmentMenuData";
import { WebTabMeta } from "@/data/metaTags/metaData";

const WebDevelopment = () => {
  return (
    <>
      <Layout isHomePage>
        {generateMetaTags(WebTabMeta)}
        <CategoriePages items={CategorieData} />

        <CategorieMenu CardsDataMenu={CardsDataMenu} service={Service} />
      </Layout>
    </>
  );
};

export default WebDevelopment;
