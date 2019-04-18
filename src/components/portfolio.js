import React from "react"
import PortfolioItem from "./portfolio-item"

export default props => (
  <div className="portfolio">
    {props.portfolioItems.map((portfolioItem, i) =>
      <PortfolioItem key={i} {...portfolioItem} />
    )}
  </div>
);