import React from "react";
import IconLinkedin from "src/img/icons/linkedin.svg";
import IconTwitter from "src/img/icons/twitter.svg";
import IconGithub from "src/img/icons/github.svg";

export default ({ name }) => {
  switch (name) {
    case "linkedin":
      return <IconLinkedin />;
    case "twitter":
      return <IconTwitter />;
    case "github":
      return <IconGithub />;
    default:
      return;
  }
};
