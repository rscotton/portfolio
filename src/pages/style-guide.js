import HeaderMain from 'src/components/HeaderMain';
import React from 'react';

export default () => (
  <div className="layout layout-page">
    <HeaderMain title="style guide." />
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>
    <p>
      I am a paragraph with <strong>strong text</strong> and{' '}
      <em>emphasized words</em> plus <mark>highlighted</mark> items.
    </p>
    <blockquote>
      <span>
        I'm a block quote - yes, it's true. I seem more important than the text
        around me. I'm...kind of a big deal. And also not wrapped in a paragraph{' '}
        <em>yet!</em>
      </span>
      <p>This part of the text is wrapped in a paragraph.</p>
      <footer>Writie McAuthorship</footer>
    </blockquote>
  </div>
);
