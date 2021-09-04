import { Image } from '../enabledElements';
/**
 * Retrieves the current image dimensions given an enabled element
 *
 * @param {any} image The Cornerstone image.
 * @param {Number} rotation Optional. The rotation angle of the image.
 * @return {{width:Number, height:Number}} The Image dimensions
 * @memberof Internal
 */
export default function (image: Image, rotation?: number | null): {
    height: number;
    width: number;
};
