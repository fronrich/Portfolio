import React from 'react'
import UI from '../../../database/uiConstants'

/**
 * Create a body for a webpage
 * @param {Array} props.theme color theme
 * @param {State} props.blur whether to blur component or not
 * @param {String Array} props.elements - elements to render
 * return background UI 
 */
export default function body(props) {
  // determines if the body should bve blurred
  // blur occurs on menu opening
  let blurBackground = props.blur ? "Blur" : "";

  return (
    <div
      className={`Layer BackgroundGUI ${blurBackground} Background_${props.theme[0]}`}
    >
      {createInner(props.theme, props.elements)}
    </div>
  )
}

function createInner(theme, elements) {
  const ELEMENT_CONSTANTS = UI(theme).Background

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
