import React, {useState} from 'react'

// GUI
import ForegroundGUI from './gui/layers/foregroundGUI'
import ModalLayer from './gui/layers/modalLayer'
import BackgroundGUI from './gui/layers/backgroundGUI'


/**
 * Genrates a page with stuff on it
 * @param {Number} props.backgroundColor - background
 * @param {Number} props.backgroundColor - foreground (text, polygons, borders)
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

  return (
    <div>
    <BackgroundGUI 
      theme={THEME}
      blur={blur}
      elements={props.backgroundElements}
    />
    <ModalLayer
      theme={THEME}
      elements={props.modalLayerElements}
    />
    <ForegroundGUI 
      theme={THEME}
      routeState={routeState}
      elements={props.foregroundElements}
    />
    </div>
  );
 }
 
export default Page;