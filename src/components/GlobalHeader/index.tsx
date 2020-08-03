import React from 'react';
import { Link } from 'gatsby';
import cn from 'classnames';
import MainMenu from '@components/GlobalHeader/components/MainMenu';
import spaceMan from '@img/space-man.png';
import componentStyles from './styles.module.scss';
import Grid, { Col } from '@components/Grid';
import SocialMediaLinks from '@components/SocialMediaLinks';

interface Props {
  title: string;
  bigTitle?: string;
  children?: React.ReactNode;
}

const GlobalHeader: React.FC<Props> = ({ bigTitle, title, children }) => {
  let titleBlocks: React.ReactNode;

  if (bigTitle) {
    titleBlocks = (
      <>
        <h1 className={componentStyles['big-title']}>{bigTitle}</h1>
        <h2 className={componentStyles['sub-title']}>{title}</h2>
      </>
    );
  } else {
    titleBlocks = <h1 className={componentStyles.title}>{title}</h1>;
  }

  return (
    <div className={componentStyles['hero-wrap']}>
      <header className={componentStyles.header}>
        <Grid
          className={componentStyles['nav-wrap-grid']}
          rowClassName={componentStyles['nav-wrap-grid-row']}
        >
          <Col xs={12} mdAuto xl={3}>
            <Link to="/" className={cn('h3', componentStyles['home-link'])}>
              Ryan Scotton
            </Link>
          </Col>
          <Col xs={12} mdAuto lg={6} xl={4}>
            <nav aria-label="Main Menu" className={componentStyles.nav}>
              <MainMenu />
            </nav>
          </Col>
        </Grid>
      </header>
      <section className={componentStyles.hero}>
        <div className={componentStyles['hero-container']}>
          <Grid>
            <Col className={componentStyles['social-media-col']} lg={1}>
              <SocialMediaLinks theme="light" alignment="vertical" />
            </Col>
            <Col md={8} lg={7} lgOffset={1} xl={8} xlOffset={1}>
              <div className={componentStyles['content-wrap']}>
                {titleBlocks}
                <div className={componentStyles.body}>{children}</div>
              </div>
            </Col>
            <div className={componentStyles['space-man']}>
              <div className={componentStyles['space-man-inner']}>
                <img src={spaceMan} alt="" />
              </div>
            </div>
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default GlobalHeader;
