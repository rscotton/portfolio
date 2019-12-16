import { Waypoint } from 'react-waypoint';
import PagePanel from 'src/components/PagePanel';
import React, { useState } from 'react';
import cn from 'classnames';

export default ({ title, website, stack, content }) => {
  const [scrolledTo, setScrolledTo] = useState(false);
  const handleEnter = () => {
    if (!scrolledTo) setScrolledTo(true);
  };
  const teaserClasses = cn('portfolio-teaser', scrolledTo && 'animate');

  return (
    <PagePanel name={`portfolio-item-${title}`}>
      <Waypoint bottomOffset="50px" onEnter={handleEnter}>
        <div className={teaserClasses}>
          <h3>{title}</h3>
          <a
            className="meta meta-website"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
          <div className="meta meta-stack">
            <h5>Stack:</h5>
            <ul className="stack">
              {stack.map(stackItem => (
                <li key={stackItem} className="stackItem">
                  {stackItem}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </Waypoint>
    </PagePanel>
  );
};