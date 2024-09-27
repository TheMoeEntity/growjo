import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
