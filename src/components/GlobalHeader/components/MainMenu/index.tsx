import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import cn from 'classnames';
import { MenuItemNode } from '@src/types';
import listStyles from '@src/styleUtils/modules/lists.module.scss';
import componentStyles from './styles.module.scss';

const MainMenu: React.FC = () => {
  const mainMenuQuery = useStaticQuery(graphql`
    query MenuMainQuery {
      allMenuJson {
        edges {
          node {
            href
            label
          }
        }
      }
    }
  `);
  const menuItems = mainMenuQuery.allMenuJson.edges.map(
    (edge: any) => edge.node
  );

  return (
    <ul className={cn(listStyles['list-reset'], componentStyles.menu)}>
      {menuItems.map((menuItem: MenuItemNode) => (
        <li key={menuItem.label} className={componentStyles['menu-item']}>
          <Link to={menuItem.href} className={componentStyles.link}>
            {menuItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
