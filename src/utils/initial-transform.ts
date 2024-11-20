import type { Transform } from "@/constants"

/**
 * Calculate the initial transform of an element relative to the viewport.
 *
 * @param element The element to calculate the transform for.
 * @param offsetDistance The distance from the viewport center to the transform origin.
 * @param maxRotation The maximum rotation of the element in degrees.
 * @param maxZTranslation The maximum z-axis translation of the element in pixels.
 *
 * @returns The initial transform of the element as an object with x, y, z, rotateX, and rotateY properties.
 */
export const calculateInitialTransform = (
  element: HTMLElement,
  offsetDistance = 250,
  maxRotation = 300,
  maxZTranslation = 2000,
): Transform => {
  const viewportCenter = {
    width: window.innerWidth / 2,
    height: window.innerHeight / 2,
  }

  const elementCenter = {
    x: element.offsetLeft + element.offsetWidth / 2,
    y: element.offsetTop + element.offsetHeight / 2,
  }

  // Calculate the angle between the center of the element and the center of the viewport
  const angle = Math.atan2(
    Math.abs(viewportCenter.height - elementCenter.y),
    Math.abs(viewportCenter.width - elementCenter.x),
  )

  // Calculate the x and y translation based on the angle and distance
  const translateX = Math.abs(Math.cos(angle) * offsetDistance)
  const translateY = Math.abs(Math.sin(angle) * offsetDistance)

  // Calculate the maximum possible distance from the center (diagonal of the viewport)
  const maxDistance = Math.hypot(viewportCenter.width, viewportCenter.height)

  // Calculate the current distance from the center
  const currentDistance = Math.hypot(
    viewportCenter.width - elementCenter.x,
    viewportCenter.height - elementCenter.y,
  )

  // Scale rotation and Z-translation based on distance from the center
  const distanceFactor = currentDistance / maxDistance

  // Calculate the rotation values based on the position relative to the center
  const rotationX =
    (elementCenter.y < viewportCenter.height ? -1 : 1) *
    (translateY / offsetDistance) *
    maxRotation *
    distanceFactor

  const rotationY =
    (elementCenter.x < viewportCenter.width ? 1 : -1) *
    (translateX / offsetDistance) *
    maxRotation *
    distanceFactor

  // Calculate the Z-axis translation (depth) based on the distance from the center
  const translateZ = maxZTranslation * distanceFactor

  // Determine direction based on position relative to the viewport center
  return {
    x: elementCenter.x < viewportCenter.width ? -translateX : translateX,
    y: elementCenter.y < viewportCenter.height ? -translateY : translateY,
    z: translateZ,
    rotateX: rotationX,
    rotateY: rotationY,
  }
}
