import React from 'react';

export default ({ name, children }) => (
  <section id={name} className={`panel panel-${name}`}>
    {children}
  </section>
);
