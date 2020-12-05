import React from "react";
import GalleryContainer from "./gallery";
import MusicData from "../../database/music.json";
import {
  GalleryImage,
  GalleryCaption,
  GalleryElement,
} from "./styles/gallery.styles";

/**
 * Visual representation of music database
 * @param {number} props.colorID themeing
 */
export default function musicGallery(props) {
  return (
    <GalleryContainer
      title={props.title}
      subtitle={props.subtitle}
      items={generateContents()}
      colorID={props.colorID}
    />
  );
}

// generate song elements
function generateContents() {
  let list = [];
  MusicData.map((key, index) =>
    list.push(musicGalleryItem(index, key.title, key.url, key.image))
  );
  return list;
}

// song element component
const musicGalleryItem = (key, title, url, image) => {
  return (
    <GalleryElement
      key={key}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GalleryImage>
        <img src={image} alt={title} />
      </GalleryImage>
      <GalleryCaption className={`GalleryCaption`}>
        <span>{title}</span>
      </GalleryCaption>
    </GalleryElement>
  );
};
