import React, { useState } from "react";

// GUI
import ForegroundGUI from "./gui/layers/foregroundGUI";
import ModalLayer from "./gui/layers/modalLayer";
import BackgroundGUI from "./gui/layers/backgroundGUI";

/**
 * Genrates a page with stuff on it
 * @param {Number} props.backgroundColor - background
 * @param {Number} props.backgroundColor - foreground (text, polygons, borders)
 *
 * COLOR CLASSES
 * ACCEPTABLE Combinations
 * 0;2
 * 0;3
 * 1;4
 * 2;3
 * 2;4
 * 3;4
 *
 * @param {String Array} props.backgroundElements - background elements
 * @param {String Array} props.modalLayerElements - temp render elements
 * @param {String Array} props.foregroundElements - GUI elements
 * @returns The page as as react functional component
 */

const Page = (props) => {
  // state management for blur animation
  const [blur, setBlur] = useState(false);
  function routeState() {
    setBlur(!blur);
  }

  //set theme
  const THEME = [props.backgroundColor, props.foregroundColor];

  // define constants here
  // these will appear on every layer
  const BACKGROUND_CONSTANTS = [];
  const MODAL_LAYER_CONSTANTS = [];
  const FOREGROUND_CONSTANTS = ["Menu", "Social"];

  const backgroundAll =
    props.backgroundElements !== undefined
      ? [...BACKGROUND_CONSTANTS, ...props.backgroundElements]
      : BACKGROUND_CONSTANTS;
  const modalLayerAll =
    props.modalLayerElements !== undefined
      ? [...MODAL_LAYER_CONSTANTS, ...props.modalLayerElements]
      : MODAL_LAYER_CONSTANTS;
  const foregroundAll =
    props.foregroundElements !== undefined
      ? [...FOREGROUND_CONSTANTS, ...props.foregroundElements]
      : FOREGROUND_CONSTANTS;

  return (
    <div>
      <BackgroundGUI theme={THEME} blur={blur} elements={backgroundAll} />
      <ModalLayer theme={THEME} elements={modalLayerAll} />
      <ForegroundGUI
        theme={THEME}
        routeState={routeState}
        elements={foregroundAll}
      />
    </div>
  );
};

export default Page;
