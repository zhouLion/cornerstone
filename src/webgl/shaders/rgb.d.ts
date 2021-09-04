import { Image } from "../../enabledElements";
declare const rgbShader: Record<string, any>;
/**
 * Convert stored pixel data to image data.
 *
 * Pack RGB images into a 3-channel RGB texture
 *
 * @param {Image} image A Cornerstone Image Object
 * @returns {Uint8Array} The image data for use by the WebGL shader
 * @memberof WebGLRendering
 */
declare function storedPixelDataToImageData(image: Image): Uint8Array;
export declare const rgbDataUtilities: {
    storedPixelDataToImageData: typeof storedPixelDataToImageData;
};
export { rgbShader };
