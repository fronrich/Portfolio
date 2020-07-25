import React, {useState} from 'react'


export default function headline() {
  return (
    <div>
      <p>
      "Red Lights Blue Nights" Out Now
      </p>
      <p>
        Listen on&nbsp;
        <a 
          href={`https://www.google.com/`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <u>
            Spotify
          </u>
        </a>
      </p>
    </div>
  )
}