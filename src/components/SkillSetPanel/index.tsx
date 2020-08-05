import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PagePanel from '@components/PagePanel';
import Grid, { Col } from '@components/Grid';
import VerticalTitle from '@components/VerticalTitle';
import StackBadgeCollection from '@components/StackBadge/components/StackBadgeCollection';
import componentStyles from './styles.module.scss';
import { allStackItems } from '@src/constants';

const SkillSetPanel: React.FC = () => (
  <PagePanel name="skill-set">
    <Grid>
      <Col md={1}>
        <VerticalTitle className={componentStyles['vertical-title']}>
          Skill Set
        </VerticalTitle>
      </Col>
      <Col md={10} lg={8}>
        <h2 className={componentStyles.title}>
          My skill set is out of this world
        </h2>
        <StackBadgeCollection
          className={componentStyles.badges}
          stack={allStackItems}
          aria-label="My Tech Stack"
        />
      </Col>
    </Grid>
  </PagePanel>
);

export default SkillSetPanel;
