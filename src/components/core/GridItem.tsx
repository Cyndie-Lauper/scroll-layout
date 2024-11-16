import { mergeClasses } from "@/utils"

interface GridItemProps {
  title: string
  description?: string
  position: string
  className?: string
}

/**
 * A single item in the grid.
 * @param {{ title: string, description?: string, position: string, style?: string }} props
 * @prop {string} title - The title of the item.
 * @prop {string} [description] - The description of the item.
 * @prop {string} position - The position of the item in the grid, as a string in the format 'x-y' where x is the x-coordinate and y is the y-coordinate.
 * @prop {string} [style] - Additional CSS styles to add to the item.
 * @returns {JSX.Element} JSX Element for the single item.
 */
export function GridItem({
  title,
  description,
  position,
  className,
}: GridItemProps): JSX.Element {
  return (
    <div
      className={mergeClasses("grid__item", `pos-${position}`, className)}
      key={position}
    >
      <h4 className="type-tiny">{title}</h4>
      <p>{description}</p>
    </div>
  )
}
