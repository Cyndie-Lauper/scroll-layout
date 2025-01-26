import { mergeClasses } from "@/utils"
import "@/styles/base.css"
import { JSX } from "react"

interface TextBlockProps {
  title: string
  description: string
  className?: string
}
/**
 * A simple text block component, used for About and Vision sections.
 * @param title The title of the text block.
 * @param description The description of the text block.
 * @param className Any additional CSS classes to add to the component.
 * @returns A JSX element for the text block.
 */
export function TextBlock({
  title,
  description,
  className,
}: TextBlockProps): JSX.Element {
  return (
    <section
      className={mergeClasses(
        "content",
        "content--padded",
        "ml-2",
        className || "",
      )}
    >
      <h4 className="type-tiny">{title}</h4>
      <p className="text-[1.7rem] max-w-[625px] leading-[1.4] my-2 font-thin text-balance tracking-tight">
        {description}
      </p>
    </section>
  )
}
