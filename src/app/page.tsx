import {
  HeaderSection,
  IntroSection,
  GallerySection,
  AboutSection,
} from '@/components'
import { SpeedInsights } from '@vercel/speed-insights/next'

/**
 * The main page of the website.
 * @returns {JSX.Element} JSX Element for the home page.
 */
export default function Home(): JSX.Element {
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
