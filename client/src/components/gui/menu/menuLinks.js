import React from 'react'

import Links from '../../../database/links.json'

export default function MenuLinks(props) {
  
  const LINKS_LIST = generateLinks();
  return (
    <div className={`MenuLinks FontHeader Foreground_${props.colorID}`}>
      {LINKS_LIST}
    </div>
  )
}

// generates links based on the links.json file
function generateLinks() {
  let links = [];

  // push links to list
  Object.keys(Links).map((key, index) =>
    links.push(
      MenuLink(index, key, Links[key])
    )
  )
  
  return links;
}

// a single menu link
function MenuLink(key, name, link) {
  return (
    <a className={`Element MenuLink`} href={link} key={key}>
      <span>~{name}~</span>
    </a>
  )
}
