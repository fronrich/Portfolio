import React from 'react'


/**
 * 
 * @param {Object} props props.item can be whatever the headline is
 * @param {Number} props props.colorID must be theme compliant
 */
export default function headline(props) {
  return (
    <div className={`Layer HeadlineLayer`}>
      <div 
        className={
          `Headline FontHeader Border_${props.colorID} Foreground_${props.colorID}`
        }
      >
        {props.item}
      </div>
    </div>
  )
}
