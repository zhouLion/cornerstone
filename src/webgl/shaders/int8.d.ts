import { Image } from '../../enabledElements';
declare const int8Shader: Record<string, any>;
/**
 * Convert stored pixel data to image data.
 *
 * Store data in Uint8Array
 *
 * @param {Image} image A Cornerstone Image Object
 * @returns {Uint8Array} The image data for use by the WebGL shader
 * @memberof WebGLRendering
 */
declare function storedPixelDataToImageData(image: Image): Uint8Array;
export declare const int8DataUtilities: {
    storedPixelDataToImageData: typeof storedPixelDataToImageData;
};
export { int8Shader };
