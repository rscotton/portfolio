import React from 'react';
import PagePanel from '@components/PagePanel';
import Grid, { ColProps, Col } from '@components/Grid';
import VerticalTitle from '@components/VerticalTitle';
import componentStyles from './styles.module.scss';

interface Props {
  panelName: string;
  title: string;
  smallTitle?: string;
  children?: React.ReactNode;
}

const IntroPanel: React.FC<Props> = ({
  panelName,
  title,
  smallTitle,
  children,
}) => {
  const contentColProps: ColProps = smallTitle
    ? {
        md: 8,
        xl: 7,
      }
    : {
        md: 8,
        mdOffset: 2,
        lgOffset: 1,
        xl: 7,
        xlOffset: 2,
      };

  return (
    <PagePanel name={panelName}>
      <Grid>
        {smallTitle && (
          <Col md={2} lg={1} xl={2}>
            <VerticalTitle className={componentStyles['vertical-title']}>
              {smallTitle}
            </VerticalTitle>
          </Col>
        )}
        <Col {...contentColProps}>
          <h2 className={componentStyles.title}>{title}</h2>
          <div>{children}</div>
        </Col>
      </Grid>
    </PagePanel>
  );
};

export default IntroPanel;
