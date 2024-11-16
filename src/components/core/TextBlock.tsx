import { mergeClasses } from "@/utils"

interface TextBlockProps {
  title?: string
  description?: string
  className?: string
}
export function TextBlock({
  title,
  description,
  className,
}: TextBlockProps): JSX.Element {
  return (
    <section className={mergeClasses("content", "content--padded", className)}>
      <h4 className="type-tiny">{title}</h4>
      <p className="text-[1.7rem] max-w-[625px] leading-[1.4] my-2 font-thin text-balance tracking-tight">
        {description}
      </p>
    </section>
  )
}
