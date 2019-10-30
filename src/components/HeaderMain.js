import React from "react";
import NavMain from "src/components/NavMain";
import MenuMain from "src/components/MenuMain";

export default props => (
  <header>
    <NavMain>
      <MenuMain />
    </NavMain>
    <h1>{props.title}</h1>
    {props.children}
  </header>
);
