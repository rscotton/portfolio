import IconGithub from '@src/data/img/icons/github.svg';
import IconLinkedin from '@src/data/img/icons/linkedin.svg';
import IconTwitter from '@src/data/img/icons/twitter.svg';
import React from 'react';

interface Props {
  name: string;
}

const Icon: React.FC<Props> = ({ name }) => {
  switch (name) {
    case 'linkedin':
      return <IconLinkedin />;
    case 'twitter':
      return <IconTwitter />;
    case 'github':
      return <IconGithub />;
    default:
      return;
  }
};

export default Icon;
