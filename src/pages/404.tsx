import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import PageLayout from '@src/components/PageLayout';
import GlobalHeader from '@src/components/GlobalHeader';
import GlobalFooter from '@src/components/GlobalFooter';

const PageNotFound: React.FC = () => (
  <>
    <Helmet>
      <html lang="en" />
      <title>Lost in space...</title>
      <meta name="description" content="Page not found." />
    </Helmet>
    <PageLayout>
      <GlobalHeader title="Lost in space...">
        Page not found. <Link to="/">Return to base.</Link>
      </GlobalHeader>
      <GlobalFooter style={{ marginTop: '8rem' }} />
    </PageLayout>
  </>
);

export default PageNotFound;
