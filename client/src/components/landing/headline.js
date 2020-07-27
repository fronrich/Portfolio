import React from 'react'

/**
 * Returns a container with important info
 * @param {Object} props props.item can be whatever the headline is
 * @param {Number} props props.colorID must be theme compliant
 */
export default function headline(props) {
  return (
    <div className={`Layer FlexLayer Floating HeadlineLayer`}>
      <div 
        className={
          `Element Headline FontMono Border_${props.colorID} Foreground_${props.colorID}`
        }
      >
        {props.item}
      </div>
    </div>
  )
}
