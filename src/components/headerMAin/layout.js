
import React from 'react';
import HOmeNav from './homenav';
import PageNav from './pagenav';

import FooterUppernew from "@/components/footer_estiva/footerUppernew";
import FooterMain from "@/components/footer_estiva/footerMain";
import FooterBottom from "@/components/footer_estiva/footer";
import { ServiceSlider } from "@/components/SliderServices/sliderservices";
import FormMian from "@/components/form/formStructure";



const Layout = ({ children, isHomePage  ,footerone, footertwo, footerthree,footerfour ,  footerfive}) => {
  
 

  return (
    <div>
      
      {isHomePage ? <HOmeNav /> : <PageNav />}


      {children}
       

      {footerone === undefined || footerone === null || footerone === true ?  <FormMian /> : null }
      {footertwo === undefined || footertwo === null || footertwo === true  ?  <FooterUppernew /> : null }
      {footerthree === undefined || footerthree === null || footerthree === true  ?  <ServiceSlider /> : null }
      {footerfour === undefined || footerfour === null || footerfour === true  ?  <FooterMain /> : null }
      {footerfive === undefined || footerfive === null || footerfive === true  ?  <FooterBottom /> : null }
      
      



    </div>
  );
};

export default Layout;
