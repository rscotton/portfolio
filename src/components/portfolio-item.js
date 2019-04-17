import React from "react"
import { Link } from "gatsby"

export default props => (
  <div className="portfolio-item">
    <h3>{props.title}</h3>
    <a href={props.url} target="_blank">{props.url}</a>
  </div>
);