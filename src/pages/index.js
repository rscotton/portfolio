import React from "react";
import SmoothScroll from "smooth-scroll";
import HeaderMain from "../components/HeaderMain";
import Panel from "../components/Panel";
import PortfolioMain from "../components/PortfolioMain";
import headshot from "../img/headshot.jpg";

// https://www.npmjs.com/package/smooth-scroll
if (typeof window !== "undefined") {
  SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });
}

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