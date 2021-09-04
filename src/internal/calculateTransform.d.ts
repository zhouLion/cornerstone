import { EnabledElement } from 'src/enabledElements';
import { Transform } from './transform';
/**
 * Calculate the transform for a Cornerstone enabled element
 *
 * @param {EnabledElement} enabledElement The Cornerstone Enabled Element
 * @param {Number} [scale] The viewport scale
 * @return {Transform} The current transform
 * @memberof Internal
 */
export default function (enabledElement: EnabledElement, scale?: number): Transform;
