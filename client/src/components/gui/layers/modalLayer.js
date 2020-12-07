import React from "react";
import { createInner } from "./functions/createInner";
import { Layer } from "../../styles/layers.styles";

/**
 *
 * @param {Array} props.theme color theme
 * @param {String Array} props.elements - elements to render
 */
export default function modalLayer(props) {
  return (
    <Layer isFloating zIndex={1}>
      {createInner(1, props.theme, props.elements)}
    </Layer>
  );
}
