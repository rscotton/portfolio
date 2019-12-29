import React from 'react';
import componentStyles from './styles.module.scss';
import SocialMediaLinks from '@src/components/SocialMediaLinks';
import cn from 'classnames';
import Container from '@src/components/Container';

const GlobalFooter: React.FC = () => (
  <footer aria-label="Site Footer" className={componentStyles.footer}>
    <Container>
      <div className={componentStyles['top-container']}>
        <section
          aria-label="Connect"
          className={componentStyles['section-connect']}
        >
          <h5
            className={cn(
              componentStyles.connect,
              componentStyles['hide-small']
            )}
          >
            Connect with me
          </h5>
          <SocialMediaLinks />
        </section>
        <section
          aria-label="Copyright"
          className={componentStyles['section-copyright']}
        >
          <h5 className={componentStyles.copyright}>
            &copy; {new Date().getFullYear()} Ryan Scotton{' '}
          </h5>
        </section>
      </div>
      <small
        className={cn(
          componentStyles.attribution,
          componentStyles['hide-small']
        )}
      >
        Icons by{' '}
        <a
          href="https://fontawesome.com/license"
          target="_blank"
          rel="noopener noreferrer"
        >
          Font Awesome
        </a>
      </small>
    </Container>
  </footer>
);

export default GlobalFooter;
