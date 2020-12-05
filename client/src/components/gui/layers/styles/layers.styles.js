import styled from "styled-components";
import { Blur, FlexLayer, Floating } from "../../../styles/variants";
import { COLORS, FONTS } from "../../../styles/themes";

export const Layer = styled.section`
  // all layers share these properties
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  text-align: center;
  transition: 500ms;
  font-family: ${FONTS.normal};
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
  ${({ isBlur, isFlexLayer, isFloating }) => {
    var variants = ``;
    if (isBlur) variants += `${Blur}\n`;
    if (isFlexLayer) variants += `${FlexLayer}\n`;
    if (isFloating) variants += `${Floating}\n`;
    return variants;
  }}
`;
