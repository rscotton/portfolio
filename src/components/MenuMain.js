import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default props => (
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
      render={data => data.allMenuJson.edges.map(edge => edge.node).map((menuItem, i) => (
          <li key={i} className="nav-item nav-item-primary">
            <a href={menuItem.href}>{menuItem.label}</a>
          </li>
        )
      )}
    />
  </ul>
);