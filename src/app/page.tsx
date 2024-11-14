'use client'

import { useEffect } from 'react'
import {
  HeaderSection,
  IntroSection,
  GallerySection,
  AboutSection,
} from '@/components'
import { initLenis } from '@/utils'
import { SpeedInsights } from '@vercel/speed-insights/next'

/**
 * The main page of the website.
 * @returns {JSX.Element} JSX Element for the home page.
 */
export default function Home(): JSX.Element {
  useEffect(() => {
    const lenis = initLenis()

    return () => {
      lenis.destroy()
    }
  }, [])
  return (
    <>
      <SpeedInsights />
      <HeaderSection />
      <IntroSection />
      <GallerySection />
      <AboutSection />
    </>
  )
}
