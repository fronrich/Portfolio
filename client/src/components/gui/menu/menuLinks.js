import React from "react";
import { MenuLinksContainer, MenuLinkContainer } from "./styles.js/menu.styles";

import Links from "../../../database/links.json";

export default function MenuLinks(props) {
  const LINKS_LIST = generateLinks(props);
  return (
    <MenuLinksContainer colorID={props.colorID}>
      {LINKS_LIST}
    </MenuLinksContainer>
  );
}

// generates links based on the links.json file
function generateLinks(props) {
  let links = [];

  // push links to list
  Object.keys(Links).map((key, index) =>
    links.push(MenuLink(props, index, key, Links[key]))
  );

  return links;
}

// a single menu link
function MenuLink(props, key, name, link) {
  return (
    <MenuLinkContainer isVisible={props.isVisible} href={link} key={key}>
      <span>~{name}~</span>
    </MenuLinkContainer>
  );
}
