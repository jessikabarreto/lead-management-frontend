import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
