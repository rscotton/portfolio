import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalHeader from '@components/GlobalHeader';
import PortfolioItems from '@components/PortfolioItems';
import GlobalFooter from '@components/GlobalFooter';
import PageLayout from '@components/PageLayout';
import IntroPanel from '@components/IntroPanel';
import SpaceSubfooter from '@components/SpaceSubfooter';

const IndexPage: React.FC = () => (
  <>
    <Helmet>
      <html lang="en" />
      <title>Hi. I'm Ryan. I write code.</title>
      <meta name="description" content="Hi. I'm Ryan. I write code." />
    </Helmet>
    <PageLayout>
      <GlobalHeader bigTitle="Hello world." title="I write code.">
        I create web apps &amp; experiences for businesses big and small across
        the country and beyond.
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
      </IntroPanel>
      <PortfolioItems />
      <SpaceSubfooter />
      <GlobalFooter />
    </PageLayout>
  </>
);

export default IndexPage;
