import { Helmet } from 'react-helmet';
import GlobalHeader from '@src/components/GlobalHeader';
import PagePanel from '@src/components/PagePanel';
import PortfolioItems from '@src/components/PortfolioItems';
import React from 'react';
import SocialMediaLinks from '@src/components/SocialMediaLinks';
import GlobalFooter from '@src/components/GlobalFooter';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '@src/components/Container';

const IndexPage: React.FC = () => {
  const headshot = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img/headshot.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
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
      <div className="layout layout-page">
        <GlobalHeader title="hi. i'm ryan. i do codes." />
        <PagePanel name="bio">
          <Container>
            <h2>Biography</h2>
            <Img
              fluid={headshot.file.childImageSharp.fluid}
              className="avatar"
              alt="It me."
              title="It me."
            />
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
        <PagePanel name="contact">
          <Container>
            <h2>Contact</h2>
            <p>
              Hit me up at{' '}
              <a href="mailto:email@example.com">email@example.com</a> and talk
              nerdy to me.
            </p>
          </Container>
        </PagePanel>
        <GlobalFooter />
      </div>
    </>
  );
};

export default IndexPage;
