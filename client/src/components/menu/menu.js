import React, {useState} from 'react'

import MenuButton from './menuButton';
import MenuLinks from './menuLinks';

export default function Menu(props) {
  // initial state
  const [visible, setVisible] = useState(false);

  function passUp() {
    // update self
    setVisible(!visible);
    // update parent
    props.handler();
  }

  return (
    <div className="Menu">
      <MenuButton 
        colorID={props.colorID[1]} 
        handler={passUp} 
        onChange={passUp}
      />
      {ShowMenu(visible, props)}
    </div>
  )
}

function ShowMenu(isVisible, props) {
  var menuState = isVisible ? "" : "_Hidden";
  return (
    <div className="MenuWrapper">
      <div 
        className={
          `Layer MenuOverlay${menuState} Background_${props.colorID[0]}`
        } 
      />
      <div 
        className={
          `Layer MenuContent${menuState}`
        }
      > 
        <MenuLinks 
          colorID={props.colorID[1]} 
        />
      </div>
    </div>
  )
}