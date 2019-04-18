import React from "react"

export default props => (
  <header>
    <h1>{props.title}</h1>
    <nav className="nav-primary">
      <ul className="menu-primary">
        {props.menuItems.map((menuItem, i) =>
          <li key={i} className="nav-item nav-item-primary">
            <a href={menuItem.href}>{menuItem.label}</a>
          </li>
        )}
      </ul>
    </nav>
  </header>
);