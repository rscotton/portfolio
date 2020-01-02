import React from 'react';
import cn from 'classnames';
import componentStyles from './styles.module.scss';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  innerRef?: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  innerRef,
  children,
  className,
  ...rest
}) => (
  <div
    ref={innerRef}
    className={cn(className, componentStyles.container)}
    {...rest}
  >
    {children}
  </div>
);

export default Container;
