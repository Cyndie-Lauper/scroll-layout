import {
  HeaderSection,
  IntroSection,
  GallerySection,
  AboutSection,
} from '@/components'

/**
 * The main page of the website.
 * @returns {JSX.Element} JSX Element for the home page.
 */
export default function Home(): JSX.Element {
  return (
    <>
      <HeaderSection />
      <IntroSection />
      <GallerySection />
      <AboutSection />
    </>
  )
}
