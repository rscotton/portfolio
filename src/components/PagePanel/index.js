import { slugify } from 'src/utils/helpers';
import React from 'react';

export default ({ name, children }) => (
  <section id={slugify(name)} className={`panel panel-${slugify(name)}`}>
    {children}
  </section>
);
