import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
import GlobalHeader from '@components/GlobalHeader';
import PagePanel from '@components/PagePanel';
import PortfolioItems from '@components/PortfolioItems';
import SocialMediaLinks from '@components/SocialMediaLinks';
import GlobalFooter from '@components/GlobalFooter';
import Container from '@components/Container';
import ContactBlock from '@components/ContactBlock';
import PageLayout from '@src/components/PageLayout';

const IndexPage: React.FC = () => {
  const headshot = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img/headshot.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid(maxWidth: 300, traceSVG: { color: "#4c4f50" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>hi. i'm ryan.</title>
        <meta name="description" content="hi. i'm ryan. i do codes." />
        <meta name="theme-color" content="#1f2324" />
      </Helmet>
      <PageLayout>
        <GlobalHeader bigTitle="Hello world." title="I write code.">
          I create web apps &amp; experiences for businesses big and small
          across the country and beyond.
        </GlobalHeader>
        <PagePanel name="biography">
          <Container>
            <h2>Biography</h2>
            <div style={{ maxWidth: '300px' }}>
              <Img
                fluid={headshot.file.childImageSharp.fluid}
                className="avatar"
                alt="It me."
                title="It me."
              />
            </div>
            <SocialMediaLinks />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
              aliquid asperiores assumenda autem consequatur cumque dolorum esse
              eveniet exercitationem iure magni nam quibusdam repellendus
              repudiandae sed sint soluta tenetur vitae.
            </p>
          </Container>
        </PagePanel>
        <PortfolioItems />
        <ContactBlock />
        <GlobalFooter />
      </PageLayout>
    </>
  );
};

export default IndexPage;
