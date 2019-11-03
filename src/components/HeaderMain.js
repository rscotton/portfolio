import MenuMain from 'src/components/MenuMain';
import NavMain from 'src/components/NavMain';
import React from 'react';

export default ({ title, children }) => (
  <header>
    <NavMain>
      <MenuMain />
    </NavMain>
    <h1>{title}</h1>
    {children}
  </header>
);
