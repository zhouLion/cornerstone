import { getEnabledElement, Viewport } from './enabledElements';

/**
 * Retrieves the viewport for the specified enabled element
 *
 * @param {HTMLElement} element The DOM element enabled for Cornerstone
 * @returns {Viewport|undefined} The Cornerstone Viewport settings for this element, if they exist. Otherwise, undefined
 * @memberof ViewportSettings
 */
export default function (element: HTMLElement): Viewport | undefined {
  const enabledElement = getEnabledElement(element);
  const viewport = enabledElement.viewport;

  if (viewport === undefined) {
    return;
  }

  // Return a copy of the viewport
  return Object.assign({}, viewport);
}
