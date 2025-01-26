"use client"

import React, { useEffect, useCallback, JSX } from "react"
import "@/styles/base.css"
import { images } from "@/constants"
import { ContentTitle, ImageGridItem } from "../core"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { calculateInitialTransform } from "@/utils"

gsap.registerPlugin(ScrollTrigger)


/**
 * Animates the sixth grid section on the page.
 *
 * @function
 * @returns {void}
 *
 */
const animateSixthGrid = (): void => {
  const SCROLL_END_PERCENTAGE = 250
  const grid = document.querySelector("[data-grid-sixth]")
  if (grid) {
    const gridImages = grid.querySelectorAll(".grid__img")
    const parent = grid.parentNode as Element

    if (gridImages && parent) {
      gsap
        .timeline({
          defaults: {
            ease: "sine",
          },
          scrollTrigger: {
            trigger: grid,
            start: "center center",
            end: `+=${SCROLL_END_PERCENTAGE}%`,
            pin: grid.parentNode instanceof Element ? grid.parentNode : false,
            scrub: 0.3,
          },
        })
        .set(grid, { perspective: 1000 })
        .from(gridImages, {
          stagger: {
            amount: 0.4,
            from: "random",
            grid: [4, 9],
          },
          y: window.innerHeight,
          rotationX: -70,
          transformOrigin: "50% 0%",
          z: -900,
          autoAlpha: 0,
        })
    }
  }
}

/**
 * The sixth gallery section of the page.
 * @function
 * @returns {JSX.Element} JSX Element for the sixth gallery section.
 *
 * This section features a grid of images and text content that are animated when
 * the user scrolls to the section. The images are rendered as background images
 * of a &lt;div&gt; element with class "grid__img". The text content is rendered
 * inside &lt;div&gt; elements with class "grid__item". The animation uses the
 * GSAP animation library.
 */
export const SixthGallerySection = (): JSX.Element => {
  const selectedImages = images.slice(18, 38)

  // Use useCallback to memoize the function
  const initAnimation = useCallback(() => {
    animateSixthGrid()
  }, [])

  useEffect(() => {
    initAnimation()
  }, [initAnimation])

  return (
    <section className="content content--padded content--full">
      <div className="grid grid--spaced grid--wide" data-grid-sixth>
        {selectedImages.map((img, index) => {
          try {
            return <ImageGridItem key={index} img={img} />
          } catch (error) {
            console.error(`Failed to render image at index ${index}:`, error)
            return null
          }
        })}
      </div>
      <ContentTitle title="Explorations" description="Nothing left unseen" />
    </section>
  )
}
