
import React from 'react';
import HOmeNav from './homenav';
import PageNav from './pagenav';



const Layout = ({ children, isHomePage }) => {
  return (
    <div>
      
      {isHomePage ? <HOmeNav /> : <PageNav />}


      {children}



    </div>
  );
};

export default Layout;
