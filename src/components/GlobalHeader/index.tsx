import React from 'react';
import { Link } from 'gatsby';
import cn from 'classnames';
import Img from 'gatsby-image';
import Container from '@components/Container';
import MainMenu from '@components/GlobalHeader/components/MainMenu';
import spaceMan from '@img/space-man.png';
import componentStyles from './styles.module.scss';

interface Props {
  title: string;
  bigTitle?: string;
  children?: React.ReactNode;
}

const GlobalHeader: React.FC<Props> = ({ bigTitle, title, children }) => {
  // const spaceMan = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "img/space-man.png" }) {
  //       childImageSharp {
  //         # Specify a fluid image and fragment
  //         # The default maxWidth is 800 pixels
  //         fluid(maxWidth: 794) {
  //           ...GatsbyImageSharpFluid_withWebp_tracedSVG
  //         }
  //       }
  //     }
  //   }
  // `);
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
        <Container className={componentStyles['hero-container']}>
          <div className={componentStyles['content-wrap']}>
            {titleBlocks}
            <div className={componentStyles.body}>{children}</div>
          </div>
          <div className={componentStyles['space-man']}>
            <div className={componentStyles['space-man-inner']}>
              <img src={spaceMan} alt="" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GlobalHeader;
