import React, {useState} from 'react'

// components
import SocialBar from "../components/gui/social/socialBar";
import Headline from '../components/landing/headline';

// image
import Wallpaper from "../assets/cello_final_retouch.jpg";

//data
import HeadlineData from '../database/headline'

import Menu from "../components/gui/menu/menu";

// GUI
import GUI from '../components/gui/gui'

export default function Landing() {
  const [blur, setBlur] = useState(false);
  // theme is in format [<background>, <foreground/border>]
  function routeState() {
    setBlur(!blur);
  }
  const THEME = [3,4];
  return (
    <div>
      {Body(THEME, blur)}
      <GUI 
        theme={THEME}
        routeState={routeState}
        elements={["Menu", "Social"]}
      />
    </div>
  )
}

// stuff in the body goes here
function Body(THEME, blur) {
  // determines if the body should bve blurred
  // blur occurs on menu opening
  let blurBackground = blur ? "Blur" : "";
  return(
    <div 
      className={`Layer Body ${blurBackground} Background_${THEME[0]}`}
    >
      <img 
        className="Wallpaper" 
        src={Wallpaper} 
        alt="cello" 
      />
      {
        /*
         * Headline can be different on multiple pages which is why
         * json is passed here
        */
      }
      <Headline
        item={<HeadlineData />}
        colorID={THEME[1]}
      />
    </div>
  )
}