import { Colormap, Image } from './enabledElements';
/**
 * Restores a false color image to its original version
 *
 * @param {Image} image A Cornerstone Image Object
 * @returns {Boolean} True if the image object had a valid restore function, which was run. Otherwise, false.
 */
declare function restoreImage(image: Image): boolean;
/**
 * Convert an image to a false color image
 *
 * @param {Image} image A Cornerstone Image Object
 * @param {String|Object} colormap - it can be a colormap object or a colormap id (string)
 *
 * @returns {Boolean} - Whether or not the image has been converted to a false color image
 */
declare function convertImageToFalseColorImage(image: Image, colormap: string | Colormap): boolean;
/**
 * Convert the image of a element to a false color image
 *
 * @param {HTMLElement} element The Cornerstone element
 * @param {*} colormap - it can be a colormap object or a colormap id (string)
 *
 * @returns {void}
 */
declare function convertToFalseColorImage(element: HTMLElement, colormap: string | Colormap): boolean;
export { convertImageToFalseColorImage, convertToFalseColorImage, restoreImage };
