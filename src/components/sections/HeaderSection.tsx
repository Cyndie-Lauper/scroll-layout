'use client'

import React, { useEffect, useCallback } from 'react'
import '@/styles/base.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * The main title of the page.
 * @function
 * @returns {JSX.Element} JSX Element for the title.
 */
const Title = (): JSX.Element => (
  <h2
    className="frame__title
      font-[family-name:var(--font-bricolage-grotesque-48pt)]
      whitespace-nowrap
      text-[clamp(2rem,20vw,20rem)]
      m-0
      tracking-[-0.05em]
      pt-[0.15em]
      font-medium
      leading-[0.55]
      indent-[-0.065em]
      mb-6"
  >
    Lennox Montgomery
  </h2>
)

/**
 * The subtitle of the page.
 * @function
 * @returns {JSX.Element} JSX Element for the subtitle.
 */
const Subline = (): JSX.Element => (
  <div className="frame__subline type-tiny">
    <span>Layout Formation on Scroll</span>
    <nav className="ml-12 flex-line">
      <a href="">Article</a>
      <a href="">All demos</a>
      <a href="">GitHub</a>
    </nav>
  </div>
)

/**
 * The tags for the page.
 * @function
 * @returns {JSX.Element} JSX Element for the tags.
 */
const Tags = (): JSX.Element => (
  <nav className="frame__tags flex-line type-tiny">
    <a href="">#scroll</a>
    <a href="">#grid</a>
  </nav>
)

/**
 * The logo for the page.
 * @function
 * @returns {JSX.Element} JSX Element for the logo.
 */
const Logo = (): JSX.Element => (
  <span className="frame__logo font-[family-name:var(--font-bricolage-grotesque)] font-medium">
    LM
  </span>
)

/**
 * Animate the header frame on scroll.
 * @function
 * @returns {void}
 */
const animateFrame = (): void => {
  const frame = document.querySelector('.frame')
  if (frame) {
    const frameTitle = frame.querySelector('.frame__title')
    if (frameTitle) {
      gsap
        .timeline({
          defaults: {
            ease: 'none',
          },
          scrollTrigger: {
            trigger: frame,
            start: 'clamp(top bottom)',
            end: 'bottom top',
            scrub: true,
          },
        })
        .to(frame, {
          yPercent: 35,
          scale: 0.95,
          startAt: { filter: 'brightness(100%)' },
          filter: 'brightness(30%)',
        })
        .to(
          frameTitle,
          {
            xPercent: -80,
          },
          0,
        )
    }
  }
}

export const HeaderSection = (): JSX.Element => {
  // Memoize the animateFrame function to avoid unnecessary re-renders
  const initAnimation = useCallback(() => {
    animateFrame()
  }, [])

  useEffect(() => {
    initAnimation()
  }, [initAnimation])

  return (
    <header className="frame relative p-page-pad uppercase leading-none h-screen justify-start content-start bg-bg-frame">
      <Title />
      <Subline />
      <Tags />
      <Logo />
    </header>
  )
}
