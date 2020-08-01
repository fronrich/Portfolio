import React from 'react'

export default function galleryTitle(props) {
  return (
    <div className={`galleryTitle FontSubtitle Foreground_${props.colorID}`}>
      <p>~{props.title}~</p>
      <p>~{props.subtitle}~</p>
    </div>
  )
}
