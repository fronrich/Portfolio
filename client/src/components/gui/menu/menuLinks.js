import React from 'react'

import Links from '../../../database/links.json'

export default function MenuLinks(props) {
  
  const LINKS_LIST = generateLinks(props);
  return (
    <div className={`MenuLinks FontHeader Foreground_${props.colorID}`}>
      {LINKS_LIST}
    </div>
  )
}

// generates links based on the links.json file
function generateLinks(props) {
  let links = [];

  // push links to list
  Object.keys(Links).map((key, index) =>
    links.push(
      MenuLink(props, index, key, Links[key])
    )
  )
  
  return links;
}

// a single menu link
function MenuLink(props, key, name, link) {
  const linkState = props.isVisible
    ? 'Element'
    : '' 
  return (
    <a className={`${linkState} MenuLink`} href={link} key={key}>
      <span>~{name}~</span>
    </a>
  )
}
