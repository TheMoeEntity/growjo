import React, { ReactNode } from "react";
import Header from "./header";

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AppLayout;
