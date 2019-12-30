import React from 'react';
import StackBadge from 'src/components/StackBadge';
import cn from 'classnames';
import componentStyles from './styles.module.scss';
import listStyles from '@src/styleUtils/modules/lists.module.scss';

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  stack: string[];
}

const StackBadgeCollection: React.FC<Props> = ({
  stack,
  className,
  ...rest
}) => (
  <ul
    className={cn(
      className,
      componentStyles.collection,
      listStyles['list-reset']
    )}
    {...rest}
  >
    {stack.map(stackItem => (
      <li key={stackItem} className={componentStyles['collection-item']}>
        <StackBadge stackItem={stackItem} />
      </li>
    ))}
  </ul>
);

export default StackBadgeCollection;
