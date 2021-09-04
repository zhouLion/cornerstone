import { getEnabledElement } from './enabledElements';
import updateImage from './updateImage';
import getImageFitScale from './internal/getImageFitScale';
/**
 * Adjusts an image's scale and translation so the image is centered and all pixels
 * in the image are viewable.
 *
 * @param {HTMLElement} element The Cornerstone element to update
 * @returns {void}
 */
export default function (element) {
    const enabledElement = getEnabledElement(element);
    const { image } = enabledElement;
    // The new scale is the minimum of the horizontal and vertical scale values
    if (enabledElement.viewport && enabledElement.canvas && image) {
        enabledElement.viewport.scale = getImageFitScale(enabledElement.canvas, image, enabledElement.viewport.rotation).scaleFactor;
        if (enabledElement.viewport.translation) {
            enabledElement.viewport.translation.x = 0;
            enabledElement.viewport.translation.y = 0;
        }
    }
    updateImage(element);
}
