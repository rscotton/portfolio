import MainMenu from 'src/components/GlobalHeader/components/MainMenu';
import React from 'react';

export default ({ title, children }) => (
  <header>
    <nav className="nav-primary">
      <MainMenu />
    </nav>
    <h1>{title}</h1>
    {children}
  </header>
);
