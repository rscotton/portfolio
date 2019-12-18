import React from 'react';
import StackBadge from 'src/components/StackBadge';
import componentStyles from './styles.module.scss';

export default ({ stackItems }) => (
  <ul className={componentStyles.collection}>
    {stackItems.map(stackItem => (
      <li key={stackItem} className={componentStyles['collection-item']}>
        <StackBadge stackItem={stackItem} />
      </li>
    ))}
  </ul>
);
