import { Image } from '../../enabledElements';
declare const uint8Shader: Record<string, any>;
/**
 * Convert stored pixel data to image data. Here we will store
 * all data in the alpha channel.
 *
 * @param {Image} image A Cornerstone Image Object
 * @returns {Uint8Array} The image data for use by the WebGL shader
 * @memberof WebGLRendering
 */
declare function storedPixelDataToImageData(image: Image): any;
export declare const uint8DataUtilities: {
    storedPixelDataToImageData: typeof storedPixelDataToImageData;
};
export { uint8Shader };
