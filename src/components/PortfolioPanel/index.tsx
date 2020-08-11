import React from 'react';
import cn from 'classnames';
import { StackItem } from '@src/types';
import { urlShortName } from '@src/utils/helpers';
import PagePanel, { PagePanelTheme } from '@components/PagePanel';
import StackBadgeCollection from '@components/StackBadge/components/StackBadgeCollection';
import Grid, { Col } from '@components/Grid';
import VerticalTitle from '@components/VerticalTitle';
import FancyLink, { FancyLinkProps } from '@components/FancyLink';
import LaptopSiteDemo from '@components/LaptopSiteDemo';
import componentStyles from './styles.module.scss';

interface Props {
  title: string;
  website: string;
  stack: StackItem[];
  content: string;
  screenshot: any;
  flipColumns?: boolean;
  theme?: PagePanelTheme;
}

const PortfolioPanel: React.FC<Props> = ({
  title,
  website,
  stack,
  content,
  screenshot,
  flipColumns,
  theme = 'white',
}) => {
  let fancyLinkColorProps: Pick<
    FancyLinkProps,
    'arrowColor' | 'labelColor' | 'underlineColor'
  >;

  switch (theme) {
    case 'black':
      fancyLinkColorProps = {
        arrowColor: 'white',
        labelColor: 'yellow',
        underlineColor: 'white',
      };
      break;
    case 'blue':
      fancyLinkColorProps = {
        arrowColor: 'black',
        labelColor: 'white',
        underlineColor: 'yellow',
      };
      break;
    default:
      // yellow and white theme reuse same colors
      fancyLinkColorProps = {
        arrowColor: 'black',
        labelColor: 'black',
        underlineColor: 'black',
      };
  }

  const gridRowClassName = cn(
    componentStyles['grid-row'],
    flipColumns && componentStyles['flip-columns']
  );

  return (
    <PagePanel theme={theme} name={`portfolio-item-${title}`}>
      <Grid rowClassName={gridRowClassName}>
        <Col
          className={componentStyles['vertical-title-col']}
          lg={1}
          aria-hidden={true}
        >
          <VerticalTitle className={componentStyles['vertical-title']}>
            Portfolio
          </VerticalTitle>
        </Col>
        <Col md={8} mdOffset={2} lg={5} lgOffset={0} xl={4}>
          <div className={componentStyles.body}>
            <div className={componentStyles['body-primary']}>
              <h2>{title}</h2>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <FancyLink
                {...fancyLinkColorProps}
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {urlShortName(website)}
              </FancyLink>
            </div>
            <StackBadgeCollection
              stack={stack}
              backgroundTheme={theme}
              className={componentStyles.stack}
              aria-label="Project Tech Stack"
            />
          </div>
        </Col>
        <Col lg={6} xl={7} className={componentStyles['demo-col']}>
          <div className={componentStyles['demo-image-wrap']}>
            <LaptopSiteDemo
              screenshot={screenshot}
              screenshotAlt={`${title} website screenshot`}
            />
          </div>
        </Col>
      </Grid>
    </PagePanel>
  );
};

export default PortfolioPanel;
