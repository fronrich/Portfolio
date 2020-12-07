import styled from "styled-components";
import { Blur, FlexLayer, Floating, LayerTemplate } from "./variants";
import { COLORS } from "./themes";

export const Layer = styled.section`
  ${LayerTemplate}
  // themeing
  // layers themselves can only have background colors
  // colors affect text
  ${({ theme }) => {
    if (theme)
      return `
        background-color: ${COLORS[theme[0]]};
        color: ${COLORS[theme[1]]};
      `;
  }}
  // depth
  z-index: ${({ zIndex }) => (zIndex ? zIndex : 0)};
  // variants
  ${({ isBlur, isFlexLayer, alignTop, isFloating }) => {
    var variants = ``;
    if (isBlur) variants += `${Blur}\n`;
    if (isFlexLayer) variants += `${FlexLayer(alignTop)}\n`;
    if (isFloating) variants += `${Floating}\n`;
    return variants;
  }}
`;
