import React from 'react';
import cn from 'classnames';
import componentStyles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const VerticalTitle: React.FC<Props> = ({ className, children, ...rest }) => (
  <h6 className={cn(componentStyles.title, className)} {...rest}>
    {children}
  </h6>
);

export default VerticalTitle;
