import React from "react"
import "@/styles/base.css"
import { images } from "@/contants"
import { GridItem } from "../core"

/**
 * The intro section of the page.
 * @function
 * @returns {JSX.Element} JSX Element for the intro section.
 */
export const VisionSection = (): JSX.Element => {
  const selectedImages = images.slice(17, 22)
  return (
    <section className="content content--padded">
      <div className="grid grid--columns grid--spaced" data-grid-second>
        {selectedImages.map((img, index) => (
          <div
            key={index}
            className="grid__img"
            style={{ backgroundImage: `url(./image/${img})` }}
          ></div>
        ))}
        <GridItem
          title="Vision"
          description="Unveiling the unseen"
          position="6"
        />
        <GridItem
          title="Focus"
          description="Where color meets form"
          position="7"
        />
        <GridItem
          title="Essence"
          description="Moments in motion"
          position="18"
        />
      </div>
    </section>
  )
}
