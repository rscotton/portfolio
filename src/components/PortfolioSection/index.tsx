import { Waypoint } from 'react-waypoint';
import PagePanel, { PagePanelTheme } from 'src/components/PagePanel';
import React, { useState } from 'react';
import cn from 'classnames';
import Container from '../Container';
import StackBadgeCollection from '../StackBadge/components/StackBadgeCollection';
import componentStyles from './styles.module.scss';

interface Props {
  title: string;
  website: string;
  stack: string[];
  content: string;
  theme?: PagePanelTheme;
}

const PortfolioSection: React.FC<Props> = ({
  title,
  website,
  stack,
  content,
  theme,
}) => {
  const [scrolledTo, setScrolledTo] = useState(false);
  const handleEnter = () => {
    if (!scrolledTo) {
      setScrolledTo(true);
    }
  };
  const teaserClasses = cn('portfolio-teaser', scrolledTo && 'animate');

  return (
    <PagePanel theme={theme} name={`portfolio-item-${title}`}>
      <Waypoint bottomOffset="50px" onEnter={handleEnter}>
        <Container>
          <div className={teaserClasses}>
            <StackBadgeCollection
              stack={stack}
              className={componentStyles.stack}
            />
            <h2>{title}</h2>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <a
              className="meta meta-website"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </a>
          </div>
        </Container>
      </Waypoint>
    </PagePanel>
  );
};

export default PortfolioSection;
