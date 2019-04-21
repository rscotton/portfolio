import React from "react"

export default props => (
  <div className="portfolio-teaser">
    <h3>{props.title}</h3>
    <a className="meta meta-website" href={props.website} target="_blank" rel="noopener noreferrer">{props.website}</a>
    <div className="meta meta-stack">
      <h5>Stack:</h5>
      <ul className="stack">
        {props.stack.map((stackItem, i) => (
          <li key={i} className="stackItem">{stackItem}</li>
        ))}
      </ul>
    </div>
    <div className="description" dangerouslySetInnerHTML={{ __html: props.content }}/>
  </div>
);