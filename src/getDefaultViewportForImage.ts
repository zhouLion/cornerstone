import { getEnabledElement, Image } from './enabledElements';
import getDefaultViewport from './internal/getDefaultViewport';

/**
 * Returns a default viewport for display the specified image on the specified
 * enabled element.  The default viewport is fit to window
 *
 * @param {HTMLElement} element The DOM element enabled for Cornerstone
 * @param {Image} image A Cornerstone Image Object
 *
 * @returns {Viewport} The default viewport for the image
 */
export default function (element: HTMLElement, image: Image) {
  const enabledElement = getEnabledElement(element);

  return getDefaultViewport(enabledElement.canvas, image);
}
