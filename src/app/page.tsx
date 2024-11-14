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
 * Custom hook to initialize and destroy Lenis smooth scroll.
 */
const useLenis = () => {
  useEffect(() => {
    const lenis = initLenis()

    // Cleanup on unmount
    return () => {
      lenis.destroy()
    }
  }, [])
}

/**
 * The main page of the website.
 * @returns {JSX.Element} JSX Element for the home page.
 */
export default function Home(): JSX.Element {
  // Initialize Lenis smooth scroll
  useLenis()

  return (
    <>
      {/* Optional: Ensure SpeedInsights is available */}
      {typeof SpeedInsights !== 'undefined' && <SpeedInsights />}

      <HeaderSection />
      <IntroSection />
      <GallerySection />
      <AboutSection />
    </>
  )
}
