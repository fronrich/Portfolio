import styled from "styled-components";
import { LayerTemplate } from "../../../styles/variants";
import { COLORS, FONTS } from "../../../styles/themes";

export const MenuOverlay = styled.div`
  ${LayerTemplate}
  z-index: 1;

  transition: 400ms;
  opacity: 25%;
  background-color: ${({ colorID }) => COLORS[colorID[0]]};
  ${({ isHidden }) => (isHidden ? `opacity: 0;` : "")}
`;

export const MenuContent = styled.div`
  ${LayerTemplate}
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  transition: 500ms;
  pointer-events: all;
  ${({ isHidden }) =>
    isHidden
      ? `
    pointer-events: none;
    opacity: 0%;
    transform: translateX(500px);
  `
      : ""}
`;

export const MenuLinksContainer = styled.div`
  ${FONTS.header}
  color: ${({ colorID }) => COLORS[colorID[1]]};
  /* color: red; */
  width: fit-content;
  height: fit-content;
  text-align: right;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

export const MenuLinkContainer = styled.a`
  pointer-events: ${({ isVisible }) => (isVisible ? "all" : "none")};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Strip = styled.div`
  background-color: ${({ colorID }) => COLORS[colorID[1]]};
  pointer-events: none;
  position: relative;
  width: 100%;
  height: 10px;
  margin: 0px;
  padding: 0px;
  transition: 200ms;
`;

export const MenuButtonContainer = styled.div`
  pointer-events: all;
  z-index: 2;
  width: 55px;
  height: 55px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;

  // strip animations
  & .Strip_1,
  .Strip_3 {
    top: 0px;
  }
  & .Strip_2,
  .Strip_4 {
    top: 10px;
  }

  // transitions
  & .Strip_1_X {
    top: 0px;
    transform: translateY(30px);
    opacity: 0;
  }
  & .Strip_2_X {
    top: 10px;
    transform: rotate(45deg);
  }
  & .Strip_3_X {
    top: 0px;
    transform: rotate(-45deg);
  }
  & .Strip_4_X {
    top: 10px;
    transform: translateY(-30px);
    opacity: 0;
  }
`;
