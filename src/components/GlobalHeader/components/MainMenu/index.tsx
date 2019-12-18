import { Link, StaticQuery, graphql } from 'gatsby';
import React from 'react';
import { MenuItemNode } from '@src/types';

const GlobalHeader: React.FC = () => (
  <ul className="menu-primary">
    <StaticQuery
      query={graphql`
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
      `}
      render={data =>
        data.allMenuJson.edges
          .map((edge: any) => edge.node)
          .map((menuItem: MenuItemNode) => (
            <li key={menuItem.label} className="nav-item nav-item-primary">
              <Link to={menuItem.href}>{menuItem.label}</Link>
            </li>
          ))
      }
    />
  </ul>
);

export default GlobalHeader;
