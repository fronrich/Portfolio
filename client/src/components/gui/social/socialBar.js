import React from "react";
import Social from "./social";
import { SocialBarContainer } from "./styles/social.styles";
import SocialData from "../../../database/social.json";

export default function SocialBar(props) {
  return (
    <SocialBarContainer>
      {getLinks(props.colorID, SocialData)}
    </SocialBarContainer>
  );
}

// generate social links
function getLinks(colorID, data) {
  let list = [];
  data.map((media, index) =>
    list.push(
      <Social
        key={index}
        colorID={colorID}
        icon={media.icon}
        link={media.link}
      />
    )
  );
  return list;
}
