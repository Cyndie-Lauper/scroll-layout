"use client"

import React, { useCallback, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { images } from "@/constants"
import { GridItem, ImageGridItem } from "../core"
import "@/styles/base.css"

gsap.registerPlugin(ScrollTrigger)

const GALLERY_START_INDEX = 24
const GALLERY_END_INDEX = 27
const GRID_ITEMS = [
  {
    title: "Craft",
    description:
      "His craft reveals the quiet beauty in life’s fleeting moments.",
    position: "1",
  },
  {
    title: "Perspective",
    description:
      "His perspective finds depth in stillness, where the unseen speaks.",
    position: "4",
  },
]

/**
 * Animates the third grid section on the page.
 *
 * @function
 * @returns {void}
 *
 */
const animateThirdGrid = (): void => {
  const SCROLL_END_PERCENTAGE = 200
  const STAGGER_DELAY = 0.06
  const grid = document.querySelector("[data-grid-third]")
  if (grid) {
    const gridImages = grid.querySelectorAll(".grid__img")

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
            scrub: 0.2,
          },
        })
        .from(gridImages, {
          stagger: STAGGER_DELAY,
          y: "100vh",
          rotation: () => gsap.utils.random(-15, 15),
          transformOrigin: "50% 0%",
        })
        .fromTo(
          gridImages,
          {
            filter: "brightness(100%)",
          },
          {
            ease: "none",
            stagger: STAGGER_DELAY,
            filter: (pos) =>
              pos < gridImages.length - 1
                ? "brightness(20%)"
                : "brightness(100%)",
          },
          0,
        )
        // text content
        .from(
          grid.querySelectorAll(".grid__item"),
          {
            xPercent: (pos) => (pos % 2 ? 100 : -100),
            autoAlpha: 0,
          },
          STAGGER_DELAY * gridImages.length,
        )
    }
  }
}

/**
 * The third gallery section of the page.
 * @function
 * @returns {JSX.Element} JSX Element for the third gallery section.
 *
 * This section features a grid of images and text content that are animated when
 * the user scrolls to the section. The images are rendered as background images
 * of a &lt;div&gt; element with class "grid__img". The text content is rendered
 * inside &lt;div&gt; elements with class "grid__item". The animation uses the
 * GSAP animation library.
 */
export const ThirdGallerySection = (): JSX.Element => {
  const selectedImages = images.slice(GALLERY_START_INDEX, GALLERY_END_INDEX)

  // Use useCallback to memoize the animateFirstGrid function
  const initAnimation = useCallback(() => {
    animateThirdGrid()
  }, [])

  useEffect(() => {
    initAnimation()
  }, [initAnimation])

  return (
    <section className="content content--padded">
      <div
        className="grid grid--columns grid--spaced h-auto justify-self-center"
        data-grid-third
      >
        {selectedImages.map((img, index) => {
          try {
            return <ImageGridItem key={index} img={img} className="pos-2" />
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
            className="self-center ml-2"
          />
        ))}
      </div>
    </section>
  )
}
