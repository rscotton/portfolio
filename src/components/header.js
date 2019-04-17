import React from "react"
import { Link } from "gatsby"

export default props => (
  <header>
    <h1>{props.title}</h1>
    <nav className="nav-primary">
      <ul className="menu-primary">
        {props.menuItems.map((menuItem, i) =>
          <li key={i} className="nav-item nav-item-primary">
            <Link to={menuItem.href}>{menuItem.label}</Link>
          </li>
        )}
      </ul>
    </nav>
  </header>
);