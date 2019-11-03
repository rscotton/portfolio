import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';

export default () => (
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
          .map(edge => edge.node)
          .map((menuItem, i) => (
            <li key={i} className="nav-item nav-item-primary">
              <Link to={menuItem.href}>{menuItem.label}</Link>
            </li>
          ))
      }
    />
  </ul>
);
