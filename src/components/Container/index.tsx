import React, { ReactNode } from 'react';
import componentStyles from './styles.module.scss';
import cn from 'classnames';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children, className, ...rest }) => (
  <div className={cn(className, componentStyles.container)} {...rest}>
    {children}
  </div>
);

export default Container;
