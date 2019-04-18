import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header";
import Panel from "../components/Panel";
import Portfolio from "../components/Portfolio"
import headshot from "../img/headshot.jpg"


export default props => (
  <div className="layout layout-page">
    <Header
      title="hi. i'm ryan. i do codes."
      menuItems={props.data.allMenuJson.edges.map(edge => edge.node)}
    />
    <Panel name="bio">
      <h2>Biography</h2>
      <img src={headshot} alt="It me." />
    </Panel>
    <Panel name="portfolio">
      <h2>Portfolio</h2>
      <Portfolio portfolioItems={props.data.allPortfolioJson.edges.map(edge => edge.node)} />
    </Panel>
    <Panel name="contact">
      <h2>Contact</h2>
      <p>Hit me up at <a href="mailto:email@example.com">email@example.com</a> and talk nerdy to me.</p>
    </Panel>
  </div>
);

export const query = graphql`
  query {
    allMenuJson {
      edges {
        node {
          href
          label
        }
      }
    }
    allPortfolioJson {
      edges {
        node {
          title
          url
        }
      }
    }
  }
`;