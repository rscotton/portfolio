import React from "react"
import PortfolioItem from "./portfolio-item"

export default props => (
  <div className="portfolio">
    <div className="portfolio">
      {props.portfolioItems.map((portfolioItem, i) =>
        <PortfolioItem key={i} title={portfolioItem.title} url={portfolioItem.url} />
      )}
    </div>
  </div>
);