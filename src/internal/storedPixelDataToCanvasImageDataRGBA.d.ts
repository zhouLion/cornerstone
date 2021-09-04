import { Image } from 'src/enabledElements';
/**
 * This function transforms stored pixel values into a canvas image data buffer
 * by using a LUT.
 *
 * @param {Image} image A Cornerstone Image Object
 * @param {Array} lut Lookup table array
 * @param {Uint8ClampedArray} canvasImageDataData canvasImageData.data buffer filled with white pixels
 *
 * @returns {void}
 * @memberof Internal
 */
export default function (image: Image, lut: number[] | Uint8ClampedArray, canvasImageDataData: Uint8ClampedArray): void;
