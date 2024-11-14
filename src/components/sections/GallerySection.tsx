import React from 'react'
import '@/styles/base.css'
import { images } from '@/contants'

/**
 * A single image in the gallery grid.
 * @function
 * @param {{ img: string; index: number }} props
 * @prop {string} img - The filename of the image.
 * @prop {number} index - The index of the image in the array.
 * @returns {JSX.Element} JSX Element for the single image.
 */
const ImageGridItem = ({
  img,
  index,
}: {
  img: string
  index: number
}): JSX.Element => (
  <div
    className={`grid__img pos-${index + 1}`}
    style={{ backgroundImage: `url(./image/${img})` }}
  ></div>
)

/**
 * The title of the content section.
 * @function
 * @returns {JSX.Element} JSX Element for the content title.
 */
const ContentTitle = (): JSX.Element => (
  <div className="content__title">
    <h2 className="content__title-main">Rawness</h2>
    <p className="type-tiny text-right self-end">Captured in every moment</p>
  </div>
)

/**
 * The main gallery section of the page.
 * @function
 * @returns {JSX.Element} JSX Element for the gallery section.
 */
export const GallerySection = (): JSX.Element => {
  const selectedImages = images.slice(0, 17)

  return (
    <section className="content content--full content--padded">
      <div className="grid grid--spaced" data-grid-first>
        {selectedImages.map((img, index) => (
          <ImageGridItem key={index} img={img} index={index} />
        ))}
      </div>
      <ContentTitle />
    </section>
  )
}
