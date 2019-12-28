import MainMenu from '@src/components/GlobalHeader/components/MainMenu';
import React, { ReactNode } from 'react';
import Container from '../Container';

interface Props {
  bigTitle?: string;
  title: string;
  children?: React.ReactNode;
}

const GlobalHeader: React.FC<Props> = ({ bigTitle, title, children }) => {
  let titleBlocks: ReactNode;

  if (bigTitle) {
    titleBlocks = (
      <>
        <h1 className="hero">{bigTitle}</h1>
        <h2>{title}</h2>
      </>
    );
  } else {
    titleBlocks = <h1>{title}</h1>;
  }

  return (
    <header>
      <Container>
        <nav className="nav-primary">
          <MainMenu />
        </nav>
        {titleBlocks}
        {children}
      </Container>
    </header>
  );
};

export default GlobalHeader;
