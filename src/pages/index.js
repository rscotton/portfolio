import React from "react";
import HeaderMain from "src/components/HeaderMain";
import Panel from "src/components/Panel";
import SocialMediaLinks from "src/components/SocialMediaLinks";
import PortfolioMain from "src/components/PortfolioMain";
import headshot from "src/img/headshot.jpg";

export default props => (
  <div className="layout layout-page">
    <HeaderMain title="hi. i'm ryan. i do codes." />
    <Panel name="bio">
      <h2>Biography</h2>
      <img className="avatar" src={headshot} alt="It me." title="It me." />
      <SocialMediaLinks />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
        aliquid asperiores assumenda autem consequatur cumque dolorum esse
        eveniet exercitationem iure magni nam quibusdam repellendus repudiandae
        sed sint soluta tenetur vitae.
      </p>
    </Panel>
    <Panel name="portfolio">
      <h2>Portfolio</h2>
      <PortfolioMain />
    </Panel>
    <Panel name="contact">
      <h2>Contact</h2>
      <p>
        Hit me up at <a href="mailto:email@example.com">email@example.com</a>{" "}
        and talk nerdy to me.
      </p>
    </Panel>
    <footer>
      <p className="small">
        &copy; {new Date().getFullYear()} Ryan Scotton.
        <br /> Icons by{" "}
        <a
          href="https://fontawesome.com/license"
          target="_blank"
          rel="noopener noreferrer"
        >
          Font Awesome
        </a>
        .
      </p>
    </footer>
  </div>
);
