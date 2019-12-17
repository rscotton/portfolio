import { slugify } from 'src/utils/helpers';
import React from 'react';
import cn from 'classnames';
import componentStyles from './styles.module.scss';

export default ({ stackItem }) => (
  <div
    className={cn(
      'h6',
      componentStyles['stack-badge'],
      componentStyles[`stack-badge-${slugify(stackItem)}`]
    )}
  >
    {stackItem}
  </div>
);
