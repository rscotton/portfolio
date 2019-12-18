import { slugify } from '@src/utils/helpers';
import React from 'react';

interface Props {
  name: string;
  children?: React.ReactNode;
}

const PagePanel: React.FC<Props> = ({ name, children }) => (
  <section id={slugify(name)} className={`panel panel-${slugify(name)}`}>
    {children}
  </section>
);

export default PagePanel;
