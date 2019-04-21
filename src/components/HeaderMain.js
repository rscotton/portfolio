import React from "react"
import NavMain from "./NavMain";
import MenuMain from "./MenuMain";

export default props => (
  <header>
    <h1>{props.title}</h1>
    <NavMain>
      <MenuMain />
    </NavMain>
    {props.children}
  </header>
);