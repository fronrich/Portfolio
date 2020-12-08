import styled from "styled-components";
import { COLORS } from "../../../styles/themes";

export const SocialContainer = styled.div`
  & a {
    color: ${({ colorID }) => COLORS[colorID[1]]};
    pointer-events: all;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 45px;
    border: solid 5px ${({ colorID }) => COLORS[colorID[1]]};
    font-size: 28px;
    margin: 5px;
    transition: 200ms;
  }

  & a:hover {
    transform: scale(1.2);
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const SocialBarContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
