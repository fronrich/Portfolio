import Social from "./social";

import React from 'react'

export default function SocialBar(props) {
  return (
    <div className="SocialBar">
      <Social 
          colorID={props.colorID} 
          icon="fab fa-instagram"
          link="https://www.instagram.com/officialpingmusic/"
      />
      <Social 
          colorID={props.colorID} 
          icon="fab fa-soundcloud"
          link="https://soundcloud.com/ii_png"
      />
      <Social 
          colorID={props.colorID} 
          icon="fas fa-music"
          link="hello"
      />
      <Social 
          colorID={props.colorID} 
          icon="fab fa-github-alt"
          link="https://github.com/fronrich"
      />
      <Social 
          colorID={props.colorID} 
          icon="fab fa-linkedin-in"
          link="https://www.linkedin.com/in/fronrich-puno/"
      />
      
    </div>
  )
}
