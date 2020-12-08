import React from "react";
import { GalleryTitle } from "./styles/gallery.styles";

/**
 * Returns a container with important info
 * @param {String Array} props props.items a list of songs using SONG schema
 * @param {Number} props props.colorID must be theme compliant
 */
export default function galleryTitle(props) {
  return (
    <GalleryTitle colorID={props.colorID}>
      <p>~{props.title}~</p>
      <p>~{props.subtitle}~</p>
    </GalleryTitle>
  );
}
