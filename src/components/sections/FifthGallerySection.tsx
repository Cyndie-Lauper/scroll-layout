"use client"

import React, { useEffect, useCallback, JSX } from "react"
import "@/styles/base.css"
import { images } from "@/constants"
import { ImageGridItem } from "../core"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { calculateInitialTransform } from "@/utils"

gsap.registerPlugin(ScrollTrigger)

/**
 * Animates the fifth grid section on the page.
 *
 * @function
 * @returns {void}
 *
 */
const animateFifthGrid = (): void => {
  const SCROLL_END_PERCENTAGE = 200
  const grid = document.querySelector("[data-grid-fifth]")
  if (grid) {
    const gridImages = grid.querySelectorAll(".grid__img")
    const parent = grid.parentNode as Element

    if (gridImages && parent) {
      gsap
        .timeline({
          defaults: {
            ease: "power4",
          },
          scrollTrigger: {
            trigger: grid,
            start: "center center",
            end: `+=${SCROLL_END_PERCENTAGE}%`,
            pin: grid.parentNode instanceof Element ? grid.parentNode : false,
            scrub: 0.2,
          },
        })
        .set(grid, { perspective: 1200 })
        .fromTo(
          gridImages,
          {
            // Define the starting position based on the pre-calculated translation, rotation, and Z-axis translation values
            x: (_, el) => calculateInitialTransform(el, 900).x,
            y: (_, el) => calculateInitialTransform(el, 600).y,
            z: (_, el) => calculateInitialTransform(el, _, _, -3000).z, // Z-axis translation
            rotateX: (_, el) =>
              calculateInitialTransform(el, 250, -160, -3000).rotateX,
            rotateY: (_, el) =>
              calculateInitialTransform(el, 250, -160, -3000).rotateY,
            autoAlpha: 0,
            scale: 0.4,
          },
          {
            // Animate the images to their original position and remove transform
            x: 0,
            y: 0,
            z: 0,
            rotateX: 0,
            rotateY: 0,
            autoAlpha: 1,
            scale: 1,
            stagger: {
              amount: 0.15,
              from: "center",
              grid: [4, 9],
            },
          },
        )
    }
  }
}

/**
 * The main gallery section of the page.
 * @function
 * @returns {JSX.Element} JSX Element for the gallery section.
 */
export const FifthGallerySection = (): JSX.Element => {
  const selectedImages = images.slice(6, 42)

  // Use useCallback to memoize the animateFirstGrid function
  const initAnimation = useCallback(() => {
    animateFifthGrid()
  }, [])

  useEffect(() => {
    initAnimation()
  }, [initAnimation])

  return (
    <section className="content content--full">
      <div className="grid grid--small" data-grid-fifth>
        {selectedImages.map((img, index) => {
          try {
            return <ImageGridItem key={index} img={img} />
          } catch (error) {
            console.error(`Failed to render image at index ${index}:`, error)
            return null
          }
        })}
      </div>
    </section>
  )
}
