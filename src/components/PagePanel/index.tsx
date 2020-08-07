import React from 'react';
import cn from 'classnames';
import { slugify } from '@src/utils/helpers';
import componentStyles from './styles.module.scss';

export type PagePanelTheme =
  | 'white'
  | 'black'
  | 'transparent-black'
  | 'blue'
  | 'yellow';

interface Props {
  name: string;
  theme?: PagePanelTheme;
  children?: React.ReactNode;
}

const PagePanel: React.FC<Props> = ({ theme = 'white', name, children }) => (
  <section
    id={slugify(name)}
    className={cn(
      componentStyles.panel,
      componentStyles[`theme-${theme}`],
      `panel-${slugify(name)}`
    )}
  >
    {children}
  </section>
);

export default PagePanel;
