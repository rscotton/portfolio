import { graphql, useStaticQuery } from 'gatsby';
import GlobalHeader from '@src/components/GlobalHeader';
import React from 'react';
import SocialMediaLinks from '@src/components/SocialMediaLinks';
import StackBadgeCollection from '@src/components/StackBadge/components/StackBadgeCollection';

const StyleGuidePage: React.FC = () => {
  const stackItemsQuery = useStaticQuery(graphql`
    query StackItemsQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              stack
            }
          }
        }
      }
    }
  `);
  const stackItems = stackItemsQuery.allMarkdownRemark.edges.reduce(
    (allStackItems: string[], queryResult: any) =>
      (allStackItems = [
        ...allStackItems,
        ...queryResult.node.frontmatter.stack,
      ]),
    []
  );
  const flatStackItems: string[] = [...new Set<string>(stackItems)];

  return (
    <div className="layout layout-page">
      <GlobalHeader title="style guide." />
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>
        I am a paragraph with <strong>strong text</strong> and{' '}
        <em>emphasized words</em> plus <mark>highlighted</mark> items.
      </p>
      <blockquote>
        <span>
          I'm a block quote - yes, it's true. I seem more important than the
          text around me. I'm...kind of a big deal. And also not wrapped in a
          paragraph <em>yet!</em>
        </span>
        <p>This part of the text is wrapped in a paragraph.</p>
        <footer>Writie McAuthorship</footer>
      </blockquote>
      <section>
        <h2>Badges</h2>
        <StackBadgeCollection stackItems={flatStackItems} />
      </section>
      <section>
        <h2>Social Media</h2>
        <h3>Dark - Horizontal</h3>
        <SocialMediaLinks theme="dark" alignment="horizontal" />
        <h3>Light - Horizontal</h3>
        <SocialMediaLinks theme="light" alignment="horizontal" />
        <h3>Dark - Vertical</h3>
        <SocialMediaLinks theme="dark" alignment="vertical" />
        <h3>Light - Vertical</h3>
        <SocialMediaLinks theme="light" alignment="vertical" />
      </section>
    </div>
  );
};

export default StyleGuidePage;
