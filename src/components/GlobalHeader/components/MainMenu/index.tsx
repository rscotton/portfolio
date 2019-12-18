import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { MenuItemNode } from '@src/types';

const GlobalHeader: React.FC = () => {
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
    <ul className="menu-primary">
      {menuItems.map((menuItem: MenuItemNode) => (
        <li key={menuItem.label} className="nav-item nav-item-primary">
          <Link to={menuItem.href}>{menuItem.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default GlobalHeader;
