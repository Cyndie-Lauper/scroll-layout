import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/**
 * Initializes the Lenis scroll library.
 * @returns {Lenis} The Lenis instance.
 */
export const initLenis = (): Lenis => {
  /**
   * The Lenis instance.
   */
  const lenis = new Lenis({
    /**
     * Amount of easing when scrolling.
     */
    lerp: 0.15,
  })

  /**
   * Updates the ScrollTrigger when the user scrolls.
   */
  lenis.on("scroll", ScrollTrigger.update)

  /**
   * Adds the Lenis RAF to the GSAP ticker.
   * @param {number} time - The current time in seconds.
   */
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  /**
   * Disables lag smoothing on the GSAP ticker.
   */
  gsap.ticker.lagSmoothing(0)

  return lenis
}
