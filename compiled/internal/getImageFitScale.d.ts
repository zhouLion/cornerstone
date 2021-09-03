import { Image } from 'src/enabledElements';
/**
 * Calculates the horizontal, vertical and minimum scale factor for an image
   @param {{width, height}} windowSize The window size where the image is displayed. This can be any HTML element or structure with a width, height fields (e.g. canvas).
 * @param {any} image The cornerstone image object
 * @param {Number} rotation Optional. The rotation angle of the image.
 * @return {{horizontalScale, verticalScale, scaleFactor}} The calculated horizontal, vertical and minimum scale factor
 * @memberof Internal
 */
export default function (windowSize: {
    height: number;
    width: number;
}, image: Image, rotation?: number | null): {
    verticalScale: number;
    horizontalScale: number;
    scaleFactor: number;
};
