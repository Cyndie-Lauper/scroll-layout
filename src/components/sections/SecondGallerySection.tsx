"use client"

import React, { useCallback, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { images } from "@/contants"
import { GridItem } from "../core"
import "@/styles/base.css"

gsap.registerPlugin(ScrollTrigger)

/**
 * Animates the second grid section on the page.
 *
 * @function
 * @returns {void}
 *
 */
const animateSecondGrid = (): void => {
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
            end: "+=250%",
            pin: grid.parentNode as Element,
            scrub: 0.5,
          },
        })
        .from(gridImages, {
          stagger: 0.3,
          from: "center",
          y: window.innerHeight,
          transformOrigin: "50% 0%",
          rotation: (pos) => {
            const distanceFromCenter = Math.abs(pos - middleIndex)
            return pos < middleIndex
              ? distanceFromCenter * 3
              : distanceFromCenter * -3
          },
        })
        .from(
          grid.querySelector(".grid__item"),
          {
            stagger: {
              amount: 0.3,
              from: "center",
            },
            yPercent: 100,
            autoAlpha: 0,
          },
          0,
        )
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
  const selectedImages = images.slice(17, 22)

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
