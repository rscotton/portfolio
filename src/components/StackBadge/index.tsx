import React from 'react';
import cn from 'classnames';
import { slugify } from '@src/utils/helpers';
import { StackItem } from '@src/types';
import componentStyles from './styles.module.scss';

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
