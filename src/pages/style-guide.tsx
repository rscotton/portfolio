import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StackItem, Color } from '@src/types';
import GlobalHeader from '@components/GlobalHeader';
import SocialMediaLinks from '@components/SocialMediaLinks';
import StackBadgeCollection from '@components/StackBadge/components/StackBadgeCollection';
import GlobalFooter from '@components/GlobalFooter';
import PagePanel from '@components/PagePanel';
import Container from '@components/Container';
import PageLayout from '@src/components/PageLayout';
import Grid, { Col } from '@src/components/Grid';

const StyleGuidePage: React.FC = () => {
  const stackQuery = useStaticQuery(graphql`
    query StackQuery {
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
  const allStack = stackQuery.allMarkdownRemark.edges.reduce(
    (allStackItems: StackItem[], queryResult: any) =>
      (allStackItems = [
        ...allStackItems,
        ...queryResult.node.frontmatter.stack,
      ]),
    []
  );
  const flatStack: StackItem[] = [...new Set<StackItem>(allStack)];
  const gridColStyle: React.CSSProperties = {
    backgroundColor: Color.SpaceBlack,
    border: '1px solid currentColor',
    color: Color.GalaxyWhite,
    fontSize: '1.25rem',
    fontWeight: 700,
    paddingBottom: '1.25rem',
    paddingTop: '1.25rem',
    textAlign: 'center',
  };

  return (
    <PageLayout>
      <GlobalHeader title="style guide." />
      <PagePanel name="style-guide">
        <Container>
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
              text around me. I'm...kind of a big deal. And also not wrapped in
              a paragraph <em>yet!</em>
            </span>
            <p>This part of the text is wrapped in a paragraph.</p>
            <footer>Writie McAuthorship</footer>
          </blockquote>
          <section>
            <h2>Badges</h2>
            <StackBadgeCollection stack={flatStack} />
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
          <section>
            <h2>Grid</h2>
            <h3>Granular Grid Columns</h3>
            <Grid style={{ marginBottom: '1rem' }}>
              <Col xs={12} style={gridColStyle}>
                12
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
              <Col xs={11} style={gridColStyle}>
                11
              </Col>
              <Col xs={2} style={gridColStyle}>
                2
              </Col>
              <Col xs={10} style={gridColStyle}>
                10
              </Col>
              <Col xs={3} style={gridColStyle}>
                3
              </Col>
              <Col xs={9} style={gridColStyle}>
                9
              </Col>
              <Col xs={4} style={gridColStyle}>
                4
              </Col>
              <Col xs={8} style={gridColStyle}>
                8
              </Col>
              <Col xs={5} style={gridColStyle}>
                5
              </Col>
              <Col xs={7} style={gridColStyle}>
                7
              </Col>
              <Col xs={6} style={gridColStyle}>
                6
              </Col>
              <Col xs={6} style={gridColStyle}>
                6
              </Col>
              <Col xs={7} style={gridColStyle}>
                7
              </Col>
              <Col xs={5} style={gridColStyle}>
                5
              </Col>
              <Col xs={8} style={gridColStyle}>
                8
              </Col>
              <Col xs={4} style={gridColStyle}>
                4
              </Col>
              <Col xs={9} style={gridColStyle}>
                9
              </Col>
              <Col xs={3} style={gridColStyle}>
                3
              </Col>
              <Col xs={10} style={gridColStyle}>
                10
              </Col>
              <Col xs={2} style={gridColStyle}>
                2
              </Col>
              <Col xs={11} style={gridColStyle}>
                11
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
            </Grid>
            <h3>Even-Split Grid Columns</h3>
            <Grid style={{ marginBottom: '1rem' }}>
              <Col xs={12} style={gridColStyle}>
                12
              </Col>
              <Col xs={6} style={gridColStyle}>
                6
              </Col>
              <Col xs={6} style={gridColStyle}>
                6
              </Col>
              <Col xs={4} style={gridColStyle}>
                4
              </Col>
              <Col xs={4} style={gridColStyle}>
                4
              </Col>
              <Col xs={4} style={gridColStyle}>
                4
              </Col>
              <Col xs={3} style={gridColStyle}>
                3
              </Col>
              <Col xs={3} style={gridColStyle}>
                3
              </Col>
              <Col xs={3} style={gridColStyle}>
                3
              </Col>
              <Col xs={3} style={gridColStyle}>
                3
              </Col>
              <Col xs={2} style={gridColStyle}>
                2
              </Col>
              <Col xs={2} style={gridColStyle}>
                2
              </Col>
              <Col xs={2} style={gridColStyle}>
                2
              </Col>
              <Col xs={2} style={gridColStyle}>
                2
              </Col>
              <Col xs={2} style={gridColStyle}>
                2
              </Col>
              <Col xs={2} style={gridColStyle}>
                2
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
              <Col xs={1} style={gridColStyle}>
                1
              </Col>
            </Grid>
          </section>
        </Container>
      </PagePanel>
      <GlobalFooter />
    </PageLayout>
  );
};

export default StyleGuidePage;
