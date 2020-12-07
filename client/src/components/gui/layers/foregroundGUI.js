import React from "react";
import { createInner } from "./functions/createInner";
import { Layer } from "../../styles/layers.styles";

/**
 * The most frontfacing GUI
 * @param {Number Array} props.theme - theme colors
 * @param {Function} props.routeState - determine visibility of header
 * @param {String Array} props.elements - elements to render
 * @returns top layer gui
 */
export default function gui(props) {
  return (
    <Layer isFloating zIndex={2}>
      {createInner(2, props.theme, props.elements, props.routeState)}
    </Layer>
  );
}
