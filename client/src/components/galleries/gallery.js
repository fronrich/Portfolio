import React from "react";
import { Layer } from "../gui/layers/styles/layers.styles";
import { GalleryTitle, Gallery } from "./styles/gallery.styles";

/**
 * Returns a container with important info
 * @param {String Array} props props.items a list of songs using SONG schema
 * @param {Number} props props.colorID must be theme compliant
 */
export default function gallery(props) {
  return (
    <Layer isFloating isFlexLayer>
      <GalleryTitle
        colorID={props.colorID}
        title={props.title}
        subtitle={props.subtitle}
      >
        <p>~{props.title}~</p>
        <p>~{props.subtitle}~</p>
      </GalleryTitle>
      <Gallery colorID={props.colorID}>{props.items}</Gallery>
    </Layer>
  );
}
