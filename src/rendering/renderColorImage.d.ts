import { EnabledElement, EnabledElementLayer } from 'src/enabledElements';
/**
 * API function to render a color image to an enabled element
 *
 * @param {EnabledElement} enabledElement The Cornerstone Enabled Element to redraw
 * @param {Boolean} invalidated - true if pixel data has been invalidated and cached rendering should not be used
 * @returns {void}
 * @memberof rendering
 */
export declare function renderColorImage(enabledElement: EnabledElement, invalidated?: boolean): void;
export declare function addColorLayer(layer: EnabledElementLayer, invalidated?: boolean): void;
