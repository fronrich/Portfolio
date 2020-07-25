import React from 'react'

import SocialBar from './social/socialBar'
import Menu from './menu/menu'

/**
 * The most frontfacing GUI
 * @param {Number Array} props.theme - theme colors
 * @param {Function} props.routeState - determine visibility of header
 * @param {String Array} props.elements - elements to render
 * @returns top layer gui
 */
export default function gui(props) {
  return (
    <div 
      className={`Layer GUI`}
    >
      {createInner(props.theme, props.routeState, props.elements)}
    </div>
  )
}

// generate inner componenets based on constants provided
function createInner(theme, routeState, elements) {
  // const of element types
  const ELEMENT_CONSTANTS = {
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
  }

  // render elements
  let list = []
  elements.forEach((string) => (
    list.push(
      ELEMENT_CONSTANTS[string]
    )
  ))

  // return list
  return list
}
