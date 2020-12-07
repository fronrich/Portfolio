import { FONTS } from "./themes";
export const LayerTemplate = `
  // all layers share these properties
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  text-align: center;
  transition: 500ms;
  ${FONTS.normal};
`;

export const Blur = `
  filter: none;
  filter: blur(.25em) brightness(110%);
  transform: scale(1.02);
`;
export function FlexLayer(alignTop) {
  return `
    display: flex;
    flex-direction: column;
    align-items: center;
    ${
      alignTop
        ? `
          justify-content: flex-start;
          margin-top: 80px;
        `
        : `justify-content: center;`
    }
  `;
}
export const Floating = `
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
`;
