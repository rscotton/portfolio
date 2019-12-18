import { graphql, useStaticQuery } from 'gatsby';
import { slugify } from 'src/utils/helpers';
import Icon from '@src/components/Icon';
import React from 'react';
import cn from 'classnames';
import componentStyles from './styles.module.scss';
import listStyles from '@src/styleUtils/modules/lists.module.scss';
import visibilityStyles from '@src/styleUtils/modules/visibility.module.scss';
import { SocialMediaNode } from '@src/types';

interface Props {
  theme?: 'dark' | 'light';
  alignment?: 'horizontal' | 'vertical';
}

const SocialMediaLinks: React.FC<Props> = ({
  theme = 'dark',
  alignment = 'horizontal',
}) => {
  const socialMediaQuery = useStaticQuery(graphql`
    query SocialMediaQuery {
      allSocialMediaJson {
        edges {
          node {
            name
            label
            href
          }
        }
      }
    }
  `);
  const socialMediaItems = socialMediaQuery.allSocialMediaJson.edges.map(
    (edge: any) => edge.node
  );

  return (
    <ul
      className={cn(
        componentStyles['link-items'],
        componentStyles[`link-items-${alignment}`],
        listStyles['list-reset']
      )}
    >
      {socialMediaItems.map((socialMediaItem: SocialMediaNode) => (
        <li
          key={socialMediaItem.label}
          className={componentStyles['link-item']}
        >
          <a
            href={socialMediaItem.href}
            title={socialMediaItem.label}
            className={cn(
              componentStyles.link,
              componentStyles[`link-${theme}`],
              componentStyles[`link-${slugify(socialMediaItem.name)}`]
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name={socialMediaItem.name} />
            <span className={visibilityStyles['sr-only']}>
              {socialMediaItem.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaLinks;
