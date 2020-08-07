import React from 'react';
import cn from 'classnames';
import SkillSetPanel from '@components/SkillSetPanel';
import TestimonialPanel from '@components/TestimonialPanel';
import ContactPanel from '@components/ContactPanel';
import { jamesTestimonial } from '@src/constants';
import Moon from '@img/background_assets/moon.svg';
import MoonLarge from '@img/background_assets/moon-large.svg';
import SpaceManFly from '@img/background_assets/space-man-fly.svg';
import SpaceManWave from '@img/background_assets/space-man-wave.svg';
import componentStyles from './styles.module.scss';

const SpaceSubfooter: React.FC = () => (
  <div className={componentStyles.wrap}>
    <div className={componentStyles.content}>
      <SkillSetPanel />
      <div className={componentStyles['testimonial-panel']}>
        <TestimonialPanel testimonial={jamesTestimonial} />
        <SpaceManFly
          className={cn(
            componentStyles['bg-img'],
            componentStyles['bg-img--space-man-fly']
          )}
        />
      </div>
      <ContactPanel />
    </div>
    <Moon
      className={cn(componentStyles['bg-img'], componentStyles['bg-img--moon'])}
    />
    <MoonLarge
      className={cn(
        componentStyles['bg-img'],
        componentStyles['bg-img--moon-large']
      )}
    />
    <SpaceManWave
      className={cn(
        componentStyles['bg-img'],
        componentStyles['bg-img--space-man-wave']
      )}
    />
  </div>
);

export default SpaceSubfooter;
