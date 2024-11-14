import React from 'react'
import '@/styles/base.css'

/**
 * The about section of the page.
 * @returns {JSX.Element} JSX Element for the about section.
 *
 * This section features a passage of text that describes the artist's
 * perspective and style.
 */
export const AboutSection = (): JSX.Element => (
  <section className="content content--padded ml-2">
    <h4 className="type-tiny">About</h4>
    <p className="text-[1.7rem] max-w-[625px] leading-[1.4] my-2 font-thin text-balance tracking-tight">
      His lens captures the quiet ache of reality, where shadow and light blur
      the line between seen and felt. Soft, muted tones breathe life into the
      ordinary, revealing the sensual curves and fragile textures hidden in
      plain sight. Each image lingers in the tension of what’s almost forgotten,
      where touch and absence coexist. There’s no rush, no spectacle—just the
      raw, intimate beauty of life unfolding in quiet moments. Light grazes
      skin, shadows hold secrets, and the world feels both distant and deeply
      near.
    </p>
  </section>
)
