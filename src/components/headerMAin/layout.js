
import React from 'react';
import HOmeNav from './homenav';
import PageNav from './pagenav';

import FooterUppernew from "@/components/footer_estiva/footerUppernew";
import FooterMain from "@/components/footer_estiva/footerMain";
import FooterBottom from "@/components/footer_estiva/footer";
import { ServiceSlider } from "@/components/SliderServices/sliderservices";
import FormMian from "@/components/form/formStructure";



const Layout = ({ children, isHomePage  ,wantLayout}) => {
  
  const additionalComponents = (
    <>
      <FormMian />
      <FooterUppernew />
      <ServiceSlider />
      <FooterMain />
      <FooterBottom />
    </>
  );


  return (
    <div>
      
      {isHomePage ? <HOmeNav /> : <PageNav />}


      {children}


      {wantLayout === undefined || wantLayout === true ? additionalComponents : null}
      



    </div>
  );
};

export default Layout;
