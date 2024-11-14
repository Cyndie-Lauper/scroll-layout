import React from 'react'
import '@/styles/base.css'

export const IntroSection = (): JSX.Element => {
  return (
    <section className="relative min-h-dvh bg-bg-content content-center content--padded">
      <h4 className="type-tiny">Intro</h4>
      <p className="text-[1.7rem] max-w-[625px] leading-[1.4] my-2 font-medium content__text text-balance tracking-tight">
        Welcome to Lennox Montgomery's photography portfolio. In a world
        dominated by speed and constant motion, Lennox Montgomery's photography
        invites you to slow down and immerse yourself in a visual experience
        that touches human fragility.
      </p>
    </section>
  )
}
