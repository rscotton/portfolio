import React from "react"

export default props => (
  <div className="portfolio-item">
    <h3>{props.title}</h3>
    <a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a>
  </div>
);