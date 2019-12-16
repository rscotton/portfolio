import { slugify } from 'src/utils/helpers';
import React from 'react';

export default ({ stackItem }) => {
  return (
    <div className={`stack-badge stack-badge-${slugify(stackItem)}`}>
      {stackItem}
    </div>
  );
};
