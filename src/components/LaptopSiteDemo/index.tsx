import React from 'react';
import componentStyles from './styles.module.scss';
import laptopFrame from '@img/laptop-frame.png';
import Img from 'gatsby-image';

export interface LaptopSiteDemoProps {
  screenshot: any; // TODO: string | GatsbyImage, need to get types going for GraphQL return structure
  screenshotAlt: string;
}

const LaptopSiteDemo: React.FC<LaptopSiteDemoProps> = ({
  screenshot,
  screenshotAlt,
}) => {
  const isRawUrl = typeof screenshot === 'string';

  return (
    <div className={componentStyles.container}>
      <img src={laptopFrame} alt="" />
      <div className={componentStyles['site-image']}>
        {isRawUrl ? (
          <img src={screenshot} alt={screenshotAlt} />
        ) : (
          <Img fluid={screenshot.childImageSharp.fluid} alt={screenshotAlt} />
        )}
      </div>
    </div>
  );
};

export default LaptopSiteDemo;
