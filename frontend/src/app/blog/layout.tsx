import NavBarBlog from "@/components/NavBarBlog";
import React, { FC } from "react";

const Layout = ({ children,}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <NavBarBlog />
      {children}
    </div>
  );
}

export default Layout;