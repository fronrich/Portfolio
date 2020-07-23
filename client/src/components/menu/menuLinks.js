import React from 'react';

import Links from '../../database/links.json';

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
  let linkNames = Object.keys(Links);
  let linkHrefs = Object.values(Links);
  // push links to list
  for(var index = 0; index < linkNames.length; index++) {
    links.push(
      MenuLink(index, linkNames[index], linkHrefs[index])
    );
  }
  
  return links;
}

// a single menu link
function MenuLink(key, name, link) {
  return (
    <a className={`MenuLink`} href={link} key={key}>
      <span>~{name}~</span>
    </a>
  )
}
