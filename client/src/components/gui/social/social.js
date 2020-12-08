import React from "react";
import { SocialContainer } from "./styles/social.styles";

export default function Social(props) {
  return (
    <SocialContainer colorID={props.colorID}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <i className={props.icon}></i>
      </a>
    </SocialContainer>
  );
}
