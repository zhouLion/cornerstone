import { Image } from '../../enabledElements';
declare const uint16Shader: Record<string, any>;
/**
 * Convert stored pixel data to image data.
 *
 * For uint16 pack uint16 into two uint8 channels (r and a).
 *
 * @param {Image} image A Cornerstone Image Object
 * @returns {Uint8Array} The image data for use by the WebGL shader
 * @memberof WebGLRendering
 */
declare function storedPixelDataToImageData(image: Image): Uint8Array;
export declare const uint16DataUtilities: {
    storedPixelDataToImageData: typeof storedPixelDataToImageData;
};
export { uint16Shader };
