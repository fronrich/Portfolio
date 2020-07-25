import Social from "./social";

import React from 'react'

import SocialData from '../../../database/social.json'

export default function SocialBar(props) {
  return (
    <div className="SocialBar">
      {getLinks(props.colorID, SocialData)}
    </div>
  )
}

// generate social links
function getLinks(colorID, data) {
  let list = [];
  data.map((media, index) => (
    list.push(
      <Social
        key={index}
        colorID={colorID}
        icon={media.icon}
        link={media.link}
      />
    )
  ));
  return list;
}
