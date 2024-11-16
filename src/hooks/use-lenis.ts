"use client"

import { initLenis } from "@/utils"
import { useEffect } from "react"

/**
 * Custom hook to initialize and destroy Lenis smooth scroll.
 */
export const useLenis = () => {
  useEffect(() => {
    const lenis = initLenis()

    // Cleanup on unmount
    return () => {
      lenis.destroy()
    }
  }, [])
}
