import React, { JSX } from "react"
import { TextBlock } from "../core"
import "@/styles/base.css"

/**
 * The work ethic section of the page.
 *
 * This section features a passage of text that describes the artist's
 * perspective on work ethics.
 *
 * The text is rendered as a {@link TextBlock} component.
 *
 * @returns {JSX.Element} JSX Element for the work ethic section.
 */
export const WorkEthicSection = (): JSX.Element => (
  <TextBlock
    title="Work Ethics"
    description="Driven by a strong sense of discipline and dedication, his work ethic reflects a deep commitment to both his craft and personal growth. With a relentless focus on innovation, he consistently seeks to push the boundaries of his creativity, drawing inspiration from the diverse environments that have shaped his artistic journey. Each project is approached with meticulous attention to detail, often requiring long hours and unwavering determination to achieve the desired result."
  />
)
