import React from 'react'
import UI from '../../../database/uiConstants'

/**
 * 
 * @param {Array} props.theme color theme
 * @param {String Array} props.elements - elements to render
 */
export default function modalLayer(props) {
  return (
    <div
    className={`Layer ModalLayer`}
    >
      {createInner(props.theme, props.elements)}
    </div>
  )
}

function createInner(theme, elements) {

  const ELEMENT_CONSTANTS = UI(theme).ModalLayer

  // render elements
  let list = []
  if (elements === undefined)
    return list
  elements.forEach((string) => (
    list.push(
      ELEMENT_CONSTANTS[string]
    )
  ))

  // return list
  return list
}
