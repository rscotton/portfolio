import React from "react"
import Header from "../components/header";
import Panel from "../components/panel";
import Portfolio from "../components/portfolio"
import headshot from "../img/headshot.jpg"

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
      <img src={headshot} alt="It me." />
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
          },
          {
            title: "Forgely",
            url: "https://www.coalmarch.com/solutions/forgely",
          },
          {
            title: "Dunton Destinations",
            url: "http://dev-dunton.pantheonsite.io/",
          },
          {
            title: "PAEA Learning",
            url: "https://paealearning.org/",
          },
          {
            title: "Capital Associates",
            url: "http://dev-capitalassociates.pantheonsite.io/",
          },
          {
            title: "Balentine",
            url: "https://balentine.com/",
          },
          {
            title: "Counter Culture Coffee",
            url: "https://counterculturecoffee.com/",
          },
          {
            title: "Fayetteville Technical Community College (FTCC)",
            url: "https://www.faytechcc.edu/",
          },
          {
            title: "North Carolina Housing Finance Agency (NCHFA)",
            url: "https://www.nchfa.com/",
          },
          {
            title: "Duke Private Diagnostic Clinic (PDC)",
            url: "https://pdc.dukehealth.org/",
          },
          {
            title: "The Select Group",
            url: "https://www.selectgroup.com/",
          },
        ]}
      />
    </Panel>
    <Panel name="contact">
      <h2>Contact</h2>
      <p>Hit me up at <a href="mailto:email@example.com">email@example.com</a> and talk nerdy to me.</p>
    </Panel>
  </div>
);