import CategorieMenu from "@/components/CategorieComps/categorieMenu/categoriemenuLayout";
import CategoriePages from "@/components/CategorieComps/categoriePages";
import Layout from "@/components/headerMAin/layout";
import { generateMetaTags } from "@/components/metacomp/metamain";

import { CategorieData,CardsDataMenu,Service } from "@/data/DigitalMarketing/digital-marketing-services";
import { DIGITabMEnuData } from "@/data/metaTags/metaData";

const DigitalCategories = () => {
  return (
    <>
      <Layout isHomePage>
      {generateMetaTags(DIGITabMEnuData)}
        <CategoriePages items={CategorieData} />
        <CategorieMenu CardsDataMenu={CardsDataMenu} service={Service} />
      </Layout>
    </>
  );
};

export default DigitalCategories;
