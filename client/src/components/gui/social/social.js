import React from 'react'

export default function Social(props) {
  return (
    <a 
      className={
        `Element Social Border_${props.colorID} Foreground_${props.colorID}`
      } 
      href={props.link} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className={props.icon}></i>
    </a>
  )
}
