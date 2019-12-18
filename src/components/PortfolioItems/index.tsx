import { StaticQuery, graphql } from 'gatsby';
import PortfolioSection from '@src/components/PortfolioSection';
import React from 'react';
import { PortfolioItemNode } from '@src/types';

const PortfolioItems: React.FC = () => (
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
          .map((edge: any) => edge.node)
          .map((portfolioItem: PortfolioItemNode) => (
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

export default PortfolioItems;
