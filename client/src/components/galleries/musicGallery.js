import React from 'react'

import Gallery from './gallery'

import MusicData from '../../database/music.json'

/**
 * Visual representation of music database
 * @param {number} props.colorID themeing
 */
export default function musicGallery(props) {
  return (
    <div>
      <Gallery
        title = {props.title}
        subtitle = {props.subtitle}
        items={generateContents()}
        colorID={props.colorID}
      />
    </div>
  )
}

// generate song elements
function generateContents() {
  let list = []
  MusicData.map((key, index) => (
    list.push(
      musicGalleryItem(
        index,
        key.title,
        key.url,
        key.image
      )
    )
  ))
  return list
}

// song element component
const musicGalleryItem = (key, title, url, image) => {
  return (
    <a
      key={key}
      className={`SongElement GalleryElement FontMono`}
      href={url}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div 
        className={`GalleryElementLayer GalleryImage`}
      >
        <img 
          src={image} 
          alt={title}
        />
      </div>
      <div
        className={`GalleryElementLayer GalleryCaption`}
      >
        <span>
          {title}
        </span>
      </div>
    </a>
  );
}
