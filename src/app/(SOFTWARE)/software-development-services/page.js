import CategorieMenu from "@/components/CategorieComps/categorieMenu/categoriemenuLayout";
import CategoriePages from "@/components/CategorieComps/categoriePages";
import Layout from "@/components/headerMAin/layout";

import { generateMetaTags } from "@/components/metacomp/metamain";

import {
  CardsDataMenu,
  CategorieData,
  Service,
} from "@/data/software-development-services";
import { SOFTTabMeta } from "@/data/metaTags/metaData";

const SOFTWARE = () => {
  return (
    <>
      <Layout isHomePage>
        {generateMetaTags(SOFTTabMeta)}
        <CategoriePages items={CategorieData} />

        <CategorieMenu CardsDataMenu={CardsDataMenu} service={Service} />
      </Layout>
    </>
  );
};

export default SOFTWARE;
