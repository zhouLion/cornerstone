import { EnabledElement, EnabledElementLayer } from 'src/enabledElements';
/**
 * API function to draw a grayscale image to a given enabledElement
 *
 * @param {EnabledElement} enabledElement The Cornerstone Enabled Element to redraw
 * @param {Boolean} invalidated - true if pixel data has been invalidated and cached rendering should not be used
 * @returns {void}
 * @memberof rendering
 */
export declare function renderGrayscaleImage(enabledElement: EnabledElement, invalidated?: boolean): void;
/**
 * API function to draw a grayscale image to a given layer
 *
 * @param {EnabledElementLayer} layer The layer that the image will be added to
 * @param {Boolean} invalidated - true if pixel data has been invalidated and cached rendering should not be used
 * @param {Boolean} [useAlphaChannel] - Whether or not to render the grayscale image using only the alpha channel.
                                        This does not work if this layer is not the first layer in the enabledElement.
 * @returns {void}
 */
export declare function addGrayscaleLayer(layer: EnabledElementLayer, invalidated?: boolean, useAlphaChannel?: boolean): void;
