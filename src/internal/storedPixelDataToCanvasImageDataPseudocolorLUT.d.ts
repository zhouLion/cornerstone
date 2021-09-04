import LookupTable from 'src/colors/lookupTable';
import { Image } from 'src/enabledElements';
declare type Clut = Array<number[]>;
/**
 *
 * @param {Image} image A Cornerstone Image Object
 * @param {Array} grayscaleLut Lookup table array
 * @param {LookupTable|Array} colorLut Lookup table array
 * @param {Uint8ClampedArray} canvasImageDataData canvasImageData.data buffer filled with white pixels
 *
 * @returns {void}
 * @memberof Internal
 */
declare function storedPixelDataToCanvasImageDataPseudocolorLUT(image: Image, grayscaleLut: Array<number>, colorLut: LookupTable | Clut, canvasImageDataData: Uint8ClampedArray): void;
export default storedPixelDataToCanvasImageDataPseudocolorLUT;
