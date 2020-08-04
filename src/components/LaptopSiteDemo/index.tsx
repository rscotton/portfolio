import React, { useState } from 'react';
import Img from 'gatsby-image';
import cn from 'classnames';
import laptopFrame from '@img/laptop-frame.png';
import componentStyles from './styles.module.scss';

export interface LaptopSiteDemoProps {
  screenshot: any; // TODO: string | GatsbyImage, need to get types going for GraphQL return structure
  screenshotAlt: string;
}

const LaptopSiteDemo: React.FC<LaptopSiteDemoProps> = ({
  screenshot,
  screenshotAlt,
}) => {
  const [scrollingActive, setScrollingActive] = useState<boolean>(false);
  const isRawUrl = typeof screenshot === 'string';
  const toggleScrollingActive = () => setScrollingActive(!scrollingActive);

  return (
    <div className={componentStyles.container}>
      <img src={laptopFrame} alt="" />
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
  );
};

export default LaptopSiteDemo;
