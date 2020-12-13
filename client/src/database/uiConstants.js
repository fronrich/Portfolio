import React from "react";
import SocialBar from "../components/gui/social/socialBar";
import Menu from "../components/gui/menu/menu";
import Wallpaper from "../assets/cello_final_retouch.gif";
import Headline from "../components/landing/headline";
import HeadlineData from "./headline";
import MusicGalleryContainer from "../components/galleries/musicGallery";
import GalleryTypeRow from "../components/galleries/galleryTypeRow";

// database
import { VISUAL } from "./albums.json";

// UI Warehouse
export default function UI_CONSTANTS(theme, routeState) {
  return {
    Foreground: {
      Menu: <Menu colorID={theme} handler={routeState} />,
      Social: <SocialBar colorID={theme} />,
    },
    Modal: {},
    Background: {
      Wallpaper: <img className="Wallpaper" src={Wallpaper} alt="cello" />,
      Headline: <Headline item={<HeadlineData />} colorID={theme[1]} />,
      MusicGallery: (
        <MusicGalleryContainer
          title="sounds"
          subtitle="made with <3"
          colorID={theme}
        />
      ),
      PhotoGallery: (
        <GalleryTypeRow
          title="visuals"
          subtitle="little stories"
          album={VISUAL}
        />
      ),
    },
  };
}
