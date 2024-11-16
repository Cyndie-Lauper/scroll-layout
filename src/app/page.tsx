"use client"

import {
  HeaderSection,
  IntroSection,
  GallerySection,
  AboutSection,
  VisionSection,
} from "@/components"
import { useLenis, usePreloadimages } from "@/hooks"
import { SpeedInsights } from "@vercel/speed-insights/next"

/**
 * The main page of the website.
 * @returns {JSX.Element} JSX Element for the home page.
 */
export default function Home(): JSX.Element {
  useLenis()
  usePreloadimages()
  return (
    <div className="loading">
      {/* Optional: Ensure SpeedInsights is available */}
      {typeof SpeedInsights !== "undefined" && <SpeedInsights />}

      <HeaderSection />
      <IntroSection />
      <GallerySection />
      <AboutSection />
      <VisionSection />
    </div>
  )
}
