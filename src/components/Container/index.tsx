import React from 'react';
import cn from 'classnames';
import componentStyles from './styles.module.scss';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  innerRef?: React.Ref<HTMLDivElement>;
  fluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  innerRef,
  fluid = false,
  className,
  children,
  ...rest
}) => (
  <div
    ref={innerRef}
    className={cn(
      className,
      fluid ? componentStyles['container-fluid'] : componentStyles.container
    )}
    {...rest}
  >
    {children}
  </div>
);

export default Container;
