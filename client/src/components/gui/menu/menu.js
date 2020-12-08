import React, { useState } from "react";

import MenuButton from "./menuButton";
import MenuLinks from "./menuLinks";

import { MenuContent, MenuOverlay } from "./styles.js/menu.styles";

export default function Menu(props) {
  // initial state
  const [visible, setVisible] = useState(false);

  function passUp() {
    // update self
    setVisible(!visible);
    // update parent
    props.handler();
  }

  return (
    <>
      <MenuButton colorID={props.colorID} handler={passUp} onChange={passUp} />
      {ShowMenu(visible, props)}
    </>
  );
}

function ShowMenu(isVisible, props) {
  return (
    <>
      <MenuOverlay colorID={props.colorID} isHidden={!isVisible} />
      <MenuContent isHidden={!isVisible}>
        <MenuLinks isVisible={isVisible} colorID={props.colorID} />
      </MenuContent>
    </>
  );
}
