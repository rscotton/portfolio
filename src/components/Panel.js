import React from "react"

export default props => (
  <section id={props.name} className={"panel panel-" + props.name}>
    {props.children}
  </section>
);