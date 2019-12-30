import React from 'react';
import StackBadge, { StackItem } from 'src/components/StackBadge';
import cn from 'classnames';
import componentStyles from './styles.module.scss';
import listStyles from '@src/styleUtils/modules/lists.module.scss';
import { PagePanelTheme } from '@src/components/PagePanel';
import { slugify } from '@src/utils/helpers';

interface Props extends React.HTMLAttributes<HTMLUListElement> {
  stack: StackItem[];
  backgroundTheme: PagePanelTheme;
}

const StackBadgeCollection: React.FC<Props> = ({
  stack,
  backgroundTheme,
  className,
  ...rest
}) => {
  const stackItemBorderMap: { [K in StackItem]?: boolean } = {};

  switch (backgroundTheme) {
    case 'black':
      stackItemBorderMap.symfony = true;
      break;
    case 'yellow':
      stackItemBorderMap.javascript = true;
      break;
  }

  console.log(stackItemBorderMap);

  return (
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
          <StackBadge
            stackItem={stackItem}
            includeBorder={stackItemBorderMap[slugify(stackItem)]}
          />
        </li>
      ))}
    </ul>
  );
};

export default StackBadgeCollection;
