import React from 'react'
import '@/styles/base.css'

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
    {/* Article title */}
    <span>Layout Formation on Scroll</span>

    {/* Links to the article, all demos and GitHub */}
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
    {/* Tags for the page */}
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
    {/* The logo text */}
    LM
  </span>
)

/**
 * The main header section of the page.
 * @function
 * @returns {JSX.Element} JSX Element for the header section.
 */
export const HeaderSection = (): JSX.Element => {
  return (
    <header className="frame relative p-page-pad uppercase leading-none h-screen justify-start content-start bg-bg-frame">
      {/* The main title of the page */}
      <Title />

      {/* The subtitle and links of the page */}
      <Subline />

      {/* The tags for the page */}
      <Tags />

      {/* The logo of the page */}
      <Logo />
    </header>
  )
}
