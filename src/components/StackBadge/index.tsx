import { slugify } from '@src/utils/helpers';
import React from 'react';
import cn from 'classnames';
import componentStyles from './styles.module.scss';

interface Props {
  stackItem: string;
}

const StackBadge: React.FC<Props> = ({ stackItem }) => (
  <div
    className={cn(
      componentStyles.badge,
      componentStyles[`badge-${slugify(stackItem)}`]
    )}
  >
    {stackItem}
  </div>
);

export default StackBadge;
