import React from "react";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import './Layout.scss'
import { withRouter } from "react-router-dom";

const Layout = withRouter(({ children }) => {
   return (
      <div className="container">
         <Header />
         {children}
         <Footer />
      </div>
   );
});

export default Layout;