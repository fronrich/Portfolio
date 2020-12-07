import React, { useState } from "react";
import { MenuButtonContainer, Strip } from "./styles.js/menu.styles";

export default function MenuButton(props) {
  // initial state
  const [visible, setVisible] = useState(false);

  // pass state up to parent component
  function passUp() {
    // update self
    setVisible(!visible);
    // update parent
    props.handler();
  }
  return (
    <MenuButtonContainer onClick={passUp}>
      {RenderStrips(visible, props)}
    </MenuButtonContainer>
  );
}

// render the strips
function RenderStrips(visible, props) {
  let state = !visible ? "" : "_X";
  let strips = [];
  const MAX_STRIPS = 4;
  const COLOR_ID = props.colorID;
  for (var index = 1; index <= MAX_STRIPS; index++) {
    strips.push(
      <Strip
        key={index}
        className={`Strip Strip_${index}${state} Background_${COLOR_ID}`}
      />
    );
  }
  return strips;
}
