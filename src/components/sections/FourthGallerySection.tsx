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
 * Animates the fourth grid section on the page.
 *
 * @function
 * @returns {void}
 *
 */
const animateFourthGrid = (): void => {
  const SCROLL_END_PERCENTAGE = 200
  const grid = document.querySelector("[data-grid-fourth]")
  if (grid) {
    const gridImages = grid.querySelectorAll(".grid__img")
    const parent = grid.parentNode as Element

    if (gridImages && parent) {
      gsap
        .timeline({
          defaults: {
            ease: "expo",
          },
          scrollTrigger: {
            trigger: grid,
            start: "center center",
            end: `+=${SCROLL_END_PERCENTAGE}%`,
            pin: grid.parentNode instanceof Element ? grid.parentNode : false,
            scrub: 0.2,
          },
        })
        .set(grid, { perspective: 1000 })
        .fromTo(
          gridImages,
          {
            // Define the starting position based on the pre-calculated translation, rotation, and Z-axis translation values
            x: (_, el) => calculateInitialTransform(el).x,
            y: (_, el) => calculateInitialTransform(el).y,
            z: (_, el) => calculateInitialTransform(el).z, // Z-axis translation
            rotateX: (_, el) => calculateInitialTransform(el).rotateX * 0.5,
            rotateY: (_, el) => calculateInitialTransform(el).rotateY,
            autoAlpha: 0,
            scale: 0.7,
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
              amount: 0.2,
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
export const FourthGallerySection = (): JSX.Element => {
  const selectedImages = images.slice(0, 36)

  // Use useCallback to memoize the animateFirstGrid function
  const initAnimation = useCallback(() => {
    animateFourthGrid()
  }, [])

  useEffect(() => {
    initAnimation()
  }, [initAnimation])

  return (
    <section className="content content--full content--padded">
      <div className="grid grid--spaced grid--small" data-grid-fourth>
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
