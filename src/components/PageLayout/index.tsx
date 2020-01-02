import React from 'react';
import componentStyles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => (
  <div className={componentStyles.container}>{children}</div>
);

export default PageLayout;
