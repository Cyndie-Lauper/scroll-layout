import React from "react"
import { mergeClasses } from "@/utils"
import { TextBlock } from "../core"
import "@/styles/base.css"

/**
 * The intro section of the page.
 * @function
 * @returns {JSX.Element} JSX Element for the intro section.
 */
export const IntroSection = (): JSX.Element => (
  <>
    <TextBlock
      title="Intro"
      description="Welcome to Lennox Montgomery's photography portfolio. In a world dominated by speed and constant motion, Lennox Montgomery's photography invites you to slow down and immerse yourself in a visual experience that touches human fragility."
      className={mergeClasses("ml-2")}
    />
  </>
)
