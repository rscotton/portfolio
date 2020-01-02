import React from 'react';
import IconGithub from '@img/icons/github.svg';
import IconLinkedin from '@img/icons/linkedin.svg';
import IconTwitter from '@img/icons/twitter.svg';

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
