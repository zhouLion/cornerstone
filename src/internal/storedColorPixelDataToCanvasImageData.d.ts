import { Image } from '../enabledElements';
/**
 * Converts stored color pixel values to display pixel values using a LUT.
 *
 * Note: Skips alpha value for any input image pixel data.
 *
 * @param {Image} image A Cornerstone Image Object
 * @param {Array} lut Lookup table array
 * @param {Uint8ClampedArray} canvasImageDataData canvasImageData.data buffer filled with white pixels
 *
 * @returns {void}
 * @memberof Internal
 */
export default function (image: Image, lut: Array<number>, canvasImageDataData: Uint8ClampedArray): void;
