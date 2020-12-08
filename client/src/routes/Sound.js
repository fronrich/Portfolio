import React from "react";
import Social from "../components/gui/social/social";
import Page from "../components/page";

export default function Sound() {
  return (
    <Page
      backgroundColor={0}
      foregroundColor={2}
      backgroundElements={["MusicGallery"]}
      foregroundElements={["Menu", "Social"]}
    />
  );
}
