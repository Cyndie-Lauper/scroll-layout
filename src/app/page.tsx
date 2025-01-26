"use client"

import {
  HeaderSection,
  IntroSection,
  FirstGallerySection,
  AboutSection,
  SecondGallerySection,
  LifeSection,
  ThirdGallerySection,
  WorkEthicSection,
  FourthGallerySection,
  FifthGallerySection,
  InspirationSection,
} from "@/components"
import { useLenis, usePreloadimages } from "@/hooks"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { JSX } from "react"

/**
 * The main page of the website.
 * @returns {JSX.Element} JSX Element for the home page.
 */
export default function Home(): JSX.Element {
  //* Custom Hooks
  useLenis()
  usePreloadimages()

  return (
    <div className="loading">
      {/* Optional: Ensure SpeedInsights and Analytics is available */}
      {typeof SpeedInsights !== "undefined" && <SpeedInsights />}
      {typeof Analytics !== "undefined" && <Analytics />}

      <HeaderSection />
      <IntroSection />
      <FirstGallerySection />
      <AboutSection />
      <SecondGallerySection />
      <LifeSection />
      <ThirdGallerySection />
      <WorkEthicSection />
      <FourthGallerySection />
      <FifthGallerySection />
      <InspirationSection />
    </div>
  )
}
