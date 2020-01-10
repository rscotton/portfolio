import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StackItem, PortfolioItemNode } from '@src/types';
import PortfolioPanel from '@src/components/PortfolioPanel';

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
              theme
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
        <PortfolioPanel
          key={portfolioItem.frontmatter.path}
          stack={portfolioItem.frontmatter.stack as StackItem[]}
          {...portfolioItem.frontmatter}
          content={portfolioItem.html}
        />
      ))}
    </div>
  );
};

export default PortfolioItems;
