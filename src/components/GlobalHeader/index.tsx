import MainMenu from '@src/components/GlobalHeader/components/MainMenu';
import React from 'react';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const GlobalHeader: React.FC<Props> = ({ title, children }) => (
  <header>
    <nav className="nav-primary">
      <MainMenu />
    </nav>
    <h1>{title}</h1>
    {children}
  </header>
);

export default GlobalHeader;
