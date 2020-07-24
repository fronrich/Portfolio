import React, {useState} from 'react'

// components
import SocialBar from "../components/Landing/social/socialBar";
import Headline from '../components/Landing/headline';

// image
import Wallpaper from "../assets/cello_final_retouch.jpg";

import Menu from "../components/menu/menu";

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
      {Header(THEME, routeState)}
    </div>
  )
}

// stuff in the body goes here
function Body(THEME, blur) {
  // determines if the body should bve blurred
  // blur occurs on menu opening
  let blurBackground = blur ? "Blur" : "";
  return(
    <div className={`Body ${blurBackground} Background_${THEME[0]}`}>
      <img className="Wallpaper" src={Wallpaper} alt="cello" />
      <Headline 
        item={
          `Test Test`
        }
        colorID={THEME[1]}
      />
    </div>
  )
}
// stuff in the header goes here
function Header(THEME, routeState) {
  return (
    <div className={`Header`}>
      <Menu colorID={THEME} handler={routeState}/>
      <SocialBar colorID={THEME[1]}/>
    </div>
  )
}