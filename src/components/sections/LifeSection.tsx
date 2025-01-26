import React, { JSX } from "react"
import { TextBlock } from "../core"
import "@/styles/base.css"

/**
 * The life section of the page.
 * @returns {JSX.Element} JSX Element for the life section.
 *
 * This section features a passage of text that describes the artist's background
 * and approach to art.
 */
export const LifeSection = (): JSX.Element => (
  <TextBlock
    title="Life"
    description="Lennox Montgomery, born in 1987 in Brooklyn, grew up attuned to the gentle interplay of light and shadow in the city’s quieter corners. His eye was drawn to the unnoticed beauty in the mundane, the softness in the grit. In his early 20s, he relocated to Los Angeles, where the hazy sunlight, muted colors, and sprawling landscapes deepened his introspective approach to art. There, he found inspiration in the delicate moments between movement and stillness, capturing the fleeting, sensual beauty of everyday life in a way that feels both intimate and timeless."
  />
)
