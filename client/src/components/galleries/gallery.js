import React from "react";
import GalleryTitle from "./galleryTitle";
import { Layer } from "../styles/layers.styles";
import { Gallery } from "./styles/gallery.styles";

/**
 * Returns a container with important info
 * @param {String Array} props props.items a list of songs using SONG schema
 * @param {Number} props props.colorID must be theme compliant
 */
export default function gallery(props) {
  return (
    <Layer isFloating alignTop isFlexLayer>
      <GalleryTitle
        colorID={props.colorID}
        title={props.title}
        subtitle={props.subtitle}
      />
      <Gallery colorID={props.colorID}>{props.items}</Gallery>
    </Layer>
  );
}
