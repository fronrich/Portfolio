import React from 'react'
import GalleryTitle from './galleryTitle'

/**
 * Returns a container with important info
 * @param {String Array} props props.items a list of songs using SONG schema
 * @param {Number} props props.colorID must be theme compliant
 */
export default function gallery(props) {
  return (
    <div className={`Layer Floating FlexLayer`}>
      <GalleryTitle
        colorID = {props.colorID}
        title = {props.title}
        subtitle = {props.subtitle}
      />
      <div 
        className={
          `Element Gallery FontMono Border_${props.colorID} Foreground_${props.colorID}`
        }
      >
        {props.items}
      </div>
    </div>
  )
}
