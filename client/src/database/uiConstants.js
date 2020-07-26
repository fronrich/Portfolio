import React from 'react'
import SocialBar from '../components/gui/social/socialBar'
import Menu from '../components/gui/menu/menu'
import Wallpaper from '../assets/cello_final_retouch.jpg'
import Headline from '../components/landing/headline'
import HeadlineData from './headline'

// UI Warehouse
export default function UI_CONSTANTS(theme, routeState) {
  return (
    {
      "Foreground" : {
        "Menu" : (
          <Menu 
            colorID={theme} 
            handler={routeState}
          />
        ),
        "Social" : (
          <SocialBar 
            colorID={theme[1]}
          />
        )
      },
      "Modal" : {

      },
      "Background" : {
        "Wallpaper" : (
          <img 
            className="Wallpaper" 
            src={Wallpaper} 
            alt="cello" 
          />
        ),
        "Headline" : (
          <Headline
            item={<HeadlineData />}
            colorID={theme[1]}
          />
        )
      }
    }
    
  )
}

