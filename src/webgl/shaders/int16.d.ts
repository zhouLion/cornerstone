export namespace int16DataUtilities {
    export { storedPixelDataToImageData };
}
/**
 * Convert stored pixel data to image data.
 *
 * Pack int16 into three uint8 channels (r, g, b)
 *
 * @param {Image} image A Cornerstone Image Object
 * @returns {Uint8Array} The image data for use by the WebGL shader
 * @memberof WebGLRendering
 */
declare function storedPixelDataToImageData(image: new (width?: number | undefined, height?: number | undefined) => HTMLImageElement): Uint8Array;
export namespace int16Shader {
    const frag: string;
}
export {};
