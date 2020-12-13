import React from "react";
import GalleryTitle from "./galleryTitle";
import { Layer } from "../styles/layers.styles";
import Gallery from "react-photo-gallery";

// API
import { generateImagesScaled } from "../../apis/AlbumInterpreter";

/**
 * Returns a container with important info
 * @param {String Array} props props.items a list of songs using SONG schema
 * @param {Number} props props.colorID must be theme compliant
 */
export default function galleryTypeRow(props) {
  return (
    <Layer isFloating alignTop isFlexLayer>
      <GalleryTitle
        colorID={props.colorID}
        title={props.title}
        subtitle={props.subtitle}
      />
      <Gallery photos={generateImagesScaled(props.album)} />
    </Layer>
  );
}
