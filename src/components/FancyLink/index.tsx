import React from 'react';
import cn from 'classnames';
import Icon from '@components/Icon';
import componentStyles from './styles.module.scss';

export interface FancyLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  arrowColor: 'black' | 'white' | 'grey';
  labelColor: 'black' | 'white' | 'grey' | 'yellow';
  underlineColor?: 'black' | 'white' | 'yellow';
}

const FancyLink: React.FC<FancyLinkProps> = ({
  arrowColor,
  labelColor,
  underlineColor,
  className,
  children,
  ...rest
}) => (
  <a
    className={cn(
      componentStyles.link,
      componentStyles[`link-arrow-${arrowColor}`],
      componentStyles[`link-label-${labelColor}`],
      underlineColor && componentStyles[`link-underline-${underlineColor}`],
      className
    )}
    {...rest}
  >
    <span>{children}</span>
    <Icon name="long-arrow" />
  </a>
);

export default FancyLink;
