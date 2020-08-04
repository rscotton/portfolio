import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import GlobalHeader from '@components/GlobalHeader';
import PortfolioItems from '@components/PortfolioItems';
import GlobalFooter from '@components/GlobalFooter';
import ContactPanel from '@components/ContactPanel';
import PageLayout from '@components/PageLayout';
import IntroPanel from '@components/IntroPanel';
import SpaceSubfooter from '@components/SpaceSubfooter';
import SkillSetPanel from '@src/components/SkillSetPanel';
import TestimonialsPanel, {
  Testimonial,
} from '@src/components/TestimonialsPanel';

const IndexPage: React.FC = () => {
  const headshot = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img/headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, traceSVG: { color: "#4c4f50" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  const testimonial: Testimonial = {
    quote: `I've had the pleasure of working with Ryan for several years. As an Art Director, it's refreshing to have a developer with not only an eye for design but one who challenges you to be a better designer.`,
    authorName: 'James Fekete',
    authorRole: 'Creative Director',
    authorCompany: 'Coalmarch',
    authorUrl: 'https://www.coalmarch.com/about-us/our-team/james-fekete',
  };

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
        <IntroPanel
          panelName="Biography"
          title="The famous first words of every developer"
          smallTitle="About"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            aliquid asperiores assumenda autem consequatur cumque dolorum esse
            eveniet exercitationem iure magni nam quibusdam repellendus
            repudiandae sed sint soluta tenetur vitae.
          </p>
          <div style={{ maxWidth: '300px' }}>
            <Img
              fluid={headshot.file.childImageSharp.fluid}
              className="avatar"
              alt="It me."
              title="It me."
            />
          </div>
        </IntroPanel>
        <PortfolioItems />
        <SpaceSubfooter>
          <SkillSetPanel />
          <TestimonialsPanel testimonial={testimonial} />
        </SpaceSubfooter>
        <ContactPanel />
        <GlobalFooter />
      </PageLayout>
    </>
  );
};

export default IndexPage;
