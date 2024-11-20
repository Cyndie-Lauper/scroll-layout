"use client"

import React, { useCallback, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { images } from "@/constants"
import { GridItem, ImageGridItem } from "../core"
import "@/styles/base.css"

gsap.registerPlugin(ScrollTrigger)

const GALLERY_START_INDEX = 17
const GALLERY_END_INDEX = 22
const GRID_ITEMS = [
  { title: "Vision", description: "Unveiling the unseen", position: "6" },
  { title: "Focus", description: "Where color meets form", position: "7" },
  { title: "Essence", description: "Moments in motion", position: "18" },
]

/**
 * Animates the second grid section on the page.
 *
 * @function
 * @returns {void}
 *
 */
const animateSecondGrid = (): void => {
  const SCROLL_END_PERCENTAGE = 250
  const STAGGER_DELAY = 0.3
  const ROTATION_FACTOR = 3
  const grid = document.querySelector("[data-grid-second]")
  if (grid) {
    const gridImages = grid.querySelectorAll(".grid__img")
    const middleIndex = Math.floor(gridImages.length / 2)

    if (gridImages) {
      gsap
        .timeline({
          defaults: {
            ease: "power3",
          },
          scrollTrigger: {
            trigger: grid,
            start: "center center",
            end: `+=${SCROLL_END_PERCENTAGE}%`,
            pin: grid.parentNode instanceof Element ? grid.parentNode : false,
            scrub: 0.5,
          },
        })
        .from(gridImages, {
          stagger: STAGGER_DELAY,
          from: "center",
          y: "100vh",
          transformOrigin: "50% 0%",
          rotation: (pos) => {
            const distanceFromCenter = Math.abs(pos - middleIndex)
            return pos < middleIndex
              ? distanceFromCenter * ROTATION_FACTOR
              : distanceFromCenter * -ROTATION_FACTOR
          },
        })
        .from(
          grid.querySelector(".grid__item"),
          {
            stagger: {
              amount: STAGGER_DELAY,
              from: "center",
            },
            yPercent: 100,
            autoAlpha: 0,
          },
          0,
        )
    } else {
      console.error("Grid images not found")
    }
  }
}

/**
 * The second gallery section of the page.
 * @function
 * @returns {JSX.Element} JSX Element for the second gallery section.
 *
 * This section features a grid of images that are animated when the user scrolls
 * to the section. The images are rendered as background images of a &lt;div&gt;
 * element with class "grid__img". The animation uses the GSAP animation library.
 */
export const SecondGallerySection = (): JSX.Element => {
  const selectedImages = images.slice(GALLERY_START_INDEX, GALLERY_END_INDEX)

  // Use useCallback to memoize the animateFirstGrid function
  const initAnimation = useCallback(() => {
    animateSecondGrid()
  }, [])

  useEffect(() => {
    initAnimation()
  }, [initAnimation])

  return (
    <section className="content content--padded">
      <div className="grid grid--columns grid--spaced" data-grid-second>
        {selectedImages.map((img, index) => {
          try {
            return <ImageGridItem key={index} img={img} />
          } catch (error) {
            console.error(`Failed to render image at index ${index}:`, error)
            return null
          }
        })}
        {GRID_ITEMS.map(({ title, description, position }) => (
          <GridItem
            key={`grid-item-${position}`}
            title={title}
            description={description}
            position={position}
          />
        ))}
      </div>
    </section>
  )
}
