import UI from "../../../../database/uiConstants";

// generate inner componenets based on constants provided
export function createInner(layer, theme, elements, routeState) {
  // const of element types

  const ELEMENT_CONSTANTS =
    layer === 2
      ? UI(theme, routeState).Foreground
      : layer === 1
      ? UI(theme).ModalLayer
      : UI(theme).Background;

  // render elements
  let list = [];
  if (elements === undefined) return list;
  elements.forEach((string) => list.push(ELEMENT_CONSTANTS[string]));

  // return list
  return list;
}
