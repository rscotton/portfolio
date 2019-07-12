import React from "react"
import IconLinkedin from "../img/icons/linkedin.svg"
import IconTwitter from "../img/icons/twitter.svg"
import IconGithub from "../img/icons/github.svg"

export default props => {
  switch (props.name) {
    case 'linkedin':
      return <IconLinkedin />;
    case 'twitter':
      return <IconTwitter />;
    case 'github':
      return <IconGithub />;
    default:
      return;
  }
}