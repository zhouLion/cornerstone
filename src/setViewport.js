import getDefaultViewport from './internal/getDefaultViewport';
import { getEnabledElement } from './enabledElements';
import updateImage from './updateImage';

const MIN_WINDOW_WIDTH = 0.000001;
const MIN_VIEWPORT_SCALE = 0.0001;

/**
 * Sets/updates viewport of a given enabled element
 *
 * @param {HTMLElement} element - DOM element of the enabled element
 * @param {Viewport} [viewport] - Object containing the viewport properties
 * @returns {void}
 * @memberof ViewportSettings
 */

export default function (element, viewport) {
  const enabledElement = getEnabledElement(element);
  // If viewport is not already set, start with default and merge new
  // viewport options later

  if (enabledElement.viewport === undefined) {
    enabledElement.viewport = getDefaultViewport(enabledElement.canvas);
  }
  // Merge viewport
  if (viewport) {
    for (const attrname in viewport) {
      if (viewport[attrname] !== null) {
        enabledElement.viewport[attrname] = viewport[attrname];
      }
    }
  }
  if (!enabledElement.viewport) {
    throw new Error('Viewport not set');
  }
  if (!enabledElement.viewport.voi) {
    enabledElement.viewport.voi = {
      windowWidth: enabledElement.viewport.windowWidth,
      windowCenter: enabledElement.viewport.windowCenter
    };
  }
  // Prevent window width from being too small (note that values close to zero are valid and can occur with
  // PET images in particular)
  if (enabledElement.viewport.voi.windowWidth) {
    enabledElement.viewport.voi.windowWidth = Math.max((viewport.voi ? viewport.voi.windowWidth : 0), MIN_WINDOW_WIDTH);
  }
  // Prevent scale from getting too small
  if (enabledElement.viewport.scale) {
    enabledElement.viewport.scale = Math.max((viewport.scale) || 1, MIN_VIEWPORT_SCALE);
  }
  if (enabledElement.viewport.rotation) {
    // Normalize the rotation value to a positive rotation in degrees
    enabledElement.viewport.rotation %= 360;
    if (enabledElement.viewport.rotation < 0) {
      enabledElement.viewport.rotation += 360;
    }
  }
  if (enabledElement.image) {
    // Force the image to be updated since the viewport has been modified
    updateImage(element);
  }
}
