import React, {useState} from 'react'

// GUI
import ForegroundGUI from '../components/gui/foregroundGUI'
import BackgroundGUI from '../components/gui/backgroundGUI'

export default function Landing() {

  // state management
  const [blur, setBlur] = useState(false);
  function routeState() {
    setBlur(!blur);
  }

  // theme is in format [<background>, <foreground/border>]
  const THEME = [3,4];
  return (
    <div>
      {/* {Body(THEME, blur)} */}
      <BackgroundGUI 
        theme={THEME}
        blur={blur}
        elements={["Wallpaper", "Headline"]}
      />
      <ForegroundGUI 
        theme={THEME}
        routeState={routeState}
        elements={["Menu", "Social"]}
      />
    </div>
  )
}