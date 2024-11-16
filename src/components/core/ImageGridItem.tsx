import { mergeClasses } from "@/utils"
import "@/styles/base.css"

interface ImageGridItemProps {
  key: number
  img: string
  className?: string
}

/**
 * A single image in the gallery grid.
 * @function
 * @param {{ img: string; key: number }} props
 * @prop {string} img - The filename of the image.
 * @prop {string} [className] - Additional CSS classes to add to the image.
 * @returns {JSX.Element} JSX Element for the single image.
 */
export function ImageGridItem({
  img,
  className,
}: Omit<ImageGridItemProps, "key">): JSX.Element {
  return (
    <div
      className={mergeClasses("grid__img", className || "")}
      style={{ backgroundImage: `url(./image/${img})` }}
    ></div>
  )
}
