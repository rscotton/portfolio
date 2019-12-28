import MainMenu from '@src/components/GlobalHeader/components/MainMenu';
import React from 'react';
import Container from '../Container';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const GlobalHeader: React.FC<Props> = ({ title, children }) => (
  <header>
    <Container>
      <nav className="nav-primary">
        <MainMenu />
      </nav>
      <h1>{title}</h1>
      {children}
    </Container>
  </header>
);

export default GlobalHeader;
