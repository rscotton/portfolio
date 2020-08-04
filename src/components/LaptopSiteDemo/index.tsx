import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import cn from 'classnames';
import componentStyles from './styles.module.scss';

export interface LaptopSiteDemoProps {
  screenshot: any; // TODO: string | GatsbyImage, need to get types going for GraphQL return structure
  screenshotAlt: string;
}

const LaptopSiteDemo: React.FC<LaptopSiteDemoProps> = ({
  screenshot,
  screenshotAlt,
}) => {
  const laptopFrame = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img/laptop-frame.png" }) {
        childImageSharp {
          fluid(maxWidth: 869, traceSVG: { color: "#95999a" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  const [scrollingActive, setScrollingActive] = useState<boolean>(false);
  const toggleScrollingActive = () => setScrollingActive(!scrollingActive);
  const isRawUrl = typeof screenshot === 'string';

  return (
    <div>
      <div className={componentStyles['image-container']}>
        <Img fluid={laptopFrame.file.childImageSharp.fluid} alt="" />
        <div
          className={cn(
            componentStyles['site-image-frame'],
            componentStyles['site-image-frame-position'],
            scrollingActive && componentStyles['scrolling-active']
          )}
          onClick={toggleScrollingActive}
        >
          {isRawUrl ? (
            <img src={screenshot} alt={screenshotAlt} />
          ) : (
            <Img fluid={screenshot.childImageSharp.fluid} alt={screenshotAlt} />
          )}
        </div>
        <div
          className={cn(
            componentStyles['activation-overlay'],
            componentStyles['site-image-frame-position'],
            scrollingActive && componentStyles['scrolling-active']
          )}
          onClick={toggleScrollingActive}
          aria-hidden={true}
        >
          <span className={componentStyles['activation-overlay-text']}>
            Tap to Scroll
          </span>
        </div>
      </div>
      <small className={componentStyles['mobile-tap']} aria-hidden={true}>
        Tap Image to Scroll
      </small>
    </div>
  );
};

export default LaptopSiteDemo;
