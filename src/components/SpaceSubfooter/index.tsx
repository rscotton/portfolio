import React from 'react';
import componentStyles from './styles.module.scss';

const SpaceSubfooter: React.FC = ({ children }) => (
  <div className={componentStyles.wrap}>{children}</div>
);

export default SpaceSubfooter;
