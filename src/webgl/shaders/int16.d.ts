import { Image } from "../../enabledElements";
declare const int16Shader: Record<string, any>;
/**
 * Convert stored pixel data to image data.
 *
 * Pack int16 into three uint8 channels (r, g, b)
 *
 * @param {Image} image A Cornerstone Image Object
 * @returns {Uint8Array} The image data for use by the WebGL shader
 * @memberof WebGLRendering
 */
declare function storedPixelDataToImageData(image: Image): Uint8Array;
export declare const int16DataUtilities: {
    storedPixelDataToImageData: typeof storedPixelDataToImageData;
};
export { int16Shader };
