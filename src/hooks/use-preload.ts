"use client"

import { preloadImages } from "@/utils"
import { useEffect, useState } from "react"

/**
 * Custom hook to preload all images in the gallery with the class 'grid__img',
 * then remove the 'loading' class from the body and scroll to the top of the
 * page.
 */
export const usePreloadimages = (): { isLoading: boolean } => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    preloadImages(".grid__img")
      .then(() => {
        if (mounted) {
          document.body.classList.remove("loading")
          window.scrollTo(0, 0)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.error("Failed to preload images:", error)
        if (mounted) {
          setIsLoading(false)
        }
      })

    return () => {
      mounted = false
    }
  }, [])

  return { isLoading }
}
