import React from "react"
import NavMain from "./NavMain";
import MenuMain from "./MenuMain";

export default props => (
  <header>
    <NavMain>
      <MenuMain />
    </NavMain>
    <h1>{props.title}</h1>
    {props.children}
  </header>
);