import { Image, LUT } from '../enabledElements';
/**
 * Creates a LUT used while rendering to convert stored pixel values to
 * display pixels
 *
 * @param {Image} image A Cornerstone Image Object
 * @param {Number} windowWidth The Window Width
 * @param {Number} windowCenter The Window Center
 * @param {Boolean} invert A boolean describing whether or not the image has been inverted
 * @param {Array} [modalityLUT] A modality Lookup Table
 * @param {Array} [voiLUT] A Volume of Interest Lookup Table
 *
 * @returns {Uint8ClampedArray} A lookup table to apply to the image
 * @memberof Internal
 */
export default function (image: Image, windowWidth: number, windowCenter: number, invert: boolean, modalityLUT?: LUT, voiLUT?: LUT): Uint8ClampedArray;
