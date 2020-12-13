import React from "react";
import Page from "../components/page";

// for display purposes
// prettier-ignore
export const COLORS = [
  "#AADFF1", 
  "#FBB57F", 
  "#F59DB2", 
  "#FCEC98", 
  "#80CAA5"
];

export function Landing() {
  return (
    <Page
      backgroundColor={2}
      foregroundColor={3}
      backgroundElements={["Wallpaper", "Headline"]}
    />
  );
}

export function Sound() {
  return (
    <Page
      backgroundColor={0}
      foregroundColor={2}
      backgroundElements={["MusicGallery"]}
    />
  );
}

export function Code() {
  return (
    <Page
      backgroundColor={2}
      foregroundColor={3}
      backgroundElements={["MusicGallery"]}
    />
  );
}

export function Visuals() {
  return (
    <Page
      backgroundColor={3}
      foregroundColor={0}
      backgroundElements={["PhotoGallery"]}
    />
  );
}
