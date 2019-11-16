import { StaticQuery, graphql } from 'gatsby';
import PortfolioSection from 'src/components/PortfolioSection';
import React from 'react';

export default () => (
  <div id="portfolio" className="portfolio portfolio-items">
    <StaticQuery
      query={graphql`
        query PortfolioMainQuery {
          allMarkdownRemark(
            filter: { frontmatter: { published: { eq: true } } }
            sort: { order: ASC, fields: [frontmatter___weight] }
          ) {
            edges {
              node {
                frontmatter {
                  path
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
      render={data =>
        data.allMarkdownRemark.edges
          .map(edge => edge.node)
          .map(portfolioItem => (
            <PortfolioSection
              key={portfolioItem.frontmatter.path}
              {...portfolioItem.frontmatter}
              content={portfolioItem.html}
            />
          ))
      }
    />
  </div>
);
