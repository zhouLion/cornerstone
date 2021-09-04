import { EnabledElementLayer, Image, Viewport } from '../enabledElements';
export interface EnabledElementStub {
    element: HTMLCanvasElement;
    canvas: HTMLCanvasElement;
    image: Image;
    invalid: boolean;
    needsRedraw: boolean;
    options: any;
    layers: EnabledElementLayer[];
    data: any;
    renderingTools: any;
    viewport: Viewport;
}
/**
 * Render the image to the provided canvas immediately.
 * @param {any} canvas The HTML canvas where the image will be rendered.
 * @param {any} image An Image loaded by a Cornerstone Image Loader
 * @param {any} [viewport = null] A set of Cornerstone viewport parameters
 * @param {any} [options = null] Options for rendering the image (e.g. enable webgl by {renderer: 'webgl'})
 * @returns {void}
 * @memberof rendering
 */
export default function (canvas: HTMLCanvasElement, image: Image, viewport?: null, options?: any): void;
