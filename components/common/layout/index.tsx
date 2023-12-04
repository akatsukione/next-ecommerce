import * as React from "react";
import Header from "./header";
import Footer from "./footer";
interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
