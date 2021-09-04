import getDefaultViewport from './internal/getDefaultViewport';
import { getEnabledElement } from './enabledElements';
import updateImage from './updateImage';
/**
 * Resets the viewport to the default settings
 *
 * @param {HTMLElement} element An HTML Element enabled for Cornerstone
 * @returns {void}
 */
export default function (element) {
    const enabledElement = getEnabledElement(element);
    enabledElement.viewport = getDefaultViewport(enabledElement.canvas, enabledElement.image);
    updateImage(element);
}
