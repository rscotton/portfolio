import React from "react"
import { withPrefix } from 'gatsby'
import Header from "../components/header";
import Panel from "../components/panel";
import Portfolio from "../components/portfolio"

export default () => (
  <div className="layout layout-page">
    <Header
      title="hi. i'm ryan. i do codes."
      menuItems={[
        {
          href: "#bio",
          label: "Bio",
        },
        {
          href: "#portfolio",
          label: "Portfolio",
        },
        {
          href: "#contact",
          label: "Contact",
        }
      ]}
    />
    <Panel name="bio">
      <h2>Biography</h2>
      <img src={withPrefix('/img/headshot.jpg')} alt="It me." />
    </Panel>
    <Panel name="portfolio">
      <h2>Portfolio</h2>
      <Portfolio
        portfolioItems={[
          {
            title: "Proposa",
            url: "https://proposa.io/",
          },
          {
            title: "Duke Department of Medicine (SOM Prototype)",
            url: "https://medicine.duke.edu",
          },
          {
            title: "Twin Dolphin",
            url: "http://original-twindolphin.pantheonsite.io",
          }
        ]}
      />
    </Panel>
    <Panel name="contact">
      <h2>Contact</h2>
      <p>Hit me up at <a href="mailto:email@example.com">email@example.com</a> and talk nerdy to me.</p>
    </Panel>
  </div>
);