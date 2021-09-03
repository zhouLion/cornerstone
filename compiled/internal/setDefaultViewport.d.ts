import { Viewport } from "src/enabledElements";
declare const state: {
    viewport: Partial<Viewport>;
};
/**
 * Sets new default values for `getDefaultViewport`
 *
 * @param {Object} viewport - Object that sets new default values for getDefaultViewport
 * @returns {undefined}
 */
export default function (viewport: Partial<Viewport>): void;
export { state };
