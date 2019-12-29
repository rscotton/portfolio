import { Link } from 'gatsby';
import MainMenu from '@src/components/GlobalHeader/components/MainMenu';
import React from 'react';
import Container from '../Container';
import componentStyles from './styles.module.scss';
import cn from 'classnames';

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
        <Container>
          <div className={componentStyles['nav-wrap']}>
            <Link to="/" className={cn('h3', componentStyles['home-link'])}>
              Ryan Scotton
            </Link>

            <nav className="nav-primary">
              <MainMenu />
            </nav>
          </div>
        </Container>
      </header>
      <section className={componentStyles.hero}>
        <Container>
          <div className={componentStyles['content-wrap']}>
            {titleBlocks}
            <div className={componentStyles.body}>{children}</div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GlobalHeader;
