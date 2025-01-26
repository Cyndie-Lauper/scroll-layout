"use client"

import React, { useEffect, useCallback, JSX } from "react"
import "@/styles/base.css"
import { images } from "@/constants"
import { ContentTitle, ImageGridItem } from "../core"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/**
 * Animates the first grid section on the page.
 *
 * @function
 * @returns {void}
 *
 */
const animateFirstGrid = (): void => {
  const SCROLL_END_PERCENTAGE = 250
  const STAGGER_DELAY = 0.07
  const grid = document.querySelector("[data-grid-first]")
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
            pin: window.innerWidth > 768 ? parent : false,
            scrub: 0.5,
          },
        })
        .from(gridImages, {
          stagger: STAGGER_DELAY,
          y: () =>
            gsap.utils.random(window.innerHeight, window.innerHeight * 1.8),
        })
        .from(
          parent.querySelector(".content__title"),
          {
            duration: 1.2,
            ease: "power4",
            yPercent: 180,
            autoAlpha: 0,
          },
          0.8,
        )
    }
  }
}

/**
 * The main gallery section of the page.
 * @function
 * @returns {JSX.Element} JSX Element for the gallery section.
 */
export const FirstGallerySection = (): JSX.Element => {
  const selectedImages = images.slice(0, 17)

  // Use useCallback to memoize the animateFirstGrid function
  const initAnimation = useCallback(() => {
    animateFirstGrid()
  }, [])

  useEffect(() => {
    initAnimation()
  }, [initAnimation])

  return (
    <section className="content content--full content--padded">
      <div className="grid grid--spaced" data-grid-first>
        {selectedImages.map((img, index) => {
          try {
            return (
              <ImageGridItem
                key={index}
                img={img}
                className={`pos-${index + 1}`}
              />
            )
          } catch (error) {
            console.error(`Failed to render image at index ${index}:`, error)
            return null
          }
        })}
      </div>
      <ContentTitle title="Rawness" description="Captured in every moment" />
    </section>
  )
}
