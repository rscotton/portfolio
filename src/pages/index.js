import { Helmet } from 'react-helmet';
import GlobalHeader from 'src/components/GlobalHeader';
import PagePanel from 'src/components/PagePanel';
import PortfolioItems from 'src/components/PortfolioItems';
import React from 'react';
import SocialMediaLinks from 'src/components/SocialMediaLinks';
import headshot from 'src/img/headshot.jpg';

export default () => (
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
        <h2>Biography</h2>
        <img className="avatar" src={headshot} alt="It me." title="It me." />
        <SocialMediaLinks />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          aliquid asperiores assumenda autem consequatur cumque dolorum esse
          eveniet exercitationem iure magni nam quibusdam repellendus
          repudiandae sed sint soluta tenetur vitae.
        </p>
      </PagePanel>
      <PortfolioItems />
      <PagePanel name="contact">
        <h2>Contact</h2>
        <p>
          Hit me up at <a href="mailto:email@example.com">email@example.com</a>{' '}
          and talk nerdy to me.
        </p>
      </PagePanel>
      <footer>
        <p className="small">
          &copy; {new Date().getFullYear()} Ryan Scotton.
          <br /> Icons by{' '}
          <a
            href="https://fontawesome.com/license"
            target="_blank"
            rel="noopener noreferrer"
          >
            Font Awesome
          </a>
          .
        </p>
      </footer>
    </div>
  </>
);
