import styled from "styled-components";
import { GalleryElementLayer } from "./variants";
import { COLORS, FONTS } from "../../styles/themes";

export const GalleryTitle = styled.div`
  ${FONTS.title}
  ${({ colorID }) => (colorID ? `color: ${COLORS[colorID[1]]};` : "")}
  width: max-content;
  & p {
    margin: 0;
  }
`;

export const Gallery = styled.div`
  ${FONTS.mono}
  display: flex;
  height: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  max-height: 60%;
  overflow-y: scroll;
  pointer-events: all;

  // theming
  ${({ colorID }) =>
    colorID
      ? `
    color: ${COLORS[colorID[1]]};
    border-color: ${COLORS[colorID[1]]};`
      : ""}
`;

export const GalleryElement = styled.a`
  position: relative;
  display: block;
  max-width: fit-content;
  height: 200px;
  width: 200px;
  margin: 20px;

  & :hover {
    filter: saturate(0);
    & ~ .GalleryCaption {
      opacity: 100%;
    }
  }
`;

export const GalleryCaption = styled.div`
  ${GalleryElementLayer}
  opacity: 0%;
  transition: 500ms;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  top: -200px;
  z-index: 1;
`;

export const GalleryImage = styled.div`
  ${GalleryElementLayer}
`;
