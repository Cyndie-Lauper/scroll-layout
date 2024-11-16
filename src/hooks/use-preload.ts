"use client"

import { preloadImages } from "@/utils"
import { useEffect } from "react"

/**
 * Custom hook to preload all images in the gallery with the class 'grid__img',
 * then remove the 'loading' class from the body and scroll to the top of the
 * page.
 */
export const usePreloadimages = () => {
  useEffect(() => {
    preloadImages(".grid__img").then(() => {
      document.body.classList.remove("loading")
      window.scrollTo(0, 0)
    })
  }, [])
}
