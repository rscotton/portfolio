import { slugify } from '@src/utils/helpers';
import React from 'react';
import componentStyles from './styles.module.scss';
import cn from 'classnames';

export type PagePanelTheme = 'white' | 'black' | 'blue' | 'yellow';

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
