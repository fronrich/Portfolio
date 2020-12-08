import React from "react";
import SocialBar from "../components/gui/social/socialBar";
import Menu from "../components/gui/menu/menu";
import Wallpaper from "../assets/cello_final_retouch.gif";
import Headline from "../components/landing/headline";
import HeadlineData from "./headline";
import MusicGallery from "../components/galleries/musicGallery";

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
        <MusicGallery title="sounds" subtitle="made with <3" colorID={theme} />
      ),
    },
  };
}
