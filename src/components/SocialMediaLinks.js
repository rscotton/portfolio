import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";
import { graphql, StaticQuery } from "gatsby";

export default () => (
  <ul className="social-media-links list-inline">
    <StaticQuery
      query={graphql`
        query SocialMediaQuery {
          allSocialMediaJson {
            edges {
              node {
                name
                label
                href
              }
            }
          }
        }
      `}
      render={data =>
        data.allSocialMediaJson.edges
          .map(edge => edge.node)
          .map((socialMediaItem, i) => (
            <li key={i} className="list-inline-item">
              <a
                href={socialMediaItem.href}
                title={socialMediaItem.label}
                className={`social-media-link ${socialMediaItem.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialMediaIcon name={socialMediaItem.name} />
                <span className="sr-only">{socialMediaItem.label}</span>
              </a>
            </li>
          ))
      }
    />
  </ul>
);
