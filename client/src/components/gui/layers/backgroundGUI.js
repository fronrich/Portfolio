import React from "react";
import { createInner } from "./functions/createInner";
import { Layer } from "../../styles/layers.styles";

/**
 * Create a body for a webpage
 * @param {Array} props.theme color theme
 * @param {State} props.blur whether to blur component or not
 * @param {String Array} props.elements - elements to render
 * return background UI
 */
export default function body(props) {
  // determines if the body should bve blurred
  // blur occurs on menu opening
  let blurBackground = props.blur ? "Blur" : "";

  return (
    <Layer isFlexLayer isBlur={blurBackground} zIndex={0} theme={props.theme}>
      {createInner(0, props.theme, props.elements)}
    </Layer>
  );
}
