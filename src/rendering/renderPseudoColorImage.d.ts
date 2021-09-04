import { EnabledElement, EnabledElementLayer } from 'src/enabledElements';
/**
 * API function to draw a pseudo-color image to a given enabledElement
 *
 * @param {EnabledElement} enabledElement The Cornerstone Enabled Element to redraw
 * @param {Boolean} invalidated - true if pixel data has been invalidated and cached rendering should not be used
 * @returns {void}
 * @memberof rendering
 */
export declare function renderPseudoColorImage(enabledElement: EnabledElement, invalidated?: boolean): void;
/**
 * API function to draw a pseudo-color image to a given layer
 *
 * @param {EnabledElementLayer} layer The layer that the image will be added to
 * @param {Boolean} invalidated - true if pixel data has been invalidated and cached rendering should not be used
 * @returns {void}
 */
export declare function addPseudoColorLayer(layer: EnabledElementLayer, invalidated?: boolean): void;
