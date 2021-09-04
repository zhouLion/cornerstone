import { EnabledElement } from 'src/enabledElements';
/**
 * API function to draw a standard web image (PNG, JPG) to an enabledImage
 *
 * @param {EnabledElement} enabledElement The Cornerstone Enabled Element to redraw
 * @param {Boolean} invalidated - true if pixel data has been invalidated and cached rendering should not be used
 * @returns {void}
 * @memberof rendering
 */
export declare function renderWebImage(enabledElement: EnabledElement, invalidated?: boolean): void;
