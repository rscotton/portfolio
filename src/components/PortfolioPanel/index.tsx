import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';
import { StackItem } from '@src/types';
import Container, { ContainerProps } from '@components/Container';
import PagePanel, { PagePanelTheme } from '@components/PagePanel';
import StackBadgeCollection from '@components/StackBadge/components/StackBadgeCollection';
import componentStyles from './styles.module.scss';

interface Props {
  title: string;
  website: string;
  stack: StackItem[];
  content: string;
  theme?: PagePanelTheme;
}

// https://github.com/civiccc/react-waypoint#children
export const ContainerWithRef = React.forwardRef(
  (props: ContainerProps, ref: React.Ref<HTMLDivElement>) => (
    <Container innerRef={ref} {...props} />
  )
);

const PortfolioPanel: React.FC<Props> = ({
  title,
  website,
  stack,
  content,
  theme = 'white',
}) => {
  const [ref, inView] = useInView();
  const [scrolledTo, setScrolledTo] = useState<boolean>(false);

  if (inView && !scrolledTo) {
    setScrolledTo(true);
  }

  const teaserClasses = cn('portfolio-teaser', scrolledTo && 'animate');

  return (
    <PagePanel theme={theme} name={`portfolio-item-${title}`}>
      <ContainerWithRef ref={ref}>
        <div className={teaserClasses}>
          <StackBadgeCollection
            stack={stack}
            backgroundTheme={theme}
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
      </ContainerWithRef>
    </PagePanel>
  );
};

export default PortfolioPanel;
