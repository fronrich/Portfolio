import React, {useState} from 'react'

export default function Sound() {

  // state management
  const [blur, setBlur] = useState(false);
  function routeState() {
    setBlur(!blur);
  }

  // theme is in format [<background>, <foreground/border>]
  const THEME = [1,3];

  return (
    <div>
      
    </div>
  )
}

function Body(THEME, blur) {
  
}
