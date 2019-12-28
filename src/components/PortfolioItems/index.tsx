import { useStaticQuery, graphql } from 'gatsby';
import PortfolioSection from '@src/components/PortfolioSection';
import React from 'react';
import { PortfolioItemNode } from '@src/types';

const PortfolioItems: React.FC = () => {
  const portfolioItemsQuery = useStaticQuery(graphql`
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
  `);
  const portfolioItems = portfolioItemsQuery.allMarkdownRemark.edges.map(
    (edge: any) => edge.node
  );

  return (
    <div id="portfolio" className="portfolio portfolio-items">
      {portfolioItems.map((portfolioItem: PortfolioItemNode) => (
        <PortfolioSection
          key={portfolioItem.frontmatter.path}
          {...portfolioItem.frontmatter}
          content={portfolioItem.html}
        />
      ))}
    </div>
  );
};

export default PortfolioItems;
