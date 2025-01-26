import { mergeClasses } from "@/utils"
import "@/styles/base.css"
import { JSX } from "react"

interface ContentTitleProps {
  title: string
  description: string
  className?: string
}

/**
 * A component to render a title with an optional description.
 * @param {{ title: string; description: string; className?: string }} props
 * @returns {JSX.Element} A JSX element for the title.
 */
export function ContentTitle({
  title,
  description,
  className,
}: ContentTitleProps): JSX.Element {
  return (
    <div className={mergeClasses("content__title", className || "")}>
      <h2 className="content__title-main">{title}</h2>
      <p className="type-tiny right end">{description}</p>
    </div>
  )
}
