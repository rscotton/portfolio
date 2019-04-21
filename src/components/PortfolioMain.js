import React from "react";
import { graphql, StaticQuery } from "gatsby"
import PortfolioItemTeaser from "./PortfolioItemTeaser"

export default props => <div className="portfolio portfolio-main">
  <StaticQuery
    query={graphql`
        query PortfolioMainQuery {
          allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___weight] }) {
            edges {
              node {
                frontmatter {
                  title
                  website
                  stack
                }
                html
              }
            }
          }
        }
      `}
    render={data => data.allMarkdownRemark.edges.map(edge => edge.node).map((portfolioItem, i) => (
        <PortfolioItemTeaser key={i} {...portfolioItem.frontmatter} content={portfolioItem.html}/>
    ))}
  />
</div>;