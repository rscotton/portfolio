import { slugify } from '@src/utils/helpers';
import React from 'react';
import cn from 'classnames';
import componentStyles from './styles.module.scss';
import { StackItem } from '@src/types';

interface Props {
  stackItem: StackItem;
  includeBorder?: boolean;
}

const StackBadge: React.FC<Props> = ({ stackItem, includeBorder = false }) => (
  <div
    className={cn(
      componentStyles.badge,
      componentStyles[`badge-${slugify(stackItem)}`],
      includeBorder && componentStyles['badge-with-border']
    )}
  >
    {stackItem}
  </div>
);

export default StackBadge;
