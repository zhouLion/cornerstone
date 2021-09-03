import { Image, Viewport } from './enabledElements';
/**
 * Sets a new image object for a given element.
 *
 * Will also apply an optional viewport setting.
 *
 * @param {HTMLElement} element An HTML Element enabled for Cornerstone
 * @param {Object} image An Image loaded by a Cornerstone Image Loader
 * @param {Object} [viewport] A set of Cornerstone viewport parameters
 * @returns {void}
 * @memberof Drawing
 */
export default function (element: HTMLElement, image: Image, viewport: Viewport): void;
