import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge multiple classnames into a single string.
 *
 * @example
 * mergeClasses('container mx-auto', 'p-4') // "container mx-auto p-4"
 *
 * @param {...ClassValue[]} inputs - Classnames to merge. Can be a string, an array of strings, or an object with className as a key.
 * @returns {string} - A single string of merged classnames.
 */
export const mergeClasses = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs))
}
