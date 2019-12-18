import React from 'react';
import StackBadge from 'src/components/StackBadge';
import cn from 'classnames';
import componentStyles from './styles.module.scss';
import listStyles from 'src/styleUtils/modules/lists.module.scss';

export default ({ stackItems }) => (
  <ul className={cn(componentStyles.collection, listStyles['list-reset'])}>
    {stackItems.map(stackItem => (
      <li key={stackItem} className={componentStyles['collection-item']}>
        <StackBadge stackItem={stackItem} />
      </li>
    ))}
  </ul>
);
