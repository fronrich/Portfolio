import React from 'react'
import Page from "../components/page"

export default function Landing() {
  return (
    <div>
      <Page 
        backgroundColor={3}
        foregroundColor={4}
        backgroundElements={["Wallpaper", "Headline"]}
        foregroundElements={["Menu", "Social"]}
      />
    </div>
  )
}