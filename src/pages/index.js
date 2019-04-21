import React from "react"
import HeaderMain from "../components/HeaderMain";
import Panel from "../components/Panel";
import PortfolioMain from "../components/PortfolioMain"
import headshot from "../img/headshot.jpg"


export default props => (
  <div className="layout layout-page">
    <HeaderMain title="hi. i'm ryan. i do codes." />
    <Panel name="bio">
      <h2>Biography</h2>
      <img src={headshot} alt="It me." />
    </Panel>
    <Panel name="portfolio">
      <h2>Portfolio</h2>
      <PortfolioMain />
    </Panel>
    <Panel name="contact">
      <h2>Contact</h2>
      <p>Hit me up at <a href="mailto:email@example.com">email@example.com</a> and talk nerdy to me.</p>
    </Panel>
  </div>
);