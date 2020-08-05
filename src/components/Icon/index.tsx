import React from 'react';
import { SocialMediaNetwork } from '@src/types';
import IconGithub from '@img/icons/github.svg';
import IconLinkedin from '@img/icons/linkedin.svg';
import IconTwitter from '@img/icons/twitter.svg';
import IconLongArrow from '@img/icons/long-arrow.svg';

interface Props {
  name: SocialMediaNetwork | 'long-arrow';
}

const Icon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case 'linkedin':
      return <IconLinkedin />;
    case 'twitter':
      return <IconTwitter />;
    case 'github':
      return <IconGithub />;
    case 'long-arrow':
      return <IconLongArrow />;
    default:
      return;
  }
};

export default Icon;
