import React from "react";
import NavMain from "src/components/NavMain";
import MenuMain from "src/components/MenuMain";

export default ({ title, children }) => (
  <header>
    <NavMain>
      <MenuMain />
    </NavMain>
    <h1>{title}</h1>
    {children}
  </header>
);
